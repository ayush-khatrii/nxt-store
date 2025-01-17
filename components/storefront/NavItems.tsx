"use client";

import { Menu, ShoppingCart, Search, X } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { redis } from '@/lib/redis';
import { Cart } from '@/lib/interfaces';

const navItems = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "All Products",
    url: "/products",
  },
  {
    title: "All Categories",
    url: "/products/categories",
  },
];

export default function NavItems({ cart }: { cart: Cart | null }) {

  const total = cart?.items.reduce((sum, item) => sum + item.quantity, 0) || 0;

  return (
    <nav className="w-full border-b">
      <Sheet>
        <div className=" max-w-[90rem] mx-auto">
          <div className="flex items-center justify-between  h-16">
            <div className="flex justify-between items-center">
              <div className="flex justify-center items-center gap-3">
                <SheetTrigger className="block lg:hidden">
                  <Menu className="h-4 w-4" />
                </SheetTrigger>
              </div>
              <div className="flex-shrink-0 pl-2">
                <Link href="/" className="text-xl font-bold">PJCollections</Link>
              </div>
              <SheetContent side="left" className="w-full flex flex-col gap-4">
                <SheetHeader>
                  <SheetTitle>Explore Fashion</SheetTitle>
                </SheetHeader>
                <ul className="flex justify-center items-start flex-col gap-5">
                  {navItems.map((item, idx) => (
                    <li key={idx} className="">
                      <Link
                        href={`${item.url}`}
                        className="hover:underline"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </SheetContent>
            </div>
            <ul className="hidden lg:flex justify-center items-center gap-10">
              {navItems.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={`${item.url}`}
                    className="hover:underline"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center space-x-4">
              <div className='flex gap-5 md:pl-5 justify-center items-center'>
                <div className="cursor-pointer">
                  <Search className="h-5 w-5" />
                </div>
                <div>
                  <Link href="/cart" className="hover:text-gray-600 relative flex justify-center items-center gap-2">
                    <ShoppingCart className="h-5 w-5" />
                    <span
                      className="absolute -top-2 left-4 text-background h-4 w-4 flex justify-center items-center bg-red-600 rounded-full text-xs">
                      {total}
                    </span>
                  </Link>
                </div>
                <SignedIn>
                  <UserButton />
                </SignedIn>
                <SignedOut>
                  <Button className="w-full" asChild>
                    <Link href="/sign-in">Sign in</Link>
                  </Button>
                </SignedOut>
              </div>
            </div>
          </div>
        </div>
      </Sheet>
    </nav>
  );
}
