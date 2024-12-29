import Link from "next/link";


const bannerImg = "https://placehold.co/1992x700"
export default function ProductBanner() {
  return (
    <section className="w-full h-auto pb-10 overflow-hidden">
      <Link href={`/#`}>
        <div className="">
          <img
            src={bannerImg}
            alt={"banner-img"}
            className="h-auto w-full mx-auto" />
        </div>
      </Link>
    </section>
  )
}
