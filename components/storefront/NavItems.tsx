"use client"

import { useState } from "react";
import { Menu, ShoppingCart, Search, X, User2Icon, LogOut, User, ListOrdered, Heart, ShoppingBag } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from 'next/link';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import UserDropDown from "./UserDropDown";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";

const categories = [
  "Ethnic Wear",
  "Casual Wear",
  "Party Wear",
  "Sarees",
  "Kurtis",
  "Indo-Western",
  "Lehengas",
  "Accessories"
];
export default function NavItems({ isLoggedIn, picture }: { isLoggedIn: boolean, picture: string }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <nav className="">
      <div className="px-5">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <div className="flex justify-between items-center">
            <Sheet>
              <SheetTrigger className="">
                <div className="rounded-full p-2 border border-foreground/40">
                  <Menu className="h-4 w-4" />
                </div>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px]">
                <div className="mt-6 space-y-4">
                  {categories.map((category) => (
                    <Link
                      key={category}
                      href={`#${category.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-md"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>

            {/* Logo */}
          </div>
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold">PJCollections</Link>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="hover:text-gray-600"
            >
              <div className="rounded-full p-2 border border-foreground/40">
                {isSearchOpen ? <X className="h-5 w-5" /> :
                  <Search className="h-5 w-5" />
                }
              </div>
            </button>
            {
              isLoggedIn ?
                <div className="flex justify-center items-center flex-row-reverse gap-4">
                  <UserDropDown picture={picture} />
                  <Link href="#cart" className="hover:text-gray-600 relative flex justify-center items-center gap-2">
                    <div className="rounded-full p-2 border border-foreground/40">
                      <ShoppingCart className="h-5 w-5" />
                    </div>
                    <span className="absolute -top-2 left-6 text-background h-5 flex justify-center items-center w-5 bg-red-600 rounded-full text-xs">1</span>
                  </Link>
                </div>
                :
                <div className='flex gap-2 md:pl-5 justify-center items-center'>
                  <Button asChild variant="outline">
                    <LoginLink>Sign in</LoginLink>
                  </Button>
                  <Button asChild variant="default">
                    <RegisterLink>Sign up</RegisterLink>
                  </Button>
                </div>
            }
          </div>
        </div>

        {/* Search bar */}
        {isSearchOpen && (
          <div className="py-4 flex justify-center items-center gap-3">
            <Input
              type="search"
              placeholder="Search products..."
              className="w-full"
            />
            <Button>
              <Search className="h-5 w-5" />
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
