import React from "react";

function NotificationCard({ header, details }) {
    return (
        <div className="NotificationCard mt-[18px] lg:mt-[28px] ">
            <div className="NotificationCardWrapper px-[14px] lg:px-[28px] py-[10px] lg:py-[24px] rounded-[8px] lg:rounded-[18px] border-solid border-[0.6px] border-[#A6B1AD] shadow-md shadow-[#00000040]">
                {/*Notification Header */}
                <div className="NotificationHeader">
                    <h3 className="text-start font-[700] text-[#008000] my-0 font-inter text-[12px] lg:text-[20px]">{header}</h3>
                </div>
                {/*NotificationDetails */}
                <div className="NotificationDetails mt-[6px] lg:mt-[16px]">
                    <p className="text-start font-inter font-[400] text-[8px] lg:text-[14px] my-0">{details}</p>
                </div>
            </div>
        </div> // Order Item Card Ends Here
    )
}

export default NotificationCard