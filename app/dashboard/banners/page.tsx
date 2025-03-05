import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import prisma from "@/lib/db";
import { Banner } from "@prisma/client";
import Link from "next/link";

export default async function page() {
  const banners: Banner[] = await prisma.banner.findMany();
  const heroBannerImage = banners.flatMap((item) => item.herobanner);
  const bannerImage = banners.map((item) => item.banner);

  return (
    <section className="container mx-auto px-5 pb-10 ">
      <div className="flex flex-col md:flex-row justify-between items-center gap-3">
        <h1 className="text-base lg:text-2xl font-bold">All Banners</h1>
        <Link href="/dashboard/banners/create">
          <Button>Create/Change Banner</Button>
        </Link>
      </div>
      <h1 className="text-lg font-normal mt-10">Hero Banner Image</h1>
      <Carousel className="w-full mt-6">
        <CarouselContent>
          {heroBannerImage.map((imageUrl, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[50vh] w-full">
                <img
                  src={imageUrl}
                  alt={`Hero Banner ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />``
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="z-50 absolute bottom-10 right-24">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>


      <h1 className="text-lg font-normal mt-10">Banner Image</h1>
      <Carousel className="w-full mt-6">
        <CarouselContent>
          {bannerImage.map((imageUrl, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[50vh] w-full">
                <img
                  src={imageUrl}
                  alt={`Hero Banner ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
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
