import Link from "next/link";

const bannerImg = 'https://images.unsplash.com/photo-1465408953385-7c4627c29435?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
export default function ProductBanner() {
  return (
    <section className="relative w-full h-auto pb-10 overflow-hidden">
      <Link href="/">
        <div className="h-[50vh] xs:h-[55vh] sm:h-[60vh] md:h-[70vh] lg:h-[90vh] w-full">
          <img
            src={bannerImg}
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
      </Link>
    </section>
  )
}
