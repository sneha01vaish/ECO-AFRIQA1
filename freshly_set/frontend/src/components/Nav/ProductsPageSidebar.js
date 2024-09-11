import React, { useContext, useState } from 'react'
import { ProductsSideBarContext } from '../context/PageContext';
import { IoMdMenu } from 'react-icons/io';

function ProductsPageSidebar() {
    const [active, setActive] = useState(false);
    const [productsSidebarOpen, setProductsSidebarOpen] = useContext(ProductsSideBarContext);
  return (
    <div className="mt-[130px] h-[100%]  w-[19vw] bg-[#008000] rounded-[12px] pt-[13px]">

        <ul className="fixed block space-y-[51.48px]">
            <IoMdMenu onClick={() => setProductsSidebarOpen(false)} className="absolute -right-[50px] top-[40px] text-[58.54px] text-white cursor-pointer"/>

            <li className="font-inter text-white text-[20px] font-[600] cursor-pointer">All Stock</li>
            <li className="font-inter text-white/[0.50] hover:text-white transition-all duration-500 ease-in-out  text-[20px] cursor-pointer">Clearance</li>
            <li className="font-inter text-white/[0.50] hover:text-white transition-all duration-500 ease-in-out text-[20px] cursor-pointer">New Stock</li>
            <li className="font-inter text-white/[0.50] hover:text-white transition-all duration-500 ease-in-out text-[20px] cursor-pointer">High Quality</li>
            <li className="font-inter text-white/[0.50] hover:text-white transition-all duration-500 ease-in-out text-[20px] cursor-pointer">Offers</li>
            <li className="font-inter text-white/[0.50] hover:text-white transition-all duration-500 ease-in-out text-[20px] cursor-pointer">Clearance</li>
            <li className="font-inter text-white/[0.50] hover:text-white transition-all duration-500 ease-in-out text-[20px] cursor-pointer">New Stock</li>
            <li className="font-inter text-white/[0.50] hover:text-white transition-all duration-500 ease-in-out text-[20px] cursor-pointer">High Quality</li>






        </ul>
    </div>
  )
}

export default ProductsPageSidebar