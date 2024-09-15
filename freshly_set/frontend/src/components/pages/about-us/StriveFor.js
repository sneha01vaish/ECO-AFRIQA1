import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
function StriveFor() {

    useEffect(() => {
        AOS.init();
    },[])
  return (
    <div className="flex h-[1500px] lg:h-[1800px] mt-[140px]  ">
        <div className="StriveForWrapper block w-[100%] mx-[6px] lg:mx-0">
            {/*Main Title And Image */}
            <div className="TitleAndImage block lg:flex justify-center items-center w-[100%]">
                <div className="flex justify-center lg:hidden "> {/*Only Visible on Mobile Version */}
                    <img className="ml-[36px] h-[52px] w-[47px] lg:h-[89px] lg:w-[74px] object-cover " src="/static/media/striveFor.png"/>
                </div>
                <h2 className="StriveForTitle text-[#008000] text-[30px] lg:text-[45px] text-center font-inter">What We Strive For </h2>
                <img className="StriveForImage ml-[36px] h-[52px] w-[47px] lg:h-[89px] lg:w-[74px] object-cover hidden lg:flex" src="/static/media/striveFor.png"/> {/*Only Visible on Desktop Version */}
            </div> {/*Main Title and Image Ends */}

            {/* First Group*/}
            <div className="FirstGroup w-[100%] relative" data-aos="fade-up" data-aos-duration="4000" data-aos-easing="linear" >
                <div className="FirstGroupWrapper flex ">
                    {/* Ellipse */}
                    <img data-aos="fade-in" data-aos-duration="4000"  className=" h-[176.809px] w-[179.534px] lg:h-[425.063px] z-[10] absolute left-[28px] lg:left-[134px] top-[40px] lg:top-[90px] lg:w-[466.91px] rotate-[-21.653deg] lg:rotate-[-23.241deg]" src="/static/media/striveForEllipse1.png" alt="StriveFor2"/>
                    <img data-aos="fade-in" data-aos-duration="4000"  data-aos-delay="500" data-aos-easing="linear" className="absolute z-[20] h-[125.132px] w-[157.603px] lg:h-[296px] lg:w-[418px] left-[45px] top-[60px] lg:left-[208px] lg:top-[105px]" src="/static/media/striveForTrash.png" alt="StriveFor2"/>
                    {/* Number One */}
                    <div className="GroupNumber bg-black  absolute left-[214px] top-[25px] lg:top-[0px] lg:left-[602px] rounded-full h-[60px] lg:h-[100px] w-[60px] lg:w-[100px]">
                        <p className="font-inter font-[700] text-white p-[8px] lg:p-[10px] my-0 text-center text-[40px] lg:text-[64px] ">1.</p>
                    </div>
                    {/*Group Text */}
                    <div className="GroupText block absolute -mt-[14px] lg:mt-0 lg:left-[727px] top-[270px] lg:top-[120px] w-[338px] mx-[8px] lg:mx-auto">
                        <p className="text-start text-black font-inter text-[20px] mx-auto lg:text-[24px] whitespace-nowrap lg:w-[434px] font-[700]">Impact The Environment Positively</p>
                        <p className="text-start text-black font-inter text-[15px] -mt-[10px] lg:mt-0  lg:text-[18px]  lg:w-[457px] font-[500] ">To lead the global shift towards sustainable food production, where every meal nourishes both people and the planet, fostering a world of abundance, equality, and ecological harmony.</p>
                    </div>
                </div> {/*FirstGroupWrapper Ends */}
            </div> {/*FirstGroup Ends */}
              
            {/* Second Group */}
            <div className="SecondGroup w-[100%] relative">
                {/* Ellipse */}
                <div className="flex">
                    <img data-aos="fade-in" data-aos-duration="4000" className="absolute h-[210.501px] w-[194.07px] lg:h-[495.363px] lg:w-[500.785px] top-[476px] lg:top-[650px] right-[46px] lg:right-[134px]" src="/static/media/striveForEllipse2.png" alt="Strive For Section Img 2"/>
                    <img data-aos="fade-in" data-aos-duration="4000"  data-aos-delay="500" className="absolute h-[162.364px] lg:h-[381px] w-[152.238px]  lg:w-[394px] top-[490px]  lg:top-[670px] right-[94px] lg:right-[94px]" src="/static/media/striveForGloves.png" alt="StriveFor3"/>
                </div>
                {/* Number Two */}
                <div className="GroupNumber bg-black  absolute  top-[455px] lg:top-[690px] -mt-[14px] lg:mt-0 left-[60px] lg:left-[602px] rounded-full h-[60px] lg:h-[100px] w-[60px] lg:w-[100px]">
                    <p className="font-inter font-[700] text-white p-[8px] lg:p-[10px] my-0 text-center text-[40px] lg:text-[64px] ">2.</p>
                </div>
                {/*Group Text */}
                <div className="GroupText block absolute lg:left-[134px] top-[710px] lg:top-[800px] mx-[8px] lg:mx-auto">
                    <p className="text-start text-black font-inter text-[20px]   lg:text-[24px] w-[338px] whitespace-nowrap lg:w-[434px] font-[700]">Sustainable Farming Practices</p>
                    <p className="text-start text-black font-inter text-[15px] -mt-[10px] lg:mt-0 lg:text-[18px]  lg:w-[457px] font-[500]  mx-auto">To lead the global shift towards sustainable food production, where every meal nourishes both people and the planet, fostering a world of abundance, equality, and ecological harmony.</p>
                </div>
            </div> {/*Second Group Ends */}

            {/* Third Group*/}
            <div className="ThirdGroup w-[100%] relative">
                <div className="ThirdGroupWrapper flex ">
                    {/* Ellipse */}
                    <img data-aos="fade-in" data-aos-duration="4000" className="h-[176.809px] w-[179.534px] lg:h-[425.063px] z-[10] absolute left-[28px] lg:left-[114px] top-[940px] lg:top-[1290px] lg:w-[466.91px] rotate-[-21.653deg] lg:rotate-[-23.241deg]" src="/static/media/striveForEllipse3.png" alt="StriveFor2"/>
                    <img data-aos="fade-in" data-aos-duration="4000"  data-aos-delay="500" className="absolute z-[20] h-[125.132px] w-[157.603px] lg:h-[296px] lg:w-[418px] left-[45px] top-[960px] lg:left-[148px] lg:top-[1305px]" src="/static/media/striveForFarm.png" alt="StriveFor2"/>
                    {/*Number Three*/}
                    <div className=" bg-black  absolute left-[214px] top-[925px] lg:top-[1290px] lg:left-[602px] rounded-full h-[60px] lg:h-[100px] w-[60px] lg:w-[100px]">
                        <p className="font-inter font-[700] text-white p-[8px] lg:p-[10px] my-0 text-center text-[40px] lg:text-[64px] ">3.</p>
                    </div>
                    {/*Group Text */}
                    <div className="GroupText block absolute lg:left-[727px] top-[1170px] lg:top-[1390px] mx-[8px] lg:mx-auto">
                        <p className="text-start text-black font-inter text-[20px]  lg:text-[24px] w-[338px] whitespace-nowrap lg:w-[434px] font-[700]">Community Gardens</p>
                        <p className="text-start text-black font-inter text-[15px] -mt-[10px] lg:mt-0 lg:text-[18px]  lg:w-[457px] font-[500]  mx-auto">To lead the global shift towards sustainable food production, where every meal nourishes both people and the planet, fostering a world of abundance, equality, and ecological harmony.</p>
                    </div>
                </div>{/*Third Group Wrapper Ends */}
            </div> {/*Third Group Ends */}
              
        </div> {/*Strive for Wrapper ends Here */}
    </div> // Strive for Section Ends
  )
}

export default StriveFor