import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const imgs = [
  {
    id: 1,
    text: "Cord Sets",
    img: "https://images.unsplash.com/photo-1662211166566-10ad3fc0244b?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    text: "Kurtis",
    img: "https://images.unsplash.com/photo-1661436170168-7ce82d649532?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    text: "Dresses",
    img: "https://images.unsplash.com/photo-1660067262025-271603ac1283?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 4,
    text: "T-Shirts",
    img: "https://images.unsplash.com/photo-1660067262025-271603ac1283?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
];

export default function Category() {
  return (
    <section className="py-16">
      <div className="flex justify-between items-center mb-5 px-4 sm:px-6 lg:px-8">
        <h2 className="font-extrabold text-xl sm:text-2xl lg:text-3xl">
          Shop by Category
        </h2>
        <Button asChild variant="link">
          <Link
            href="/products/all"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-blue-600 text-primary"
          >
            Browse all Products{" "}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:underline" />
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 px-4 sm:px-6 lg:px-8">
        {imgs.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden aspect-square rounded-lg shadow-lg"
          >
            <img
              src={item.img}
              alt={item.text}
              className="object-center object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 p-4 flex flex-col justify-end bg-gradient-to-t from-black/70 via-transparent to-transparent">
              <h3 className="text-white text-base sm:text-lg md:text-xl font-bold transition-transform duration-300 group-hover:translate-y-0">
                {item.text}
              </h3>
              <span className="text-white/80 text-xs sm:text-sm mt-1 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                View Collection →
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
