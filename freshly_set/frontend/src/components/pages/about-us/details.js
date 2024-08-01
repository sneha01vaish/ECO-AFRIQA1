import React from 'react'
import Nav from '../../Nav/Navbar'

function Details() {
  return (
    <div>
        <Nav />

        <div className="block mt-[150px]  lg:mt-[200px]">

            {/* Team  */}
            <div className="">
                <h3 className="text-[30px] font-inter font-[900] text-[#008000] text-center lg:text-start ml-[150px]">EXECUTIVE TEAM</h3>

                <p className="text-[#525560] mx-auto  font-josfin text-[15px] font-[700] leading-[32.5px] w-[325px] lg:w-[926px] text-start ml-[150px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                <p className="text-[#525560] mx-auto  font-josfin text-[15px] font-[700] leading-[32.5px] w-[325px] lg:w-[926px] text-start ml-[150px]">Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,</p>

                <div className="block">
                    <div className="grid grid-cols-2 lg:grid-cols-3 lg:ml-[80px] gap-x-[] gap-y-[38px] lg:gap-y-[0px]  lg:mt-[100px] mx-auto">
                        <div className="block  w-[165px] lg:w-[286px]">
                            <img className="h-[232.56px] lg:h-[380px] w-[165px] lg:w-[286px] grayscale hover:grayscale-0 transform transition-all duration-500 cursor-pointer" src="/static/media/teamMember2.png" alt="MeetTeamImg"/>
                            <p className="text-[15px] lg:text-[24px] text-black font-inter font-[700] text-center">Malaika Muchiri</p>
                            <p className="text-[12px] lg:text-[20px] text-[#008000] font-inter font-[700] text-center">Chief Executive Officer</p>
                        </div>

                        <div className="block  w-[165px] lg:w-[286px]">
                            <img className="h-[232.56px] lg:h-[380px] w-[165px] lg:w-[286px] grayscale hover:grayscale-0 transform transition-all duration-500 cursor-pointer" src="/static/media/teamMember2.png" alt="MeetTeamImg"/>
                            <p className="text-[15px] lg:text-[24px] text-black font-inter font-[700] text-center">Malaika Muchiri</p>
                            <p className="text-[12px] lg:text-[20px] text-[#008000] font-inter font-[700] text-center">Chief Executive Officer</p>
                        </div>



                        <div className="block  w-[165px] lg:w-[286px] mx-auto">
                            <img className="h-[232.56px] lg:h-[380px] w-[165px] lg:w-[286px] grayscale hover:grayscale-0 transform transition-all duration-500 cursor-pointer" src="/static/media/teamMember2.png" alt="MeetTeamImg"/>
                            <p className="text-[15px] lg:text-[24px] text-black font-inter font-[700] text-center">Malaika Muchiri</p>
                            <p className="text-[12px] lg:text-[20px] text-[#008000] font-inter font-[700] text-center">Chief Executive Officer</p>
                        </div>
                        

                    </div>

   
                </div>
            </div>




            {/* Team 2 */}


            {/* Team  */}
            <div className="mt-[130px] w-[100%]">
                <div className="flex justify-end lg:pr-[95px]">
                    <div className="block">
                    <h3 className="text-[30px] font-inter font-[900] text-[#008000] ">EXECUTIVE TEAM</h3>

                    <p className="text-[#525560]  lg:mx-[0px] font-josfin text-[15px] font-[700] leading-[32.5px] w-[325px] lg:w-[926px] text-start ml-[150px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                    <p className="text-[#525560]  lg:mx-[0px] font-josfin text-[15px] font-[700] leading-[32.5px] w-[325px] lg:w-[926px] text-start ml-[150px]">Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,</p>

                    </div>
                </div>
              
                <div className="flex justify-center w-[100%]">
                    <div className="block">
                        <div className="grid grid-cols-2 lg:grid-cols-2 lg:gap-x-[122px] gap-x-[] gap-y-[38px] lg:gap-y-[0px] lg:mt-[100px] mx-auto">
                            <div className="block  w-[165px] lg:w-[286px]">
                                <img className="h-[232.56px] lg:h-[380px] w-[165px] lg:w-[286px] grayscale hover:grayscale-0 transform transition-all duration-500 cursor-pointer" src="/static/media/teamMember2.png" alt="MeetTeamImg"/>
                                <p className="text-[15px] lg:text-[24px] text-black font-inter font-[700] text-center">Malaika Muchiri</p>
                                <p className="text-[12px] lg:text-[20px] text-[#008000] font-inter font-[700] text-center">Chief Executive Officer</p>
                            </div>

                            <div className="block  w-[165px] lg:w-[286px]">
                                <img className="h-[232.56px] lg:h-[380px] w-[165px] lg:w-[286px] grayscale hover:grayscale-0 transform transition-all duration-500 cursor-pointer" src="/static/media/teamMember2.png" alt="MeetTeamImg"/>
                                <p className="text-[15px] lg:text-[24px] text-black font-inter font-[700] text-center">Malaika Muchiri</p>
                                <p className="text-[12px] lg:text-[20px] text-[#008000] font-inter font-[700] text-center">Chief Executive Officer</p>
                            </div>

                        </div>

    
                    </div>
                </div>
               
            </div>
            
        </div>
    </div>
)
}

export default Details