import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContext';
import { EmptyContext } from '../../context/PageContext';

function Product({img, title, name, price, unit, quantity, id}) {
    const { addToCart } = useContext(CartContext);
    const [empty, setEmpty] = useState(true);

    const imgSrc = empty ? img : (img.startsWith('http') ? img : `${process.env.REACT_APP_API_HOST}/${img}`);

    useEffect(() => {
      console.log("prod image", img)
    },[empty])
  return (
    <div className='SingleCard p-[6px] bg-white border-gray-400 border-[0.5px] border-solid shadow-gray-800 shadow-lg rounded-[18px] '>     
      {/*Dynamic Product Image */}
      <div className=' mt-[16px] flex justify-center h-[80px] lg:h-[120px]'>
          <img src={imgSrc} alt={title} className="ProductImage w-full h-full object-contain " />
      </div>
      
      {/*Dynamic product name */}
      <h3 className='ProductName text-center uppercase mt-0 font-inter text-black text-[14px] lg:text-[20px] font-[700]'>{name}</h3>
      {/*Dynamic Product Price and Quantity */}
      <p className='PriceAndQtty text-center uppercase font-inter text-[12px] lg:text-[16px] font-[700]'>
        <span className='ProductPrice text-[#008000]'>{price}</span>
        <span className='ProductQtty text-[#FF0C1A] '>&nbsp; - PER {unit}</span>
      </p>
      {/*Add to cart button */}
      <div className='AddButton flex justify-center mt-[20px] mb-[30px] lg:mb-[50px]'>
             <button onClick={() => addToCart({img, title, name, price, quantity, id})} className='AddtoCart uppercase p-[10px] lg:p-[12px]  border-solid border-[2px] border-[#008000] text-[#00B207] font-inter font-[600] rounded-[12px] bg-white/60 shadow cursor-pointer hover:bg-[#008000] hover:text-white transition-all hover:border-[#008000]'>add to cart</button>
      </div>
     
      
    </div> 
  )
};

export default Product