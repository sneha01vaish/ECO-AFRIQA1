import React from 'react'
import Deals from './Deals'
import Popular from './Popular'
import Categories from './Categories'
import ProductsCategories from './ProductsCategories'
import PopularProducts from './PopularProducts'

const ProduceCenter = () => {
  return (
    <main className='bg-white/80 sm:max-w-[74%] w-full mx-auto py-16'>
        <Deals />
        {/* <Popular /> */}
        <PopularProducts />
        <ProductsCategories />
        {/* <Categories /> */}

    </main>
  )
}

export default ProduceCenter
