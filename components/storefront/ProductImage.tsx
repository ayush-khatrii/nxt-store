"use client"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
export default function ProductImage({ img }: any) {
  return (
    <div className="w-full h-full" >
      <Carousel className="w-full h-full">
        <CarouselContent>
          {img.map((item: any) => (
            <CarouselItem key={item.id}>
              <div className="relative">
                <div className="h-full w-full">
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
        <div className="flex justify-between p-4 mt-3">
          <div className="relative flex justify-center items-center ml-10">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </div>
      </Carousel>
    </div>
  )
}
