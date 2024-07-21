import React from 'react'

function Services() {
  return (
    <div className="block lg:mt-[100px]">
        <div className="lg:flex lg:justify-center">
            <h3 className="text-[#008000] text-[30px] font-[700] lg:text-[45px] text-center font-inter">Our Services</h3>
        </div>

        {/* Service card */}
        <div className="flex justify-center w-[100%] ">
            <div className="block lg:flex space-y-[34px] lg:space-y-0 lg:space-x-[78px]">
                <div className="lg:h-[514.435px] lg:w-[345.802px] relative z-[10]">
                    <img  src="/static/media/services_1.png" alt="serices1"/>
                
                    <div className="absolute bottom-[30px] z-[20] left-[38.9px]">
                        <p className='text-white text-[40px] font-[700] font-inter'>Installations</p>
                        <p className="text-white text-[15px] font-[600] font-josefin -mt-[15px] leading-[19.5px] w-[306.899px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                    </div>
                </div>


                <div className="lg:h-[514.435px] lg:w-[345.802px] relative z-[10]">
                    <img  src="/static/media/services_3.png" alt="serices1"/>
                
                    <div className="absolute bottom-[30px] z-[20] left-[38.9px]">
                        <p className='text-white text-[40px] font-[700] font-inter'>Consultations</p>
                        <p className="text-white text-[15px] font-[600] font-josefin -mt-[15px] leading-[19.5px] w-[306.899px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                    </div>
                </div>



                <div className="lg:h-[514.435px] lg:w-[345.802px] relative z-[10]">
                    <img  src="/static/media/services_2.png" alt="serices1"/>
                
                    <div className="absolute bottom-[30px] z-[20] left-[38.9px]">
                        <p className='text-white text-[40px] font-[700] font-inter'>Gardening Equipment</p>
                        <p className="text-white text-[15px] font-[600] font-josefin -mt-[15px] leading-[19.5px] w-[306.899px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                    </div>
                </div>
            </div>

            
        </div>
    </div>
  )
}

export default Services