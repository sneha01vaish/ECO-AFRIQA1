import React, { useState } from 'react'

const Metrics = () => {
    // Metrics in Numbers
    const Grown = "30,000";
    const Produced = "5,000";
    const Harvested = "15,000";


    // States to control Hovering Behaviour
    const [isHovered, setIsHovered] = useState({
        1: false, 2: false, 3: false
    });

    // Function to toggle the Card Changes on mouse enter
    const toggleColor = (id) => {
        setIsHovered((prevState) => ({
          ...prevState,
          [id]: !prevState[id],
        }));
      };

    // Function to toggle the color on mouse leave
    const returnColor = (id) => {
        setIsHovered((!isHovered));
      }; 

  return (
    <section id="metric" className="MetricsSection  mt-[90px] lg:mt-[100px] ">
        {/*Metrics Wrapper */}    
        <div className="MetricsWrapper  grid grid-cols-3 gap-x-[50px] ">
            
            {/*1. Grown Crops */}
            <div className={`GrownCrops ${isHovered[1] ? "bg-[#008000]" : ""} block mx-[90px] h-fit w-fit cursor-pointer  border-solid border-[1px] border-[#008000] shadow-md shadow-[#00000040] rounded-[14px]`}
                    onMouseEnter={() => toggleColor(1)}
                    onMouseLeave={() => returnColor(1)}
                    >
                {/*Grown Crops Wrapper */}
                <div className={`GrownCropsWrwapper ${isHovered[1] ? "bg-metrics-homepage bg-no-repeat bg-cover bg-center" : ""} `}>
                    {/*Metrics Image */}
                    <div className={`MetricsImage ${isHovered[1] ? "w-[32px] h-[34px]": "w-[53px] h-[56px]" }  my-[8px] mx-[14px]`}>
                        <img src='/static/media/grown.png' alt='Grown Crops' className='w-full h-full' />
                    </div>
                    {/*Card Tittle */}
                    <div className={`CardTitle ${isHovered[1] ? "hidden" : "block "}  my-[56px] w-full`}>
                        <div className='TitleWrapper  transform mx-auto scale-x-[-1] bg-metrics-homepage bg-cover bg-center px-[50px]'>
                            <p className='text-center font-inter m-0 font-[700] text-[#008000] text-[40px] transform scale-y-[-1]' style={{ writingMode: 'vertical-rl' }} >GROWN</p>
                        </div>
                    </div> 
                    {/*Figure and Details */} 
                    <div className={`FigureAndDetails ${isHovered[1] ? "block transition-all transform duration-[5000ms]": "hidden" }`}>
                        {/*Metric Number */}
                        <div className='MetricsFigure  my-[85px]  mx-auto'>
                            <p className='text-center text-[#FFFFFF] text-[50px] font-[700] font-inter my-0'>{Grown}</p>
                        </div>
                        {/*Details */}
                        <div className=' my-[28px] px-[14px]'>
                            <p className='text-start font-inter font-[400] text-[14px] text-[#FFF3E5] my-0 '>Food Crops Grown By Each of Our Verified Farmer Each Year</p>
                        </div> 
                    </div> {/*Figure and Details */} 
                </div> {/*Grown Crops Wrapeer */}
            </div> {/*Grown Crops */}

            {/*2. Produced Crops */}
            <div className={`ProducedCrops ${isHovered[2] ? "bg-[#008000]" : ""} block mx-[90px] h-fit w-fit border-solid border-[1px] border-[#008000] shadow-md shadow-[#00000040] rounded-[14px]`}
                    onMouseEnter={() => toggleColor(2)}
                    onMouseLeave={() => returnColor(2)}
                    >
                {/*Grown Crops Wrapper */}
                <div className={`GrownCropsWrwapper ${isHovered[2] ? "bg-metrics-homepage bg-no-repeat bg-cover bg-center" : ""} `}>
                    {/*Metrics Image */}
                    <div className={`MetricsImage ${isHovered[2] ? "w-[32px] h-[34px]": "w-[53px] h-[56px]" }  my-[8px] mx-[14px]`}>
                        <img src='/static/media/produced.png' alt='Grown Crops' className='w-full h-full' />
                    </div>
                    {/*Card Tittle */}
                    <div className={`CardTitle ${isHovered[2] ? "hidden" : "block"}  my-[38px] w-full`}>
                        <div className='TitleWrapper  transform mx-auto scale-x-[-1] bg-metrics-homepage bg-cover bg-center px-[50px]'>
                            <p className='text-center font-inter m-0 font-[700] text-[#008000] text-[40px] transform scale-y-[-1]' style={{ writingMode: 'vertical-rl' }} >PRODUCE</p>
                        </div>
                    </div> {/*Card Title */}
                    {/*Figure and Details */} 
                    <div className={`FigureAndDetails ${isHovered[2] ? "block": "hidden" }`}>
                        {/*Metric Number */}
                        <div className='MetricsFigure  my-[85px]  mx-auto'>
                            <p className='text-center text-[#FFFFFF] text-[50px] font-[700] font-inter my-0'>{Produced} </p>
                        </div>
                        {/*Details */}
                        <div className='CardDetails my-[28px] px-[14px]'>
                            <p className='text-start font-inter font-[400] text-[14px] text-[#FFF3E5] my-0 '>Farm Produce Bags Produced Every Year By Each Farmer</p>
                        </div> 
                    </div> {/*Figure and Details */} 
                </div> {/*Produced Crops Wrapeer */}
            </div> {/*Produced Crops */}
              
            {/*3. Harvested Crops */}
            <div className={`GrownCrops ${isHovered[3] ? "bg-[#008000]" : ""} block mx-[90px] h-fit w-fit border-solid border-[1px] border-[#008000] shadow-md shadow-[#00000040] rounded-[14px]`}
                    onMouseEnter={() => toggleColor(3)}
                    onMouseLeave={() => returnColor(3)}
                    >
                {/*Grown Crops Wrapper */}
                <div className={`GrownCropsWrwapper ${isHovered[3] ? "bg-metrics-homepage bg-no-repeat bg-cover bg-center" : ""} `}>
                    {/*Metrics Image */}
                    <div className={`MetricsImage ${isHovered[3] ? "w-[32px] h-[34px]": "w-[53px] h-[56px]" }  my-[8px] mx-[14px]`}>
                        <img src='/static/media/harvest.png' alt='Grown Crops' className='w-full h-full' />
                    </div>
                    {/*Card Tittle */}
                    <div className={`CardTitle ${isHovered[3] ? "hidden" : "block"}  my-[13px] w-full`}>
                        <div className='TitleWrapper  transform mx-auto scale-x-[-1] bg-metrics-homepage bg-cover bg-center px-[50px]'>
                            <p className='text-center font-inter m-0 font-[700] text-[#008000] text-[40px] transform scale-y-[-1]' style={{ writingMode: 'vertical-rl' }} >HARVESTED</p>
                        </div>
                    </div> {/*Card Title */}
                    {/*Figure and Details */} 
                    <div className={`FigureAndDetails ${isHovered[3] ? "block": "hidden" }`}>
                        {/*Metric Number */}
                        <div className='MetricsFigure  my-[85px]  mx-auto'>
                            <p className='text-center text-[#FFFFFF] text-[50px] font-[700] font-inter my-0'>{Harvested} </p>
                        </div>
                        {/*Details */}
                        <div className=' my-[28px] px-[14px]'>
                            <p className='text-start font-inter font-[400] text-[14px] text-[#FFF3E5] my-0 '>Food Stock Harvested By Our Verified Farmers</p>
                        </div> 
                    </div> {/*Figure and Details */} 
                 </div> {/*Grown Crops Wrapeer */}
            </div> {/*Grown Crops */}          
              
        </div> {/*Metrics Wrapper Ends Here */}
    </section> //Metrics Section Ends Here
  )
}

export default Metrics