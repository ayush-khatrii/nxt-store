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
import formatNumberWithCommas from "@/utils";

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



export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="rounded-lg border">
      <div className="w-full overflow-hidden rounded-t-lg">
        <Carousel className="w-full mx-auto group">
          <CarouselContent>
            {product.imageSrc.map((image) => (
              <CarouselItem
                key={image.item}
                className="group relative overflow-hidden"
              >
                <div className="absolute bottom-2 left-5 z-[300]">
                  <Badge className="text-xs">Badge</Badge>
                </div>
                <div className="relative lg:h-[330px] h-[200px]">
                  <Link href={`/product/${product.id.toString()}`}>
                    <img
                      src={image.img}
                      alt={product.name}
                      className="object-center object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                  </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute top-1/2 left-2 z-[300] invisible group-hover:visible" />
          <CarouselNext className="absolute top-1/2 right-2 z-[300] invisible group-hover:visible" />
        </Carousel>
      </div>
      <div className="p-4 text-left">
        <h2 className="sm:text-lg text-base text-foreground truncate">
          <Link href={`/product/${product.id.toString()}`}>{product.name}</Link>
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
