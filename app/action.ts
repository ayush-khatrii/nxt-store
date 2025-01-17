'use server'
import prisma from "@/lib/db";
import { Cart } from "@/lib/interfaces";
import { redis } from "@/lib/redis";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export const addItemToCart = async (productId: string) => {
  const user = await currentUser();

  if (!user) {
    return redirect("/sign-in");
  }

  // find the product in cart
  let cart: Cart | null = await redis.get(`$cart-{user.id}`);

  const selectedProduct = await prisma.product.findUnique({
    where: {
      id: productId
    },
    select: {
      id: true,
      name: true,
      images: true,
      price: true
    }
  });

  let myCart = {} as Cart;

  if (!selectedProduct) {
    throw new Error("No product found with this ID!");
  }

  if (!cart || !cart.items) {
    myCart = {
      userId: user.id,
      items: [
        {
          id: selectedProduct.id,
          name: selectedProduct.name,
          price: selectedProduct.price,
          img: selectedProduct.images[0],
          quantity: 1
        }
      ]
    }
  }

  else {
    let itemFound = false;

    // if item already in the cart
    myCart.items = cart.items.map((item) => {
      if (item.id === productId) {
        itemFound = true;
        item.quantity += 1;
      }
      return item;
    });

    // if item not found in the cart 
    if (!itemFound) {
      myCart.items.push({
        id: selectedProduct.id,
        img: selectedProduct.images[0],
        name: selectedProduct.name,
        quantity: 1,
        price: selectedProduct.price
      })
    }
  }
  await redis.set(`cart-${user.id}`, myCart);
  revalidatePath("/", "layout");
};

export const deleteItem = async (productId: String) => {
  const user = await currentUser();

  if (!user) {
    return redirect("/sign-in");
  }

  let cart: Cart | null = await redis.get(`cart-${user.id}`);

  if (cart && cart.items) {
    const updatedCart: Cart = {
      userId: user.id,
      items: cart.items.filter((item) => item.id !== productId)
    }
    await redis.set(`cart-${user.id}`, updatedCart);
  }
  revalidatePath("/cart");
}

