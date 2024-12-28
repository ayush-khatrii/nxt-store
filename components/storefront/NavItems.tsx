"use client"

import { useState } from "react";
import { Menu, ShoppingCart, Search, X, User2Icon, LogOut, User, ListOrdered, Heart, ShoppingBag, Equal } from 'lucide-react';
import Link from 'next/link';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const categories = [
  "Co-Ord Sets",
  "Kurtis",
  "Dresses",
  "Indo-Western",
  "Lehengas",
];


import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
export default function NavItems() {
  return (
    <nav className="lg:px-5">
      <Sheet>
        <div className="">
          <div className="flex items-center justify-between h-16">
            <div className="flex justify-between items-center">
              <div className="flex justify-center items-center gap-3">
                <SheetTrigger className="block lg:hidden">
                  <div className="">
                    <Equal className="h-4 w-4" />
                  </div>
                </SheetTrigger>
              </div>
              <div className="flex-shrink-0 pl-2">
                <Link href="/" className="text-xl font-bold">PJCollections</Link>
              </div>

              <SheetContent side="left" className="w-full flex justify-between items-center flex-col">
                <div className="flex justify-center flex-col items-start gap-3 w-full">
                  <SheetHeader className="">
                    <SheetTitle>Explore Fashion Pick</SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col items-start w-full">
                    {categories.map((category) => (
                      <Link
                        key={category}
                        href={`#${category.toLowerCase().replace(/\s+/g, '-')}`}
                        className="w-full hover:underline py-3 px-2 hover:border transition-transform text-sm hover:bg-gray-100 rounded-md"
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </div>
            <ul className="hidden lg:flex jusctify-center items-center gap-10">
              {
                categories.map((category, index) => (
                  <li key={index}>
                    <Link
                      key={category}
                      href={`#${category.toLowerCase().replace(/\s+/g, '-')}`}
                      className="w-full hover:text-yellow-700 transition-all duration-200 ease-in-out"
                    >
                      {category}
                    </Link>
                  </li>
                ))
              }
            </ul>
            <div className="flex items-center space-x-4">
              <div className='flex gap-5 md:pl-5 justify-center items-center'>
                <div className="cursor-pointer">
                  <Search className="h-5 w-5" />
                </div>
                <div>
                  <Link href="#cart" className="hover:text-gray-600 relative flex justify-center items-center gap-2">
                    <ShoppingCart className="h-5 w-5" />
                    <span
                      className="absolute -top-2 left-4 text-background h-4 w-4 flex justify-center items-center bg-red-600 rounded-full text-xs">
                      1
                    </span>
                  </Link>
                </div>
                <SignedIn>
                  <UserButton />
                </SignedIn>
                <SignedOut>
                  <Button className="w-full" asChild>
                    <Link href={"/sign-in"}>Sign in</Link>
                  </Button>
                </SignedOut>
              </div>
            </div>
          </div>
        </div>
      </Sheet>
    </nav>
  )
}
