import React from 'react'
import "./Hero.css"
import useSectionObserver from '../../UseSectionObserver';

function Hero({ id }) {
    useSectionObserver(`#${id}`);

    console.log("hero id", id)
  return (
    <div className="heroBg">
        

        <div className="heroComps">
            {/* <img className="bgSm" src="/images/small_bg.png"/> */}
        {/* <div className="heroTest"></div> */}

            <h1 className="font-inter text-[30px] text-white">Urbanization Farming and    
            Vertical Farming</h1>

            <p className="font-inter text-[#FFF3E5] lg:w-[806px] text-center font-[400]">Freshly Farms is known for urbanizing the food farming industry especially on horticulture. It helps farmers understand their crops and how to manage them to grow better</p>
                <div className="heroBtn">
                    <button className="h-[66px] w-[242px] rounded-[15px] text-black text-[15px] border-none hover:shadow-lg cursor-pointer active:scale-90 transition-all duration-500 ease-out">GET STARTED</button>

                </div>
            <div className="">
                {/* <img className="heroImgBg" src="/images/heroImage.png" alt="HeroImg"/> */}
                <img className="heroImgBg" src={`static/media/heroImage.png`} alt="HeroImg" />


            </div>

                <img className="heroImg" src={`static/media/HeroImg.png`} alt="Hero img"/>


          
        </div>

    </div>
  )
}

export default Hero