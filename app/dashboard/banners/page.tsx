import { Button } from "@/components/ui/button";
import { FileUpload } from "@/components/ui/file-upload";

export default function page() {
  return (
    <section className="md:px-3">
      <div className="w-full">
        <label className="text-sm font-medium">Upload Hero Banners</label>
        <div className="w-full max-w-full my-3 mx-auto border border-dashed border-neutral-200 dark:border-neutral-800 rounded-md">
          <FileUpload />
        </div>
      </div>
      <div className="w-full">
        <label className="text-sm font-medium">Banner 2</label>
        <div className="w-full max-w-full my-3 mx-auto border border-dashed border-neutral-200 dark:border-neutral-800 rounded-md">
          <FileUpload />
        </div>
      </div>
      <div className="py-5">
        <Button
          type="submit"
          className='w-full'
        >
          Update Banners
        </Button>
      </div>
    </section>
  )
}