"use client"
import { CreateCategory } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { categoryScehma } from "@/lib/zodSchema";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { useActionState } from "react";

export default function page() {
  const [lastResult, action] = useActionState(CreateCategory, undefined);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: categoryScehma });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  return (
    <section className="">
      <div className='flex gap-3 pl-4'>
        <h1 className="text-2xl font-bold mb-10">Create New Category</h1>
      </div>
      <form id={form.id} onSubmit={form.onSubmit} action={action} className="container mx-auto p-4 space-y-4">
        <div>
          <label className="text-sm font-medium mb-2">Category Title </label>
          <Input
            key={fields.name.key}
            name={fields.name.name}
            defaultValue={fields.name.initialValue}
            className="mt-3 w-full"
            type="text"
            placeholder="Write product title"
            required
          />
        </div>
        <div>
          <label className="text-sm font-medium mb-2">Category Description (optional)</label>
          <Textarea
            key={fields.description.key}
            name={fields.description.name}
            defaultValue={fields.description.initialValue}
            className='mt-3' placeholder="Write category description..." />
        </div>
        <div>
          <Button
            type="submit"
            className='w-full'
          >
            Create Category
          </Button>
        </div>
      </form>
    </section>
  )
}
