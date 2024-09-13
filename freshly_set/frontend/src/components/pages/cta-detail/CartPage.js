import React, { useState } from 'react'
import { useContext } from 'react'
import { MdNavigateBefore } from 'react-icons/md';
import { useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';
import { IoCheckmarkCircle } from 'react-icons/io5';
import { FaMinusCircle, FaPlusCircle, FaRegTrashAlt } from 'react-icons/fa';
import { CartContext, CartOpenContext } from '../../context/CartContext';
import Nav from '../../Nav/Navbar';
import { Link } from 'react-router-dom';

function CartPage() {
    const [cartOpen, setCartOpen] = useContext(CartOpenContext);

    const { addToCart, increaseQuantity, decreaseQuantity, cartItems, clearCart, removeFromCart, totalPrice } = useContext(CartContext);
    const [productId, setProductId] = useState(0);

    const [delivery, setDelivery] = useState(200);

    // const itemInCart = cartItems.find(item => item.id === productId);

    useEffect(() => {

        console.log("Cart Open", totalPrice)
},[cartOpen])
  return (
    <div>
        <Nav />

        <div className=" z-[100]  border border-gray-700 shadow-lg  flex  justify-center bg-white ">
                
                <div className="block mt-[150px]">
                    <h1 className="text-[38px] freshlyGreenText font-[700] text-center">My Cart</h1>


                    {/* CartItems */}
                    <div className="block space-y-[36.38px] overflow-y-scroll">
                    {
                        cartItems.map((item) => (
                            <div className="relative flex justify-between items-center lg:px-[52.45px] lg:pt-[66px] lg:pb-[72px] rounded-[20px] shadow-lg mx-5 my-5">
                                    
                                <div className="flex lg:space-x-[49px]">
                                    <IoCheckmarkCircle className="freshlyGreenText text-[42.3px]" />
                                    
                                    <div className="bg-[#00AA5B]/[0.10] h-[142px] w-[133px]  inset-0 flex justify-center items-center">
                                        <img className="h-[83.75px] w-[102px] object-cover" src={`${process.env.REACT_APP_API_HOST}/${item.img}`} alt="CartItem"/>

                                    </div>

                                    <div className="block">
                                        <h3 className="text-[21px] text-black font-[500]">{item.name}</h3>
                                        <h4 className="text-[#000000]/[56%] text-[15px]">Bunch</h4>

                                        <div className="flex items-center ">
                                            <FaPlusCircle onClick={() => increaseQuantity(item.id)} className="freshlyGreenText text-[38px]" />
                                            <span className="text-[22.84px] text-black font-[700] lg:mx-[20px]">{item.qtty}</span>
                                            <FaMinusCircle  onClick={() => decreaseQuantity(item.id)} className="freshlyGreenText text-[38px]" />

                                        </div>
                                    </div>
                                </div>


                                {/* Right side */}


                                <div className="block lg:ml-[325px]">
                                    <h3 className="text-[#000000]/[56%] text-[17.77px]">SubTotal</h3>
                                    <h4 className="text-[#FF0C1A] text-[16.92px]">KSH {parseFloat(item.price * item.qtty).toFixed(2)}</h4>
                                </div>
                                


                                <FaRegTrashAlt onClick={() => removeFromCart(item.id)} className="absolute bottom-[21.14px] right-[43.14px] freshlyGreenText text-[42px] cursor-pointer" />
                            </div>
                        ))
                    }
                    </div>
                  
                    <div className="flex justify-between">
                        <div className="block">
                            <div className="flex lg:space-x-[95px]">
                                <h3 className="text-[25px] text-[#000000]/[0.75] font-semibold font-inter">SubTotal</h3>
                                <h3 className="text-[25px] text-[#FF0C1A]/[0.75] font-[700] font-inter">Ksh {totalPrice.toFixed(2)}</h3>

                            </div>

                            <div className="flex lg:space-x-[95px]">
                                <h3 className="text-[25px] text-[#000000]/[0.75] font-semibold font-inter">Delivery</h3>
                                <h3 className="text-[25px] text-[#FF0C1A]/[0.75] font-[700] font-inter">Ksh {delivery}</h3>

                            </div>

                            {/* <div className="flex lg:space-x-[95px]">
                                <h3 className="text-[25px] text-[#000000]/[0.75] font-semibold font-inter">Total</h3>
                                <h3 className="text-[25px] text-[#FF0C1A]/[0.75] font-[700] font-inter">Ksh {totalPrice.toFixed(2)}</h3>

                            </div> */}
                        </div>

                        {/* Right Side */}

                        <div>
                            <Link to="/checkout">
                                <button className="bg-[#008000] text-[20.97px] text-white rounded-[10.48px] font-inter font-[600] px-[54.12px] py-[22.36px] cursor-pointer">CHECKOUT</button>
                            </Link>
                        </div>
                    </div>
                    
                    
                </div>
            </div> 
    </div>            
)
}

export default CartPage