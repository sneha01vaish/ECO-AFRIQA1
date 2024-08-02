import React from 'react'

function ProductsHero() {
  return (
    <div className="block overflow-x-hidden">
        <div className="mt-[130px] relative h-[415px] lg:h-[667px] w-[100%] bg-hero-products  bg-cover bg-no-repeat mix-blend-luminosity ">
            

            <div className="absolute block  z-[25] lg:top-[192px]  lg:left-[69px] lg:w:[592px] rounded-[16px] bg-[#A6B1AD99]/[60%] lg:px-[28px]">
                <h3 className="text-black text-[35px] font-inter font-[900] w-[592px]">SHOP GARDEN SETUPS AND FARMING SYSTEMS</h3>

                <div className="flex space-x-[38px]">
                    <p className="text-[16px] font-josefin text-black font-[600] leading-[20.8px] w-[258px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                    <p className="text-[16px] font-josefin text-black font-[600] leading-[20.8px] w-[258px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                </div>
            </div>

            <button className="absolute lg:top-[275px] left-[865px] lg:h-[71px] lg:w-[266px] bg-[#A6B1AD99]/[0.65] rounded-[15px] border-none text-black text-[25px] font-inter font-[900]">Request Invoice</button>

        </div>

        <div className="flex space-x-[73px] justify-center lg:mt-[32px]">
            {/* Icon 1 */}
            <div className="flex space-x-[21px] cursor-pointer ">
                {/* Left side */}

                <img className="h-[40px] w-[40px]" src="/static/media/productInvoice.png" alt="Product Invoice"/>

                {/* Right side */}

                <div className="block">
                    <p className="text-black font-inter font-[900] text-[16px]">Request Invoice</p>
                    <p className="text-[#0000008F]/[56%] w-[144px] -mt-[7px]">Receive it in your e-mai or Phone Number</p>
                </div>
            </div>


            {/* Icon 2 */}
            <div className="flex space-x-[21px] cursor-pointer ">
                {/* Left side */}

                <img className="h-[40px] w-[40px]" src="/static/media/productSend.png" alt="Product Invoice"/>

                {/* Right side */}

                <div className="block">
                    <p className="text-black font-inter font-[900] text-[16px]">Give a feedback on your choice</p>
                    <p className="text-[#0000008F]/[56%] w-[239px] -mt-[7px]">Send what garden setup or farming system you have decided to buy</p>
                </div>
            </div>



            {/* Icon 3 */}
            <div className="flex space-x-[21px] cursor-pointer ">
                {/* Left side */}

                <img className="h-[40px] w-[40px]" src="/static/media/productPay.png" alt="Product Invoice"/>

                {/* Right side */}

                <div className="block">
                    <p className="text-black font-inter font-[900] text-[16px]">Pay for your choice</p>
                    <p className="text-[#0000008F]/[56%] w-[170px] -mt-[7px]">Pay for the farming system or garden setup you have chosen</p>
                </div>
            </div>





            {/* Icon 4 */}
            <div className="flex space-x-[21px] cursor-pointer ">
                {/* Left side */}

                <img className="h-[40px] w-[40px]" src="/static/media/productWrite.png" alt="Product Invoice"/>

                {/* Right side */}

                <div className="block">
                    <p className="text-black font-inter font-[900] text-[16px]">Request Invoice</p>
                    <p className="text-[#0000008F]/[56%] w-[144px] -mt-[7px]">Receive it in your e-mai or Phone Number</p>
                </div>
            </div>
        </div>
    </div>
  
  )
}

export default ProductsHero