import React, { useState, useRef } from 'react'
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Popular() {
  
  // Replace these hard-coded items with a fetch API
  const [items, setItems] = useState([
    {
      id: 1,
      img: "/static/media/c-1.png",
      title: "Fresh fruits",
    },
    {
      id: 2,
      img: "/static/media/c-2.png",
      title: "Fresh vegetables",
    },
    {
      id: 3,
      img: "/static/media/c-3.png",
      title: "Fresh legumes",
    },
    {
      id: 4,
      img: "/static/media/c-4.png",
      title: "Fresh spices",
    },
    {
      id: 5,
      img: "/static/media/c-1.png",
      title: "Fresh fruits",
    },
    {
      id: 6,
      img: "/static/media/c-2.png",
      title: "Fresh vegetables",
    },
    {
      id: 7,
      img: "/static/media/c-3.png",
      title: "Fresh legumes",
    }
  ])

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
            items.map((item) => (
              <div key={item.id} className='bg-green-200 min-w-[160.00px] h-[160.00px] flex flex-col justify-center items-center rounded-lg shadow-gray-400 shadow-sm mb-8'>
                <img
                  className='w-[120px]'
                  src={item.img}
                  alt={item.title}
                />
                <p className='font-bold text-black/80 mb-3'>{item.title}</p>
              </div>
            ))
          }
        </div>
      </div>
      <div className='capitalize font-bold '>
        <p className='text-green-600 text-xl text-center sm:flex sm:flex-start pl-3'>popular products</p>
        <Link to='/products/all' className='text-green-600 flex justify-end items-center gap-3'>
          <span>Show all </span>
          <BsArrowRight className='text-xl' />
        </Link>
      </div>
    </section>
  )
}
