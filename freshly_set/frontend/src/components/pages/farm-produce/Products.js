import React from 'react'
import ProduceCenter from './ProduceCenter'
import ProductsHero from './ProductsHero'
import FarmingSystems from './FarmingSystems'
import FarmGardenSetups from './FarmGardenSetups'
import HamburgerMenu from './HamburgerMenu'
import NavAuthenticated from '../../Nav/NavAuthenticated'

function Products() {
  return (
    <div>
        <NavAuthenticated />
        <ProductsHero />
        {/* <HamburgerMenu />  */}
        <FarmingSystems />
        <FarmGardenSetups />
        <ProduceCenter />
    </div>
  )
}

export default Products