"use client";
import {
  Carousel,
  CarouselMainContainer,
  SliderMainItem,
  CarouselThumbsContainer,
  SliderThumbItem,
} from "@/components/ui/new-carousel";

export default function ProductImage({ img }: any) {
  return (
    <div className="w-full h-full">
      <Carousel>
        {/* <CarouselNext className="top-1/2 -translate-y-1/3" />
        <CarouselPrevious className="top-1/3 -translate-y-1/3" /> */}
        <CarouselMainContainer>
          {img.map((item: any) => (
            <SliderMainItem key={item.id}>
              <div className="relative">
                <div className="h-full w-full">
                  <img
                    src={item.src}
                    alt=""
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </SliderMainItem>
          ))}
        </CarouselMainContainer>
        <CarouselThumbsContainer>
          {img.map((item: any, index: number) => (
            <SliderThumbItem
              key={index}
              index={index}
              className="bg-transparent"
            >
              <div className="outline outline-1 outline-border w-full">
                <img
                  src={item.src}
                  alt=""
                  className="object-cover object-center w-full h-full" // Adjust height to make thumbnails smaller
                />
              </div>
            </SliderThumbItem>
          ))}
        </CarouselThumbsContainer>
      </Carousel>
    </div>
  );
}
