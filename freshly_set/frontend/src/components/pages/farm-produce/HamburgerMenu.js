import React, { useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { SlGlobe } from "react-icons/sl";
import { SlSettings } from "react-icons/sl";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
      <div className='HamburgerMenuStarts'>
          <div className='sticky '>
            <div className="relative flex justify-end md:hidden"> {/* md:hidden hides the menu on screens medium (md) and larger */}
              <IoMdMenu className={`clicked? p-2 rounded-md text-gray-700 focus:outline-none h-[37px] w-[44px]  : transition-transform duration-500`} 
                          
                onClick={toggleMenu}/>
            </div>
          
        
          
      
          <div className={`HambergerMenu sticky md:hidden ml-[15px] mr-0  h-full bg-[#008000] border rounded-[15px] shadow-lg ${isOpen ? '' : 'hidden'}`}>
            <div className="flex  pl-[67.48px] pr-[77.14px] fixed top-0 z-50 bg-white w-screen pb-[20.1px] pt-[20.42px]">
             

            </div>

            <div className='FirstRow flex justify-between mr-[33px]'>
                  {/* Left (Logo) */}
                  <div className='logo_BackgroundEffect block bg-white w-[88px] h-[89px] ml-[23px] mt-[25px] rounded-[500px] border-black border-[15px]'>
                    <div className='flex justify-center'>
                        <img className='OurLogo w-[71px] h-[73px] my-[7px]' src="/static/media/logo2.png" alt="NavLogo" />
                    </div>
                  </div>
                  
                  {/* Right (For Button)*/}
                  <div className='block '> 
                      < IoMdCloseCircleOutline className='ClosedLogo block w-[40px] h-[40px] fill-white mt-[63px] ' />
                  </div>
            </div> {/*First row Ends */}

            <div className='SecondRow block justify-start mt-[31px] ml-[72px] '>
              <img className='UserLogo w-[93px] h-[94px] ' src='/static/media/user2.png'  />
              <p className=' text-[#fff] font-inter text-[25px] font-[700] text-left mt-[11px]'> New User </p>
            </div>

            <div className='SetOfIcons  mt-[34px] ml-[72px] pb-[36px]'>
              <div className='AboutTab flex justify-start mb-[20px]'>
                <FaUsers className='block w-[35px] h-[33px] fill-white mr-[8px]' />
                <p className='text-[#fff] font-inter text-[22px] font-[700] block my-0'>About</p>
              </div>

              <div className='BlogTab flex justify-start mb-[20px]'>
                <SlGlobe  className='block w-[31px] h-[33px] fill-white mr-[12px]' />
                <p className='text-[#fff] font-inter text-[22px] font-[700] block my-0'>Blog</p>
              </div>

              <div className='ServicesTab flex justify-start  mb-[20px]'>
                <SlGlobe  className='block w-[31px] h-[33px] fill-white mr-[12px]' />
                <p className='text-[#fff] font-inter text-[22px] font-[700] block my-0'>Services</p>
              </div>

              <div className='FarmProduceTab flex justify-start  mb-[20px]'>
                <SlGlobe  className='block w-[31px] h-[33px] fill-white mr-[12px]' />
                <p className='text-[#fff] font-inter text-[22px] font-[700] block my-0'>Farm produce</p>
              </div>

              <div className='FarmingSystemsTab flex justify-start mb-[20px]'>
                <SlGlobe  className='block w-[31px] h-[33px] fill-white mr-[12px]' />
                <p className='text-[#fff] font-inter text-[22px] font-[700] block my-0'>Farming Systems</p>
              </div>

              <div className='GardenSetupsTab flex justify-start mb-[20px]'>
                <SlGlobe  className='block w-[31px] h-[33px] fill-white mr-[12px]' />
                <p className='text-[#fff] font-inter text-[22px] font-[700] block my-0'>Garden Setups</p>
              </div>

              <div className='GardenTab flex justify-start mb-[20px]'>
                <SlGlobe  className='block w-[31px] h-[33px] fill-white mr-[12px]' />
                <p className='text-[#fff] font-inter text-[22px] font-[700] block my-0'>Garden</p>
              </div>

              <div className='Settings flex justify-start'>
                <SlSettings  className='block w-[31px] h-[33px] fill-white mr-[12px]' />
                <p className='text-[#fff] font-inter text-[22px] font-[700] block my-0'>Settings</p>
              </div>

            </div> {/*Set of Icons Ends */}
       
         </div>
        </div>
      </div>
   
    
    
  );
};

export default HamburgerMenu;
