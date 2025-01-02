import Category from '@/components/storefront/Category'
import FeaturedProducts from '@/components/storefront/FeaturedProducts'
import Hero from '@/components/storefront/Hero'
import NewArrivals from '@/components/storefront/NewArrivals'
import ProductBanner from '@/components/storefront/ProductBanner'
import ShopBenefits from '@/components/storefront/ShopBenefits'
export default function page() {
  return (
    <section>
      <div>
        <Hero />
      </div>
      <div className='max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8'>
        <Category />
        <FeaturedProducts />
        <ProductBanner />
        <NewArrivals />
        <ShopBenefits />
      </div>
    </section>
  )
}
