import React, { useState } from 'react'
import { IoStarSharp } from "react-icons/io5";

const Categories = () => {
  const [ items, setItems ] = useState([
    {
      id: 1,
      type: "lettuce",
      price: "ksh 40",
      quantity: "per bundle",
    },
    {
      id: 2,
      type: "lettuce",
      price: "ksh 40",
      quantity: "per bundle",
    },
    {
      id: 3,
      type: "lettuce",
      price: "ksh 40",
      quantity: "per bundle",
    },
    {
      id: 4,
      type: "lettuce",
      price: "ksh 40",
      quantity: "per bundle",
    },
    {
      id: 6,
      type: "lettuce",
      price: "ksh 40",
      quantity: "per bundle",
    },
    {
      id: 7,
      type: "lettuce",
      price: "ksh 40",
      quantity: "per bundle",
    },
    {
      id: 8,
      type: "lettuce",
      price: "ksh 40",
      quantity: "per bundle",
    },
    {
      id: 9,
      type: "lettuce",
      price: "ksh 40",
      quantity: "per bundle",
    },
  ])
  return (
    <section>
        <h2 className='text-green-700 text-xl text-center font-bold my-0 py-8 capitalize'>fresh vegetables</h2>
        <div className='flex gap-4 w-full mx-auto sm:gap-8 flex-wrap justify-between items-center'>
            {
              items && items.map(item => (
                <div
                  key={item.id}
                  className='w-[160.00px] sm:w-[200.00px] h-[288.00px] shadow-slate-200 bg-slate-50 shadow-md hover:shadow-lg rounded-lg flex flex-col items-center'>
              <img
                src="/static/media/veg.png"
                alt="fresh vegetable"
                className="w-[90%] "
              />
              <p className='font-bold tracking-wide my-1 uppercase'>{item.type}</p>
              <p className=' uppercase my-3 font-bold'>
                <span className='text-green-600'>{item.price}</span>
                <span className='text-red-600'>&nbsp;- {item.quantity}</span>
              </p>
              <button className='uppercase border-3 border-green-600 px-6 py-3 text-green-600 font-inter rounded-xl bg-white/80 shadow cursor-pointer hover:bg-green-600 hover:text-white transition-all hover:border-green-400'>add to cart</button>
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
    </section>
  )
}

export default Categories