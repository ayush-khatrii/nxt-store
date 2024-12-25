import { useState } from "react";
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
    subtitle: "NEW ARRIVAL",
    title: "Step into Luxury",
    description: "Where Every Stride Makes a Statement",
    discount: "Up to 40% Off",
    src: 'https://backend.orbitvu.com/sites/default/files/styles/webp/public/image/shoe-photography-cover-min.jpg.webp',
  },
  {
    id: 2,
    subtitle: "PREMIUM COLLECTION",
    title: "Elevate Your Style",
    description: "Curated Selection of Designer Footwear",
    discount: "Limited Time Offer",
    src: 'https://images.unsplash.com/photo-1631087606988-a6be38fccaf6?q=80&w=2027&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    subtitle: "EXCLUSIVE RELEASE",
    title: "Iconic Designs",
    description: "Discover Our Signature Collection",
    discount: "Early Access Available",
    src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  }
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Carousel className="relative">
        <CarouselContent>
          {sampleImg.map((item) => (
            <CarouselItem key={item.id}>
              <div className="relative">
                {/* Gradient Overlay - Adjusted for better image visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 lg:from-black/80 via-black/60  to-transparent z-10" />

                {/* Content Container - Improved spacing and alignment */}
                <div className="absolute inset-0 z-20 mt-20 md:mt-0 flex items-center">
                  <div className="w-full px-3 sm:px-6 md:px-12 lg:px-20">
                    <div className="max-w-[280px] xs:max-w-[320px] sm:max-w-xl sm:space-y-3 md:space-y-4">
                      {/* Subtitle - Smaller on mobile */}
                      <div className="mt-10 flex justify-center items-start flex-col gap-2 md:gap-5">
                        <span className="inline-block px-2 py-0.5 sm:px-3 sm:py-1 md:px-4 md:py-1.5 bg-black/50 backdrop-blur-sm rounded-full text-[10px] xs:text-xs sm:text-sm tracking-wider text-white">
                          {item.subtitle}
                        </span>

                        {/* Title - Progressive scaling */}
                        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
                                   text-white font-bold tracking-tight leading-[1.1]">
                          {item.title}
                        </h1>
                        {/* Discount - Better size scaling */}
                        <span className="inline-block text-lg xs:text-xl sm:text-2xl md:text-3xl 
                                     font-normal text-white/90">
                          {item.discount}
                        </span>
                      </div>
                      {/* Buttons - Improved mobile sizing */}
                      <div className="flex xs:flex-row gap-2 sm:gap-3 md:gap-4 ">
                        <Button
                          asChild
                        >
                          <Link href="#products" className="flex items-center group justify-center">
                            Shop Collection
                            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-all duration-150" />
                          </Link>
                        </Button>

                        <Button
                          asChild
                          variant="outline"
                        >
                          <Link href="#explore">
                            Explore More
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image Container - Adjusted for better visibility */}
                <div className="h-[50vh] xs:h-[55vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] w-full">
                  <img
                    src={item.src}
                    alt=""
                    className="object-cover object-center w-full h-full"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Controls - Better sizing for mobile */}
        <div className="absolute bottom-5 sm:bottom-6 md:bottom-8 right-20 sm:right-6 md:right-24 
                      flex sm:gap-3 z-30">
          <CarouselPrevious className="border bg-background" />
          <CarouselNext className="border bg-background" />
        </div>
      </Carousel>
    </section>
  );
}