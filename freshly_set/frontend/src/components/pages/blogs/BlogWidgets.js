import React, { useState, useEffect, useRef } from 'react';

import { MdMessage } from "react-icons/md";
import { FaCaretDown, FaShareAlt, FaVolumeUp } from "react-icons/fa";

function BlogWidgets() {
    const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMuteUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };
  return (
    <div className="block overflow-hidden">
        <div className="flex justify-center w-[100%]">
            <h3 className="font-[900] text-[45px] text-[#008000] font-inter">ARTICLE CENTER</h3>
        </div>

        <div className="flex justify-center space-x-[19px] lg:space-x-[78px]">
            <img className="h-[132px] w-[132px] lg:h-[512px] lg:w-[512px]" src="/static/media/bulbWidget.png" alt="Article light bulb"/>

            <p className="text-[27.5px] lg:text-[55px] font-[900] lg:w-[478px] font-inter">Vertical Farms Can Be Implemented In Slums ?</p>
        </div>

        {/* Cards */}

        <div className="block">
            <div className="flex justify-center space-x-[12px] lg:space-x-[59px]  mt-[63px]">
                {/* PollCard */}

                <div className="block  w-[203px] lg:h-[1264px] lg:w-[563px] bg-white   rounded-[27px] border-solid border-[1px] border-[#00000047]/[0.28] shadow-lg">
                    
                    <h3 className="text-[22.5px] lg:text-[45px] font-inter font-[700] text-center">Urban Farming?</h3>
                    {/* Polls */}
                    <div className="flex space-x-[12px] lg:space-x-[41px] items-center">
                        <p className="text-[22.5px] lg:text-[45px] font-[700] text-black ml-[10px] lg:ml-[45px]">Yes</p>
                        <div className="bg-[#D9D9D9] rounded-[12px] w-[135px] h-[30px]">
                            <div className="h-[30px] w-[100px] lg:w-[266px] rounded-[12px] bg-[#008000]"/>

                        </div>
                    </div>

                    <div className="flex space-x-[12px] lg:space-x-[41px] items-center">
                    <p className="text-[22.5px] lg:text-[45px] font-[700] text-black ml-[10px] lg:ml-[45px]">No</p>
                    <div className="bg-[#D9D9D9] rounded-[12px] w-[135px] h-[30px]">
                            <div className="h-[30px] w-[50px] lg:w-[266px] rounded-[12px] bg-[#008000]"/>

                        </div>
                    </div>



                    <div className="flex space-x-[12px] lg:space-x-[41px] items-center">
                    <p className="text-[22.5px] lg:text-[45px] font-[700] text-black ml-[10px] lg:ml-[45px]">Hm</p>
                    <div className="bg-[#D9D9D9] rounded-[12px] w-[135px] h-[30px]">
                            <div className="h-[30px] w-[100px] lg:w-[266px] rounded-[12px] bg-[#008000]"/>

                        </div>
                    </div>

                    <p className="w-[121px] lg:w-[457px] text-[12px] lg:text-[28px] font-[700] mx-auto font-inter">Vote & Give A Reason For Your Choice</p>
                    
                    <div className="flex justify-center">
                        
                        <textarea className="h-[101px] w-[179px] lg:h-[244px] lg:w-[472px] rounded-[19px] border-solid border-[#00000040]/[25%]"/>

                    </div>
                    <div className="flex justify-center items-center space-x-[32px] mt-[61px]">
                        <MdMessage className="h-[23.127px] w-[21px] lg:h-[58.367px] lg:w-[53px]"/>
                        <FaShareAlt className="h-[23.127px] w-[21px] lg:h-[58.367px] lg:w-[53px]"/>
                    </div>

                    {/* Date and author...can be made dynamic later*/}
                    <p className="text-center text-[10px] lg:text-[30px] font-[400]">By Freshly Farms, on 04 Sept, 2024</p>
                </div>

                {/* Card 2 */}
                <div className="block  w-[203px] lg:h-[1264px] lg:w-[563px] bg-white   rounded-[27px] border-solid border-[1px] border-[#00000047]/[0.28] shadow-lg">
                   <div className="flex justify-between mx-[42px]">
                        <h3 className="w-[145px] lg:text-[45px] font-inter font-[700] text-center lg:w-[366px]">Farming And Technology</h3>
                        <FaCaretDown className="h-[52px] w-[52px] mt-[34px]"/>
                   </div>

                   <div className="flex justify-center">
                        <div className="block">
                            <p className="font-josefin text-[15px] font-[400] leading-[16.25px] lg:leading-[32.5px] text-[#525560] w-[177px] lg:w-[498px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                           
                            <p className="hidden lg:flex font-josefin text-[15px] font-[400] leading-[32.5px] text-[#525560] w-[177px] lg:w-[498px]">Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,</p>
                        </div>
                   </div>

                    <div className="flex justify-center">
                        {/* <img className="h-[480px] w-[514px] rounded-[21px] object-cover" src="/static/media/farmingTech.png" alt="blogWidgetFarmingAndTech"/> */}

                    </div>

                   <div className="flex justify-center items-center space-x-[32px] mt-[61px]">
                        <MdMessage className="h-[58.367px] w-[53px]"/>
                        <FaShareAlt className="h-[58.367px] w-[53px]"/>
                    </div>

                    <p className="text-center text-[10px] lg:text-[30px] font-[400]">By Freshly Farms, on 04 Sept, 2024</p>

                   
                </div>



                
            </div>
                            {/* Card 3 */}

            <div className="flex  justify-center space-x-[12px] lg:space-x-[59px] mt-[63px]">
            <div className="block  w-[203px] lg:h-[1264px] lg:w-[563px] bg-white   rounded-[27px] border-solid border-[1px] border-[#00000047]/[0.28] shadow-lg">
            <div className="flex justify-between mx-[12px] lg:mx-[42px]">
                        <h3 className="text-[20px] lg:text-[45px] font-inter font-[700] w-[149px] lg:w-[366px]">Growth Of Vertical Farms In Kenya</h3>
                        <FaCaretDown className="h-[52px] w-[52px] mt-[34px]"/>
                   </div>

                   <div className="flex justify-center">
                        <img className="h-[121px] w-[174px] lg:h-[438px] lg:w-[438px] rounded-[21px] object-cover -mt-[80px] lg:-mt-[150px]" src="/static/media/farmingStats.png" alt="blogWidgetFarmingAndTech"/>

                    </div>

                   <div className="flex justify-center">
                        <div className="block space-y-[20px]">
                            <p className="font-josefin text-[15px] font-[400] leading-[32.5px] text-[#525560] w-[177px] lg:w-[498px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                            <p className="font-josefin text-[15px] font-[400] leading-[32.5px] text-[#525560] w-[177px] lg:w-[498px]">Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,</p>
                            <p className="hidden lg:flex font-josefin text-[15px] font-[400] leading-[32.5px] text-[#525560] w-[177px] lg:w-[498px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>

                        </div>
                   </div>

      

                    <div className="flex justify-center items-center space-x-[32px] mt-[61px]">
                        <MdMessage className="h-[58.367px] w-[53px]"/>
                        <FaShareAlt className="h-[58.367px] w-[53px]"/>
                    </div>

                    <p className="text-center text-[10px] lg:text-[30px] font-[400]">By Freshly Farms, on 04 Sept, 2024</p>

                   
                </div>
                                {/* Card 4 */}

            <div className="flex justify-center space-x-[12px] lg:space-x-[59px] ">
            <div className="block  w-[203px] lg:h-[1264px] lg:w-[563px] bg-white   rounded-[27px] border-solid border-[1px] border-[#00000047]/[0.28] shadow-lg">
                   <div className="flex justify-between mx-[42px]">
                        <h3 className="text-[20px] lg:text-[45px] font-inter font-[700] w-[173px] lg:w-[475px]">Vegetable Farmer Using Our Technology</h3>
                        <FaCaretDown className="h-[52px] w-[52px] mt-[34px]"/>
                   </div>

                   <div className="flex justify-center relative z-[10]">
                    <button      
                    onClick={handlePlayPause}
                
                    className="absolute top-[88px] lg:top-[203px] text-[#F5F5F5] cursor-pointer font-inter font-[900] text-[15px] lg:text-[30px] z-[25] h-[32.221px] w-[134.184px] lg:h-[74px] lg:w-[344px] border-none bg-[#0000004D]/[30%] rounded-[15px]">{isPlaying ? 'Pause' : 'Play'}  VIDEO</button>

                        <video
                            ref={videoRef}
                            className="absolute  w-[165px] lg:w-[423px] h-[209px] lg:h-[480px] object-cover z-[20] rounded-[20px]"
                            src="/static/media/vegetableFarmer.mp4"
                            muted={isMuted}
                            autoPlay
                            loop
                        ></video>
                        {/* <img className="h-[400px] w-[438px] rounded-[21px] object-cover -mt-[150px]" src="/static/media/farmingStats.png" alt="blogWidgetFarmingAndTech"/> */}

                    </div>

                   <div className="flex justify-center mt-[241px] lg:mt-[500px]">
                        <div className="block ">
                            <p className="font-josefin w-[177px] text-[15px] font-[400] leading-[32.5px] text-[#525560] lg:w-[498px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                            <p className="hidden lg:flex font-josefin text-[15px] font-[400] leading-[32.5px] text-[#525560] w-[498px]">Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,</p>
                            <p className="hidden lg:flex font-josefin text-[15px] font-[400] leading-[32.5px] text-[#525560] w-[498px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>

                        </div>
                   </div>

      

                   <div className="flex justify-center items-center space-x-[32px] mt-[61px]">
                        <MdMessage className="h-[58.367px] w-[53px]"/>
                        <FaShareAlt className="h-[58.367px] w-[53px]"/>
                    </div>

                    <p className="text-center text-[10px] lg:text-[30px] font-[400]">By Freshly Farms, on 04 Sept, 2024</p>


                   
                </div>
            </div>

            </div>

            {/* Card 5 */}
            <div className="hidden lg:flex justify-center space-x-[59px] mt-[103px] lg:h-[1264px]">
                <div className="block w-[563px] bg-white  rounded-[27px] border-solid border-[1px] border-[#00000047]/[0.28] shadow-lg">
                   <div className="flex justify-between mx-[42px]">
                        <h3 className="text-[45px] font-inter font-[700] w-[475px]"><span className="text-[#008000]">Podcast</span> - Why do People Associate Farming with Traditionalism</h3>
                        <FaCaretDown className="h-[52px] w-[52px] mt-[34px]"/>
                   </div>

                    <div className="flex justify-center ">
                        <FaVolumeUp className="h-[322px] w-[352px]"/>
                    </div>
                   
                    <div className="flex justify-center ">
                        <button className='w-[272px] h-[70px] bg-[#008000] rounded-[15px] text-white text-[25px] border-none'>View All</button>
                    </div>


                   <div className="flex justify-center mt-[40px]">
                        <div className="block ">
                            <p className="font-josefin text-[15px] font-[400] leading-[32.5px] text-[#525560] w-[498px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                            <p className="font-josefin text-[15px] font-[400] leading-[32.5px] text-[#525560] w-[498px]">Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,</p>
                            <p className="font-josefin text-[15px] font-[400] leading-[32.5px] text-[#525560] w-[498px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>

                        </div>
                   </div>

      

                   <div className="flex justify-center items-center space-x-[32px] mt-[10px]">
                        <MdMessage className="h-[58.367px] w-[53px]"/>
                        <FaShareAlt className="h-[58.367px] w-[53px]"/>
                    </div>

                    <p className="text-center text-[30px] font-[400]">By Freshly Farms, on 04 Sept, 2024</p>

                   
                </div>

                {/* Card 6 */}

            <div className="flex justify-center space-x-[59px]  lg:h-[1264px]">
                <div className="block w-[563px] bg-white  rounded-[27px] border-solid border-[1px] border-[#00000047]/[0.28] shadow-lg">
                   <div className="flex justify-between mx-[42px]">
                        <h3 className="text-[45px] font-inter font-[700] w-[475px]">Take This Quiz To Know What You Should Implement On Your Farms</h3>
                        <FaCaretDown className="h-[52px] w-[52px] mt-[34px]"/>
                   </div>

                   

                   <div className="block space-y-[96px]">
                        {/* Input 1  */}
                        <div className="flex justify-center space-x-[30px]">
                            <p className="text-[30px] font-[700] font-inter">1.</p><p className="text-[30px] font-[700] font-inter">What Is Your Farm Size?</p>
                        </div>

                        <div className="flex justify-center">
                            <textarea className="h-[128px] w-[491px] mx-auto rounded-[27px] border-solid border-[#00000047] "/>

                        </div>

                        {/* Input 2 */}

                        <div className="flex justify-center space-x-[30px]">
                            <p className="text-[30px] font-[700] font-inter">2.</p><p className="text-[30px] font-[700] font-inter">Is It In An Urban Setting??</p>
                        </div>

                        <div className="flex justify-center">
                            <textarea className="h-[128px] w-[491px] mx-auto rounded-[27px] border-solid border-[#00000047] "/>

                        </div>
                   </div>

      

                   <div className="flex justify-center items-center space-x-[32px] mt-[10px]">
                        <MdMessage className="h-[58.367px] w-[53px]"/>
                        <FaShareAlt className="h-[58.367px] w-[53px]"/>
                    </div>

                    <p className="text-center text-[30px] font-[400]">By Freshly Farms, on 04 Sept, 2024</p>

                   
                </div>
            </div>
            </div>
            
        </div>

        
        <div className='flex justify-center '> 
          <button className='w-[272px] h-[70px] bg-[#008000] rounded-[15px] mt-[62px] text-white text-[25px] border-none'>View All Articles</button>
        </div>
    </div>
  )
}

export default BlogWidgets