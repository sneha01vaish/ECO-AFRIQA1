import React, { useContext, useEffect, useState } from 'react'
import ProduceCenter from './ProduceCenter'
import ProductsHero from './ProductsHero'
import FarmingSystems from './FarmingSystems'
import FarmGardenSetups from './FarmGardenSetups'
import HamburgerMenu from './HamburgerMenu'
import NavAuthenticated from '../../Nav/NavAuthenticated'
import FreshlyFooter from "../../footer/FreshlyFooter";
import { PageContext } from '../../context/PageContext'
import ProduceBanner from './ProduceBanner'

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
        <ProduceBanner />
        <FreshlyFooter />
    </div>
  )
}

export default Products