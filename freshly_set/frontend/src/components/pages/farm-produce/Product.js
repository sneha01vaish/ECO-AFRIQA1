import React from 'react'
import { IoStarSharp } from 'react-icons/io5'

function Product({img, title, name, price, quantity}) {
  return (
    <div
    className='max-w-[160.00px] sm:min-w-[200.00px] h-[260.00px] sm:h-[284.00px] shadow-slate-200 bg-slate-50 shadow-md hover:shadow-lg rounded-[16.77px] flex flex-col items-center my-3'>     
    <img
      src={img}
      alt={title}
      className="max-w-[90%] h-[44%] mx-auto my-auto"
    />
    <p className='font-bold tracking-wide my-1 uppercase'>{name}</p>
    <p className=' uppercase my-3 font-bold text-sm text-nowrap'>
      <span className='text-green-600'>{price}</span>
      <span className='text-red-600'>&nbsp;- {quantity}</span>
    </p>
    <button className='uppercase border-3 border-[#008000] px-6 py-3 text-[#00B207] font-inter rounded-xl bg-white/60 shadow cursor-pointer hover:bg-[#008000] hover:text-white transition-all hover:border-green-400'>add to cart</button>
    <p className='my-3 flex'>
      <IoStarSharp className='text-green-600 font-medium' />
      <IoStarSharp className='text-green-600 font-medium' />
      <IoStarSharp className='text-green-600 font-medium' />
      <IoStarSharp className='text-green-600 font-medium' />
      <IoStarSharp className='text-green-600 font-medium' />
    </p>
</div>
  )
}

export default Product