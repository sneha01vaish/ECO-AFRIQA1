import React, { useContext, useEffect, useState } from 'react'
import Product from './Product'
import Products from './json/Products.json';
import { ProductsContext } from '../../context/PageContext';

function PopularProducts() {
    const [products, setProducts] = useContext(ProductsContext)
    const [empty, setEmpty] = useState(true);
    useEffect(() => {
        if(products.length>0){
            setEmpty(false);
            console.log("Products pulled in succesfully", products);

        }else{
            // Fall back to backup Json file if no products are in the db
            setEmpty(true);
            setProducts(Products)
            console.log("Pulled in Backup Products", products)

        }
        console.log("Products popped", products)
    },[products, empty])
  return (
    <div className="PopularProducts ">
      <div className="PopularWrapper mx-[12px] lg:mx-auto   block">
        {/*Section Title */}
        <h2 className="PopularTitle text-center lg:text-start text-[32px] text-[#008000] font-inter font-[700]  lg:m-[40px]">Popular Products</h2>
        {/*Cards */}
        <div className="CardsGrid grid grid-cols-2 lg:grid-cols-4 gap-[20px] lg:gap-[60px] lg:mx-[40px]">

            {products.slice(0,8).map((product) => (
                <Product key={product.id} img={product.image} title={product.title} name={product.name} price={product.price} quantity={product.quantity} unit={product.unit}/>

            ))}
        </div> {/*Cards Ends Here */}
      </div> {/*Popular Products Wrapper */}
    </div> // Popular Products Ends here
    
  )
}

export default PopularProducts