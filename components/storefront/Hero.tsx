import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const sampleImg = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1465408953385-7c4627c29435?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1511511450040-677116ff389e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    src: 'https://img.freepik.com/free-photo/stylish-woman-leather-coat-black-hat-demonstrate-winter-fashion-trends-white_273443-4937.jpg?t=st=1735134648~exp=1735138248~hmac=34731bc7922ae332f8bb6102265e97e629b979a1c8e53039acfd7f01fe61c64d&w=996',
  }
];

export default async function Hero() {
  return (
    <section className="overflow-hidden">
      <Carousel className="w-full">
        <CarouselContent>
          {sampleImg.map((item) => (
            <CarouselItem key={item.id}>
              <div className="relative">
                {/* Gradient Overlay - Adjusted for better image visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 lg:from-black/80 via-black/60  to-transparent z-10" />
                <div className="h-[50vh] xs:h-[55vh] sm:h-[60vh] md:h-[70vh] lg:h-[90vh] w-full">
                  <img
                    src={item.src}
                    alt=""
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="z-50 absolute bottom-10 right-24">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </section>
  );
}