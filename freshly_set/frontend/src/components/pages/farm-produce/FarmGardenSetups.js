import React from 'react'
import FarmCard from './FarmCard'

function FarmGardenSetups() {
  return (
    <div className="block">
        <div className="flex justify-center items-center">
            <div className="block">
            <h3 className="text-[25px] lg:text-[40px] font-[900] font-inter text-[#008000] text-center">POPULAR GARDEN SYSTEMS</h3>

                {/* Farm Cards */}
                <div className="grid grid-cols-2 gap-x-[36.14px]  gap-y-[20px] lg:flex lg:space-x-[20px]">
                    <FarmCard number={1} img="/static/media/gardens1.png" title="Raised Bed Gardens" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut."/>
                    <FarmCard number={2} img="/static/media/gardens2.png" title="Container Gardens" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut."/>
                    <FarmCard number={3} img="/static/media/gardens3.png" title="Square Root Gardens" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut."/>
                </div>
              

            </div>
        </div>
    </div>
      )
}

export default FarmGardenSetups