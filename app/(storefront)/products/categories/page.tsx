import Link from "next/link";
const imgs = [
  {
    id: 1,
    text: "Cord Sets",
    href: "/products/categories/cord-sets",
    img: "https://placehold.co/1920.png"
  },
  {
    id: 2,
    text: "Kurtis",
    href: "/products/categories/kurtis",
    img: "https://placehold.co/1920.png"
  },
  {
    id: 3,
    text: "Dresses",
    href: "/products/categories/dresses",
    img: "https://placehold.co/1920.png"
  },
  {
    id: 4,
    text: "T-Shirts",
    href: "/products/categories/t-shirts",
    img: "https://placehold.co/1920.png"
  },
  {
    id: 5,
    text: "Cord Sets",
    href: "/products/categories/cord-sets",
    img: "https://placehold.co/1920.png"
  },
  {
    id: 6,
    text: "Kurtis",
    href: "/products/categories/kurtis",
    img: "https://placehold.co/1920.png"
  },
  {
    id: 7,
    text: "Dresses",
    href: "/products/categories/dresses",
    img: "https://placehold.co/1920.png"
  },
  {
    id: 8,
    text: "T-Shirts",
    href: "/products/categories/t-shirts",
    img: "https://placehold.co/1920.png"
  },
];

export default function CategoryPage() {
  return (
    <section className="max-w-[90rem] mx-auto px-5 my-5 ">
      <h2 className="font-bold mb-5 text-lg sm:text-2xl lg:text-2xl">
        Explore all categories
      </h2>
      <div className="grid gap-5 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto w-full">
        {imgs.map((item) => (
          <Link href={`${item.href}`}>
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-lg"
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
          </Link>
        ))}
      </div>
    </section>
  )
}