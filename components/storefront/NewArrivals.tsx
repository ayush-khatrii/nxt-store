import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "../ProductCard";

const products = [
  {
    id: 1,
    price: 14782345,
    name: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    desc: "Perfect for any occasion",
    href: "#",
    imageSrc: [
      { item: 1, img: "https://placehold.co/1080x1920.png" },
      { item: 2, img: "https://placehold.co/1080x1920.png" },
      { item: 3, img: "https://placehold.co/1080x1920.png" },
    ],
  },
  {
    id: 2,
    price: 14782345,
    name: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    desc: "Perfect for any occasion",
    href: "#",
    imageSrc: [
      { item: 1, img: "https://placehold.co/1080x1920.png" },
      { item: 2, img: "https://placehold.co/1080x1920.png" },
      { item: 3, img: "https://placehold.co/1080x1920.png" },
    ],
  },
  {
    id: 3,
    price: 14782345,
    name: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    desc: "Perfect for any occasion",
    href: "#",
    imageSrc: [
      { item: 1, img: "https://placehold.co/1080x1920.png" },
      { item: 2, img: "https://placehold.co/1080x1920.png" },
      { item: 3, img: "https://placehold.co/1080x1920.png" },
    ],
  },
  {
    id: 4,
    price: 14782345,
    name: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    desc: "Perfect for any occasion",
    href: "#",
    imageSrc: [
      { item: 1, img: "https://placehold.co/1080x1920.png" },
      { item: 2, img: "https://placehold.co/1080x1920.png" },
      { item: 3, img: "https://placehold.co/1080x1920.png" },
    ],
  },

];
export default function NewArrivals() {
  return (
    <section className="pb-10">
      <h2 className="font-extrabold text-xl sm:text-2xl lg:text-3xl mb-6">New Arrivals</h2>
      <div className="grid gap-5 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 mx-auto ">
        {products.map((product) => (
          <div key={product.id} className="">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}
