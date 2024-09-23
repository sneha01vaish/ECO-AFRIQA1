import React, { useEffect, useState } from 'react'
import { FaCaretDown } from "react-icons/fa6";

function FaqDetailCard({ id,faq,description }) {
    const [clicked, setClicked] = useState(true);
    
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
        <div className="FaqDetailcard">
        {/* A Green Line */}
        <div className=' border-solid border-[2px] mt-[25px] lg:mt-[50px] lg:border-[5px] border-[#008000]' />
        
        <div className="CardContent  rounded-[10px] mt-[25px] lg:mt-[50px] lg:rounded-[21px] border-solid border-[1px] border-black/[0.25] pl-[22px] shadow-lg">
            <p className="text-black font-inter -ml-[10px] lg:ml-0 text-justify text-[12px] lg:text-[22px] mt-[12px] font-[700]">{faq} </p>
            <div className="flex justify-between ">
                <p className={clicked[id] ? "hidden": "text-black/[0.62] w-[500%] -ml-[8px] lg:ml-0 -mt-[10px] lg:-mt-[16px] font-josefin flex text-[10px] lg:text-[20px] text-justify"}>{description} </p>
                <div className="flex justify-end w-[100%]">
                    <FaCaretDown  onClick={() => toggleFAQ(id)} className={`text-black h-[30px] lg:h-[52px] w-[20.8px] lg:w-[55px] -mt-[35px] lg:-mt-[59px] mr-[14px] cursor-pointer transition-all duration-300 ease-in-out ${clicked[id] ? "rotate-180" : ""}`} />
                </div>
            </div>
        </div>
        </div> // FaqDetailCard
    )
}

export default FaqDetailCard