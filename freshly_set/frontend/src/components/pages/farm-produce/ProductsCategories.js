import React, { useState, useEffect, useRef } from 'react'
import { IoStarSharp } from "react-icons/io5";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import Products from './json/Products.json';
import Navbar from '../../../components/Nav/Navbar'

// REPLACE **Products.json** FILE WITH FETCHED PRODUCTS FROM THE DATABASE
const productImages = {
  fruits: '/static/media/c-1.png',
  vegetables: '/static/media/c-2.png',
  legumes: '/static/media/c-3.png',
  spices: '/static/media/c-4.png',
}

const ProductsCategories = () => {
  
  const [ products, setProducts ] = useState(Products);
  const [selectedCategory, setSelectedCategory] = useState(Object.keys(products.reduce((acc, product) => {
    const { category } = product
    if (!acc[category]) acc[category] = true
    return acc
  }, {}))[0])

  const categoryStyles = {
    fruits: 'bg-[#FF9E0C]/80 hover:bg-[#FF9E0C]',
    legumes: 'bg-[#AA2900]/80 hover:bg-[#AA2900]',
    vegetables: 'bg-[#008000]/80 hover:bg-[#008000]',
    spices: 'bg-[#FF0C1A]/80 hover:bg-[#FF0C1A]'
  }

  const groupedProducts = products.reduce((acc, product) => {
    const { category } = product

    if (!acc[category]) {
      acc[category] = {
        id: category,
        items: [],
        img: productImages[category],
        styles: categoryStyles[category]
      }
    }
    acc[category].items.push(product)
    return acc
  }, {})
  const categories = Object.keys(groupedProducts)
  const handleCatClick = (category) => {
    setSelectedCategory(category)
  }
  const filteredProducts = groupedProducts[selectedCategory]?.items || []

  const scrollContainer = useRef(null);
  const scrollLeft = () => {scrollContainer.current.scrollBy({ left: -400, behavior: 'smooth' })}
  const scrollRight = () => {scrollContainer.current.scrollBy({ left: 400, behavior: 'smooth' })}

  return (
    <>
    <section className='bg-white/80  w-full mx-auto py-8 mt-[112px] relative' >
      <div className="" >
      <h2 className='freshlyGreenText text-[35px] text-center font-bold my-0'>Categories</h2>     
        <div className='text-green-700 font-bold flex justify-end'>
          <button onClick={scrollLeft} className='border-none text-green-600 text-[40.00px] font-extrabold bg-transparent cursor-pointer p-0 m-0 flex items-center'><RiArrowLeftSLine /></button>
          <button onClick={scrollRight} className='border-none text-green-600 text-[40.00px] font-extrabold bg-transparent cursor-pointer p-0 m-0 flex items-center'><RiArrowRightSLine /></button>
        </div>

        <div className='flex flex-nowrap justify-between items-center gap-6 overflow-x-auto scrollbar scrollbar-thumb-green-400 pl-3 sm:pl-0 pb-4'
        ref={scrollContainer}>
          {
            categories?.map(category => (
              <div
              key={category}
              onClick={() => handleCatClick(category)} className={`transition delay-200 ease-in-out min-w-[160.00px] h-[160.00px] flex flex-col justify-end items-center rounded-lg  hover:shadow-lg cursor-pointer ${groupedProducts[category].styles} ${selectedCategory === category ? ' shadow-md shadow-slate-600' : ''}`}>
            <img
              className='w-[152px]'
              src={groupedProducts[category].img}
              alt="Fresh fruits"
            />
            <p className='font-bold text-white capitalize'>{category}</p>
          </div>
            ))
          }
        </div>
      </div>
    <div className='border-b border-solid border-green-600 mt-12' />

    <h2 className='text-green-700 text-xl text-center font-bold my-0 py-8 capitalize'>{`fresh ${selectedCategory}`}</h2>
    <div>
      <div className={`flex flex-wrap justify-around sm:justify-between items-center px-2 gap-3`}>
        {
          filteredProducts?.map(({ id, img, title, name, price, quantity }) => (
            <div
              key={id}
              className='max-w-[160.00px] sm:min-w-[200.00px] h-[260.00px] sm:h-[284.00px] shadow-slate-200 bg-slate-50 shadow-md hover:shadow-lg rounded-lg flex flex-col items-center my-3'>     
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
    </>
  )
}

export default ProductsCategories