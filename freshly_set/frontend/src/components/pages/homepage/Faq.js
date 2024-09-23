import React, { useEffect, useState } from 'react'
import { FaCaretDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Faq() {
    //State to controll the Opening of the Questions
    const [clicked, setClicked] = useState({
        1: false,  // Question 1 is open by default
        2: false, // 
        3: false,
        4: false
      });
    
    const toggleFAQ = (id) => {
    setClicked((prevState) => ({
        ...prevState,
        [id]: !prevState[id],
    }));
    };
      
    useEffect(() => {
        console.log("clicked", clicked)
    }, [clicked])
    
    return (
    <section id="faqs" className="FaqSection mt-[120px] lg:mt-[200px] ">
        <div className='FaqWrapper block lg:flex justify-between just mx-[12px] lg:mx-[30px] px-[10px] lg:px-[30px] py-[28px] lg:py-[60px] rounded-[23px] bg-[#FFFFFF] border-solid border-[1px] border-[#00000040] shadow-lg shadow-[#00000040]'>
            {/* Left side (Only Visible on Desktop Mode) */}
            <div className="ImageWrapper hidden lg:block">
                <div className='lg:h-[989px] lg:w-[473px]'>
                    <img  src="/static/media/faq_large.png" alt="faq_large" className="w-full h-full"/>
                </div>
            </div> {/*Left Side */}

            {/* Right Side */}
            <div className="ContentsWrapper w-full block lg:ml-[45px] ">
                {/*Faq Title */}
                <div className='FaqTitle block '>
                    <h3 className="text-start text-[29px] lg:text-[45px] font-[700] font-inter text-[#008000] my-0 px-[28px] lg:px-0">Frequently Asked Questions</h3>
                </div>
                {/*Faq SubTitle */}
                <div className='FaqSubTitle block mt-[6px]'>
                    <p className="text-start text-[17px] lg:text-[22px] font-[500] font-inter text-[#0000009E] my-0 px-[28px] lg:px-0">Questions You might ask about our products or services</p>
                </div>

                {/*Questions Set */}
                <div className='SetOfCards mt-[18px] lg:mt-[36px]'>
                    {/* Card 1*/}
                    <div className="CardContent w-fill mt-[18px] lg:mt-[50px] rounded-[21px] border-solid border-[1px] border-[#00000040] pl-[22px] shadow-md shadow-[#00000040]">
                        <p className="text-black font-inter -ml-[10px] lg:ml-0 text-justify text-[12px] lg:text-[22px] mt-[12px] font-[700]">What Is Vertical Farming?</p>
                        <div className="flex justify-between ">
                            <p className={clicked[1] ? "hidden": "text-black/[0.62] w-[500%] -ml-[8px] lg:ml-0 -mt-[10px] lg:-mt-[16px] font-josefin flex text-[10px] lg:text-[20px] text-justify"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco la </p>
                            <div className="flex justify-end w-[100%]">
                                <FaCaretDown  onClick={() => toggleFAQ(1)} className={`text-black h-[30px] lg:h-[52px] w-[20.8px] lg:w-[55px] -mt-[35px] lg:-mt-[59px] mr-[14px] cursor-pointer transition-all duration-300 ease-in-out ${clicked[1] ? "rotate-180" : ""}`} />
                            </div>
                        </div>
                    </div>
                    
                    {/*Card 2 */}
                    <div className="CardContent mt-[18px] lg:mt-[50px] rounded-[21px] border-solid border-[1px] border-[#00000040] pl-[22px] shadow-md shadow-[#00000040]">
                        <p className="text-black font-inter -ml-[10px] lg:ml-0 text-justify text-[12px] lg:text-[22px] mt-[12px] font-[700]">What Is Urban Farming? </p>
                        <div className="flex justify-between ">
                            <p className={clicked[2] ? "hidden": "text-black/[0.62] w-[500%] -ml-[8px] lg:ml-0 -mt-[10px] lg:-mt-[16px] font-josefin flex text-[10px] lg:text-[20px] text-justify"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco la </p>
                            <div className="flex justify-end w-[100%]">
                                <FaCaretDown  onClick={() => toggleFAQ(2)} className={`text-black h-[30px] lg:h-[52px] w-[20.8px] lg:w-[55px] -mt-[35px] lg:-mt-[59px] mr-[14px] cursor-pointer transition-all duration-300 ease-in-out ${clicked[2] ? "rotate-180" : ""}`} />
                            </div>
                        </div>
                    </div>

                    {/*Card 3 */}
                    <div className="CardContent mt-[18px] lg:mt-[50px] rounded-[21px] border-solid border-[1px] border-[#00000040] pl-[22px] shadow-md shadow-[#00000040]">
                        <p className="text-black font-inter -ml-[10px] lg:ml-0 text-justify text-[12px] lg:text-[22px] mt-[12px] font-[700]">Do You Work With Limited Spaces? </p>
                        <div className="flex justify-between ">
                            <p className={clicked[3] ? "hidden": "text-black/[0.62] w-[500%] -ml-[8px] lg:ml-0 -mt-[10px] lg:-mt-[16px] font-josefin flex text-[10px] lg:text-[20px] text-justify"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco la </p>
                            <div className="flex justify-end w-[100%]">
                                <FaCaretDown  onClick={() => toggleFAQ(3)} className={`text-black h-[30px] lg:h-[52px] w-[20.8px] lg:w-[55px] -mt-[35px] lg:-mt-[59px] mr-[14px] cursor-pointer transition-all duration-300 ease-in-out ${clicked[3] ? "rotate-180" : ""}`} />
                            </div>
                        </div>
                    </div>
                    
                    {/*Card 4 */}
                    <div className="CardContent mt-[18px] lg:mt-[50px] rounded-[21px] border-solid border-[1px] border-[#00000040] pl-[22px] shadow-md shadow-[#00000040]">
                        <p className="text-black font-inter -ml-[10px] lg:ml-0 text-justify text-[12px] lg:text-[22px] mt-[12px] font-[700]">What are your Rates? </p>
                        <div className="flex justify-between ">
                            <p className={clicked[4] ? "hidden": "text-black/[0.62] w-[500%] -ml-[8px] lg:ml-0 -mt-[10px] lg:-mt-[16px] font-josefin flex text-[10px] lg:text-[20px] text-justify"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco la </p>
                            <div className="flex justify-end w-[100%]">
                                <FaCaretDown  onClick={() => toggleFAQ(4)} className={`text-black h-[30px] lg:h-[52px] w-[20.8px] lg:w-[55px] -mt-[35px] lg:-mt-[59px] mr-[14px] cursor-pointer transition-all duration-300 ease-in-out ${clicked[4] ? "rotate-180" : ""}`} />
                            </div>
                        </div>
                    </div>
                </div> {/*Questions Set */}
        
                {/*Read More Button */}
                <div className="flex justify-center mt-[20px] lg:mt-[50px] w-fit  mx-auto cursor-pointer active:scale-90 transition-all duration-500 ease-out" >
                    <Link to="/cta-detail" className='bg-[#008000] rounded-[15px]'>
                        <p className="text-center text-[#FFFFFF] text-[20px] lg:text-[25px] font-inter font-[700] my-[14px] lg:my-[20px] mx-[50px] ">Read More</p>
                    </Link>
                </div>

            </div> {/*Right Side Wrapper */}
        </div> {/*Faq Wrapper */}
    </section> //Faq Section
  )
}

export default Faq