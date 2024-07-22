import React from 'react'

function JoinUs() {
  return (
    <div className="block lg:flex justify-between lg:mt-[143px] lg:ml-[70px] lg:mr-[44px] rounded-[40px] bg-[#ECECEC]">

        {/* Left side */}
      <div className=" lg:flex ">
        <div className='relative lg:mt-[13px]'>
           <img className="lg:h-[214px] lg:w-[269px]  lg:left-[51px] lg:mb-[110px] absolute z-20 top-[13px]" src="/static/media/joinUs.png" alt="Join Us" />
          <div className='lg:w-[400.5px] lg:h-[252.5px] lg:top-[96px] lg:left-[4px] relative z-10 mt-[9px]'>
            <svg  xmlns="http://www.w3.org/2000/svg" width="459" height="200" viewBox="0 0 459 200" fill="none">
              <path d="M239.137 71.0308C265.649 132.765 563.466 90.2582 418.466 152.529C273.466 214.8 134.428 215.235 107.915 153.501C81.4033 91.7663 -85.7892 94.302 59.211 32.0309C204.211 -30.2402 212.625 9.29618 239.137 71.0308Z" fill="#008000"/>
            </svg>
          </div>
        </div>
      </div>


        {/* Right Side - Join Us */}

      <div className=" block lg:ml-[114.4px]">
          {/* Title */}
          <div className='lg:mr-[306px] block '>
            <p className='font-inter font-[900] text-[#008000] text-[40px] lg:py-[10px] lg:mt-[25px] lg:mb-[15px]'>Join Us Today</p>
          </div>
          {/* Contents */}
          <div className='lg:w-[399px]'>
            <p className='font-inter font-[600] text-black text-[17px] mt-0'>We invite you to join us on our journey to transform the food industry. Whether you're a consumer seeking sustainable and nutritious food options or a partner interested in collaborating with us, we welcome you.</p>
          </div>
          {/* Button - Talk to Us */}
          <div className='lg:mb-[34px] lg:w-[242px] lg:h-[67] rounded-[20px] bg-[#008000]'>
            <p className='font-inter font-[800] text-[#FFF] text-[23px] lg:pt-[20px] lg:px-[53px] lg:pb-[19px]'>TALK TO US</p>
          </div>
        </div>
          
    </div> 
    
  )
}

export default JoinUs