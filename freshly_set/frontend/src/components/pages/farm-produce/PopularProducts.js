import React from 'react'
import Product from './Product'
import Products from './json/Products.json';

function PopularProducts() {
  return (
    <div className="PopularProducts ">
      <div className="PopularWrapper mx-[12px] lg:mx-auto   block">
        {/*Section Title */}
        <h2 className="PopularTitle text-center lg:text-start text-[32px] text-[#008000] font-inter font-[700]  lg:m-[40px]">Popular Products</h2>
        {/*Cards */}
        <div className="CardsGrid grid grid-cols-2 lg:grid-cols-4 gap-[20px] lg:gap-[60px] lg:mx-[40px]">

            {Products.slice(0,8).map((product) => (
                <Product img={product.img} title={product.title} name={product.name} price={product.price} quantity={product.quantity}/>

            ))}
        </div> {/*Cards Ends Here */}
      </div> {/*Popular Products Wrapper */}
    </div> // Popular Products Ends here
    
  )
}

export default PopularProducts