import React, { useEffect, useState } from 'react'
import { FaCaretDown } from "react-icons/fa6";

function Faq() {

    const [clicked, setClicked] = useState({
        1: true,  // Question 1 is open by default
        2: true, // Question 2 is closed by default
        3:true,
        4:false
      });
    
      const toggleFAQ = (id) => {
        setClicked((prevState) => ({
          ...prevState,
          [id]: !prevState[id],
        }));
      };
      
    useEffect(() => {
        console.log("clicked", clicked)
    },[clicked])
  return (
    <div className=" block lg:flex justify-between lg:pl-[34px] lg:pr-[29px] lg:py-[50px] mt-[75px] lg:mt-[200px]  lg:mx-[30px] rounded-[23px] border-solid border-[1px] border-gray-400/[0.25] shadow-lg">

        {/* Left side */}
        <div className="hidden lg:flex">
            <img className="lg:h-[989px] lg:w-[473px]" src="/static/media/faq_large.png" alt="faq_large"/>
        </div>


        {/* Right Side */}

          <div className="lg:w-[60%] block px-4">
              <div className='block  mt-[20px] lg:mt-0 mx-[29px] lg:mx-0'>
                <p className=" text-[29px]  lg:text-[45px]   lg:text-start font-[700] font-inter  text-[#008000] mb-[10px] lg:mb-0">Frequently Asked Questions</p>
                <p className="text-black/[0.62] font-[500] text-[17px] lg:text-[22px]  font-inter mt-0 lg:mx-0  mb-[29px] ">Questions You might ask about our products or services</p>

              </div>
           
            {/* Cards */}


            {/* Card 1*/}
        <div className="block space-y-[29px] lg:space-y-[63px]">
            <div className="mx-1 lg:mx-0 rounded-[21px] border-solid border-[1px] border-black/[0.25] pl-[22px] mb-4 shadow-lg">
                <p className="text-black font-inter -ml-[10px] lg:ml-0 text-[12px] lg:text-[22px] font-[700] ">What Is Vertical Farming?</p>
                <div className="flex justify-between items-center align-top">
                    <p className={clicked[1] ? "text-black/[0.62] -ml-[8px] lg:ml-0 -mt-[10px] lg:-mt-[16px] font-josefin flex text-[9px] lg:text-[16px]" : "hidden"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco la
                    </p>
                    <div className="flex justify-end w-[100%]">
                    <FaCaretDown 
                        onClick={() => toggleFAQ(1)} 
                        className={`text-black h-[30px] lg:h-[52px] w-[20.8px] lg:w-[55px] -mt-[40px] mr-[14px] cursor-pointer transition-all duration-300 ease-in-out ${clicked[1] ? "rotate-180" : ""}`}
                    />
                    </div>
                </div>
            </div>


        {/* Card 2*/}
        <div className="mx-1 lg:mx-0  rounded-[21px] border-solid border-[1px] border-black/[0.25] pl-[22px] mb-4 shadow-lg">
                <p className="text-black font-inter -ml-[10px] lg:ml-0 text-[12px] lg:text-[22px] font-[700]">What Is Urban Farming?</p>
                <div className="flex justify-between items-center align-top">
                    <p className={clicked[2] ? "text-black/[0.62] -ml-[8px] lg:ml-0 -mt-[10px] lg:-mt-[16px] font-josefin flex text-[9px] lg:text-[16px]" : "hidden"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco la
                    </p>
                    <div className="flex justify-end w-[100%]">
                    <FaCaretDown 
                        onClick={() => toggleFAQ(2)} 
                        className={`text-black h-[30px] lg:h-[52px] w-[20.8px] lg:w-[55px] -mt-[40px] mr-[14px] cursor-pointer transition-all duration-300 ease-in-out ${clicked[2] ? "rotate-180" : ""}`}
                    />
                    </div>
                </div>
            </div>
        {/*  */}



    {/* Card 3*/}
    <div className="mx-1 lg:mx-0  rounded-[21px] border-solid border-[1px] border-black/[0.25] pl-[22px] mb-[61px] shadow-lg">
                <p className="text-black font-inter -ml-[10px] lg:ml-0 text-[12px] lg:text-[22px] font-[700]">Do You Work With Limited Spaces?</p>
                <div className="flex justify-between items-center align-top">
                    <p className={clicked[3] ? "text-black/[0.62] -ml-[8px] lg:ml-0 -mt-[10px] lg:-mt-[16px] font-josefin flex text-[9px] lg:text-[16px] " : "hidden"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco la
                    </p>
                    <div className="flex justify-end w-[100%] ">
                    <FaCaretDown 
                        onClick={() => toggleFAQ(3)} 
                        className={`text-black h-[30px] lg:h-[52px] w-[20.8px] lg:w-[55px] -mt-[40px] mr-[14px] lg:mr-[17px]  cursor-pointer transition-all duration-300 ease-in-out ${clicked[3] ? "rotate-180" : ""}`}
                    />
                    </div>
                </div>
            </div>
        {/*  */}
        </div>




     

            <div className="flex justify-center my-5">
                <button className="h-[48px] lg:h-[70px] w-[236px] lg:w-[272px] bg-[#008000] text-white rounded-[15px] mt-5 text-[22px] lg:text-[25px] font-[700]">Read More</button>
              </div>


       
        </div>
    </div>
  )
}

export default Faq