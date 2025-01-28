"use client";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Home, Settings, Users, BarChart2, Inbox } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { noto_sans } from "@/font/font";
import ThemeSwitchButton from "../ThemeSwitcher";

export default function DashboardNav({
  title = "Dashboard",
  menuItems = [
    { icon: Home, label: "Home", href: "/dashboard" },
    { icon: BarChart2, label: "Orders", href: "/dashboard/orders" },
    { icon: Users, label: "Products", href: "/dashboard/products" },
    { icon: Inbox, label: "Categories", href: "/dashboard/categories" },
    { icon: Inbox, label: "Banners", href: "/dashboard/banners" },
    { icon: Settings, label: "Socials", href: "/dashboard/socials" },
    { icon: Settings, label: "Settings", href: "/dashboard/settings" },
  ]
}) {


  const path = usePathname();

  return (
    <header className={`${noto_sans.className} border-b bg-transparent backdrop-blur supports-[backdrop-filter]:bg-background/60`}>
      <div className="flex justify-between flex-row-reverse md:flex-row py-3 px-5 items-center container mx-auto">
        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64">
            <SheetHeader>
              <SheetTitle>{title}</SheetTitle>
            </SheetHeader>
            <nav className="mt-6 flex flex-col space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-2 rounded-lg px-3 py-2 transition-all  ${path === item.href ? "bg-foreground text-background font-light" : ""}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>


        {/* Desktop Navigation */}
        <nav className="mr-auto hidden md:flex gap-3 items-center">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center text-sm gap-2 font-medium rounded-lg p-2 transition-all  ${path === item.href ? "bg-foreground text-xs text-background font-light" : ""}`}
            >
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className="mx-2">
          <ThemeSwitchButton></ThemeSwitchButton>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="cursor-pointer border-2 border-zinc-400">
              {/* <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" /> */}
              <AvatarFallback>{"ak"}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuItem className="border-none" asChild>
              <Button className="text-red-500" variant="ghost">
                Logout
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

    </header>
  );
}