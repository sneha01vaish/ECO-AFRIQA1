import React, { useEffect, useState } from 'react'
import { FaCaretDown, FaLongArrowAltRight, FaStar } from 'react-icons/fa'

function FarmCard({  img, title, body, rating, number}) {
    const [clicked, setClicked] = useState({
        1: true,  // Question 1 is open by default
        2: true, // Question 2 is closed by default
        3: true,
        4: true
      });
    
      const toggleCard = (id) => {
        setClicked((prevState) => ({
          ...prevState,
          [id]: !prevState[id],
        }));
      };
      
    useEffect(() => {
        console.log("clicked", clicked)
    },[clicked])
  return (
    <div className="flex justify-center items-center w-[373px] shadow-2xl rounded-[24px]"> 
       
       <div className="block">
          <div>
            <img className="w-[373.07px] h-[200px] object-cover rounded-t-[24px]" src={img}/>
          </div>
          
          <div className="flex items-center px-[20px]">
            <p className="freshlyGreenText font-inter font-[700]">In Stock</p>

            <div className="flex space-x-[8px] ml-[20px]">
              <FaStar className="freshlyGreenText text-[25px]"/>
              <FaStar className="freshlyGreenText text-[25px]"/>
              <FaStar className="freshlyGreenText text-[25px]"/>
              <FaStar className="freshlyGreenText text-[25px]"/>
              <FaStar className="freshlyGreenText text-[25px]"/>
              <FaStar className="freshlyGreenText text-[25px]"/>

            </div>
          </div>


          <div className="">
            {/* Text */}
            <h2 className="text-black text-[32px] font-inter font-[700] text-start mt-0 ml-[20px]">{title}</h2>

            <p className="max-w-[350px]  ml-[20px]  font-josefin text-[15px] font-[600] leading-[32.5px] text-[#525560] lg:w-[498px] text-start">{body}</p>

            <p className="max-w-[350px]  ml-[20px] font-josefin text-[15px] font-[600] leading-[32.5px] text-[#525560] lg:w-[498px] text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>

          </div>
          <div className="flex justify-between items-center lg:mx-[30px]">
              <div className="flex space-x-[15px] items-center">
                <p className="text-[20px] freshlyGreenText cursor-pointer">Read More</p>
                  <FaLongArrowAltRight className="freshlyGreenText cursor-pointer" />
              </div>

             <img className="h-[40px] w-[40px] cursor-pointer" src="/static/media/docLogo.png" alt="DocLogo"/>
           </div>
       </div>

    
        
     </div>
  )
}

export default FarmCard