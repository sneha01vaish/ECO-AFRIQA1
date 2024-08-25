import React from 'react'
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className='mt-0 lg:mt-[100px] relative bg-green-500'>
       <div className='mt-[130px] lg:mt-[140px] h-[420px] lg:h-[600px]  overflow-hidden w-full'>
          <img src='/static/media/heroGIF.gif' className='grayscale object-cover h-full w-full  mb-0'/>
      </div>
      <div className='flex flex-col items-center'>
        
          <div className=" rounded-[12px] lg:rounded-[16px] bg-black/[28%] mx-[18px]  lg:mx-[28px] -mt-[250px] lg:-mt-[380px] z-10">
            <h1 className="text-white text-[16px] lg:text-[40px] font-suez font-[700] py-[8px] px-[10px] lg:px-[40px]">COMMITED ENVIRONMENTALISTS</h1>
        </div>
        
       <Link to="/Hero-Detail " className='absolute block  mx-[80px] -mt-[60px] lg:-mt-[180px]'>
          <button className=" bg-gray-300/[0.65] rounded-[8px] border-none text-black text-[22px] font-inter font-[900] py-[10px]  px-[30px] lg:px-[50px] mx-auto cursor-pointer">Learn More</button>
        </Link>
          
        </div>
        
      
       
      
      
      
    </div>
  )
}

export default Hero