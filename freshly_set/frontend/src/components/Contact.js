import React from 'react'
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

function Contact() {
  return (
    <div className="flex w-[100%] justify-between ">

        {/* Left Side */}

        <div className="mt-[132px] ml-[40px] block space-y-[29px]">

            <div className="flex space-x-[256px]">

                <div className="block">
                    <IoMdMail className="h-[49px] w-[45px] text-black"/>
                    <p className="text-[32px] font-[700] -mt-[5px] font-inter">Email</p>
                    <p className="text-[22px] font-[400] text-[#525560] -mt-[26px] font-josefin">info.freshlyfarms</p>
                </div>


                <div className="block">
                    <IoMdMail className="h-[49px] w-[45px] text-black"/>
                    <p className="text-[32px] font-[700] -mt-[5px] font-inter">Email</p>
                    <p className="text-[22px] font-[400] text-[#525560] -mt-[26px] font-josefin">info.freshlyfarms</p>
                </div>
            </div>

            <div className="flex space-x-[256px]">

                <div className="block">
                    <IoMdMail className="h-[49px] w-[45px] text-black"/>
                    <p className="text-[32px] font-[700] -mt-[5px] font-inter">Email</p>
                    <p className="text-[22px] font-[400] text-[#525560] -mt-[26px] font-josefin">info.freshlyfarms</p>
                </div>


                <div className="block">
                    <IoMdMail className="h-[49px] w-[45px] text-black"/>
                    <p className="text-[32px] font-[700] -mt-[5px] font-inter">Email</p>
                    <p className="text-[22px] font-[400] text-[#525560] -mt-[26px] font-josefin">info.freshlyfarms</p>
                </div>
            </div>

            

        </div>
        {/* Right Side */}
        <div className="block mt-[94px] mr-[84px] ml-[104px] ">
            <p className="text-[22px] text-black font-[700]">Email</p>
            <input className="w-[474px] h-[46px] py-[10px] px-[14px] rounded-[8px] border-solid border-[1px] border-[#D5DAE1] focus:outline-none" placeholder='john@gmail.com'/>

            <p className="font-inter text-[16px] font-[500] text-[#333F51]">Message</p>

            <textarea className='h-[220px] w-[474px]' placeholder="Your Message..." />
        </div>
    </div>
  )
}

export default Contact