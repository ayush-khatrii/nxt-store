import ProductCard from "@/components/ProductCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ArrowDownUp, SlidersHorizontal } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

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
const colorData = [
  {
    value: "white",
    label: "White",
  },
  {
    value: "black",
    label: "Black",
  },
  {
    value: "red",
    label: "Red",
  },
  {
    value: "blue",
    label: "Blue",
  },
]
const sizeData = [
  {
    value: "s",
    label: "Small",
  },
  {
    value: "m",
    label: "Medium",
  },
  {
    value: "l",
    label: "Large",
  },
  {
    value: "xl",
    label: "Extra Large",
  },
];


export default function AllProductsPage() {
  return (
    <section className="max-w-[90rem] mx-auto px-5">
      <Sheet>
        <SheetTrigger className="relative" asChild>
          <Button variant="default" className="my-5">
            Filter <SlidersHorizontal />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle className="text-2xl font-bold">Filter Products</SheetTitle>
            <SheetDescription>
            </SheetDescription>
          </SheetHeader>
          <div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Size</AccordionTrigger>
                <AccordionContent className="space-y-3">
                  {
                    sizeData.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-2">
                        <Checkbox id={item.label} />
                        <label
                          htmlFor={item.label}
                        >
                          {item.label}
                        </label>
                      </div>
                    ))
                  }
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Color</AccordionTrigger>
                <AccordionContent className="space-y-3">
                  {
                    colorData.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-2">
                        <Checkbox id={item.value} />
                        <label
                          htmlFor={item.value}
                        >
                          {item.label}
                        </label>
                      </div>
                    ))
                  }
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Price</AccordionTrigger>
                {/* <AccordionContent>
                  <RadioGroup defaultValue="option-one">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-one" id="option-one" />
                      <label htmlFor="option-one">Any Price</label>
                    </div>
                  </RadioGroup>
                </AccordionContent> */}
              </AccordionItem>
            </Accordion>
          </div>
        </SheetContent>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="my-5 ml-3">
              Sort <ArrowDownUp />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              None
            </DropdownMenuItem>
            <DropdownMenuItem>
              Price: Low to High
            </DropdownMenuItem>
            <DropdownMenuItem>
              Price: High to Low
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="grid gap-5 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto w-full">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Sheet>
    </section>
  )
}
