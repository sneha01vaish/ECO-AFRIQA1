import React, { useContext, useEffect, useState } from 'react'
import ProduceCenter from './ProduceCenter'
import ProductsHero from './ProductsHero'
import FarmingSystems from './FarmingSystems'
import FarmGardenSetups from './FarmGardenSetups'
import HamburgerMenu from './HamburgerMenu'
import NavAuthenticated from '../../Nav/NavAuthenticated'
import FreshlyFooter from "../../footer/FreshlyFooter";
import { ModalContext, PageContext, PopupContext, ProductsSideBarContext } from '../../context/PageContext'
import ProduceBanner from './ProduceBanner'
import CtaPopup from "./CtaPopup";
import Categories from './Categories'
import ProductsSearchBar from './ProductsSearchBar'
import { IoMdMenu } from 'react-icons/io'
import Banner from '../homepage/Banner'
import ProductsPageSidebar from '../../Nav/ProductsPageSidebar'
function Products() {
  const [activeTab, setActiveTab] = useContext(PageContext);

  const [modalOpen, setModalOpen] = useContext(ModalContext);
  const [productsSidebarOpen, setProductsSidebarOpen] = useContext(ProductsSideBarContext);

  useEffect(() => {
      setActiveTab("products")
  },[activeTab])
  return (
    <div className='overflow-x-hidden transition-all duration-500 ease-in-out'>
       {
          modalOpen && (
            <CtaPopup />

          )
        }

            {
              !modalOpen && (
                <>
                  <NavAuthenticated />
                </>
              )
            }
         
          
            {/* <HamburgerMenu />  */}
            <div className="flex">
                {/* Left Side  start*/}
               <div className={productsSidebarOpen ? "flex":"hidden"}>
                   <ProductsPageSidebar />
                {/* Left side end */}

               </div>


                {/* Right side start */}

                {/* Make margins auto so that it stays centered on larger screens */}
                <div className={productsSidebarOpen ? "lg:ml-[]":"lg:ml-[0px]"}>
                    <div className="flex space-x-[80px] mt-[100px]">
                      <IoMdMenu onClick={() => setProductsSidebarOpen(true)} className={productsSidebarOpen ? "hidden": "text-[58px] text-black ml-[36px] lg:mt-[100px] cursor-pointer"}/>
                      {/* <ProductsSearchBar placeholder="Search for Farm Produce" /> */}
                    </div>
                    <ProduceCenter />
                    <Banner />
                </div>
                {/* Right side end */}
            </div>
           
            <FreshlyFooter />
         
    </div>
  )
}

export default Products