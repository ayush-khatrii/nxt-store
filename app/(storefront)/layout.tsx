import Hero from "@/components/storefront/Hero"
import Navbar from "@/components/storefront/Navbar"
import TopBanner from "@/components/storefront/TopBanner"

export default function storeFrontLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="">
      <TopBanner />
      <header className="max-w-[90rem] mx-auto px-5 lg:px-0">
        <Navbar />
      </header>
      <div>
        <Hero />
      </div>
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}