import { Button } from "@/components/ui/button";
import formatNumberWithCommas from "@/utils";

const cartData = [
  {
    id: 1,
    title: "This is product title",
    price: 32445,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1465408953385-7c4627c29435?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "This is product title",
    price: 32445,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1465408953385-7c4627c29435?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "This is product title",
    price: 32445,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1465408953385-7c4627c29435?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
export default function Page() {
  return (
    <section className="h-screen my-10 max-w-4xl px-4 sm:px-6 lg:px-10">
      <h1 className="text-3xl font-medium mb-6">Your Shopping Cart</h1>
      <ul className="space-y-6">
        {cartData.map((item) => (
          <li
            key={item.id}
            className="flex sm:flex-row items-start gap-6"
          >
            <img
              className="w-16 h-16 sm:w-32 sm:h-32 object-cover rounded-lg"
              src={item.image}
              alt={item.title}
            />
            <div className="flex flex-col flex-1">
              <div className="flex justify-between items-start">
                <div className="flex flex-col">
                  <h2 className="text-lg sm:text-xl font-normal">
                    {item.title}
                  </h2>
                  <Button
                    className="text-red-500"
                    variant="link"
                  >
                    Remove
                  </Button>
                </div>
                <p className="text-lg sm:text-xl font-medium">
                  ₹{formatNumberWithCommas(item.price)}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
