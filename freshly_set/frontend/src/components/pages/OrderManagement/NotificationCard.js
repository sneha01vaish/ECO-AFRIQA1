import React from "react";

function NotificationCard({ header, details }) {
    return (
        <div className="NotificationCard mt-[28px] ">
            <div className="NotificationCardWrapper px-[28px] py-[24px] rounded-[18px] border-solid border-[0.6px] border-[#A6B1AD] shadow-md shadow-[#00000040]">
                {/*Notification Header */}
                <div className="NotificationHeader">
                    <h3 className="text-start font-[700] text-[#008000] my-0 font-inter text-[20px]">{header}</h3>
                </div>
                {/*NotificationDetails */}
                <div className="NotificationDetails mt-[16px]">
                    <p className="text-start font-inter font-[400] text-[14px] my-0">{details}</p>
                </div>
            </div>
        </div> // Order Item Card Ends Here
    )
}

export default NotificationCard