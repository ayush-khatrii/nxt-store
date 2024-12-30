import { Truck, CreditCard, ShieldCheck } from "lucide-react";

export default function ShopBenefits() {
  return (
    <section className="">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="sm:text-3xl text-2xl font-bold title-font text-center mb-2">
          Shopper Benefits
        </h1>
        <p className="text-center mb-20">Your Shopping, Our Promise</p>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 md:space-y-0 space-y-6">
          <div className="p-4 md:w-1/3 flex">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-foreground text-background mb-4 flex-shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div className="flex-grow pl-6">
              <h2 className="text-lg title-font font-medium mb-2">Free Shipping</h2>
              <p className="leading-relaxed text-base">
                Enjoy free shipping on all orders, making your shopping experience seamless and affordable.
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-foreground text-background mb-4 flex-shrink-0">
              <CreditCard className="w-6 h-6" />
            </div>
            <div className="flex-grow pl-6">
              <h2 className="text-lg title-font font-medium mb-2">Secure Payments</h2>
              <p className="leading-relaxed text-base">
                Pay with confidence using our secure payment methods and trusted gateways.
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-foreground text-background mb-4 flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="flex-grow pl-6">
              <h2 className="text-lg title-font font-medium mb-2"> High-Quality Products
              </h2>
              <p className="leading-relaxed text-base">
                Discover premium products that meet the highest standards of quality and craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
