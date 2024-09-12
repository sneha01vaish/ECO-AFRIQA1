import React from 'react'
import { useContext } from 'react'
import { MdNavigateBefore } from 'react-icons/md';
import { useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';
import { IoCheckmarkCircle } from 'react-icons/io5';
import { FaMinusCircle, FaPlusCircle, FaRegTrashAlt } from 'react-icons/fa';
import { CartContext, CartOpenContext } from '../../context/CartContext';
import Nav from '../../Nav/Navbar';

function CartPage() {
    const [cartOpen, setCartOpen] = useContext(CartOpenContext);

    const {cartItems, clearCart} = useContext(CartContext);


    useEffect(() => {

        console.log("Cart Open", cartItems)
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
                            <div className="relative flex justify-between items-center lg:px-[52.45px] lg:pt-[66px] lg:pb-[72px] rounded-[20px] shadow-lg">
                                    
                                <div className="flex lg:space-x-[49px]">
                                    <IoCheckmarkCircle className="freshlyGreenText text-[42.3px]" />
                                    
                                    <div className="bg-[#00AA5B]/[0.10] h-[142px] w-[133px]  inset-0 flex justify-center items-center">
                                        <img className="h-[83.75px] w-[102px] object-cover" src="/static/media/cartItem.png" alt="CartItem"/>

                                    </div>

                                    <div className="block">
                                        <h3 className="text-[21px] text-black font-[500]">{item.name}</h3>
                                        <h4 className="text-[#000000]/[56%] text-[15px]">Bunch</h4>

                                        <div className="flex items-center ">
                                            <FaPlusCircle className="freshlyGreenText text-[38px]" />
                                            <span className="text-[22.84px] text-black font-[700] lg:mx-[20px]">1</span>
                                            <FaMinusCircle className="freshlyGreenText text-[38px]" />

                                        </div>
                                    </div>
                                </div>


                                {/* Right side */}


                                <div className="block lg:ml-[325px]">
                                    <h3 className="text-[#000000]/[56%] text-[17.77px]">SubTotal</h3>
                                    <h4 className="text-[#FF0C1A] text-[16.92px]">KSH {item.price}</h4>
                                </div>
                                


                                <FaRegTrashAlt className="absolute bottom-[21.14px] right-[43.14px] freshlyGreenText text-[42px] cursor-pointer" />
                            </div>
                        ))
                    }
                    </div>
                  
                    
                    
                </div>
            </div> 
    </div>            
)
}

export default CartPage