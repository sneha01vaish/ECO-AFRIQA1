import React, { useState, useEffect, useRef } from 'react'
import { IoStarSharp } from "react-icons/io5";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import Products from './json/Products.json'

// REPLACE **Products.json** FILE WITH FETCHED PRODUCTS FROM THE DATABASE

const Categories = () => {
  
  const [ items, setItems ] = useState(Products);
  //const [ isActive, setIsActive ] = useState('')

  const scrollContainer = useRef(null);
  const scrollLeft = () => {scrollContainer.current.scrollBy({ left: -400, behavior: 'smooth' })}
  const scrollRight = () => {scrollContainer.current.scrollBy({ left: 400, behavior: 'smooth' })}

  const filterItems = (categoryItem) => {
    const updateItems = Products.filter((el) => {
      return el.category === categoryItem
    })
    setItems(updateItems);
  }

  return (
    <section className='bg-white/80 sm:max-w-[74%] w-full mx-auto py-8' >
      <div className="" >

        <div >
          <h2 className='text-green-700 text-xl text-center font-bold my-0'>Categories</h2>
          <div className='text-green-700 font-bold flex justify-end'>
            <button onClick={scrollLeft} className='border-none text-green-600 text-[40.00px] font-extrabold bg-transparent cursor-pointer p-0 m-0 flex items-center'><RiArrowLeftSLine /></button>
            <button onClick={scrollRight} className='border-none text-green-600 text-[40.00px] font-extrabold bg-transparent cursor-pointer p-0 m-0 flex items-center'><RiArrowRightSLine /></button>
          </div>
        </div>

        <div className='flex flex-nowrap justify-between items-center gap-6 overflow-x-auto scrollbar scrollbar-thumb-green-400 pl-3 sm:pl-0 pb-4'
        ref={scrollContainer}> 

          <div onClick={() => filterItems("fruits")} className='bg-[#FF9E0C]/80 transition delay-200 ease-in-out hover:bg-[#FF9E0C] min-w-[160.00px] h-[160.00px] flex flex-col justify-end items-center rounded-lg shadow-gray-400 shadow-md hover:shadow-lg cursor-pointer'>
            <img
              className='w-[128px]'
              src="/static/media/c-1.png"
              alt="Fresh fruits"
            />
            <p className='font-bold text-white capitalize'>Fresh fruits</p>
          </div>

          <div onClick={() => filterItems("vegetables")} className='bg-[#008000]/60 transition delay-200 ease-in-out hover:bg-[#006000] min-w-[160.00px] h-[160.00px] flex flex-col justify-end items-center rounded-lg shadow-gray-400 shadow-md hover:shadow-lg cursor-pointer'>
            <img
              className='w-[128px]'
              src="/static/media/c-2.png"
              alt="Fresh vegetables"
            />
            <p className='font-bold text-white capitalize'>Fresh vegetables</p>
          </div>

          <div onClick={() => filterItems("legumes")} className='bg-[#AA2900]/60 transition delay-200 ease-in-out hover:bg-[#AA2900] min-w-[160.00px] h-[160.00px] flex flex-col justify-end items-center rounded-lg shadow-gray-400 shadow-md hover:shadow-lg cursor-pointer'>
            <img
              className='w-[136px] scale-110'
              src="/static/media/c-3.png"
              alt="Fresh legumes"
            />
            <p className='font-bold capitalize text-white'>Fresh Legumes</p>
          </div>

          <div onClick={() => filterItems("spices")} className='bg-[#FF0C1A]/60 transition delay-200 ease-in-out hover:bg-[#FF0C1A] min-w-[160.00px] h-[160.00px] flex flex-col justify-end items-center rounded-lg shadow-gray-400 shadow-md hover:shadow-lg cursor-pointer '>
            <img
              className='w-[152px]'
              src="/static/media/c-4.png"
              alt="Fresh spices"
            />
            <p className='font-bold capitalize text-white'>Fresh spices</p>
          </div>

        </div>
      </div>
    <div className='border-b border-solid border-green-600 mt-12' />

    <div>
    <h2 className='text-green-700 text-xl text-center font-bold my-0 py-8 capitalize'>fresh vegetables</h2>
      <div className={`flex flex-wrap justify-around sm:justify-between items-center px-2 gap-3`}>
        {
          items && items.map(item => (
            <div
              key={item.id}
              className='max-w-[160.00px] sm:min-w-[200.00px] h-[260.00px] sm:h-[284.00px] shadow-slate-200 bg-slate-50 shadow-md hover:shadow-lg rounded-lg flex flex-col items-center my-3'>     
              <img
                src={item.img}
                alt={item.title}
                className="max-w-[90%] h-[44%] mx-auto my-auto"
              />
              <p className='font-bold tracking-wide my-1 uppercase'>{item.name}</p>
              <p className=' uppercase my-3 font-bold text-sm text-nowrap'>
                <span className='text-green-600'>{item.price}</span>
                <span className='text-red-600'>&nbsp;- {item.quantity}</span>
              </p>
              <button className='uppercase border-3 border-green-600 px-6 py-3 text-green-600 font-inter rounded-xl bg-white/60 shadow cursor-pointer hover:bg-green-600 hover:text-white transition-all hover:border-green-400'>add to cart</button>
              <p className='my-3 flex'>
                <IoStarSharp className='text-green-600 font-medium' />
                <IoStarSharp className='text-green-600 font-medium' />
                <IoStarSharp className='text-green-600 font-medium' />
                <IoStarSharp className='text-green-600 font-medium' />
                <IoStarSharp className='text-green-600 font-medium' />
              </p>
          </div>
          ))
        }
      </div>
    </div>
 
    </section>
  )
}

export default Categories