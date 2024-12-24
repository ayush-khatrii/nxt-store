"use client"

import { useState } from "react";
import { Menu, ShoppingCart, Search, X, User2Icon, LogOut, User, ListOrdered, Heart, ShoppingBag } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from 'next/link';
import { Input } from './ui/input';
import { Button } from './ui/button';
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
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-0">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <div className="flex justify-center items-center gap-3">
            <Sheet>
              <SheetTrigger className="lg:hidden">
                <Menu className="h-6 w-6" />
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px]">
                <div className="mt-6 space-y-4">
                  {categories.map((category) => (
                    <a
                      key={category}
                      href={`#${category.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-md"
                    >
                      {category}
                    </a>
                  ))}
                </div>
              </SheetContent>
            </Sheet>

            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-xl font-bold">PJCollections</Link>
            </div>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {categories.map((category) => (
              <a
                key={category}
                href={`#${category.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm hover:text-gray-600"
              >
                {category}
              </a>
            ))}
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="hover:text-gray-600"
            >
              {isSearchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
            </button>
            {
              isLoggedIn ?
                <div className="flex justify-center items-center flex-row-reverse gap-4">
                  <UserDropDown picture={picture} />
                  <Link href="#cart" className="hover:text-gray-600">
                    <ShoppingCart className="h-5 w-5" />
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
