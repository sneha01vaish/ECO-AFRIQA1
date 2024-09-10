import React, { useContext, useEffect, useState } from 'react'
import "./Nav.css"
import { IoIosNotifications, IoMdMenu } from "react-icons/io";
import { Link, NavLink } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import { FaChevronDown, FaChevronUp, FaUser, FaUsers } from "react-icons/fa";
import { CiSettings, CiGlobe } from "react-icons/ci";
import { PageContext } from '../context/PageContext';
import { TiShoppingCart } from "react-icons/ti";
import { CartContext, CartOpenContext } from '../context/CartContext';
import { FaRegCircleUser } from 'react-icons/fa6';

function Nav() {

    const [scrolled, setScrolled ] = useState(false);

    const [activeTab, setActiveTab] = useContext(PageContext);

    const [open, setOpen] = useState(false);

    const [authenticated, setAuthenticated] = useState(false);

    const [productsToggled, setProductsToggled] = useState(false);

    const { cartItems } = useContext(CartContext);

    const [cartOpen, setCartOpen] = useContext(CartOpenContext);


    const scrollNow = () =>{
        if(window.scrollY>60){
            setScrolled(true)
        }
        else{
            setScrolled(false)   
        }
    }


    useEffect(function mount() {
       
        window.addEventListener('scroll', scrollNow);
    
        return function unMount() {
          window.removeEventListener("scroll", scrollNow);
        };
      });


      useEffect(() => {
        console.log("open", open)
      },[open])
  return (
    <div>
        {/* Large screen navbar */}
<nav className="hidden lg:flex w-full fixed top-0 z-50 bg-gradient-to-r from-[#008000] to-[#001A00] via-[#001A00] via-[30%] py-[20px]">
  <div className="flex justify-between items-center w-full max-w-[1280px] px-8 mx-auto">
    {/* Logo */}
    <div className="">
      <img className={scrolled ? "navbarLogoScroll" : "navbarLogo"} src="/static/media/freshlyLogoWhite.png" alt="NavLogo"/>
    </div>

    {/* Nav Buttons */}
    <div className="flex space-x-6 items-center bg-[#D9D9D9]/[10%] backdrop-blur-[50%] rounded-[52px] px-8 py-2">
      <Link onClick={() => setActiveTab("home")} to="/" className="group">
        <p className="text-[19.25px] font-inter font-bold text-[#F5F5F5]">Home</p>
      </Link>
      <Link onClick={() => setActiveTab("about")} to="/about-us" className="group">
        <p className="text-[19.25px] font-inter font-bold text-[#F5F5F5]">About</p>
      </Link>
      <Link onClick={() => setActiveTab("blogs")} to="/blogs" className="group">
        <p className="text-[19.25px] font-inter font-bold text-[#F5F5F5]">Blogs</p>
      </Link>
      <Link onClick={() => setActiveTab("marketplace")} to="/marketplace" className="group">
        <p className="text-[19.25px] font-inter font-bold text-[#F5F5F5]">Market</p>
      </Link>

      <div className="flex items-center space-x-1 relative">
        <p className="text-[19.25px] font-inter font-bold text-[#F5F5F5]">Products</p>
        <FaChevronDown onClick={() => setProductsToggled(!productsToggled)} className={`text-white text-[30px] cursor-pointer ${productsToggled ? "rotate-180" : ""}`}/>
        <div className={`${productsToggled ? "block" : "hidden"} absolute bg-white rounded-[14px] top-[50px] left-0 shadow-lg w-[285px]`}>
          <Link to="/products/farmingSystems">
            <p className="hover:bg-[#008000] cursor-pointer text-start px-[20px] py-[12px] text-[22px] text-[#008000] hover:text-white">Farming Systems</p>
          </Link>
          <Link to="/products/gardenSetups">
            <p className="hover:bg-[#008000] cursor-pointer text-start px-[20px] py-[12px] text-[22px] text-[#008000] hover:text-white">Garden Setups</p>
          </Link>
        </div>
      </div>

      <div className="flex items-center space-x-1 relative">
        <p className="text-[19.25px] font-inter font-bold text-[#F5F5F5]">Services</p>
        <FaChevronDown className="text-white text-[30px] cursor-pointer"/>
        {/* Add dropdown logic here similar to Products */}
      </div>
    </div>

    {/* Icons */}
    <div className="flex space-x-6 items-center">
      <div className="relative">
        <TiShoppingCart onClick={() => setCartOpen(true)} className="text-white text-[39px] cursor-pointer"/>
        <div className="absolute -top-[10px] left-[30px] bg-[#f30024] h-[25px] w-[25px] rounded-full text-center text-white">{cartItems.length}</div>
      </div>
      <div className="relative">
        <IoIosNotifications className="text-white text-[39px]"/>
        <div className="absolute -top-[10px] left-[18px] bg-[#f30024] h-[25px] w-[25px] rounded-full text-center text-white">1</div>
      </div>
      <FaRegCircleUser className="text-[39px] text-white/[50%]" />
    </div>
  </div>
</nav>
        {/* Small screen Navbar */}
{/* 
        <nav className="navbarSmBg">
            <img src="/static/media/logo2.png"/>

            <div className="navbarSmBtns">
                <div className="navbarSmBtn">
                    <p className=''>Home</p>
                    <div className="navbarLine"/>
                </div>

                <div className="navbarSmBtn">
                    <p style={{marginLeft:"25px"}} className=''>Signup</p>
                    <div className="navbarLine"/>
                </div>

                {
                    !open ? (
                        <IoMdMenu onClick={() => setOpen(true)} style={{marginLeft:"25px"}}  className="menuIcon"/>

                    ):(
                        <IoMdClose className="menuIcon" style={{marginLeft:"25px"}}  onClick={() => setOpen(false)} />

                    )
                }
                
                <div className={open ? " flex justify-center  z-50  h-screen":"hidden"}>
                        <div className="block">
                            <li>Home</li>
                        </div>

                </div>


              
             </div>
        </nav>  */}

        <nav className={open ? "flex justify-center z-[50] lg:hidden bg-[#008000]/[85%]  w-[100%] h-[100%] fixed top-0  ":"bg-gradient-to-r from-[#008000] to-[#001A00] via-[#001A00] via-[30%] flex justify-between fixed top-0 w-[100%] lg:hidden items-center pl-[18px] z-[60]"}>
            <img className={!open ? "flex h-[77px] w-[80px] object-cover":"hidden"} src="/static/media/freshlyLogoWhite.png" alt="navLogo"/>
                        
                        <div className={!open ? "flex space-x-[33px]":"hidden"}>
                            <Link to="/" className="block group">
                                <p className="text-[20px] font-[700] text-white font-inter">Home</p>
                                <div className="h-[5px] w-[70px] bg-[#008000] -mt-[15px] hidden group-hover:flex"/>
                            </Link>

                            <div className="block group">
                                <p className="text-[20px] font-[700] text-white font-inter">Sign Up</p>
                                <div className="h-[5px] w-[70px] bg-[#008000] -mt-[15px] hidden group-hover:flex"/>
                            </div>
                        </div>
                        
            <div className="flex  justify-center">
                {!open &&(
                    <div className="">
                        
                        <IoMdMenu onClick={() => setOpen(true)}  className="text-white h-[37px] w-[44px] my-[42px] mr-[41px] "/>
                        
                    </div>

                )}

            </div>
           

            {open  && (
             
              <div className="block w-[100%] ">
                <div className="flex justify-between items-center  pt-[45px]  px-[31px] ">
                    <img className="h-[77px] w-[80px] bg-white object-cover rounded-[100%]" src="/static/media/logo2.png" alt="navLogo"/>
                    <IoMdClose onClick={() => setOpen(false)} className="text-white h-[77px] w-[80px] cursor-pointer"/>

                </div>
                <div className="flex justify-center">
                    <div className="block space-y-[40px] mt-[50px]">
                        <Link to="/about-us" className="flex space-x-[22px]  items-center ">
                            <FaUsers className="h-[54px] w-[64px] text-white"/>
                            <p className="text-white text-[25px] font-[700] font-inter">About Us</p>
                        </Link>

                        <Link to="/blogs" className="flex space-x-[22px]  items-center">
                            <CiGlobe className="h-[54px] w-[64px] text-white"/>
                            <p className="text-white text-[25px] font-[700] font-inter">Blog</p>
                        </Link>

                        <Link to="/signup" onClick={() => setActiveTab("signUp")} className="flex space-x-[22px]  items-center">
                            <FaUsers className="h-[54px] w-[64px] text-white"/>
                            <p className="text-white text-[25px] font-[700] font-inter">Sign Up</p>
                        </Link>

                        <Link className="flex space-x-[22px]  items-center">
                            <FaUser className="h-[54px] w-[64px] text-white"/>
                            <p className="text-white text-[25px] font-[700] font-inter">Your Profile</p>
                        </Link>

                        <div className="flex space-x-[22px]  items-center">
                            <CiSettings className="h-[54px] w-[64px] text-white"/>
                            <p className="text-white text-[25px] font-[700] font-inter">Settings</p>
                        </div>
                    </div>
                    
                </div>  
                
                






              </div>
                


            // <div className="flex justify-center mt-[60px] bg-red-400 w-[100%] -ml-[20%]">
            //         <h1>Hello world</h1>
            // </div>
            )}
        </nav>
    </div>
  )
}

export default Nav