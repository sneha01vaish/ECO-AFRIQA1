import React, { useEffect, useState } from 'react'
import { FaCaretUp } from "react-icons/fa6";
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
        
        {/*Detailed FAQ Section Starts Here */}
        <div className='FaqDetails relative top-[100px] mx-[40px] '>
            <div className='TopClass md:flex justify-between '>
                {/*Left */}
                <div className='block  top-[120px]'> {/*back Nav */}
                    <div className='BackNav block mt-[60px] ml-[40px]'> 
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

            {/*Sample Call-To_Action FAQs */}      
            <div className='SetOfQuestions '>
                {/*Questions 1 and 2 */}
                <div className='Qn1AndQn2 lg:flex justify-between '>
                    {/* Card 1*/}
                    <div className='Card1 block lg:mx-0 lg:w-[47%] h-fit'>
                        {/*Line */}
                        <div className=' border-solid border-[5px] mb-[50px] border-[#008000]' />
                        
                        <div className="CardContent  rounded-[21px] border-solid border-[1px] border-black/[0.25] pl-[22px] mb-[50px] shadow-lg">
                            <p className="text-black font-inter -ml-[10px] lg:ml-0 text-justify text-[12px] lg:text-[22px] font-[700]"> What Is Urban Farming?</p>
                            <div className="flex justify-between ">
                                <p className={clicked[1] ? "text-black/[0.62] w-[500%] -ml-[8px] lg:ml-0 -mt-[10px] lg:-mt-[16px] font-josefin flex text-[10px] lg:text-[20px] text-justify" : "hidden"}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco la </p>
                                <div className="flex justify-end w-[100%]">
                                    <FaCaretUp  onClick={() => toggleFAQ(1)} className={`text-black h-[30px] lg:h-[52px] w-[20.8px] lg:w-[55px] -mt-[59px] mr-[14px] cursor-pointer transition-all duration-300 ease-in-out ${clicked[1] ? "rotate-180" : ""}`} />
                                </div>
                            </div>
                        </div>
                    </div> {/*Card1 ends here */}

                    {/* Card 2*/}
                    <div className='Card2 block lg:mx-0 lg:w-[47%] h-fit'>
                        {/*Line */}
                        <div className=' border-solid border-[5px] mb-[50px] border-[#008000]' />
                        
                        <div className="CardContent  rounded-[21px] border-solid border-[1px] border-black/[0.25] pl-[22px] mb-[50px] shadow-lg">
                            <p className="text-black font-inter -ml-[10px] lg:ml-0 text-justify text-[12px] lg:text-[22px] font-[700]"> What Is Urban Farming?</p>
                            <div className="flex justify-between ">
                                <p className={clicked[2] ? "text-black/[0.62] w-[500%] -ml-[8px] lg:ml-0 -mt-[10px] lg:-mt-[16px] font-josefin flex text-[10px] lg:text-[20px] text-justify" : "hidden"}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco la </p>
                                <div className="flex justify-end w-[100%]">
                                    <FaCaretUp  onClick={() => toggleFAQ(2)} className={`text-black h-[30px] lg:h-[52px] w-[20.8px] lg:w-[55px] -mt-[59px] mr-[14px] cursor-pointer transition-all duration-300 ease-in-out ${clicked[2] ? "rotate-180" : ""}`} />
                                </div>
                            </div>
                        </div>
                    </div> {/*Card2 ends here */} 
                </div> {/*Cards 1 and 2 Ends Here */}
            
                {/*Questions 3 and 4 */}
                <div className='Qn3AndQn4 lg:flex justify-between '>
                    {/* Card 3*/}
                    <div className='Card3 block lg:mx-0 lg:w-[47%] h-fit'>
                        {/*Line */}
                        <div className=' border-solid border-[5px] mb-[50px] border-[#008000]' />
                        
                        <div className="CardContent  rounded-[21px] border-solid border-[1px] border-black/[0.25] pl-[22px] mb-[50px] shadow-lg">
                            <p className="text-black font-inter -ml-[10px] lg:ml-0 text-justify text-[12px] lg:text-[22px] font-[700]"> What Is Urban Farming?</p>
                            <div className="flex justify-between ">
                                <p className={clicked[3] ? "text-black/[0.62] w-[500%] -ml-[8px] lg:ml-0 -mt-[10px] lg:-mt-[16px] font-josefin flex text-[10px] lg:text-[20px] text-justify" : "hidden"}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco la </p>
                                <div className="flex justify-end w-[100%]">
                                    <FaCaretUp  onClick={() => toggleFAQ(3)} className={`text-black h-[30px] lg:h-[52px] w-[20.8px] lg:w-[55px] -mt-[59px] mr-[14px] cursor-pointer transition-all duration-300 ease-in-out ${clicked[3] ? "rotate-180" : ""}`} />
                                </div>
                            </div>
                        </div>
                    </div> {/*Card3 ends here */}

                    {/* Card 4*/}
                    <div className='Card4 block lg:mx-0 lg:w-[47%] h-fit'>
                        {/*Line */}
                        <div className=' border-solid border-[5px] mb-[50px] border-[#008000]' />
                        
                        <div className="CardContent  rounded-[21px] border-solid border-[1px] border-black/[0.25] pl-[22px] mb-[50px] shadow-lg">
                            <p className="text-black font-inter -ml-[10px] lg:ml-0 text-justify text-[12px] lg:text-[22px] font-[700]"> What Is Urban Farming?</p>
                            <div className="flex justify-between ">
                                <p className={clicked[4] ? "text-black/[0.62] w-[500%] -ml-[8px] lg:ml-0 -mt-[10px] lg:-mt-[16px] font-josefin flex text-[10px] lg:text-[20px] text-justify" : "hidden"}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco la </p>
                                <div className="flex justify-end w-[100%]">
                                    <FaCaretUp  onClick={() => toggleFAQ(4)} className={`text-black h-[30px] lg:h-[52px] w-[20.8px] lg:w-[55px] -mt-[59px] mr-[14px] cursor-pointer transition-all duration-300 ease-in-out ${clicked[4] ? "rotate-180" : ""}`} />
                                </div>
                            </div>
                        </div>
                    </div> {/*Card4 ends here */} 
                </div> {/*Cards 3 and 4 Ends Here */}

                {/*Questions 5 and 6 */}     
                <div className='Qn5AndQn6 lg:flex justify-between '>
                    {/* Card 5*/}
                    <div className='Card5 block lg:mx-0 lg:w-[47%] h-fit'>
                        {/*Line */}
                        <div className=' border-solid border-[5px] mb-[50px] border-[#008000]' />
                        
                        <div className="CardContent  rounded-[21px] border-solid border-[1px] border-black/[0.25] pl-[22px] mb-[50px] shadow-lg">
                            <p className="text-black font-inter -ml-[10px] lg:ml-0 text-justify text-[12px] lg:text-[22px] font-[700]"> What Is Urban Farming?</p>
                            <div className="flex justify-between ">
                                <p className={clicked[5] ? "text-black/[0.62] w-[500%] -ml-[8px] lg:ml-0 -mt-[10px] lg:-mt-[16px] font-josefin flex text-[10px] lg:text-[20px] text-justify" : "hidden"}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco la </p>
                                <div className="flex justify-end w-[100%]">
                                    <FaCaretUp  onClick={() => toggleFAQ(5)} className={`text-black h-[30px] lg:h-[52px] w-[20.8px] lg:w-[55px] -mt-[59px] mr-[14px] cursor-pointer transition-all duration-300 ease-in-out ${clicked[5] ? "rotate-180" : ""}`} />
                                </div>
                            </div>
                        </div>
                    </div> {/*Card5 ends here */}

                    {/* Card 6*/}
                    <div className='Card6 block lg:mx-0 lg:w-[47%] h-fit'>
                        {/*Line */}
                        <div className=' border-solid border-[5px] mb-[50px] border-[#008000]' />
                        
                        <div className="CardContent  rounded-[21px] border-solid border-[1px] border-black/[0.25] pl-[22px] mb-[50px] shadow-lg">
                            <p className="text-black font-inter -ml-[10px] lg:ml-0 text-justify text-[12px] lg:text-[22px] font-[700]"> What Is Urban Farming?</p>
                            <div className="flex justify-between ">
                                <p className={clicked[6] ? "text-black/[0.62] w-[500%] -ml-[8px] lg:ml-0 -mt-[10px] lg:-mt-[16px] font-josefin flex text-[10px] lg:text-[20px] text-justify" : "hidden"}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco la </p>
                                <div className="flex justify-end w-[100%]">
                                    <FaCaretUp  onClick={() => toggleFAQ(6)} className={`text-black h-[30px] lg:h-[52px] w-[20.8px] lg:w-[55px] -mt-[59px] mr-[14px] cursor-pointer transition-all duration-300 ease-in-out ${clicked[6] ? "rotate-180" : ""}`} />
                                </div>
                            </div>
                        </div>
                    </div> {/*Card6 ends here */} 
                </div> {/*Cards 5 and 6 Ends Here */}

                {/*Questions 7 and 8 */}
                <div className='Qn7AndQn8 lg:flex justify-between '>
                    {/* Card 7*/}
                    <div className='Card7 block lg:mx-0 lg:w-[47%] h-fit'>
                        {/*Line */}
                        <div className=' border-solid border-[5px] mb-[50px] border-[#008000]' />
                        
                        <div className="CardContent  rounded-[21px] border-solid border-[1px] border-black/[0.25] pl-[22px] mb-[50px] shadow-lg">
                            <p className="text-black font-inter -ml-[10px] lg:ml-0 text-justify text-[12px] lg:text-[22px] font-[700]"> What Is Urban Farming?</p>
                            <div className="flex justify-between ">
                                <p className={clicked[7] ? "text-black/[0.62] w-[500%] -ml-[8px] lg:ml-0 -mt-[10px] lg:-mt-[16px] font-josefin flex text-[10px] lg:text-[20px] text-justify" : "hidden"}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco la </p>
                                <div className="flex justify-end w-[100%]">
                                    <FaCaretUp  onClick={() => toggleFAQ(7)} className={`text-black h-[30px] lg:h-[52px] w-[20.8px] lg:w-[55px] -mt-[59px] mr-[14px] cursor-pointer transition-all duration-300 ease-in-out ${clicked[7] ? "rotate-180" : ""}`} />
                                </div>
                            </div>
                        </div>                    
                    </div> {/*Card7 ends here */}

                    {/* Card 8*/}
                    <div className='Card8 block lg:mx-0 lg:w-[47%] h-fit'>
                        {/*Line */}
                        <div className=' border-solid border-[5px] mb-[50px] border-[#008000]' />
                        
                        <div className="CardContent  rounded-[21px] border-solid border-[1px] border-black/[0.25] pl-[22px] mb-[50px] shadow-lg">
                            <p className="text-black font-inter -ml-[10px] lg:ml-0 text-justify text-[12px] lg:text-[22px] font-[700]"> What Is Urban Farming?</p>
                            <div className="flex justify-between ">
                                <p className={clicked[8] ? "text-black/[0.62] w-[500%] -ml-[8px] lg:ml-0 -mt-[10px] lg:-mt-[16px] font-josefin flex text-[10px] lg:text-[20px] text-justify" : "hidden"}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco la </p>
                                <div className="flex justify-end w-[100%]">
                                    <FaCaretUp  onClick={() => toggleFAQ(8)} className={`text-black h-[30px] lg:h-[52px] w-[20.8px] lg:w-[55px] -mt-[59px] mr-[14px] cursor-pointer transition-all duration-300 ease-in-out ${clicked[8] ? "rotate-180" : ""}`} />
                                </div>
                            </div>
                        </div>
                    </div> {/*Card8 ends here */} 
                </div> {/*Cards 7 and 8 Ends Here */}
                
                {/*Last Two Green lines */}
                <div className='LastLines lg:flex justify-between '>
                    <div className='LeftLine block lg:mx-0 lg:w-[47%] border-solid border-[5px] mb-[50px] border-[#008000]' />
                    <div className='RightLine block lg:mx-0 lg:w-[47%] lg:border-solid lg:border-[5px] lg:mb-[50px] lg:border-[#008000]' />
                </div> {/*Last Two Lines Ends Here  */}
                
            </div> {/*SetOfQuestions Ends Here */}

            {/*User Input Section */}
            <div className='PostTheQn mt-[100px] border-solid border-[1px] border-[#b3b5bc] shadow-md shadow-[#4e4e50] rounded-[20px] '>
                <div className='flex justify-center'>
                    <p className='text-[29px] lg:text-[45px] pt-[20px]  lg:text-start font-[700] font-inter   text-[#008000] mb-[10px] lg:mb-[30px]'>Can't Find What You Are Looking For?</p>
                </div>
                <div className='mx-auto w-[80%] mt-[20px] mb-[50px] border-solid border-[1px] border-[#b3b5bc] shadow-md rounded-[20px] overflow-clip'>
                    <textarea placeholder="Post Your Question" className="block h-[220px] w-[97.9%] lg:h-[220px] border-none  focus:outline-none text-[16px] lg:text-[24px] font-inter  p-[20px]"  /> 
                    <button className="block h-[56px] w-full mx-auto  rounded-[14px] bg-[#008000] border-none font-inter text-[25px]  text-white font-[700]  cursor-pointer active:scale-90 transition-all duration-500 ease-out">Send</button>
                </div>
            </div>  {/*PostTheQn Ends Here */}
            
            {/* Back Button */}
            <Link to= "/" className="backButton block mt-[70px] pb-[100px]">
                <button className="h-[80px] w-[250px] rounded-[16px] bg-[#008000] border-none font-inter text-[28px] text-white font-[700]  cursor-pointer active:scale-90 transition-all duration-500 ease-out">BACK</button>
            </Link>

        </div>   {/*FaqDetails End Here */}
    </div>   /*Major div ends */
  );
}

export default FaqDetails