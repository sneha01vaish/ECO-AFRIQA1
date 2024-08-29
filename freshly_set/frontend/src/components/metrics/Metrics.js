import React from 'react'

const Metrics = () => {
  return (
    <section id="metric" className="w-[100%] flex justify-center mt-[89px] lg:mt-[203px]">
        <div className="block lg:flex flex-wrap justify-between items-center lg:space-x-[140px] space-y-[38px] p-6">

            <div className="flex justify-start items-center">
                <img src="/static/media/harvest.png" className="w-[63px] h-[69px] mx-1" alt="harvested quantities" />
                <div className="">
                    <h2 className="font-inter font-[700] text-[#008000] m-0">Harvested</h2>
                    <h2 className="font-inter font-[700] text-[#FF0C1A] m-0">10,000</h2>
                </div>
            </div>

            <div className="flex justify-start items-center">
                <img src="/static/media/grown.png" className="w-[63px] h-[69px] mx-1" alt="grown food" />
                <div className="">
                    <h2 className="font-bold text-[#008000] m-0 text-nowrap">Food Grown</h2>
                    <h2 className="font-bold text-[#FF0C1A] m-0">10,000</h2>
                </div>
            </div>

            <div className="flex justify-start items-center">
                <img src="/static/media/produced.png" className="w-[63px] h-[69px] mx-1" alt="food produced" />
                <div className="">
                    <h2 className="font-bold text-[#008000] m-0 text-nowrap">Food Produced</h2>
                    <h2 className="font-bold  text-[#FF0C1A] m-0">10,000</h2>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Metrics