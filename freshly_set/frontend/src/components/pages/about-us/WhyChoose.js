import React, { useEffect, useState } from 'react'

function WhyChoose() {
    
  const [clicked, setClicked] = useState({
        1: false,  // First description 1 is closed by default
        2: false, // Second description is closed by default and so on...(all set to false)
        3: false,
        4: false,
        5: false
      });
    
      const showWhy = (id) => {
        setClicked((prevState) => ({
          ...prevState,
          [id]: !prevState[id],
        }));
    };

   
        
      
    useEffect(() => {
        console.log("clicked", clicked)
    },[clicked])
  return (
     
    <div className="block lg:flex justify-between lg:mt-[82px] lg:ml-[102px] lg:mr-[84px] rounded-[23px] border-solid border-[1px] border-gray-400/[0.25] shadow-lg lg:w-[1094px]">

        {/* Left side */}
        <div className="hidden lg:flex ">
            <img className="lg:h-[634px] lg:w-[418px] lg:mt-[13px] lg:ml-[14px] lg:mb-[22px]  rounded-[52px]" src="/static/media/WhyChoose_large.png" alt="WhyChoose"/>
        </div>


        {/* Right Side */}

          <div className=" block ml-[32px] ">
              <div className='flex  mt-[29px]'>
                  <img className='flex w-[46px] h-[48px] lg:mb-[18px]' src='/static/media/WhyChoose_small.png' alt='garden'/>
                  <p className="flex text-[28px] my-0 font-[700] pl-[10px] font-inter  text-[#008000]  w-[564px] h-[56px] lg:mb-[18px]">Why You Should Choose Freshly Farms</p>
              </div>
            
             

            {/* Card 1 */}
            <div className="block space-y-[29px] lg:space-y-[63px] my-0">
                <div className="mr-[56px] lg:mb-[18] lg:w-[574px] rounded-[11px] border-solid border-[1px] border-black/[0.25]  mb-[34px] shadow-lg">
                      <div className='lg:flex justify-start'>
                          <p className="text-black font-inter text-[20px] lg:text-[22px] font-[700] h-[17px] w-[422px] mt-[16px] ml-[23px] mb-[19px] mr-[71px]">We Implement Technology In Farming</p>
              <img
                onClick={() => showWhy(1)}              
                className="h-[37px] mt-[9px] mb-[8px]  mr-[23px]" src='/static/media/threeDots.png' alt='Navigation menu'/>
                       </div>
                      
                      <div className="lg:flex  justify-between items-center align-top my-[2px]">
                          <p className={clicked[1]? "text-black/[0.62] font-josefin flex  lg:text-[16px] w-[548px] my-[2px] mx-[23px] mb-[19px]": "hidden"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco la
                        </p> 
                    </div>
                </div>
              </div> 

            {/* Card 2*/}
            <div className="block space-y-[29px] lg:space-y-[63px] my-0">
                <div className="mr-[56px] lg:mb-[18] lg:w-[574px] rounded-[11px] border-solid border-[1px] border-black/[0.25]  mb-[34px] shadow-lg">
                    <div className='lg:flex justify-start'>
                          <p className="text-black font-inter text-[20px] lg:text-[22px] font-[700] h-[17px] w-[422px] mt-[16px] ml-[23px] mb-[19px] mr-[71px]">We Promote Food Security</p>
                          <img
                              onClick={() => showWhy(2)} 
                              className="h-[37px] mt-[9px] mb-[8px]  mr-[23px]" src='/static/media/threeDots.png' alt='Navigation menu'/>
                      </div>
                      
                    <div className="lg:flex justify-between items-center align-top my-[2px] ">
                          <p className={clicked[2] ? "text-black/[0.62] font-josefin flex  lg:text-[16px] w-[548px] my-[2px] mx-[23px] mb-[19px]"
                              : "hidden"
                          }>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco la
                        </p>   
                    </div>
                </div>
              </div>  

            {/* Card 3*/}
            <div className="block space-y-[29px] lg:space-y-[63px] my-0">
                <div className="mr-[56px] lg:mb-[18] lg:w-[574px] rounded-[11px] border-solid border-[1px] border-black/[0.25]  mb-[34px] shadow-lg">
                    <div className='lg:flex justify-start'>
                          <p className="text-black font-inter text-[20px] lg:text-[22px] font-[700] h-[17px] w-[422px] mt-[16px] ml-[23px] mb-[19px] mr-[71px]">We Enhance Vertical Farming</p>
                          <img
                              onClick={() => showWhy(3)} 
                              className="h-[37px] mt-[9px] mb-[8px] mr-[23px]" src='/static/media/threeDots.png' alt='Navigation menu'/>
                      </div>
                      
                      <div className="lg:flex justify-between items-center align-top my-[2px]">
                          <p className={clicked[3] ? "text-black/[0.62] font-josefin flex  lg:text-[16px] w-[548px] my-[2px] mx-[23px] mb-[19px]": "hidden"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco la
                        </p>   
                    </div>
                </div>
              </div>  

            {/* Card 4*/}
            <div className="block space-y-[29px] lg:space-y-[63px] my-0">
                <div className="mr-[56px] lg:mb-[18] lg:w-[574px] rounded-[11px] border-solid border-[1px] border-black/[0.25]  mb-[34px] shadow-lg">
                    <div className='lg:flex justify-start'>
                          <p className="text-black font-inter text-[20px] lg:text-[22px] font-[700] h-[17px] w-[422px] mt-[16px] ml-[23px] mb-[19px] mr-[71px]">We Enhance Urban Farming</p>
                          <img
                              onClick={() => showWhy(4)}
                              className="h-[37px] mt-[9px] mb-[8px]  mr-[23px]" src='/static/media/threeDots.png' alt='Navigation menu'/>
                      </div>
                      
                      <div className="lg:flex justify-between items-center align-top my-[2px]">
                          <p className={clicked[4] ? "text-black/[0.62] font-josefin flex  lg:text-[16px] w-[548px] my-[2px] mx-[23px] mb-[19px]": 'hidden'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco la
                        </p>   
                    </div>
                </div>
              </div>  

            {/* Card 5*/}
            <div className="block space-y-[29px] lg:space-y-[63px] my-0">
                <div className="mr-[56px] lg:mb-[18] lg:w-[574px] rounded-[11px] border-solid border-[1px] border-black/[0.25]  mb-[34px] shadow-lg">
                    <div className='lg:flex justify-start'>
                          <p className="text-black font-inter text-[20px] lg:text-[22px] font-[700] h-[17px] w-[422px] mt-[16px] ml-[23px] mb-[19px] mr-[71px]">We Promote Indoor Farming</p>
                          <img
                              onClick={() => showWhy(5)}
                              className="h-[37px] mt-[9px] mb-[8px]  mr-[23px]" src='/static/media/threeDots.png' alt='Navigation menu'/>
                      </div>
                      
                      <div className="flex justify-between items-center align-top my-[2px]">
                        <p className={clicked[5]? "text-black/[0.62] font-josefin flex  lg:text-[16px] w-[548px] my-[2px] mx-[23px] mb-[19px]": 'hidden'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco la
                        </p>   
                    </div>
                </div>
            </div>    

            {/*Eplore More Button */}
            <div className="flex justify-center lg:mt-0">
                <button className=" bg-[#008000] text-white rounded-[15px] lg:h-[54.3px] lg:w-[231px] text-[23px] font-inter font-[700] lg:mb-[65.68px]">Explore More</button>
              </div>
              

        </div>
    </div> 


  )
}

export default WhyChoose