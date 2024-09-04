import React from 'react'
import Product from './Product'
import Products from './json/Products.json';

function PopularProducts() {
  return (
    <div className="flex justify-center">
        <div className="block">
            <h2 className="text-[32px] freshlyGreenText font-[600] text-start">Popular Products</h2>

            <div className="lg:grid lg:grid-cols-4 gap-x-[52px]">

                {Products.slice(0,8).map((product) => (
                    <Product img={product.img} title={product.title} price={product.price} quantity={product.quantity}/>

                ))}
            </div>
        </div>
    </div>
    
  )
}

export default PopularProducts