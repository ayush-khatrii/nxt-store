import { Heart, LogOut, ShoppingBag, User2, User2Icon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import Link from "next/link";

export default function UserDropDown({ picture }: { picture: string }) {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar>
            <AvatarImage src={picture} />
            <AvatarFallback>
              <User2Icon />
            </AvatarFallback>
          </Avatar>

        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/account">
              <User2 />
              <span>
                My Profile
              </span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <ShoppingBag />
            <span>
              My Orders
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Heart />
            <span>
              My Wishlist
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="group">
            <Link href={"#logout"}
              className="flex justify-center group-hover:bg-red-700 items-center text-red-500 gap-2"
            >
              Logout <LogOut size={16} />
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
