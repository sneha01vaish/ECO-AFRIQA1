import React from 'react'
import NavAuthenticated from '../../Nav/NavAuthenticated'
import ProductsSearchBar from './ProductsSearchBar'
import FarmCard from './FarmCard'

function FarmingSystemsDetail() {
  return (
    <div>
        <NavAuthenticated />

        <div className="mt-[88px]">
         <ProductsSearchBar />

        </div>

        <div className="flex justify-center w-[100%] mt-[120px]">
                  <div className="grid grid-cols-2 gap-x-[36.14px]  gap-y-[20px] lg:flex lg:space-x-[20px]">
                      <FarmCard number={1} img="/static/media/veggieRack.png" title="Hydroponics System" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut."/>
                      <FarmCard number={2} img="/static/media/veggieRack2.png" title="Vertical System" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut."/>
                      <FarmCard number={4} img="/static/media/veggieFish.png" title="Aquaponics System" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut."/>

                      <FarmCard number={5} img="/static/media/veggieRack.png" title="Hydroponics System" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut."/>
                      <FarmCard number={6} img="/static/media/veggieRack2.png" title="Vertical System" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut."/>
                      <FarmCard number={7} img="/static/media/veggieFish.png" title="Aquaponics System" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut."/>
                  </div>
        </div>

    </div>
  )
}

export default FarmingSystemsDetail