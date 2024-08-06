import React, { useEffect, useState } from 'react'
import { FaCaretDown, FaStar } from 'react-icons/fa'

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
    <div className="flex relative  w-[344px] lg:w-[673px] bg-[#00AA5B1A]/[0.10] rounded-[24px] py-[32px] px-[31px]"> 
        {/* Left side */}
        <div className="">
            <img className="h-[134.734px] w-[92.634px] lg:h-[200.465px] lg:w-[153.267px]" src={img} alt="CardImg"/>
        </div>

        {/* Right Side */}

        <div className="ml-[31px] block lg:-mt-[20px]">
            <h4 className="font-inter text-[12px] font-[900] lg:text-[20px] lg:font-[900] -mt-[0px] ">{title}</h4>
            <p className={clicked[number] === true ? "flex mt-[14px] text-[10px] lg:text-[16px] font-[600] text-start w-[131.875px] lg:w-[258px] lg:leading-[20.8px] leading-[13px] font-josefin":"hidden"}>{body}</p>
           
            <div className="flex justify-between items-center">
                <p className="text-[#008000] font-inter text-[12px] lg:text-[18px] font-[900] text-start whitespace-nowrap">In Stock</p>
                <div className="flex lg:space-x-[10px] ml-[90px] lg:ml-[251px]">
                    <FaStar className="text-[#008000] text-[18px]"/>
                    <FaStar className="text-[#008000] text-[18px]"/>
                    <FaStar className="text-[#008000] text-[18px]"/>
                    <FaStar className="text-[#008000] text-[18px]"/>
                    <FaStar className="text-[#008000] text-[18px]"/>


                </div>
            </div>  
        </div>

        <FaCaretDown 
                        onClick={() => toggleCard(number)} 
                        className={`text-black h-[30px] lg:h-[52px] w-[20.8px] lg:w-[55px]  mr-[14px] lg:mr-[17px]  cursor-pointer transition-all duration-300 ease-in-out ${clicked[number] ? "rotate-180" : ""}`}
                    />
        
     </div>
  )
}

export default FarmCard