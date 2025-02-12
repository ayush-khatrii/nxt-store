"use client";
import React, { Suspense, useActionState, useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import Link from "next/link";
import { LiaAngleLeftSolid } from "react-icons/lia";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CreateProduct, fetchCategories } from "@/app/actions";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { productScehma } from "@/lib/zodSchema";
import { CldUploadButton } from "next-cloudinary";
import { CldImage } from 'next-cloudinary';
import { Loader, Loader2, X } from "lucide-react";
import { productCategory } from "@/constants";
import AllCategories from "@/components/dashboard/AllCategories";
import { ProductCategory } from "@/lib/interfaces";
import SubmitButton from "@/components/ui/SubmitButton";

const CreateProductPage = () => {
  const [imageData, setImageData] = useState<{ public_id: string; url: string }[]>([]);
  const [isLoadingImages, setIsLoadingImages] = useState(false);
  const [categories, setCategories] = useState<ProductCategory[]>([]);
  const [lastResult, action] = useActionState(CreateProduct, undefined);

  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: productScehma });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  const handleDeleteImages = async (public_id: string) => {
    setIsLoadingImages(true);
    try {
      const result = await fetch(`/api/cloudinary`, {
        method: "DELETE",
        body: JSON.stringify(public_id),
      });
      const data = await result.json();
      setImageData(prev => prev.filter(img => img.public_id !== public_id));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingImages(false);
    }
  };

  useEffect(() => {
    const getCategories = async () => {
      const data = await fetchCategories();
      setCategories(data);
    };

    getCategories();
  }, []);

  return (
    <section className="">
      <div className="flex gap-3 mt-5 pl-4">
        <Button asChild variant={"outline"} size="icon">
          <Link href={`/dashboard/products`}>
            <LiaAngleLeftSolid className="w-4 h-4" />
          </Link>
        </Button>
        <h1 className="text-2xl font-bold mb-10">Create New Product</h1>
      </div>
      <div className="container mx-auto p-4">
        <form id={form.id} onSubmit={form.onSubmit} action={action} className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2">Product Name</label>
            <Input
              type="text"
              key={fields.name.key}
              name={fields.name.name}
              defaultValue={fields.name.initialValue}
              className="mt-3 w-full"
            />
            <p className="text-red-500 py-3">{fields.name.errors}</p>
          </div>
          <div>
            <label className="text-sm font-medium mb-2">Product Description</label>
            <Textarea
              key={fields.description.key}
              name={fields.description.name}
              defaultValue={fields.description.initialValue}
              className="mt-3"
              placeholder="Write product description..."
            />
            <p className="text-red-500 py-3">{fields.description.errors}</p>
          </div>
          <div>
            <label className="text-sm font-medium mb-2">Product Price</label>
            <Input
              min="1"
              type="number"
              key={fields.price.key}
              name={fields.price.name}
              defaultValue={fields.price.initialValue}
              className="mt-3 block w-full"
            />
            <p className="text-red-500 py-3">{fields.price.errors}</p>
          </div>
          <div className="flex flex-col justify-center items-start">
            <label className="text-sm font-medium mb-2">Product Image</label>
            <Input
              type="hidden"
              key={fields.images.key}
              name={fields.images.name}
              value={imageData.map(img => img.url).join(',')}
            />
            {
              isLoadingImages &&
              <div className="text-center py-5">
                Deleting image...
              </div>
            }
            {imageData && imageData?.length > 0 &&
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {imageData.map((image) => (
                  <div key={image.public_id} className="">
                    <div className="absolute bg-black border p-1 cursor-pointer"
                      onClick={() => handleDeleteImages(image.public_id)}
                    >
                      <X />
                    </div>
                    <CldImage
                      width="200"
                      height="200"
                      src={image.public_id}
                      className="cursor-pointer"
                      sizes="100vw"
                      alt={image.public_id}
                    />
                  </div>
                ))}
              </div>
            }

            <CldUploadButton
              onSuccess={(result: any) => {
                const newImage = { public_id: result.info.public_id, url: result.info.secure_url };

                setImageData((prev) => [...prev, newImage]);
              }}
              className="bg-red-600 w-fit my-10 px-3 py-2 rounded-sm text-white"
              uploadPreset="next-store"
            />
            <p className="text-red-500 py-3">{fields.images.errors}</p>
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-sm font-medium">Select product category</label>
            {/* <AllCategories fields={fields} /> */}
            <Select
              key={fields.category.key}
              name={fields.category.name}
              defaultValue={fields.category.initialValue}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.length > 0 ? (
                  categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))
                ) : (
                  <SelectItem value="no-categories-available" disabled>
                    No categories available
                  </SelectItem>
                )}
              </SelectContent>
            </Select>

            <p className="text-red-500 py-3">{fields.category.errors}</p>
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-sm font-medium">Is Featured Product?</label>
            <Switch
              key={fields.isFeatured.key}
              name={fields.isFeatured.name}
              defaultChecked={Boolean(fields.isFeatured.initialValue)}
            />
            <p className="text-red-500 py-3">{fields.isFeatured.errors}</p>
          </div>
          <div className="flex gap-2 flex-col">
            <label className="text-sm font-medium">Status</label>
            <Select key={fields.status.key} name={fields.status.name} defaultValue={fields.status.initialValue}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Status</SelectLabel>
                  <SelectItem value="archived">Archived</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <p className="text-red-500 py-3">{fields.status.errors}</p>
          </div>
          <SubmitButton />
        </form>
      </div >
    </section >
  );
};

export default CreateProductPage;
