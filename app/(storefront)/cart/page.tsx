"use client"
import { Button } from "@/components/ui/button";
import formatNumberWithCommas from "@/utils";

const cartData = [
  {
    id: 1,
    title: "Premium Wireless Headphones",
    price: 32445,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1465408953385-7c4627c29435?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const CartPage = () => {

  const calculateSubtotal = () => {
    return cartData.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const calculateTax = () => {
    return calculateSubtotal() * 0.18; // 18% tax
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax();
  };


  return (
    <div className="min-h-screen bg-zinc-50 py-10 md:px-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"></div>
      <h1 className="ms:text-2xl text-xl font-semibold mb-8 text-center px-3">Shopping Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ul className=" divide-y">
            {cartData.map((item) => (
              <li key={item.id} className="p-6">
                <div className="flex flex-col sm:flex-row gap-6">
                  <img
                    className="w-24 h-24 object-cover rounded-md"
                    src={item.image}
                    alt={item.title}
                  />
                  <div className="flex-1 space-y-2">
                    <div className="flex flex-col sm:flex-row justify-between">
                      <h2 className="text-lg font-normal text-left text-zinc-900">{item.title}</h2>
                      <span className="text-lg font-semibold text-right">₹{formatNumberWithCommas(item.price)}</span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-1">
          <div className="border rounded-md p-6 sticky top-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{formatNumberWithCommas(calculateSubtotal())}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax (18%)</span>
                <span>₹{formatNumberWithCommas(calculateTax())}</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>₹{formatNumberWithCommas(calculateTotal())}</span>
                </div>
              </div>
              <Button className="w-full">Proceed to Checkout</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CartPage;