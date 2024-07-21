import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
function StriveFor() {

    useEffect(() => {
        AOS.init();
    },[])
  return (
    <div className="flex   mt-[174px]">
        <div className="block w-[100%]">
            <div className="block lg:flex justify-center items-center w-[100%]">
                <div className="flex justify-center lg:hidden ">
                    <img className="ml-[36px] h-[52px] w-[47px] lg:h-[89px] lg:w-[74px] object-cover " src="/static/media/striveFor.png"/>

                </div>

                <h2 className="text-[#008000] text-[30px] lg:text-[45px] text-center font-inter">What We Strive For </h2>
                <img className="ml-[36px] h-[52px] w-[47px] lg:h-[89px] lg:w-[74px] object-cover hidden lg:flex" src="/static/media/striveFor.png"/>
            </div>


            {/* First */}

            <div data-aos="fade-up" data-aos-duration="4000" data-aos-easing="linear" className=" w-[100%] relative">
                <div className="flex ">
                    {/* Ellipse */}
                    <img data-aos="fade-in" data-aos-duration="4000"  className=" h-[176.809px] w-[179.534px] lg:h-[425.063px] z-[10] absolute left-[28px] lg:left-[134px] top-[40px] lg:top-[90px] lg:w-[466.91px] rotate-[-21.653deg] lg:rotate-[-23.241deg]" src="/static/media/striveForEllipse1.png" alt="StriveFor2"/>
                    <img data-aos="fade-in" data-aos-duration="4000"  data-aos-delay="500" data-aos-easing="linear" className="absolute z-[20] h-[125.132px] w-[157.603px] lg:h-[296px] lg:w-[418px] left-[45px] top-[60px] lg:left-[208px] lg:top-[105px]" src="/static/media/striveForTrash.png" alt="StriveFor2"/>
                    {/* Text */}
                    <div className=" bg-black  absolute left-[214px] top-[25px] lg:top-[0px] lg:left-[602px] rounded-full h-[55px] w-[58px]  lg:h-[100px] lg:w-[100px] text-white pb-[5%] pl-[6%] lg:pl-[0px] lg:pb-[0px] lg:text-center text-[40px] lg:text-[50px]"><p className="mt-[15px] my-auto">1.</p></div>

                    <div className="block absolute lg:left-[727px] top-[270px] lg:top-[120px] w-[338px] mx-auto">
                        <p className="text-black font-inter text-[20px] mx-auto lg:text-[24px] whitespace-nowrap lg:w-[434px] font-[700]">Impact The Environment Positively</p>
                        <p className="text-black font-inter text-[15px]  lg:text-[18px]  lg:w-[457px] font-[500] ">To lead the global shift towards sustainable food production, where every meal nourishes both people and the planet, fostering a world of abundance, equality, and ecological harmony.</p>
                    </div>
                </div>
            </div>
                {/* Second */}

            <div className=" w-[100%] relative">

                <div className="flex">
                    <img data-aos="fade-in" data-aos-duration="4000" className="absolute h-[210.501px] w-[194.07px] lg:h-[495.363px] lg:w-[500.785px] top-[476px] lg:top-[650px] right-[46px] lg:right-[134px]" src="/static/media/striveForEllipse2.png" alt="Strive For Section Img 2"/>
                    <img data-aos="fade-in" data-aos-duration="4000"  data-aos-delay="500" className="absolute h-[162.364px] lg:h-[381px] w-[152.238px]  lg:w-[394px] top-[490px]  lg:top-[670px] right-[94px] lg:right-[94px]" src="/static/media/striveForGloves.png" alt="StriveFor3"/>
                </div>

                <div className=" bg-black  absolute  top-[455px] lg:top-[690px] left-[60px] lg:left-[602px] rounded-full h-[55px] w-[58px]  lg:h-[100px] lg:w-[100px] text-white pb-[5%] pl-[6%] lg:pl-[0px] lg:pb-[0px] lg:text-center text-[40px] lg:text-[50px]"><p className="mt-[15px] my-auto">2.</p></div>

                <div className="block absolute lg:left-[134px] top-[710px] lg:top-[800px] mx-auto">
                    <p className="text-black font-inter text-[20px]   lg:text-[24px] w-[338px] whitespace-nowrap lg:w-[434px] font-[700]">Sustainable Farming Practices</p>
                    <p className="text-black font-inter text-[15px] lg:text-[18px]  lg:w-[457px] font-[500]  mx-auto">To lead the global shift towards sustainable food production, where every meal nourishes both people and the planet, fostering a world of abundance, equality, and ecological harmony.</p>
                </div>

            </div>

            {/* Third */}

            <div className=" w-[100%] relative">
                <div className="flex ">
                    {/* Ellipse */}
                    <img data-aos="fade-in" data-aos-duration="4000" className="h-[176.809px] w-[179.534px] lg:h-[425.063px] z-[10] absolute left-[28px] lg:left-[114px] top-[940px] lg:top-[1290px] lg:w-[466.91px] rotate-[-21.653deg] lg:rotate-[-23.241deg]" src="/static/media/striveForEllipse3.png" alt="StriveFor2"/>
                    <img data-aos="fade-in" data-aos-duration="4000"  data-aos-delay="500" className="absolute z-[20] h-[125.132px] w-[157.603px] lg:h-[296px] lg:w-[418px] left-[45px] top-[960px] lg:left-[148px] lg:top-[1305px]" src="/static/media/striveForFarm.png" alt="StriveFor2"/>
                    {/* Text */}
                    <div className=" bg-black  absolute left-[214px] top-[925px] lg:top-[1290px] lg:left-[602px] rounded-full h-[55px] w-[58px]  lg:h-[100px] lg:w-[100px] text-white pb-[5%] pl-[6%] lg:pl-[0px] lg:pb-[0px] lg:text-center text-[40px] lg:text-[50px]"><p className="mt-[15px] my-auto">3.</p></div>

                    <div className="block absolute lg:left-[727px] top-[1170px] lg:top-[1390px] mx-auto">
                        <p className="text-black font-inter text-[20px]  lg:text-[24px] w-[338px] whitespace-nowrap lg:w-[434px] font-[700]">Community Gardens</p>
                        <p className="text-black font-inter text-[15px] lg:text-[18px]  lg:w-[457px] font-[500]  mx-auto">To lead the global shift towards sustainable food production, where every meal nourishes both people and the planet, fostering a world of abundance, equality, and ecological harmony.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StriveFor