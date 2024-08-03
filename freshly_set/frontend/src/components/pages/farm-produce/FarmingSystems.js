import React from 'react'
import FarmCard from './FarmCard'

function FarmingSystems() {
  return (
    <div className="block">
        <div className="flex justify-center items-center">
            <div className="block">
                <h3 className="text-[25px] lg:text-[40px] font-[900] font-inter text-[#008000] text-center">POPULAR FARMING SYSTEMS</h3>

                {/* Farm Cards */}
                <div className="block space-y-[30px] lg:space-y-[41px]">
                    <FarmCard number={1} img="/static/media/systems1.png" title="Hydroponics System" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut."/>
                    <FarmCard number={2} img="/static/media/systems1.png" title="Hydroponics System" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut."/>
                    <FarmCard number={3} img="/static/media/systems3.png" title="Hydroponics System" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut."/>
                    <FarmCard number={4} img="/static/media/systems4.png" title="Hydroponics System" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut."/>
                </div>
              

            </div>
        </div>
    </div>
  )
}

export default FarmingSystems