import React from 'react'

function Hero() {
  return (
    <div className="mt-[130px] relative h-[415px] lg:h-[495px] w-[100%] bg-hero-about grayscale bg-cover bg-no-repeat mix-blend-luminosity ">
        

        <div className="absolute top-[161px] lg:top-[177px] z-[25] lg:left-[25%] lg:h-[106px]  lg:w:[946px] rounded-[16px] bg-black/[28%] px-[14px]  pt-[5px] lg:px-[28px] lg:pt-[20px]">
            <h1 className="text-white text-[20px] lg:text-[30px] font-suez font-[700] whitespace-nowrap">COMMITED ENVIRONMENTALISTS</h1>
        </div>

        <button className="absolute bottom-[16px] lg:bottom-[66px] right-[95px] lg:right-[40%] mx-auto w-[227px] lg:w-[344px] h-[53px] lg:h-[74px] bg-gray-300/[0.65] rounded-[15px] border-none text-black text-[30px] font-inter font-[900]">Learn More</button>

    </div>
  )
}

export default Hero