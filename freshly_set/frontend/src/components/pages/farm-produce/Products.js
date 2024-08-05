import React from 'react'
import Nav from '../../Nav/Navbar'
import ProduceCenter from './ProduceCenter'
import ProductsHero from './ProductsHero'
import FarmingSystems from './FarmingSystems'
import FarmGardenSetups from './FarmGardenSetups'
import HamburgerMenu from './HamburgerMenu'

function Products() {
  return (
    <div>
        <Nav />
        <ProductsHero />
        {/* <HamburgerMenu />  */}
        <FarmingSystems />
        <FarmGardenSetups />
        <ProduceCenter />
    </div>
  )
}

export default Products