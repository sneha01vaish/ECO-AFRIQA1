import React, { useState, useEffect, useRef } from 'react'
import { IoStarSharp } from "react-icons/io5";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import Products from './json/Products.json';
import Navbar from '../../../components/Nav/Navbar'
import axios from 'axios';
import Product from './Product';

// REPLACE **Products.json** FILE WITH FETCHED PRODUCTS FROM THE DATABASE
const productImages = {
  fruits: '/static/media/c-1.png',
  vegetables: '/static/media/c-2.png',
  legumes: '/static/media/c-3.png',
  spices: '/static/media/c-4.png',
}

const ProductsCategories = () => {
  
  const [products, setProducts ] = useState([]);
  const [csrfToken, setCsrfToken] = useState('');

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({})

  const categoryStyles = {
    fruits: 'bg-[#FF9E0C]/80 hover:bg-[#FF9E0C]',
    legumes: 'bg-[#AA2900]/80 hover:bg-[#AA2900]',
    vegetables: 'bg-[#008000]/80 hover:bg-[#008000]',
    spices: 'bg-[#FF0C1A]/80 hover:bg-[#FF0C1A]'
  }

  const groupedProducts = products?.reduce((acc, product) => {
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
  // const categories = Object.keys(groupedProducts)


  // const [categories, setCategories] = useState([])
  const handleCatClick = (category) => {
    setSelectedCategory(category)
    console.log("cat clicked", category)
  }
  // const filteredProducts = groupedProducts[selectedCategory]?.items || []

  const [filteredProducts, setFilteredProducts] = useState([]);

  const scrollContainer = useRef(null);
  const scrollLeft = () => {scrollContainer.current.scrollBy({ left: -400, behavior: 'smooth' })}
  const scrollRight = () => {scrollContainer.current.scrollBy({ left: 400, behavior: 'smooth' })}



useEffect(() => {
  // Fetch CSRF token from meta tag
  const token = document.querySelector('meta[name="csrf-token"]');
  if (token) {
    setCsrfToken(token.getAttribute('content'));
  }

  axios.get('http://localhost:8000/freshlyapp/products', {
    headers: {
      'X-CSRFToken': csrfToken
    },
    withCredentials: true
  })
  .then(response => {
    setProducts(response.data.results);
    console.log("Products Fetched from db", products)

  })
  .catch(error => {
    console.error('Error fetching Products:', error);
  });

}, [csrfToken]);

useEffect(() => {
  // Fetch CSRF token from meta tag
  const token = document.querySelector('meta[name="csrf-token"]');
  if (token) {
    setCsrfToken(token.getAttribute('content'));
  }

  axios.get('http://localhost:8000/freshlyapp/categories', {
    headers: {
      'X-CSRFToken': csrfToken
    },
    withCredentials: true
  })
  .then(response => {
    setCategories(response.data);
    console.log("Categories Fetched from db", categories)

  })
  .catch(error => {
    console.error('Error fetching Products:', error);
  });

}, [csrfToken]);


const filteredArray = products.filter((product) =>  product.name === selectedCategory.name);

console.log("Filtered Array", filteredArray)
useEffect(() => {
   
},[])
useEffect(() => {
  // if(!products){
  //   setProducts(Products)
  //   console.log("No Products in db")

  // }
  // console.log("Products fetched", products)
},[])
  
  return (
    <>
    <div className="flex justify-center">
      <section className='bg-white/80  mx-auto py-8 mt-[112px] relative' >
        <div className="" >
        <h2 className='freshlyGreenText text-[35px] text-center font-bold my-0'>Categories</h2>     
          <div className='text-green-700 font-bold flex justify-end'>
            <button onClick={scrollLeft} className='border-none text-green-600 text-[40.00px] font-extrabold bg-transparent cursor-pointer p-0 m-0 flex items-center'><RiArrowLeftSLine /></button>
            <button onClick={scrollRight} className='border-none text-green-600 text-[40.00px] font-extrabold bg-transparent cursor-pointer p-0 m-0 flex items-center'><RiArrowRightSLine /></button>
          </div>

          <div className='grid grid-cols-2 lg:flex justify-between items-center gap-6 overflow-x-auto scrollbar scrollbar-thumb-green-400 pl-3 sm:pl-0 pb-4'
          ref={scrollContainer}>
            {
              categories?.map(category => (
                <div
                key={category.id}
                onClick={() => handleCatClick(category)} className={`transition delay-200 ease-in-out min-w-[160.00px] h-[160.00px] flex flex-col justify-end items-center rounded-lg  hover:shadow-lg cursor-pointer ${selectedCategory === category.name ? ' shadow-md shadow-slate-600' : ''}`}>

              <img
                className='w-[152px]'
                src={productImages.fruits}
                alt="Fresh fruits"
              />
              <p className='font-bold text-white capitalize'>{category.name}</p>
            </div>              ))
            }
          </div>
        </div>
      <div className='border-b border-solid border-green-600 mt-12' />

      <h2 className='text-green-700 text-xl text-center font-bold my-0 py-8 capitalize'>{`fresh ${selectedCategory.name}`}</h2>
      <div>
      <div className="CardsGrid grid grid-cols-2 lg:grid-cols-4 gap-[20px] lg:gap-[60px] lg:mx-[40px]">
      {
          products
            .filter((product) => product.category === selectedCategory.id)
            .map((product) => (
           <Product img={product.image} title={product.title} name={product.name} price={product.price} quantity={product.quantity}/>
            ))
          }
        </div>
      </div>
      </section>
    </div>
    
    </>
  )
}

export default ProductsCategories