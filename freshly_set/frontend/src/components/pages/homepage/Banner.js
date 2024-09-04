import React from 'react'

function Banner() {
  return (
    <section id="promotion" className="hidden lg:flex relative h-[198.251px] lg:h-[570px] w-auto bg-gradient-to-t from-[#FF0C1A]   via-[#1A1A1A] via-[20%] to-[#1A1A1A]  pl-[14px] rounded-[29px] mx-[10px]  lg:mt-[67px]">
        
        <p className="block">
          <h3 className="text-[13.727px] lg:text-[40px] font-[800] font-inter text-[#F5FAF9] w-[292.3px] lg:w-[870px]"><span className="freshlyGreenText">15% OFF</span> ON ALL FARM PRODUCE TO THE FIRST 500 NEW USERS WHO <span className="text-red-600">SIGN UP</span>ON OUR WEBSITE</h3>
          <p className="text-[5.148px] lg:text-[15px] w-[112.888px] lg:w-[336px] text-white text-start font-josefin font-[600] leading-[6.692px] lg:leading-[19.5px] lg:ml-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
          <p className="text-[5.148px] lg:text-[15px] w-[112.888px] lg:w-[336px] text-white text-start font-josefin font-[600] leading-[6.692px] lg:leading-[19.5px] lg:ml-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>

        </p>

        <button className="absolute lg:bottom-[164px] lg:left-[433px] h-[48px] w-[236px] bg-[#008000] text-white rounded-[15px] text-[25px] font-inter font-[500] border-none cursor-pointer active:scale-90 transition-all duration-500 ease-out">Click Here</button>


        {/* <p className="text-[5.148px] lg:text-[15px] w-[112.888px] lg:w-[336px] text-white text-start font-josefin font-[600] leading-[6.692px] lg:leading-[19.5px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p> */}

        <div>
            <img className="absolute -bottom-[22px] lg:right-[180px] h-[128.761px] w-[145.814px] lg:h-[379px] lg:w-[434px] z-[11]" src="/static/media/banner1.png"  alt="BannerImg"/>
            <img className="absolute -bottom-[22px] lg:right-[180px] h-[59.778px] w-[85.318px] lg:h-[243.246px] lg:w-[266.767px] z-[10]" src="/static/media/banner5.png"  alt="BannerImg"/>
            <img className="absolute -bottom-[22px] lg:right-[40px] h-[59.778px] w-[85.318px] lg:h-[243.246px] lg:w-[266.767px] z-[10]" src="/static/media/banner6.png"  alt="BannerImg"/>



            <img className="absolute -top-[22px] lg:right-[50px] h-[85.57px] w-[93.066px] lg:h-[244px] lg:w-[277px] z-[10]" src="/static/media/banner2.png"  alt="BannerImg"/>
            <img className="absolute top-[152px] lg:right-[90px] h-[85.57px] w-[93.066px] lg:h-[244px] lg:w-[277px] z-[10]" src="/static/media/banner4.png"  alt="BannerImg"/>

            <img className="absolute top-[152px] lg:right-[0px] h-[85.57px] w-[93.066px] lg:h-[244px] lg:w-[277px] z-[10]" src="/static/media/banner3.png"  alt="BannerImg"/>
           
            <img className="absolute top-[152px] lg:right-[140px] h-[85.57px] w-[93.066px] lg:h-[244px] lg:w-[277px] z-[10]" src="/static/media/banner9.png"  alt="BannerImg"/>


        </div>
    </section>
  )
}

export default Banner