const ProduceBanner = () => {
    return(
        <div className="relative lg:h-[410px] lg:w-[100%] freshlyGreen rounded-[16px]">
            
            {/* Left Images */}
            <div className="">
                <img className="absolute lg:bottom-[0px] lg:-left-[10px] z-[15]" src="/static/media/produceBanner1.png" alt="ProduceBannerFarmerSingle"/>
                <img className="absolute lg:top-[30px] lg:-left-[25px] z-[10] " src="/static/media/produceBanner3.png" alt="ProduceBanner2Farmer"/>
                <img className="absolute lg:-bottom-[0px] lg:left-[30px] z-[15] " src="/static/media/produceBanner2.png" alt="ProduceBannerFarmersMultiple"/>
            </div>

            {/* Right Text */}

            <div className="absolute block lg:left-[450px]">
                <h3 className="text-[30px] font-inter font-[700] text-white lg:w-[674.93px]">Our Produce comes from Freshly Farms and our Verified Farmers Farms</h3>
                <h4 className="text-[25px] font-inter text-white">Want to become a verified farmer ?</h4>

                <button className="bg-white font-inter freshlyGreenText lg:h-[52px] lg:w-[144px] rounded-[9px] text-[20px] font-[900] border-none">APPLY</button>
            </div>
        </div>
    )
}

export default ProduceBanner