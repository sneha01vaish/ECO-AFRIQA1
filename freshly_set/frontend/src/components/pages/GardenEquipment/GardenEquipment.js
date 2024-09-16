import React from 'react'
import Nav from '../../Nav/Navbar'
import SearchBar from './SearchBar'
import CountdownTimer from '../farm-produce/CountdownTimer'
import Categories from './Categories'
import Banner from './Banner'

function GardenEquipment() {
  return (
    <div>
        <Nav />

        <div className="lg:mt-[180px]">
            {/* <SearchBar /> */}
            <div className="">
                {/* Banners */}
                <div className="block lg:flex  justify-center lg:space-x-[30px] mt-[150px] lg:mt-[100px]">
                    <div className="flex h-[305px] w-[387.53px] lg:h-[463px] lg:w-[672px] bg-[#004424] rounded-[20px] lg:pt-[56px] pl-[14.42px] lg:pl-[25px] lg:pr-[20px]">
                        {/* Left Side */}
                        <div className="block">
                            <h3 className="font-inter text-[11.53px] text-white/[57%] lg:text-[20px]">Launch Sale</h3>

                            <h4 className="text-white font-inter font-extrabold w-[197.22px] lg:w-[342px] text-[17.3px] lg:text-[30px]"><span className="text-[#FF0C1A]">60%</span>Discount on Back Sprayers to the first 500 new users on Freshly</h4>

                            <h3 className="font-inter text-[11.53px] text-white/[57%] lg:text-[20px]">Launch Sale</h3>
                            <h3 className="font-inter text-[11.53px] text-[#00AA5B] lg:text-[20px]">Shop Now</h3>

                        </div>


                        {/* Right Side */}


                        <div className="">
                            <img className="lg:h-[323px] lg:w-[340px] h-[212px] w-[196px] object-cover" src="/static/media/knapsack.png" alt="Knapsack sprayer"/>
                        </div>

                    </div>

                    <div className="block lg:space-y-[66px]  lg:px-[0px]">
                        {/* Right side */}
                        <div className="flex mx-auto pl-[20px] lg:pl-[20px] pr-[45px] lg:pr-[42px] lg:pb-[25px] bg-[#E7D6D9] rounded-[20px] "> 

                            <div className="flex ">
                                {/* Left Side */}
                                <div className="block space-y-[40px]">
                                    <h3 className="font-inter text-[11.53px] text-[#000000]/[50%] lg:text-[20px]">Launch Sale</h3>
                                    <h4 className="text-black font-inter font-extrabold w-[197.22px] lg:w-[342px] text-[17.3px] lg:text-[30px]">Vases for <span className="text-[#FF0C1A]">KSH 300</span></h4>
                                    <h3 className="font-inter text-[11.53px] text-[#00AA5B] lg:text-[20px]">Shop Now</h3>

                                </div>

                                <div>
                                    {/* Right Side */}

                                    <img className="h-[97.67px] w-[39.39px] lg:h-[181px] lg:w-[73px] object-cover" src="/static/media/vase.png" alt="Vase"/>
                                </div>
                            </div>

                        </div>


                        <div className="block bg-[#F4BF6F]/[0.47] rounded-[20px] pt-[25px] pb-[39px] ">
                            <h2 className="freshlyGreenText text-[31.67px] font-[700] text-center font-inter">LAUNCH SALE ENDS IN :</h2>

                            <div className="flex justify-center">
                                <CountdownTimer />

                            </div>
                        </div>
                    </div>
                </div>
               
            </div>

        <Categories />

        <Banner />
        </div>
    </div>
  )
}

export default GardenEquipment