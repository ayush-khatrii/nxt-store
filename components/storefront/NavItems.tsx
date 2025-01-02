"use client";

import { useState } from "react";
import { Menu, ShoppingCart, Search, X } from 'lucide-react';
import Link from 'next/link';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const navItems = [
  {
    title: "Women",
    submenus: ["Dresses", "Tops", "Bottoms", "Outerwear", "Accessories"],
  },
  {
    title: "Girls",
    submenus: ["Casual Wear", "Party Wear", "School Wear"],
  },
  {
    title: "About",
    submenus: ["Our Story", "Sustainability", "Careers"],
  },
  {
    title: "Indo-Western",
    submenus: ["Kurtis", "Palazzos", "Sarees", "Fusion Wear"],
  },
  {
    title: "Lehengas",
    submenus: ["Bridal", "Party", "Festive", "Casual"],
  },
];

export default function NavItems() {
  return (
    <nav className="w-full border-b px-14">
      <Sheet>
        <div className="">
          <div className="flex items-center justify-between h-16">
            <div className="flex justify-between items-center">
              <div className="flex justify-center items-center gap-3">
                <SheetTrigger className="block lg:hidden">
                  <Menu className="h-6 w-6" />
                </SheetTrigger>
              </div>
              <div className="flex-shrink-0 pl-2">
                <Link href="/" className="text-xl font-bold">PJCollections</Link>
              </div>

              <SheetContent side="left" className="w-full flex flex-col gap-4">
                <SheetHeader>
                  <SheetTitle>Explore Fashion</SheetTitle>
                </SheetHeader>
                <Accordion type="single" collapsible className="w-full">
                  {navItems.map((item) => (
                    <AccordionItem key={item.title} value={item.title}>
                      <AccordionTrigger className="w-full text-left font-bold py-2">
                        {item.title}
                      </AccordionTrigger>
                      <AccordionContent className="pl-4">
                        <ul>
                          {item.submenus.map((submenu) => (
                            <li key={submenu} className="py-1">
                              <Link
                                href={`#${submenu.toLowerCase()}`}
                                className="hover:underline"
                              >
                                {submenu}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </SheetContent>
            </div>

            <ul className="hidden lg:flex justify-center items-center gap-10">
              {navItems.map((item) => (
                <NavigationMenu key={item.title}>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="p-4">
                          {item.submenus.map((submenu) => (
                            <li key={submenu} className="py-1">
                              <NavigationMenuLink>
                                <Link
                                  href={`#${submenu.toLowerCase().replace(/\s+/g, '-')}`}
                                  className="hover:text-yellow-700 transition-all duration-200 ease-in-out"
                                >
                                  {submenu}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              ))}
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
