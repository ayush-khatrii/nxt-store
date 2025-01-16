import { Button } from "@/components/ui/button";
import { Cart as cartType } from "@/lib/interfaces";
import { redis } from "@/lib/redis";
import formatNumberWithCommas from "@/utils";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Cart() {
  const user = await currentUser();

  if (!user) {
    return redirect("/");
  }

  let cartData: cartType | null = await redis.get(`cart-${user.id}`);

  const calculateSubtotal = (): number => {
    return (
      cartData?.items.reduce((total, item) => total + item.price * item.quantity, 0) || 0
    );
  };

  const calculateTax = (): number => {
    return calculateSubtotal() * 0.18; // 18% tax
  };

  const calculateTotal = (): number => {
    return calculateSubtotal() + calculateTax();
  };


  return (
    <div className="min-h-screen py-10 md:px-5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-xl md:text-3xl font-semibold mb-8 text-center text-zinc-900">
          Your Shopping Cart
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ul className="divide-y rounded-md border-t">
              {!cartData?.items ? (
                <p className="my-10 text-center font-bold text-zinc-500">
                  No items found in the cart
                </p>
              ) : (
                cartData.items.map((item) => (
                  <li
                    key={item.id}
                    className="p-6 flex items-center gap-6"
                  >
                    <img
                      className="w-24 h-24 object-cover rounded-md"
                      src={item.img}
                      alt={item.name}
                    />
                    <div className="flex-1 space-y-2">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                        <h2 className="text-lg font-medium text-zinc-900">{item.name || "mhasbdhjbs bshfb bfihbf bsbfsbgb bshibghsbg bsihfbsi"}</h2>
                        <span className="text-lg font-semibold text-zinc-800">
                          ₹{formatNumberWithCommas(item.price)}
                        </span>
                      </div>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                        <span className="text-sm text-zinc-600">
                          Quantity: {item.quantity}
                        </span>
                        <button
                          className="text-red-600 font-medium hover:underline hover:text-red-800 text-sm mt-2 sm:mt-0"
                        >
                          remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))
              )}
            </ul>
          </div>
          <div className="lg:col-span-1">
            <div className="border rounded-md border-foreground/10 p-6 sticky top-6">
              <h2 className="text-xl font-semibold mb-4 text-zinc-800">Order Summary</h2>
              <div className="space-y-4 text-zinc-700">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{formatNumberWithCommas(calculateSubtotal())}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax (18%)</span>
                  <span>₹{formatNumberWithCommas(calculateTax())}</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between font-semibold text-zinc-800">
                    <span>Total</span>
                    <span>₹{formatNumberWithCommas(calculateTotal())}</span>
                  </div>
                </div>
              </div>
              <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md">
                Proceed to Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
