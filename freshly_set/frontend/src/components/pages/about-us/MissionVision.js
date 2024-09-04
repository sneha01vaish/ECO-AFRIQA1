import React from 'react'

function MissionVision() {
  return (
    <section id="objectives" className="block lg:flex lg:justify-center lg:w-[100%]">
        {/* Left Side */}

        {/* Mission */}
        
        
        <div className="flex justify-center w-[288px] lg:w-[350px] items-center mx-auto">
            <div className="block">
                <div className="flex lg:w-[273px]">
                    <img className="h-[60px] w-[77px] mt-[93px] mx-auto " src="/static/media/aboutMission.png" alt="About Mission"/>

                </div>

                <div className="flex justify-center w-[350px]">
                    <div className="block">
                        <h2 className="text-[#008000] text-inter text-[45px] font-[900] ">Our Mission</h2>
                        
                        <p className="w-[281px] lg:w-[350px] font-inter text-black text-[15px] ml-auto leading-[]">To Revolutionize the agricultural landscape through innovative solutions and enhanced technologies to empower farmers while minimizing environmental impact. We are shaping a futture for agriculture to sustain our planet for generations to come</p>
                    </div>
                </div>


                <div className="flex justify-center">
                    <div className="block">
                        <img className="lg:h-[308px] w-[288px] lg:w-[290px] ml-[18px] lg:ml-0" src="/static/media/missionImg.png" alt="Mission Image"/>
                        <button className="h-[48px] w-[236px] ml-[38px] lg:ml-[25px] mt-[39px] bg-[#008000] text-white rounded-[15px] text-[25px] font-inter font-[500] border-none cursor-pointer active:scale-90 transition-all duration-500 ease-out">See More</button>

                    </div>
                    
                </div>
            </div>
            
        </div>

        {/* Right Side */}
        {/* Vision */}

        <div className="flex justify-center w-[288px] lg:w-[350px] items-center mx-auto">
            <div className="block">
                <div className="flex lg:w-[273px]">
                    <img className="h-[60px] w-[77px] mt-[93px] mx-auto " src="/static/media/aboutVision.png" alt="About Vision"/>

                </div>

                <div className="flex justify-center w-[350px]">
                    <div className="block">
                        <h2 className="text-[#008000] text-inter text-[45px] font-[900] ">Our Vision</h2>
                        
                        <p className="w-[281px] lg:w-[350px] font-inter text-black text-[15px] ml-auto leading-[]">To lead the global shift towards sustainable food production, where every meal nourishes both people and the planet, fostering a world of abundance, equality, and ecological harmony.</p>
                    </div>
                </div>


                <div className="flex justify-center">
                    <div className="block">
                        <img className="lg:h-[308px] w-[288px] lg:w-[290px] ml-[18px] lg:ml-0" src="/static/media/visionImg.png" alt="Vision Image"/>
                        <button className="h-[48px] w-[236px] ml-[38px] lg:ml-[25px] mt-[39px] bg-[#008000] text-white rounded-[15px] text-[25px] font-inter font-[500] border-none cursor-pointer active:scale-90 transition-all duration-500 ease-out">See More</button>

                    </div>
                    
                </div>
            </div>
            
        </div>
       
    </section>
  )
}

export default MissionVision