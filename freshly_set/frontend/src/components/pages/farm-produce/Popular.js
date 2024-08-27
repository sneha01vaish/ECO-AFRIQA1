import React, { useState, useRef } from 'react'
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Products from "./json/Products.json"

export default function Popular() {
  
  // Replace these hard-coded items with a fetch API
  const [items, setItems] = useState(Products)

  const scrollContainer = useRef(null);

  const scrollLeft = () => { scrollContainer.current.scrollBy({ left: -400, behavior: 'smooth' })}

  const scrollRight = () => { scrollContainer.current.scrollBy({ left: 400, behavior: 'smooth' }) }

  return (
    <section>
      <div className='pb-6'>
        <div className='flex justify-between items-center py-4 '>
          <p className='text-green-600 text-xl font-bold pl-3'>Categories</p>
          <div className='text-green-600 text-xl font-bold flex'>

            <button onClick={scrollLeft} className='border-none text-green-600 text-[48.00px] font-bold bg-transparent cursor-pointer p-0'><RiArrowLeftSLine /></button>

            <button onClick={scrollRight} className='border-none text-green-600 text-[48.00px] font-josefin bg-transparent cursor-pointer p-0'><RiArrowRightSLine /></button>

          </div>
        </div>

        <div 
          className='flex flex-nowrap justify-between items-center gap-6 overflow-x-auto scrollbar scrollbar-thumb-green-200 pl-3 sm:pl-0'
          ref={scrollContainer}
        >
          {
            items.slice(0, 8).map((item) => (
              <div key={item.id} className='bg-green-200 min-w-[160.00px] h-[160.00px] flex flex-col justify-center items-center rounded-lg shadow-gray-400 shadow-sm mb-8'>
                <img
                  className='w-[120px] h-[72%]'
                  src={item.img}
                  alt={item.category}
                />
                <p className='font-bold text-black/80 mb-3 capitalize'>{item.category}</p>
              </div>
            ))
          }
        </div>
      </div>
      <div className='capitalize font-bold '>
        <p className='text-green-600 text-xl text-center sm:flex sm:flex-start pl-3'>popular products</p>
        <Link to='/products/categories' className='text-green-600 flex justify-end items-center gap-3'>
          <span>Show all </span>
          <BsArrowRight className='text-xl' />
        </Link>
      </div>
    </section>
  )
}
