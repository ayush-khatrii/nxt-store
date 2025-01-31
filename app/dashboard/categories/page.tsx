import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function page() {
  return (
    <section className="">
      <div className='flex gap-3 pl-4'>
        <h1 className="text-2xl font-bold mb-10">Create New Category</h1>
      </div>
      <form className="container mx-auto p-4 space-y-4">
        <div>
          <label className="text-sm font-medium mb-2">Category Title </label>
          <Input
            type="text"
            className="mt-3 w-full"
            placeholder="Write product title"
            required
          />
        </div>
        <div>
          <label className="text-sm font-medium mb-2">Category Description</label>
          <Textarea className='mt-3' placeholder="Write category description..." />
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
