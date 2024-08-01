import React from 'react'
import Nav from '../../Nav/Navbar'
import ProduceCenter from './ProduceCenter'
import ProductsHero from './ProductsHero'
import FarmingSystems from './FarmingSystems'

function Products() {
  return (
    <div>
        <Nav />
        <ProductsHero />
        <FarmingSystems />
        <ProduceCenter />

    </div>
  )
}

export default Products