import React from 'react'

function StriveFor() {
  return (
    <div className="flex   mt-[174px]">
        <div className="block w-[100%]">
            <div className="flex justify-center items-center w-[100%]">
                <h2 className="text-[#008000] text-[45px] text-center font-inter">What We Strive For </h2>
                <img className="ml-[36px] lg:h-[89px] lg:w-[74px] object-cover" src="/static/media/striveFor.png"/>
            </div>


            <div className=" w-[100%] relative">
                <div className="flex ">
                    <img className="h-[425.063px] z-[10] absolute left-[134px] top-[90px] w-[466.91px] rotate-[-23.241deg]" src="/static/media/striveForEllipse1.png" alt="StriveFor2"/>
                    <img className="absolute z-[20] left-[208px] top-[105px]" src="/static/media/striveForTrash.png" alt="StriveFor2"/>
                    {/* Text */}
                    <div className="bg-black  absolute lg:left-[602px] rounded-full h-[100px] w-[100px] text-white text-center  text-[50px]"><p className="mt-[15px] my-auto">1.</p></div>

                    <div className="block absolute lg:left-[727px] lg:top-[120px]">
                        <p className="text-black font-inter text-[24px] w-[434px] font-[700]">Impact The Environment Positively</p>
                        <p className="text-black font-inter text-[18px] w-[457px] font-[500]">To lead the global shift towards sustainable food production, where every meal nourishes both people and the planet, fostering a world of abundance, equality, and ecological harmony.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StriveFor