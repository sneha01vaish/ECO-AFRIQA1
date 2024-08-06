import React, { useContext, useEffect, useState } from 'react'
import ProduceCenter from './ProduceCenter'
import ProductsHero from './ProductsHero'
import FarmingSystems from './FarmingSystems'
import FarmGardenSetups from './FarmGardenSetups'
import HamburgerMenu from './HamburgerMenu'
import NavAuthenticated from '../../Nav/NavAuthenticated'
import { PageContext } from '../../context/PageContext'

function Products() {
  const [activeTab, setActiveTab] = useContext(PageContext);

  useEffect(() => {
      setActiveTab("products")
  },[activeTab])
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