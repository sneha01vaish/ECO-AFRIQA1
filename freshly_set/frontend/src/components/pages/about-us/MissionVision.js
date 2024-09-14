import React from 'react'

function MissionVision() {
  return (
    <section id="objectives" className="mt-[60px] lg:mt-[80px] mx-[12px] lg:mx-[180px]">
        <div className='Mission-VisionWrapper block lg:flex justify-center'>    
            {/* Left Side - Mission */}  
            <div className="Missions block lg:mr-[55px]">
                <div className="MissionWrapper block mx-[20px] lg:mx-[50px]">
                    <div className="MissionIcon mx-auto h-[60px] w-[77px]">
                        <img src="/static/media/aboutMission.png" alt="About Mission" className="w-full h-full " />
                    </div>
                    {/*Mission Heading */}
                    <div className="MissionHeading">
                        <h2 className="text-[#008000] text-center font-inter text-[30px] lg:text-[45px] font-[900] ">Our Mission</h2>
                    </div>
                    {/*Mission Descriptions */}
                    <div className='MissionDescriptions '>
                        <p className="text-start font-inter text-black text-[15px] lg:text-[20px] font-[600] ">To Revolutionize the agricultural landscape through innovative solutions and enhanced technologies to empower farmers while minimizing environmental impact. We are shaping a futture for agriculture to sustain our planet for generations to come</p>
                    </div> 
                    {/*Mission Image */}
                    <div className="MissionImage mx-[10px] lg:mx-auto lg:h-[308px] w-[280px] lg:w-[304px]">
                        <img  src="/static/media/missionImg.png" alt="Mission" className="w-full h-full"/>
                    </div>      
                </div> {/*Mission Wrapper Ends Here */}
            </div> {/*Mission Card Ends Here */}
        
            {/*Right Side - Vision */}
            <div className="Missions block lg:ml-[55px] mt-[50px] lg:mt-0">
                <div className="VisionWrapper block  mx-[20px] lg:mx-[50px]">
                    <div className="MissionIcon mx-auto h-[60px] w-[77px]">
                        <img src="/static/media/aboutVision.png" alt="About Mission" className="w-full h-full " />
                    </div>
                    {/*Mission Heading */}
                    <div className="MissionHeading">
                        <h2 className="text-[#008000] text-center font-inter text-[30px] lg:text-[45px] font-[900] ">Our Vision</h2>
                    </div>
                    {/*Mission Descriptions */}
                    <div className='MissionDescriptions '>
                        <p className="text-start font-inter text-black text-[15px] lg:text-[20px] font-[600] ">To Revolutionize the agricultural landscape through innovative solutions and enhanced technologies to empower farmers while minimizing environmental impact. We are shaping a futture for agriculture to sustain our planet for generations to come</p>
                    </div> 
                    {/*Mission Image */}
                    <div className="MissionImage mx-auto lg:h-[308px] w-[280px] lg:w-[304px]">
                        <img  src="/static/media/VisionImg.png" alt="Mission" className="w-full h-full"/>
                    </div>      
                </div> {/*Mission Wrapper Ends Here */}
            </div> {/*Mission Card Ends Here */}

        </div>  {/*Mission and Vision Wrapper Ends Here */} 
    </section> //Mission and Vision Section Ends Here
  )
}

export default MissionVision