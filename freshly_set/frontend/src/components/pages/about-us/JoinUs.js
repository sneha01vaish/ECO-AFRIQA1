import React from 'react'

function JoinUs() {
  return (
    <div className="block lg:flex justify-between mt-[84px] lg:mt-[143px] mx-[49px] lg:ml-[70px] lg:mr-[44px] rounded-[40px] bg-[#ECECEC]">

        {/* Left side */}
      <div className=" lg:flex ">
        <div className='relative lg:mt-[13px]'>
           <img className="h-[123.5] lg:h-[214px] w-[164px] lg:w-[269px]  left-[53.5px] lg:left-[51px] lg:mb-[110px] absolute z-20 top-[13px]" src="/static/media/joinUs.png" alt="Join Us" />
          <div className='top-[50px] lg:top-[96px] left-[23px] lg:left-[4px] relative z-10 mt-[9px] pr-[23px]'>
            <svg className='w-[242.1px] lg:w-[400.5px] h-[147px] lg:h-[252.5px]' xmlns="http://www.w3.org/2000/svg" width="459" height="200" viewBox="0 0 459 200" fill="none">
              <path d="M239.137 71.0308C265.649 132.765 563.466 90.2582 418.466 152.529C273.466 214.8 134.428 215.235 107.915 153.501C81.4033 91.7663 -85.7892 94.302 59.211 32.0309C204.211 -30.2402 212.625 9.29618 239.137 71.0308Z" fill="#008000"/>
            </svg>
          </div>
        </div>
      </div>


        {/* Right Side - Join Us */}

      <div className=" lg:block lg:ml-[114.4px] box">
          {/* Title */}
          <div className='lg:mr-[306px] lg:block  box'>
            <p className='box  w-[260px] font-inter font-[900] text-[#008000] text-[30px] lg:text-[40px] pl-[53px] lg:py-[10px] lg:mt-[25px] lg:mb-[15px]'>Join Us Today</p>
          </div>
          {/* Contents */}
          <div className='lg:w-[399px] pl-[53px] pr-[24px]'>
            <p className=' font-inter font-[600] text-black text-[12px] lg:text-[17px] mt-0 mb-[63px]'>We invite you to join us on our journey to transform the food industry. Whether you're a consumer seeking sustainable and nutritious food options or a partner interested in collaborating with us, we welcome you.</p>
          </div>
          {/* Button - Talk to Us */}
          <div className='pl-[53px] pr-[24px] block mb-[29px] lg:mb-[34px] w-[236px] lg:w-[242px] h-[48px] lg:h-[67] rounded-[15px] lg:rounded-[20px] bg-[#008000]'>
            <p className='font-inter font-[800] text-[#FFF] text-[22px] lg:text-[23px] pl-[53px] lg:pt-[20px] pt-[3px] lg:px-[53px] lg:pb-[19px]'>TALK TO US</p>
          </div>
      </div>
          
    </div> 
    
  )
}

export default JoinUs