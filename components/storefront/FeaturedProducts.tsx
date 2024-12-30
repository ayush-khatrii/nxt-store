import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ProductCard from '../ProductCard'


const products = [
  {
    id: 1,
    price: 14782345,
    name: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    desc: "Perfect for any occasion",
    href: "#",
    imageSrc: [
      { item: 1, img: "https://placehold.co/1080x1920.png" },
      { item: 2, img: "https://placehold.co/1080x1920.png" },
      { item: 3, img: "https://placehold.co/1080x1920.png" },
    ],
  },
  {
    id: 2,
    price: 14782345,
    name: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    desc: "Perfect for any occasion",
    href: "#",
    imageSrc: [
      { item: 1, img: "https://placehold.co/1080x1920.png" },
      { item: 2, img: "https://placehold.co/1080x1920.png" },
      { item: 3, img: "https://placehold.co/1080x1920.png" },
    ],
  },
  {
    id: 3,
    price: 14782345,
    name: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    desc: "Perfect for any occasion",
    href: "#",
    imageSrc: [
      { item: 1, img: "https://placehold.co/1080x1920.png" },
      { item: 2, img: "https://placehold.co/1080x1920.png" },
      { item: 3, img: "https://placehold.co/1080x1920.png" },
    ],
  },
  {
    id: 4,
    price: 14782345,
    name: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    desc: "Perfect for any occasion",
    href: "#",
    imageSrc: [
      { item: 1, img: "https://placehold.co/1080x1920.png" },
      { item: 2, img: "https://placehold.co/1080x1920.png" },
      { item: 3, img: "https://placehold.co/1080x1920.png" },
    ],
  },
];

export default function FeaturedProducts() {
  return (
    <section className="pb-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-extrabold text-xl sm:text-2xl lg:text-3xl">Featured Products</h2>
        <Button asChild variant="link">
          <Link
            href="/products/all"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-blue-600"
          >
            Browse all Products
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:underline" />
          </Link>
        </Button>
      </div>
      <div className="grid gap-5 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto w-full">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
