import React, { useContext } from 'react'
import Deals from './Deals'
import Popular from './Popular'
import Categories from './Categories'
import ProductsCategories from './ProductsCategories'
import PopularProducts from './PopularProducts'
import { ProductsSideBarContext } from '../../context/PageContext'

const ProduceCenter = () => {
  const [productsSidebarOpen, setProductsSidebarOpen] = useContext(ProductsSideBarContext);

  return (
    <main className={productsSidebarOpen ? 'lg:w-[81vw] flex justify-center py-16':'lg:w-[100vw] flex justify-center py-16'}>
      <div className="block">
        <Deals />
          <PopularProducts />
          <ProductsCategories />
          {/* <Categories /> */}
      </div>
       

    </main>
  )
}

export default ProduceCenter
