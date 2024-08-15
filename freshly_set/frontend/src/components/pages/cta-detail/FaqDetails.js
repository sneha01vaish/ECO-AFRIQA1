import React, { useEffect, useState } from 'react'
import { FaCaretDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';

import Nav from '../../Nav/Navbar'

function FaqDetails() {
     const [clicked, setClicked] = useState({
        1: true, // All Questions are open by default
        2: true, 
        3: true,
        4: true,
        5: true,  
        6: true, 
        7: true,
        8: true  // All Questions are Open by default
      });
    
      const toggleFAQ = (id) => {
        setClicked((prevState) => ({
          ...prevState,
          [id]: !prevState[id],
        }));
      };
      
    useEffect(() => {
        console.log("clicked", clicked)
    },[clicked])

  return (
    
    <div>
        <Nav />  {/*The navbar */}
        
        <div className='FaqDetails relative top-[100px] mx-[40px] '>
          <div className='TopClass md:flex justify-between '>
            {/*Left */}
            <div className='block  top-[120px]'>
               <div className=' block mt-[60px] ml-[40px]'>
                    <Link to= "/">
                        <img src='/static/media/image10.png' alt='Back' className='w-[80px] cursor-pointer active:scale-90 transition-all duration-100 ease-out'/>
                    </Link>
                </div> 

                <div className=' block mt-[150px]'>
                    <p className='text-[29px]  lg:text-[45px]   lg:text-start font-[700] font-inter  text-[#008000] mb-[10px] lg:mb-0'>What Can We Help You Find</p>
                </div>   

                <div className='SearchBox flex my-[20px] relative border-solid border-[5px] border-[#008000] rounded-[20px]  w-[80vw] lg:w-[100%]'>
                    <input placeholder="Search For Questions" className="h-[46px] w-[90%] border-0  lg:h-[40px] text-[29px]  lg:text-[28px] font-[400] py-[10px] px-[14px]  rounded-[20px] focus:outline-none" />
                    <div className='SearchButton justify-end'>
                        <img src='/static/media/search.png' alt='' className=' lg:h-[46px] w-[42px] py-[5px] px-[5px] rounded-[20px] cursor-pointer active:scale-90 transition-all duration-500 ease-in'/>
                    </div>
                    
                </div> 
            </div>
            
            {/*Right */}
            <div className=' block '>
                <img src='/static/media/faqMark.png' alt='Questions' className='w-[600px]'/>
            </div>
            
          </div>   {/*Top Class Ends Here */}
          
        <div className='SetOfQuestions'>
        <div className='flex justify-center w-[100%]'>
            {/* Card 1*/}
        
            <div className=" block mx-1 lg:mx-auto w-[50%] rounded-[21px] border-solid border-[1px] border-black/[0.25] mb-4 shadow-lg">
                <p className="text-black font-inter  lg:ml-0 text-[12px] lg:text-[22px] font-[700] ">What Is Vertical Farming?</p>
                <div className="flex justify-between items-center align-top">
                    <p className={clicked[1] ? "text-black/[0.62] -ml-[8px] lg:ml-0 -mt-[10px] lg:-mt-[16px] font-josefin flex text-[9px] lg:text-[16px]" : "hidden"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco la
                    </p>
                    <div className="flex justify-end w-[100%]">
                        <FaCaretDown onClick={() => toggleFAQ(1)} className={`text-black h-[30px] lg:h-[52px] w-[20.8px] lg:w-[55px] -mt-[40px] mr-[14px] cursor-pointer transition-all duration-300 ease-in-out ${clicked[1] ? "rotate-180" : ""}`} />
                    </div>
                </div>
            </div>


        {/* Card 2*/}
        <div className=" block mx-1 lg:mx-auto w-[40%] rounded-[21px] border-solid border-[1px] border-black/[0.25] pl-[22px] mb-4 shadow-lg">
                <p className="text-black font-inter -ml-[10px] lg:ml-0 text-[12px] lg:text-[22px] font-[700]">What Is Urban Farming?</p>
                <div className="flex justify-between items-center align-top">
                    <p className={clicked[2] ? "text-black/[0.62] -ml-[8px] lg:ml-0 -mt-[10px] lg:-mt-[16px] font-josefin flex text-[9px] lg:text-[16px]" : "hidden"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco la
                    </p>
                    <div className="flex justify-end w-[100%]">
                    <FaCaretDown 
                        onClick={() => toggleFAQ(2)} 
                        className={`text-black h-[30px] lg:h-[52px] w-[20.8px] lg:w-[55px] -mt-[40px] mr-[14px] cursor-pointer transition-all duration-300 ease-in-out ${clicked[2] ? "rotate-180" : ""}`}
                    />
                    </div>
                </div>
            </div>
       
              

        
    
        </div>
        
        
                  





        </div> {/*SetOfQuestions Ends Here */}

        <div className='PostTheQn'>
            <div>
                <p className='text-[29px]  lg:text-[45px]   lg:text-start font-[700] font-inter  text-[#008000] mb-[10px] lg:mb-0'>Can't Find What You Are Looking For?</p>
            </div>

            <div>
               <textarea placeholder="Post Your Question" className="h-[220px] w-[80vw] lg:h-[220px] lg:w-[474px]  rounded-[8px] border-solid border-[1px] border-[#D5DAE1] focus:outline-none text-[16px] lg:text-[24px] font-inter px-[14px] py-[10px]"  /> 
            </div>     

            <div className="flex justify-center mx-[2vw] lg:mx-0">
                <button className="h-[56px] w-[80vw] lg:w-[474px] rounded-[14px] bg-[#008000] border-none font-inter text-[25px]  text-white font-[700] mt-[41px] cursor-pointer active:scale-90 transition-all duration-500 ease-out">Send</button>
            </div>




        </div>  {/*PostTheQn Ends Here */}



        </div>   {/*FaqDetails End Here */}










    </div>   /*Major div ends */
  );
}

export default FaqDetails