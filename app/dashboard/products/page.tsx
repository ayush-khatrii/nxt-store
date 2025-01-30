import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus } from "lucide-react";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { RxDotsHorizontal } from "react-icons/rx";


const products = [
  {
    img: "https://placehold.co/400",
    title: " Headphones",
    price: "$250.00",
    status: "active",
    date: "12/12/2023",
  },
  {
    img: "https://placehold.co/400",
    title: "sample",
    price: "$250.00",
    status: "active",
    date: "12/12/2023",
  },
  {
    img: "https://placehold.co/400",
    title: "Wireless Speaker",
    price: "$250.00",
    status: "active",
    date: "12/12/2023",
  },
  {
    img: "https://placehold.co/400",
    title: "Modern",
    price: "$250.00",
    status: "active",
    date: "12/12/2023",
  },
];

export default function page() {
  return (
    <section className="md:px-3">
      <div className="flex justify-between items-center gap-4 mb-6">
        <h1 className='text-2xl font-bold'>Products</h1>
        <Button variant="default" size="sm" asChild>
          <Link href="/dashboard/products/create" className="flex items-center gap-2">
            <Plus className="w-4 h-4" /> Add Product
          </Link>
        </Button>
      </div>
      <div className="overflow-x-auto border text-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="pl-4">Image</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              products.map((product) => (
                <TableRow key={product.title}>
                  <TableCell className="font-medium">
                    <div className="w-20 h-20">
                      <img
                        src={product.img}
                        className="object-cover w-full h-full rounded-lg"
                        alt={product.title}
                      />
                    </div>
                  </TableCell>
                  <TableCell className="max-w-[200px] truncate">{product.title}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>
                    <Badge>
                      {product.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-">{product.date}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <RxDotsHorizontal />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </section >
  )
}