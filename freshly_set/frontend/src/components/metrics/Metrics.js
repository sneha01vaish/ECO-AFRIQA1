import React from 'react'

const Metrics = () => {
  return (
    <section className="w-[90%] mx-auto">
        <div className="flex flex-wrap justify-between items-center gap-8 p-6">

            <div className="flex justify-start">
                <img src="/static/media/logo2.png" className="w-8 h-8" alt="harvested quantities" />
                <div className="">
                    <h2 className="font-bold text-green-800 m-0">Harvested</h2>
                    <h2 className="font-bold text-red-800 m-0">10,000</h2>
                </div>
            </div>

            <div className="flex justify-start">
                <img src="/static/media/logo2.png" className="w-8 h-8" alt="harvested quantities" />
                <div className="">
                    <h2 className="font-bold text-green-800 m-0 text-nowrap">Food Grown</h2>
                    <h2 className="font-bold text-red-800 m-0">10,000</h2>
                </div>
            </div>

            <div className="flex justify-start">
                <img src="/static/media/logo2.png" className="w-8 h-8" alt="harvested quantities" />
                <div className="">
                    <h2 className="font-bold text-green-800 m-0 text-nowrap">Food Produced</h2>
                    <h2 className="font-bold text-red-800 m-0">10,000</h2>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Metrics