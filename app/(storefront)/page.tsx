import Category from '@/components/storefront/Category'
import FeaturedProducts from '@/components/storefront/FeaturedProducts'
import Hero from '@/components/storefront/Hero'
import ProductBanner from '@/components/storefront/ProductBanner'
import React from 'react'

export default function page() {
  return (
    <section>
      <Category />
      <FeaturedProducts />
      <ProductBanner />
    </section>
  )
}
