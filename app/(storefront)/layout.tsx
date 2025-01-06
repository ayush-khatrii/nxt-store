import Footer from "@/components/storefront/Footer"
import Hero from "@/components/storefront/Hero"
import Navbar from "@/components/storefront/Navbar"

export default function storeFrontLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="">
      <header className="">
        <Navbar />
      </header>
      <div className="">
        {children}
      </div>
      <div>
        <Footer />
      </div>
    </section>
  )
}