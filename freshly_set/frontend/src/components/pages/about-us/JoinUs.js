import React from "react";

function JoinUs() {
  return (

    <div className="JoinUS-section mx-10 mt-[62px] rounded-[40px] bg-[#ECECEC] ">
      <div className="Allignment-Div block lg:flex w-[100%] justify-between "> {/* The Allignment stylings class */}

            {/*Left Side - Farmers Stacked */}
            <div className="Farmers-Stacked ml-[40px] block space-y-[29px] mx-auto">
                <div className=" lg:flex justify-center">
                    <div className='relative lg:mt-[13px]'>
                        
                        {/* Farmers */}
                        <img className="Top-Layer absolute z-20 top-[13px] h-[123.5] lg:h-[214px] w-[164px] lg:w-[269px]  mx-auto lg:left-[51px] lg:mb-[110px]  " src="/static/media/joinUs.png" alt="Join Us" />
            
                        {/* Green Floor */}
                        <div className='Bottom-Layer  relative z-10 top-[50px] lg:top-[66px] right-7  lg:left-[4px] mt-[9px] '>
                            <svg className='w-[242.1px] lg:w-[400.5px] h-[147px] lg:h-[252.5px]' xmlns="http://www.w3.org/2000/svg" width="459" height="200" viewBox="0 0 459 200" fill="none">
                                <path d="M239.137 71.0308C265.649 132.765 563.466 90.2582 418.466 152.529C273.466 214.8 134.428 215.235 107.915 153.501C81.4033 91.7663 -85.7892 94.302 59.211 32.0309C204.211 -30.2402 212.625 9.29618 239.137 71.0308Z" fill="#008000"/>
                            </svg>
                        </div>
                    </div>
                </div>             
            </div> {/*Farmers Stacked Ends */}
        
            {/* Right Side - Join Us Subsection */}
            <div className="JoinUs-Title block mt-[25px] pb-[29px] lg:mb-[34px] mx-[10vw] lg:ml-[114px]  lg:mr-[400px] ">

                {/* Join Us*/}
                <p className="font-inter font-[900] text-[#008000] text-[30px] lg:text-[40px] lg:mt-0 lg:mb-[15px]">Join Us Today</p>
                
                {/* Descriptions */}
                <p  className="font-[600] font-inter  rounded-[8px] text-[12px] lg:text-[17px]  " > We invite you to join us on our journey to transform the food industry. Whether you're a consumer seeking sustainable and nutritious food options or a partner interested in collaborating with us, we welcome you.</p>
                
                {/* Button - Talk to Us */}
                <div className='flex justify-center  lg:w-[242px] rounded-[15px] lg:rounded-[20px] bg-[#008000] '>
                    <p className='font-inter font-[800] text-[#FFF] text-[22px] lg:text-[23px] my-[10px] lg:my-[23px] '>TALK TO US</p>
                </div>         
            </div> {/* Join US Subsection Ends*/}

        </div>
   </div>
    
  );
}

export default JoinUs;
