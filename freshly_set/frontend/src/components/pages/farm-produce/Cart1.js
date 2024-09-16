// import React, { useContext, useState } from 'react'
// import { BsPlusCircleFill } from "react-icons/bs";
// import { MdCheckCircle } from "react-icons/md";
// import { FaRegTrashCan } from "react-icons/fa6";
// import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
// import { FaOpencart } from "react-icons/fa";
// import Products from "./json/Products.json"
// import { CartContext } from '../../context/CartContext';

// const Cart = () => {
//     const [cartItems, setCartItems] = useState(Products);
//     const { isCartOpen, closeCart } = useContext(CartContext)
    
//     if (!isCartOpen) return null

//   return (
//     <section className="font-inter max-w-[90%] mx-auto">
//         <div>
//             <h1 className="capitalize text-2xl text-green-600 text-center">
//                 your cart
//             </h1>
//             <p className='flex text-2xl justify-end gap-3'>
//                 <span className='text-green-600'>
//                     <BsPlusCircleFill />
//                 </span>
//                 <span className='capitalize text-xl text-green-600 '>
//                     add more items
//                 </span>
//             </p>
//             <div className="my-2">
//                 { cartItems?
//                     cartItems.slice(0, 4).map(({ id, quantity, name, price, img}) => (
//                         <div
//                             key={id}
//                             className='flex justify-between border border-solid border-slate-200 shadow items-center rounded-md px-6 pt-6 pb-2 my-2'>
//                             <div className='flex gap-6 items-center'>
//                                 <p className='text-green-600 text-3xl'>
//                                 <MdCheckCircle />
//                                 </p>
//                                 <div className="w-[80px] h-[80px] bg-green-200 rounded-md flex items-center  shadow-sm shadow-slate-500">
//                                     <img
//                                         src={img}
//                                         className='w-full object-contain'
//                                     />
//                                 </div>
//                                 <div className='w-[80px] flex flex-col items-start h-[80px] justify-between'>
//                                     <p className='m-0 capitalize font-bold text-slate-800'>{name}</p>
//                                     <p className='m-0 text-[10px] capitalize'>{quantity}</p>
//                                     <div className='flex justify-between items-center text-3xl gap-2'>
//                                         <div className='text-green-600 border-0 text-3xl cursor-pointer'><AiFillPlusCircle /></div>
//                                         <p className='text-sm font-bold my-0'>1</p>

//                                         <div className='text-green-600 border-0 text-3xl cursor-pointer'><AiFillMinusCircle /></div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="flex gap-3">
//                                 <div className="h-[80px] w-[80px]">
//                                     <span className="block font-bold text-[12px] text-slate-500">SubTotal</span>
//                                     <span className="block text-red-500 font-bold capitalize">{price}</span>
//                                 </div>
//                                 <div className="h-[80px] flex items-end">
//                                     <FaRegTrashCan className='text-3xl text-green-600 m-0 cursor-pointer hover:text-red-500'/>
//                                 </div>
//                             </div>
//                         </div>
//                     ))
//                     : 
//                     <div>
//                         <p className="text-2xl text-green-700 m-0">Your cart is empty!</p>
//                         <p className="text-center m-0">
//                             <FaOpencart className="text-green-600 text-4xl"/>
//                         </p>
//                     </div>
//                 }
//             </div>
//         </div>
//     </section>
//   )
// import React, { useContext } from 'react'
// import { CartContext, CartOpenContext } from '../../context/CartContext';
// import { MdNavigateBefore } from 'react-icons/md';
// import { useEffect } from 'react';
// import { IoMdClose } from 'react-icons/io';
// import { IoCheckmarkCircle } from 'react-icons/io5';
// import Nav from '../../Nav/Navbar';
// import { FaMinusCircle, FaPlusCircle, FaRegTrashAlt } from 'react-icons/fa';

// function Cart() {
//     const [cartOpen, setCartOpen] = useContext(CartOpenContext);

//     const {cartItems, clearCart} = useContext(CartContext);


//     useEffect(() => {

//         console.log("Cart Open", cartItems)
// },[cartOpen])
//   return (
//     <div className="">
//         <Nav />
//     {cartOpen && (

//             <div 
//                 className="fixed inset-0 z-[100] border border-gray-700 shadow-lg  flex  justify-center bg-black/50 items-center transition-opacity duration-300 ease-in-out"
//             >   

//             <IoMdClose onClick={() => setCartOpen(false)} className="absolute top-0 right-[30px] text-black h-[38px] w-[38px] z-[101] cursor-pointer"/>      



           

//             <div className="fixed inset-0 z-[100]  border border-gray-700 shadow-lg  flex  justify-center bg-white ">
                
//                 <div className="block">
//                     <h1 className="text-[38px] freshlyGreenText font-[700] text-center">My Cart</h1>


//                     {/* CartItems */}
//                     <div className="block space-y-[36.38px] overflow-y-scroll">
//                     {
//                         cartItems.map((item) => (
//                             <div className="relative flex justify-between items-center lg:px-[52.45px] lg:pt-[66px] lg:pb-[72px] rounded-[20px] shadow-lg">
                                    
//                                 <div className="flex lg:space-x-[49px]">
//                                     <IoCheckmarkCircle className="freshlyGreenText text-[42.3px]" />
                                    
//                                     <div className="bg-[#00AA5B]/[0.10] h-[142px] w-[133px]  inset-0 flex justify-center items-center">
//                                         <img className="h-[83.75px] w-[102px] object-cover" src="/static/media/cartItem.png" alt="CartItem"/>

//                                     </div>

//                                     <div className="block">
//                                         <h3 className="text-[21px] text-black font-[500]">{item.name}</h3>
//                                         <h4 className="text-[#000000]/[56%] text-[15px]">Bunch</h4>

//                                         <div className="flex items-center ">
//                                             <FaPlusCircle className="freshlyGreenText text-[38px]" />
//                                             <span className="text-[22.84px] text-black font-[700] lg:mx-[20px]">1</span>
//                                             <FaMinusCircle className="freshlyGreenText text-[38px]" />

//                                         </div>
//                                     </div>
//                                 </div>


//                                 {/* Right side */}


//                                 <div className="block lg:ml-[325px]">
//                                     <h3 className="text-[#000000]/[56%] text-[17.77px]">SubTotal</h3>
//                                     <h4 className="text-[#FF0C1A] text-[16.92px]">KSH {item.price}</h4>
//                                 </div>
                                


//                                 <FaRegTrashAlt className="absolute bottom-[21.14px] right-[43.14px] freshlyGreenText text-[42px] cursor-pointer" />
//                             </div>
//                         ))
//                     }
//                     </div>
                  
                    
                    
//                 </div>
//             </div>

              
           
          
//         </div>
//     )}
// </div>
// )
// }

// export default Cart