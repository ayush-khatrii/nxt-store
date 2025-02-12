"use server";
import CategorySelect from './CategorySelect';
import prisma from "@/lib/db";

export default async function AllCategories({ fields }: { fields: any }) {
  const categories = await prisma.category.findMany();
  console.log("Fetched Categories:", categories);
  return <CategorySelect categories={categories} fields={fields} />;
}
