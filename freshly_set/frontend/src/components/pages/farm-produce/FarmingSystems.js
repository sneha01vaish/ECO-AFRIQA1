import React, { useContext } from 'react'
import FarmCard from './FarmCard'
import { ModalToggleContentsContext } from '../../context/PageContext'

function FarmingSystems() {
  const [modalToggleContents, setModalToggleContents]  = useContext(ModalToggleContentsContext)

  return (
    <div className="block overflow-x-hidden py-[30px]">
        <div className="flex justify-center items-center">
            <div className="block">
                <h3 className="text-[25px] lg:text-[40px] font-[900] font-inter text-[#008000] text-center">POPULAR FARMING SYSTEMS</h3>

                {/* Farm Cards */}
                <div className="flex justify-center w-[100%]">
                  <div className="grid grid-cols-2 gap-x-[36.14px]  gap-y-[20px] lg:flex lg:space-x-[20px]">
                    {
                      modalToggleContents.map((card, index) => (
                        <FarmCard key={index} index={index} number={1} img={card.img} title={card.title} body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut."/>

                      ))
                    }
                      {/* <FarmCard number={2} img="/static/media/veggieRack2.png" title="Vertical System" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut."/>
                      <FarmCard number={4} img="/static/media/veggieFish.png" title="Aquaponics System" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut."/> */}
                  </div>
                </div>
                
              

            </div>
        </div>
    </div>
  )
}

export default FarmingSystems