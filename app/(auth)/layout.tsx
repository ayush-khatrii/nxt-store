import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function authLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className=' mt-20 flex justify-center items-center'>
      <div className="absolute group top-5 left-5 z-10">
        <Button variant="link">
          <Link href={"/"} className="flex justify-center items-center gap-1">
            <ArrowLeft className="group-hover:-translate-x-1 transition-all duration-100 ease-in-out" />
            <span>
              back
            </span>
          </Link>
        </Button>
      </div>
      {children}
    </section>
  )
}