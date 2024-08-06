import React, { useRef } from 'react'
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import Categories from "./Categories"

const All = () => {

  const scrollContainer = useRef(null);

  const scrollLeft = () => { scrollContainer.current.scrollBy({ left: -400, behavior: 'smooth' })}

  const scrollRight = () => { scrollContainer.current.scrollBy({ left: 400, behavior: 'smooth' }) }

  return (
    <section className='bg-white/80 sm:max-w-[74%] w-full mx-auto py-8' >
      <div className=''>

        <div className=''>
          <h2 className='text-green-700 text-xl text-center font-bold my-0'>Categories</h2>
          <div className='text-green-700 font-bold flex justify-end'>
            <button onClick={scrollLeft} className='border-none text-green-600 text-[40.00px] font-extrabold bg-transparent cursor-pointer p-0 m-0 flex items-center'><RiArrowLeftSLine /></button>
            <button onClick={scrollRight} className='border-none text-green-600 text-[40.00px] font-extrabold bg-transparent cursor-pointer p-0 m-0 flex items-center'><RiArrowRightSLine /></button>
          </div>
        </div>

        <div className='flex flex-wrap justify-between items-center px-2 gap-3' ref={scrollContainer}> 

          <div className='bg-green-200 min-w-[160.00px] h-[160.00px] flex flex-col justify-center items-center rounded-lg shadow-gray-400 shadow-md hover:shadow-lg cursor-pointer'>
            <img
              className='w-[128px]'
              src="/static/media/c-1.png"
              alt="Fresh fruits"
            />
            <p className='font-bold text-black/80 capitalize'>Fresh fruits</p>
          </div>

          <div className='bg-green-600 min-w-[160.00px] h-[160.00px] flex flex-col justify-center items-center rounded-lg shadow-gray-400 shadow-md hover:shadow-lg cursor-pointer'>
            <img
              className='w-[128px]'
              src="/static/media/c-2.png"
              alt="Fresh vegetables"
            />
            <p className='font-bold text-white capitalize'>Fresh vegetables</p>
          </div>

          <div className='bg-green-200 min-w-[160.00px] h-[160.00px] flex flex-col justify-center items-center rounded-lg shadow-gray-400 shadow-md hover:shadow-lg cursor-pointer'>
            <img
              className='w-[136px] scale-110'
              src="/static/media/c-3.png"
              alt="Fresh legumes"
            />
            <p className='font-bold text-black/80 capitalize'>Fresh Legumes</p>
          </div>

          <div className='bg-green-200 min-w-[160.00px] h-[160.00px] flex flex-col justify-center items-center rounded-lg shadow-gray-400 shadow-md hover:shadow-lg cursor-pointer'>
            <img
              className='w-[152px] scale-110'
              src="/static/media/c-4.png"
              alt="Fresh spices"
            />
            <p className='font-bold text-black/80 capitalize'>Fresh spices</p>
          </div>

        </div>
      </div>

      <div className='border-b border-solid border-green-600 mt-12' />

      <Categories />
      
    </section>
  )
}

export default All