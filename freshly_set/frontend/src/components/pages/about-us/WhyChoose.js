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
     
    <div className="w-full lg:w-auto flex  justify-center mt-[59px] lg:mt-[82px] lg:px-6 mx-1 lg:mx-auto max-w-[1094px] rounded-[23px] border-solid border-[1px] border-gray-400/[0.25] shadow-lg ">

        {/* Left side */}
        <div className="hidden lg:flex ">
            <img className="lg:h-[634px] lg:w-[418px] lg:mt-[13px] lg:ml-[14px] lg:mb-[22px]  lg:rounded-[52px]" src="/static/media/WhyChoose_large.png" alt="WhyChoose"/>
        </div>


        {/* Right Side */}

          <div className="relative mx-auto w-full block px-1 ml-[10px] lg:ml-[32px] lg:w- ">
              <div className='flex  mt-[29px] '>
                  <img className='flex w-[46px] h-[48px] lg:mb-[18px]' src='/static/media/WhyChoose_small.png' alt='garden'/>
                  <p className="flex text-[20px] lg:text-[28px] my-0 font-[700] pl-[10px] font-inter  text-[#008000] h-[56px] lg:mb-[18px]">Why You Should Choose Freshly Farms</p>
              </div>
            
             

            {/* Card 1 */}
            <div className="block relative px-2 mt-[18px] w-[574px]  mb-[34px] cursor-pointer">
                <div className=" rounded-[11px] border-solid border-[1px] border-black/[0.25]  shadow-lg">
                      <div className='flex '>
                          <p className="text-black font-inter w-full text-[12px] lg:text-[20px] font-[700]  ml-[23px] lg:ml-[23px]">We Implement Technology In Farming</p>
              <img
                onClick={() => showWhy(1)}              
                className=" absolute right-2 mr-[20px] lg:mr-[25px] lg:mt-[19px]" src='/static/media/threeDots.png' alt='Navigation menu'/>
                       </div>
                      
                      <div className="  mx-[23px]">
                          <p className={clicked[1]? "text-black/[0.62] w-full font-inter text-[10px] lg:text-[20px] mt-0  mb-2 ": "hidden"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco la
                        </p> 
                    </div>
                </div>
              </div> 
              

            {/* Card 2*/}
            <div className="block relative px-2 mt-[18px]  w-[574px]   mb-[34px] cursor-pointer">
                <div className=" rounded-[11px] border-solid border-[1px] border-black/[0.25]  shadow-lg">
                      <div className='flex '>
                          <p className="text-black font-inter w-full text-[12px] lg:text-[20px] font-[700]  ml-[23px] lg:ml-[23px]">We Implement Technology In Farming</p>
              <img
                onClick={() => showWhy(2)}              
                className=" absolute right-2 mr-[20px] lg:mr-[25px] lg:mt-[19px]" src='/static/media/threeDots.png' alt='Navigation menu'/>
                       </div>
                      
                      <div className="  mx-[23px]">
                          <p className={clicked[2]? "text-black/[0.62] w-full font-inter text-[10px] lg:text-[22px] mt-0  mb-2 ": "hidden"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco la
                        </p> 
                    </div>
                </div>
              </div> 

            {/* Card 3*/}
            <div className="block relative px-2 mt-[18px]  w-[574px]   mb-[34px] cursor-pointer">
                <div className=" rounded-[11px] border-solid border-[1px] border-black/[0.25]  shadow-lg">
                      <div className='flex '>
                          <p className="text-black font-inter w-full text-[12px] lg:text-[20px] font-[700]  ml-[23px] lg:ml-[23px]">We Implement Technology In Farming</p>
              <img
                onClick={() => showWhy(3)}              
                className=" absolute right-2 mr-[20px] lg:mr-[25px] lg:mt-[19px]" src='/static/media/threeDots.png' alt='Navigation menu'/>
                       </div>
                      
                      <div className="  mx-[23px]">
                          <p className={clicked[3]? "text-black/[0.62] w-full font-inter text-[10px] lg:text-[22px] mt-0  mb-2 ": "hidden"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco la
                        </p> 
                    </div>
                </div>
              </div> 

            {/* Card 4*/}
            <div className="block relative px-2 mt-[18px]  w-[574px]   mb-[34px] cursor-pointer">
                <div className=" rounded-[11px] border-solid border-[1px] border-black/[0.25]  shadow-lg">
                      <div className='flex '>
                          <p className="text-black font-inter w-full text-[12px] lg:text-[20px] font-[700]  ml-[23px] lg:ml-[23px]">We Implement Technology In Farming</p>
              <img
                onClick={() => showWhy(4)}              
                className=" absolute right-2 mr-[20px] lg:mr-[25px] lg:mt-[19px]" src='/static/media/threeDots.png' alt='Navigation menu'/>
                       </div>
                      
                      <div className="  mx-[23px]">
                          <p className={clicked[4]? "text-black/[0.62] w-full font-inter text-[10px] lg:text-[22px] mt-0  mb-2 ": "hidden"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco la
                        </p> 
                    </div>
                </div>
              </div>  

            {/* Card 5*/}         
            <div className="block relative px-2 mt-[18px]  w-[574px]  mb-[34px] cursor-pointer">
                <div className=" rounded-[11px] border-solid border-[1px] border-black/[0.25]  shadow-lg">
                      <div className='flex '>
                          <p className="text-black font-inter w-full text-[12px] lg:text-[20px] font-[700]  ml-[23px] lg:ml-[23px]">We Implement Technology In Farming</p>
              <img
                onClick={() => showWhy(5)}              
                className=" absolute right-2 mr-[20px] lg:mr-[25px] lg:mt-[19px]" src='/static/media/threeDots.png' alt='Navigation menu'/>
                       </div>
                      
                      <div className="  mx-[23px]">
                          <p className={clicked[5]? "text-black/[0.62] w-full font-inter text-[10px] lg:text-[22px] mt-0  mb-2 ": "hidden"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco la
                        </p> 
                    </div>
                </div>
              </div>  

            {/*Eplore More Button */}
            <div className="flex justify-center lg:mt-0">
                <button className=" bg-[#008000] text-white rounded-[15px] h-[48px] lg:h-[54.3px] w-[231px] text-[23px] font-inter font-[700] mb-[39px] lg:mb-[65.68px]">Explore More</button>
              </div>
              

        </div>
    </div> 


  )
}

export default WhyChoose