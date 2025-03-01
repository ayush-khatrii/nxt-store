import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import prisma from "@/lib/db";
import Link from "next/link";

export default async function page() {
  const allCategories = await prisma.category.findMany();

  return (
    <>
      <section className="container mx-auto px-5">
        <div className='flex flex-col md:flex-row justify-between items-center gap-3'>
          <h1 className="text-base lg:text-2xl font-bold">All Categories</h1>
          <Link href="/dashboard/categories/create">
            <Button>
              Create Category
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 py-5 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-5">
          {
            allCategories.map((item) => (
              <>
                <Card
                  key={item.id}
                  className="flex capitalize w-full h-40 justify-center items-center mx-auto p-4">
                  {item.name}
                </Card>
              </>
            ))
          }
        </div>
      </section>
    </>
  )
}
