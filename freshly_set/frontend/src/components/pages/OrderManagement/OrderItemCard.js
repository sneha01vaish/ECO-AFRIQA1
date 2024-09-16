import React from "react";

function OrderItemCard({img, category, name, quantity, status}) {
    return (
        <div className="OrderItemCard mt-[16px] lg:mt-[20px]">
            <div className="OrderItemWrapper grid grid-cols-2 gap-[30px]">
                {/*Item Picture, Category and Name */}
                <div className="ItemPictureAndName block">
                    <div className="ItemPictureAndNameWrapper flex justify-start">
                        {/*Item Picture Card */}
                        <div className="ItemPictureCard rounded-[6px] bg-[#00AA5B1A] mr-[4px] lg:mr-[20px] ">
                            <div className="PictureWrapper w-[35px] lg:w-[70px] h-[28px] lg:h-[58px] py-[10px] lg:py-[20px] px-[10px] "> 
                                <img src={img} alt={name} className="w-full h-full" />
                            </div>
                        </div>
                        {/*Item category */}
                        <div className="ItemCategory my-[22px] lg:my-[45px] mr-[2px] lg:mr-[6px] ">
                            <p className="text-start font-inter font-[700] text-[10px] lg:text-[14px] text-[#008000] my-0 ">{category}</p>
                        </div>
                        {/*Period Seperator */}
                        <div className="PeriodSeperator my-[22px] lg:my-[45px] mr-[2px] lg:mr-[6px]">
                            <p className="text-start font-inter font-[700] text-[10px] lg:text-[14px] text-[#000000] my-0 "> . </p>
                        </div>
                        {/*Item Name */}
                        <div className="ItemName my-[22px] lg:my-[45px] mr-[2px] lg:mr-[6px] ">
                            <p className="text-start font-inter font-[700] text-[10px] lg:text-[14px] text-[#000000] my-0 ">{name}</p>
                        </div>
                        
                    </div> {/*Item Picture Wrapper Ends Here */}
                </div> {/*Item Picture and Name Ends Here */}

                {/*Item Quantity And Order Status */}
                <div className="ItemQttyAndStatus block my-[22px] lg:my-[45px]">
                    <div className="ItemQttyAndStatusWrapper grid grid-cols-2">
                        {/*Items Quantity */}
                        <div className="ItemQtty">
                            <p className="text-center font-inter font-[700] text-[10px] lg:text-[16px] text-[#008000] my-0">{quantity}</p>
                        </div>
                        {/*Items Order Status*/}
                        <div className="ItemStatus">
                            <p className="text-center font-inter font-[700] text-[10px] lg:text-[16px] text-[#FF0C1A] my-0"> {status}</p>
                        </div>
                    </div> {/*Items Quantity and Status Wrapper Ends Here */}
                </div> {/*Items Quantity And Status Ends Here */}

            </div> {/*Order ItemsWrapper Ends Here */}

        </div> // Order Item Card Ends Here
    )
}

export default OrderItemCard