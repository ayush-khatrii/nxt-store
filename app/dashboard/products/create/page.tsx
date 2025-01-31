"use client"
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import Link from 'next/link';
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

const CreateProductPage: React.FC = () => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      productName,
      productDescription,
      productPrice,
      productImage,
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProductImage(e.target.files[0]);
    }
  };

  return (
    <section className=''>
      <div className='flex gap-3 mt-5 pl-4'>
        <Button asChild variant={"outline"} size="icon">
          <Link href={`/dashboard/products`}>
            <LiaAngleLeftSolid className='w-4 h-4' />
          </Link>
        </Button>
        <h1 className="text-2xl font-bold mb-10">Create New Product</h1>
      </div>
      <div className="container mx-auto p-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2">Product Name</label>
            <Input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="mt-3 w-full"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-2">Product Description</label>
            <Textarea className='mt-3' placeholder="Write product description..." />
          </div>
          <div>
            <label className="text-sm font-medium mb-2">Product Price</label>
            <Input
              type="number"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              min="1"
              className="mt-3 block w-full"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium">Product Image</label>
            <Input id="picture" className='mt-3' type="file" />
          </div>
          <div className='flex flex-col gap-3'>
            <label className="text-sm font-medium">Is Featured Product?</label>
            <Switch />
          </div>
          <div className='flex gap-2 flex-col'>
            <label className="text-sm ont-medium">Status</label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Status</SelectLabel>
                  <SelectItem value="archieved">Archieved</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Button
              type="submit"
              className='w-full'
            >
              Create Product
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreateProductPage;