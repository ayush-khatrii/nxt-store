import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface ProductCardProps {
  product: {
    id: number;
    price: number;
    name: string;
    href: string;
    imageSrc: { item: number; img: string }[];
    desc: string;
  };
}

function formatNumberWithCommas(number: number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="w-full overflow-hidden rounded-t-lg">
        <Carousel>
          <CarouselContent>
            {product.imageSrc.map((image) => (
              <CarouselItem
                key={image.item}
                className="group relative overflow-hidden"
              >
                <div className="absolute bottom-2 left-5 z-[300]">
                  <Badge className="text-xs">Badge</Badge>
                </div>
                <Link href={product.href}>
                  <img
                    src={image.img}
                    alt={product.name}
                    className="object-center object-cover w-full h-full transition-transform duration-30  0 group-hover:scale-105"
                  />
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute z-[200] left-2 top-1/2 transform -translate-y-1/2 group-hover:visible invisible" />
          <CarouselNext className="absolute right-2 z-[200] top-1/2 transform -translate-y-1/2 group-hover:visible invisible" />
        </Carousel>
      </div>
      <div className="p-4 text-left">
        <h2 className="sm:text-lg text-base text-foreground truncate">
          <Link href={product.href}>{product.name}</Link>
        </h2>
        <p className="text-sm text-foreground/80 mt-1 truncate">{product.desc}</p>
        <span className="sm:text-xl text- font-medium text-foreground mt-3 block">
          ₹{formatNumberWithCommas(product.price)}
        </span>
        {/* <Button className="w-full text-xs mt-3">Add to Cart</Button> */}
      </div>
    </div>
  );
}
