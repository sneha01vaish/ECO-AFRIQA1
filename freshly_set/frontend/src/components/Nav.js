import React, { useEffect, useState } from 'react'
import "./Nav.css"
import { IoMdMenu } from "react-icons/io";
import { Link } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";

function Nav() {

    const [scrolled, setScrolled ] = useState(false);

    const [activeTab, setActiveTab] = useState("home");

    const [open, setOpen] = useState(false);

    const showStar = () =>{
        if(window.scrollY>60){
            setScrolled(true)
        }
        else{
            setScrolled(false)   
        }
    }


    useEffect(function mount() {
       
        window.addEventListener('scroll', showStar);
    
        return function unMount() {
          window.removeEventListener("scroll", showStar);
        };
      });


      useEffect(() => {
        console.log("open", open)
      },[open])
  return (
    <div>
        {/* Large screen navbar */}

        <nav className="navbarBg">
            {/* Logo */}
            <img className={scrolled ? "navbarLogoScroll" : "navbarLogo"} src="/static/media/logo2.png" alt="NavLogo"/>

            {/* Nav Buttons */}

            <div className="navbarBtns">
                <Link onClick={() => setActiveTab("home")} style={{textDecoration:"none"}} to="/" className="navbarBtn">
                    <p className='navbarTxt text-red-400'>Home</p>
                    { activeTab === "home" ? (
                        <div className="navbarLine"/>

                    ):(<></>)} 
                </Link>

                <Link onClick={() => setActiveTab("about")} style={{textDecoration:"none"}} to="/about-us" className="navbarBtn">
                    <p className='navbarTxt'>About</p>
                    <div className="navbarLine"/>
                </Link>


                <div className="navbarBtn">
                    <p className='navbarTxt'>Blogs</p>
                    <div className="navbarLine"/>
                </div>

                <div className="navbarBtn ">
                    <p className='navbarTxt'>Signup</p>
                    <div className="navbarLine"/>
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

        <nav className={open ? "flex justify-center z-[50] lg:hidden bg-[#008000]  w-[100%] h-[100%] fixed top-0  ":"bg-white flex justify-between fixed top-0 w-[100%] lg:hidden items-center pl-[18px] z-[60]"}>
            <img className="h-[77px] w-[80px] object-cover" src="/static/media/logo2.png" alt="navLogo"/>
                        
                        <div className={!open ? "flex space-x-[33px]":"hidden"}>
                            <div className="block group">
                                <p className="text-[20px] font-[700] text-[#008000]">Home</p>
                                <div className="h-[5px] w-[70px] bg-[#008000] -mt-[15px] hidden group-hover:flex"/>
                            </div>

                            <div className="block group">
                                <p className="text-[20px] font-[700] text-[#008000]">Sign Up</p>
                                <div className="h-[5px] w-[70px] bg-[#008000] -mt-[15px] hidden group-hover:flex"/>
                            </div>
                        </div>
                        
            <div className="flex  justify-center">
                {!open ?(
                    <div className="">
                        
                        <IoMdMenu onClick={() => setOpen(true)}  className="text-black h-[37px] w-[44px] my-[42px] mr-[41px] "/>
                        
                    </div>

                ):(
                    <IoMdClose onClick={() => setOpen(false)} className="text-black h-[37px] w-[44px] absolute right-[32px] top-[32px] cursor-pointer"/>

                )}

            </div>
           

            {open  && (
               
                <div className="block mt-[50px] space-y-[22px] -ml-[20%]">
                    <div className="flex justify-center ">
                        <img className="h-[153px] w-[156px] rounded-full" src="/static/media/user_logo.png" alt="User Icon"/>
                    </div>

                    <p className="text-gray-200  text-center mb-[86px] text-[25px]">User 123456</p>

                <div className="rounded-[8px] bg-[#F5F5F5] py-[10px] px-[30px] ">
                    <p className="text-center">About Us</p>
                </div>

                <div className="rounded-[8px] bg-[#F5F5F5] py-[10px] px-[30px]">
                    <p className="text-center">Blog</p>
                </div>


                <div className="rounded-[8px] bg-[#F5F5F5] py-[10px] px-[30px]">
                    <p className="text-center">Sign Up</p>
                </div>

                <div className="rounded-[8px] bg-[#F5F5F5] py-[10px] px-[30px]">
                    <p className="text-center">Your Profile</p>
                </div>

                <div className="flex justify-center">
                    <div className="flex items-center space-x-[12px]">
                        <CiSettings className="text-white text-[47px]"/>
                        <p className="text-white text-[25px]">Settings</p>

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