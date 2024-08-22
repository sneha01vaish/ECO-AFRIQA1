import React, { useContext, useEffect, useState } from 'react'
import ProduceCenter from './ProduceCenter'
import ProductsHero from './ProductsHero'
import FarmingSystems from './FarmingSystems'
import FarmGardenSetups from './FarmGardenSetups'
import HamburgerMenu from './HamburgerMenu'
import NavAuthenticated from '../../Nav/NavAuthenticated'
import FreshlyFooter from "../../footer/FreshlyFooter";
import { ModalContext, PageContext, PopupContext } from '../../context/PageContext'
import ProduceBanner from './ProduceBanner'
import CtaPopup from "./CtaPopup";
import Categories from './Categories'
function Products() {
  const [activeTab, setActiveTab] = useContext(PageContext);

  const [modalOpen, setModalOpen] = useContext(ModalContext)
  useEffect(() => {
      setActiveTab("products")
  },[activeTab])
  return (
    <div>
       {
          modalOpen && (
            <CtaPopup />

          )
        }

            {
              !modalOpen && (
                <>
                  <NavAuthenticated />
                  <ProductsHero />
                </>
              )
            }
         
          
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