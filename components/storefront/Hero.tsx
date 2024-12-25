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
    description: "Wear with confidence",
    discount: "Up to 40% Off",
    src: 'https://img.freepik.com/free-photo/model-wearing-beautiful-shade-clothing_23-2151428074.jpg?t=st=1735134034~exp=1735137634~hmac=1212a78215e632473977da9e0c93c6fb72e6a848a1afb73f4bc366759ba01ebd&w=996',
  },
  {
    id: 2,
    subtitle: "PREMIUM COLLECTION",
    title: "Elevate Your Style",
    description: "Curated Selection of Designer Footwear",
    discount: "Limited Time Offer",
    src: 'https://img.freepik.com/free-photo/studio-portrait-young-fresh-blonde-woman-brown-straw-poncho-wool-black-trendy-hat-round-glasses-looking-camera-green-leather-had-bag_273443-1118.jpg?t=st=1735133978~exp=1735137578~hmac=efa423b7d4731611aec47ba8aebdcd5e24df156ff97d60b36ca92c94530f367a&w=996',
  },
  {
    id: 3,
    subtitle: "EXCLUSIVE RELEASE",
    title: "Iconic Designs",
    description: "Discover Our Signature Collection",
    discount: "Early Access Available",
    src: 'https://img.freepik.com/free-photo/stylish-woman-leather-coat-black-hat-demonstrate-winter-fashion-trends-white_273443-4937.jpg?t=st=1735134648~exp=1735138248~hmac=34731bc7922ae332f8bb6102265e97e629b979a1c8e53039acfd7f01fe61c64d&w=996',
  }
];

export default async function Hero() {
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
                <div className="absolute inset-0 z-20 mt-10 md:mt-0 flex items-center">
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
        <div className="absolute bottom-8 sm:bottom-6 md:bottom-8 right-16 sm:right-6 md:right-24 
                      flex sm:gap-3 z-30">
          <CarouselPrevious className="border bg-background" />
          <CarouselNext className="border bg-background" />
        </div>
      </Carousel>
    </section>
  );
}