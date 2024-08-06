import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
        <div className='MainHamburgerMenuStarts'>
          <div className='sticky '>
            <div className="relative flex justify-end mr-[33px] md:hidden"> {/* md:hidden hides the menu on screens medium (md) and larger */}
              <IoMdMenu className={` p-2 rounded-md text-gray-700 focus:outline-none h-[37px] w-[44px] ${ !isOpen? "": 'hidden'} `} 
                onClick={toggleMenu}/>
            </div>
      
            <div className={`MiniHambergerMenu  sticky right-0  md:hidden ml-[15px] mr-0  h-full bg-[#008000] border rounded-[15px] shadow-lg transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : ' translate-x-full'}`}>

              <div className='FirstRow flex justify-between z-20 mr-[33px]'>
                    {/* Left (Logo) */}  
                    <div className='logo_BackgroundEffect block bg-white w-[88px] h-[89px] ml-[23px] mt-[25px] rounded-[500px] border-black border-[15px]'>
                      <div className='flex justify-center'>
                          <img className='OurLogo w-[71px] h-[73px] my-[7px]' src="/static/media/logo2.png" alt="NavLogo" />
                      </div>
                    </div>
                    
                    {/* Right (For Button)*/}
                    <div className='block '> 
                        < IoMdCloseCircleOutline className='ClosedLogo block w-[40px] h-[40px] fill-white mt-[63px] '
                        onClick={toggleMenu} />
                    </div>
              </div> {/*First row Ends */}

              <div className='SecondRow block justify-start mt-[31px] ml-[72px] '>
                <img className='UserLogo w-[93px] h-[94px] ' src='/static/media/user2.png'  />
                <p className=' text-[#fff] font-inter text-[25px] font-[700] text-left mt-[11px]'> New User </p>
              </div>
              
              {/* All Contain the links to their pages Except for those without pages, lead to Homepage */}
              <div className='SetOfIcons  mt-[34px] ml-[72px] pb-[36px]'>
                  <div className='AboutTab mb-[20px]'>
                      <Link to="/about-us" className='flex justify-start '>
                            <FaUsers className='block w-[35px] h-[33px] fill-white mr-[8px]' />
                            <p className='text-[#fff] font-inter text-[22px] font-[700] block my-0'>About</p>
                      </Link>
                  </div>

                  <div className='BlogTab flex justify-start  mb-[20px]'>
                    <Link to="/blogs" className='flex justify-start'>
                            <SlGlobe  className='block w-[31px] h-[33px] fill-white mr-[12px]' />
                            <p className='text-[#fff] font-inter text-[22px] font-[700] block my-0'>Blog</p>
                    </Link>
                  </div>

                  <div className='ServicesTab flex justify-start  mb-[20px]'> {/* Currently link Lead to Homepage */}
                    <Link to="/" className='flex justify-start'>
                            <SlGlobe  className='block w-[31px] h-[33px] fill-white mr-[12px]' />
                            <p className='text-[#fff] font-inter text-[22px] font-[700] block my-0'>Services</p>
                    </Link>
                  </div>

                  <div className='FarmProduceTab flex justify-start  mb-[20px]'> {/* Currently link Lead to Homepage */}
                    <Link to="/" className='flex justify-start'>
                            <SlGlobe  className='block w-[31px] h-[33px] fill-white mr-[12px]' />
                            <p className='text-[#fff] font-inter text-[22px] font-[700] block my-0'>Farm Produce</p>
                    </Link>
                  </div>

                  <div className='FarmingSystemsTab flex justify-start  mb-[20px]'> {/* Currently link Lead to Homepage */}
                    <Link to="/" className='flex justify-start'>
                            <SlGlobe  className='block w-[31px] h-[33px] fill-white mr-[12px]' />
                            <p className='text-[#fff] font-inter text-[22px] font-[700] block my-0'>Farming Systems</p>
                    </Link>
                  </div>

                  <div className='GardenSetupsTab flex justify-start  mb-[20px]'> {/* Currently link Lead to Homepage */}
                    <Link to="/" className='flex justify-start'>
                            <SlGlobe  className='block w-[31px] h-[33px] fill-white mr-[12px]' />
                            <p className='text-[#fff] font-inter text-[22px] font-[700] block my-0'>Garde Setups</p>
                    </Link>
                  </div>

                  <div className='GardenTab flex justify-start  mb-[20px]'>  {/* Currently link Lead to Homepage */}
                    <Link to="/" className='flex justify-start'>
                            <SlGlobe  className='block w-[31px] h-[33px] fill-white mr-[12px]' />
                            <p className='text-[#fff] font-inter text-[22px] font-[700] block my-0'>Garden</p>
                    </Link>
                  </div>

                  <div className='Settings '> {/* Currently link Lead to Homepage */}
                    <Link to="/" className='flex justify-start'>
                          <SlSettings  className='block w-[31px] h-[33px] fill-white mr-[12px]' />
                          <p className='text-[#fff] font-inter text-[22px] font-[700] block my-0'>Settings</p>
                    </Link>
                  </div>

                </div> {/*Set of Icons Ends */}
        
            </div> {/* Mini HamburgerMenu Ends */}
         </div> {/* Sticky Class Ends */}
        </div>  
      
  );
};

export default HamburgerMenu;
