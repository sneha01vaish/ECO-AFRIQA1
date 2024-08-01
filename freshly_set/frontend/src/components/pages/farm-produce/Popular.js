import React, { useState, useRef } from 'react'
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";


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
      img: "/static/media/c-2.png",
      title: "Fresh fruits",
    },
    {
      id: 6,
      img: "/static/media/c-3.png",
      title: "Fresh fruits",
    },
    {
      id: 7,
      img: "/static/media/c-4.png",
      title: "Fresh fruits",
    },
    {
      id: 8,
      img: "/static/media/c-1.png",
      title: "Fresh fruits",
    },
    {
      id: 9,
      img: "/static/media/c-2.png",
      title: "Fresh fruits",
    },
    {
      id: 10,
      img: "/static/media/c-3.png",
      title: "Fresh fruits",
    },
    {
      id: 11,
      img: "/static/media/c-4.png",
      title: "Fresh fruits",
    },
  ])

  const scrollContainer = useRef(null);

  const scrollLeft = () => { scrollContainer.current.scrollBy({ left: -400, behavior: 'smooth' })}

  const scrollRight = () => { scrollContainer.current.scrollBy({ left: 400, behavior: 'smooth' }) }

  return (
    <section>

      <div className='flex justify-between items-center py-4 pl-3'>
        <p className='text-green-600 text-xl font-bold'>Categories</p>
        <div className='text-green-600 text-xl font-bold flex'>

          <button onClick={scrollLeft} className='border-none text-green-600 text-[48.00px] font-bold bg-transparent cursor-pointer p-0'><RiArrowLeftSLine /></button>

          <button onClick={scrollRight} className='border-none text-green-600 text-[48.00px] font-josefin bg-transparent cursor-pointer p-0'><RiArrowRightSLine /></button>

        </div>
      </div>

      <div 
        className='flex flex-nowrap justify-between items-center px-3 gap-6 overflow-x-auto no-scrollbar'
        ref={scrollContainer}
      >
        {
          items.map((item) => (
            <div key={item.id} className='bg-green-200 min-w-[160.00px] h-[160.00px] flex flex-col justify-center items-center rounded-lg shadow-gray-400 shadow-sm mb-3'>
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
    </section>
  )
}