import React from 'react'
import Nav from '../../Nav/Navbar'
import ProduceCenter from './ProduceCenter'
import ProductsHero from './ProductsHero'
import FarmingSystems from './FarmingSystems'
import FarmGardenSetups from './FarmGardenSetups'

function Products() {
  return (
    <div>
        <Nav />
        <ProductsHero />
        <FarmingSystems />
        <FarmGardenSetups />
        <ProduceCenter />

    </div>
  )
}

export default Products