'use server'
import prisma from "@/lib/db";
import { Cart } from "@/lib/interfaces";
import { redis } from "@/lib/redis";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { parseWithZod } from "@conform-to/zod"
import { categoryScehma, productScehma } from "@/lib/zodSchema";
import { v2 as cloudinary } from "cloudinary"

const ADMIN_EMAIL = process.env.NEXT_PUBLIC_ADMIN_EMAIL;

cloudinary.config({
  secure: true,
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});




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

export async function CreateProduct(currentState: unknown, foramData: FormData) {
  const user = await currentUser();
  const userEmail = user?.emailAddresses[0]?.emailAddress;

  if (!user || userEmail !== ADMIN_EMAIL) {
    return redirect("/");
  }
  const submission = parseWithZod(foramData, {
    schema: productScehma
  });
  if (submission.status !== 'success') {
    return submission.reply();
  }

  const flattenImagesUrls = submission.value.images.flatMap((item) => item.split(',').map((url) => url.trim()));

  await prisma.product.create({
    data: {
      description: submission.value.description,
      name: submission.value.name,
      price: submission.value.price,
      status: submission.value.status,
      images: flattenImagesUrls,
      categoryId: submission.value.category ?? '',
      isFeatured: submission.value.isFeatured
    }
  });

  redirect("/dashboard/products");
}

export async function fetchCategories() {
  try {
    const categories = await prisma.category.findMany();
    if (!categories) {
      console.error("No categories found in the database.");
      return [];
    }

    return categories;
  } catch (error: any) {
    console.error("Error fetching categories:", error.message);
    return [];
  }
}

export async function CreateCategory(currentState: unknown, foramData: FormData) {
  const user = await currentUser();
  const userEmail = user?.emailAddresses[0]?.emailAddress;

  if (!user || userEmail !== ADMIN_EMAIL) {
    return redirect("/");
  }
  const submission = parseWithZod(foramData, {
    schema: categoryScehma
  });
  if (submission.status !== 'success') {
    return submission.reply();
  }

  await prisma.category.create({
    data: {
      name: submission.value.name,
      description: submission.value.description
    }
  });

  revalidatePath("/dashboard");
  redirect("/dashboard/categories");

}
