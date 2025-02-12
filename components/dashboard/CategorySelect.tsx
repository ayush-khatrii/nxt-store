"use client";
import { ProductCategory } from "@/lib/interfaces";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CategorySelectProps {
  categories: ProductCategory[];
  fields: any;
}

export default function CategorySelect({ categories, fields }: CategorySelectProps) {
  return (
    <Select
      key={fields.category.key}
      name={fields.category.name}
      defaultValue={fields.category.initialValue}
    >
      <SelectTrigger>
        <SelectValue placeholder="Select Category" />
      </SelectTrigger>
      <SelectContent>
        {
          categories.length > 0 ?
            <>
              {categories.map((category) => (
                <SelectItem key={category.id} value={category.id}>
                  {category.name}
                </SelectItem>
              ))}
            </> : <SelectItem value="no-categories" disabled>
              No categories found
            </SelectItem>

        }
      </SelectContent>
    </Select >
  );
}
