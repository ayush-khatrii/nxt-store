import Category from '@/components/storefront/Category'
import FeaturedProducts from '@/components/storefront/FeaturedProducts'
import Hero from '@/components/storefront/Hero'
import React from 'react'

export default function page() {
  return (
    <section>
      <Category />
      <FeaturedProducts />
    </section>
  )
}
