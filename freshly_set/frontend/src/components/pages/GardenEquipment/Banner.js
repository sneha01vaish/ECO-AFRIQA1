import React from 'react'

function Banner() {
  return (
    <section id="promotion" className="hidden lg:flex  h-[198.251px] lg:h-[484px] w-auto bg-gradient-to-t from-[#008800]   via-[#12150D] via-[20%] to-[#130E0E]  pl-[14px] rounded-[29px] mx-[10px]  lg:mt-[67px]">
        
        <img className=" h-[197.43px] w-[195.86px] lg:h-[482px] lg:w-[589px] object-cover" src="/static/media/gardenEquipmentBanner.png" alt="Banenr Image"/>

        <div className="block">
            <h2 className="text-[30px] font-inter text-white font-[700]">USE FRESHLY PRODUCTS AND GET FREE WATERING EQUIPMENT FOR YOUR FARM</h2>

            <h3 className="text-[20px] text-[#00AA5B] text-center">Freshly Products</h3>
        </div>
    </section>
  )
}

export default Banner