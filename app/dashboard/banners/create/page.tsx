"use client";
import { BannerImage } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SubmitButton from "@/components/ui/SubmitButton";
import { bannerScehma } from "@/lib/zodSchema";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { X } from "lucide-react";
import { CldImage, CldUploadButton } from "next-cloudinary";
import { useActionState, useState } from "react";

type CloudinaryImage = {
  public_id: string;
  url: string;
};
export default function page() {

  const [heroBannerImage, setHeroBannerImage] = useState<CloudinaryImage[]>([]);
  const [bannerImage, setBannerImage] = useState<CloudinaryImage[]>([]);
  const [lastResult, action] = useActionState(BannerImage, undefined);

  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: bannerScehma });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  const handleDeleteHeroBannerImages = async (public_id: string) => {
    try {
      const result = await fetch(`/api/cloudinary`, {
        method: "DELETE",
        body: JSON.stringify(public_id),
      });
      const data = await result.json();
      setHeroBannerImage(prev => prev.filter(img => img.public_id !== public_id));
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeleteBannerImage = async (public_id: string) => {
    try {
      const result = await fetch(`/api/cloudinary`, {
        method: "DELETE",
        body: JSON.stringify(public_id),
      });
      const data = await result.json();
      setBannerImage(prev => prev.filter(img => img.public_id !== public_id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="container md:px-5 overflow-hidden">
      {/* Banner ONE */}
      <div className="flex justify-center items-start flex-col w-full">
        <label className="text-base font-medium my-2">Upload Hero Banner (max limit 3)</label>
      </div>
      <form id={form.id} onSubmit={form.onSubmit} action={action} className="container mx-auto space-y-4 py-5">
        <div className="flex flex-col items-start justify-start lg:max-w-4xl gap-4">
          {heroBannerImage && heroBannerImage?.length > 0 &&
            <div className="flex flex-col gap-2">
              {heroBannerImage.map((image) => (
                <div key={image.public_id} className="w-full">
                  <div className="absolute bg-black border p-1 cursor-pointer"
                    onClick={() => handleDeleteHeroBannerImages(image.public_id)}
                  >
                    <X />
                  </div>
                  <CldImage
                    width="1920"
                    height="1080"
                    src={image.public_id}
                    className="cursor-pointer"
                    alt={"img"}
                  />
                </div>
              ))}
            </div>
          }
          <Input
            type="hidden"
            key={fields.heroBanners.key}
            name={fields.heroBanners.name}
            value={heroBannerImage.map(img => img.url).join(',')}
          />
          <p className="text-red-500 py-3">{fields.heroBanners.errors}</p>
          <CldUploadButton
            onSuccess={(result: any) => {
              const newImage = { public_id: result.info.public_id, url: result.info.secure_url };
              setHeroBannerImage((prev) => [...prev, newImage]);
            }}
            className="bg-zinc-800 border border-zinc-700 text-sm w-fit my-5 px-3 py-2 rounded-sm text-white"
            uploadPreset="next-store"
          />
        </div>
        <label className="text-base font-medium my-2">Upload Banner (max limit 1)</label>
        <div className="flex flex-col items-start justify-start lg:max-w-4xl gap-4">
          {bannerImage && bannerImage?.length > 0 &&
            <div className="flex flex-col gap-2">
              {bannerImage.map((image) => (
                <div key={image.public_id} className="w-full">
                  <div className="absolute bg-black border p-1 cursor-pointer"
                    onClick={() => handleDeleteBannerImage(image.public_id)}
                  >
                    <X />
                  </div>
                  <CldImage
                    width="1920"
                    height="1080"
                    src={image.public_id}
                    className="cursor-pointer"
                    alt={"img"}
                  />
                </div>
              ))}
            </div>
          }

          <Input
            type="hidden"
            key={fields.bannerImage.key}
            name={fields.bannerImage.name}
            value={bannerImage.map(img => img.url).join(',')}
          />

          <p className="text-red-500 py-3">{fields.bannerImage.errors}</p>
          <CldUploadButton
            onSuccess={(result: any) => {
              const newImage = { public_id: result.info.public_id, url: result.info.secure_url };
              setBannerImage((prev) => [...prev, newImage]);
            }}
            className="bg-zinc-800 border border-zinc-700 text-sm w-fit my-5 px-3 py-2 rounded-sm text-white"
            uploadPreset="next-store"
          />
        </div>
        <SubmitButton />
      </form>
    </section>
  )
}