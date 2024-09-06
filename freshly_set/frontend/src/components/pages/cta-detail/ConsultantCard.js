import React from "react";
import { Link } from "react-router-dom";

function ConsultantCard({img,name, field,description,rate}) {
    return (
        <div className="SingleCard border-[0.7px] border-solid border-[#00000066] shadow-lg shadow-[#00000040] rounded-[14px]">
            <div className="CardWrapper m-[14px]">
                {/*Consultant Image */}
                <div className="ConsultantImage bg-[#D9D9D94D] rounded-[14px] ">
                    <img src={img} alt="" className=""/>
                </div>

                {/*Consultant Name */}
                <div className="ConsultantName mt-[22px]">
                    <p className="text-start font-inter my-0 text-[22px] font-[700] text-black">{name}</p>
                </div>

                {/*Consultant Field or Topic */}
                <div className="ConsultantField mt-[18px]">
                    <p className="text-start font-inter my-0 text-[20px] font-[700] text-[#00000080]">{field}</p>
                </div>

                {/*Consultant Descriptions */}
                <div className="ConsultantDescriptions mt-[18px]">
                    <p className="text-start font-josefin my-0 text-[16px] font-[600]">{description}</p>
                </div>

                {/*Consultant Rate and Booking */}
                <div className="RateAndBooking mt-[16px]">
                    <div className="Wrapper flex justify-between">
                        {/*Consultant Rate */}
                        <div className="ConsultantRate block">
                            <p className="text-start font-inter text-[20px] font-[900] text-[#008000]">{rate}</p>
                        </div>

                        {/*Consultant Booking */}
                        <div className="ConsultantBoking block">
                            <Link to="/checkout"> 
                                <div className="BookingButton bg-[#008000] rounded-[10px] cursor-pointer active:scale-90 transition-all duration-100 ease-out">
                                    <p className="text-center font-inter text-[20px] font-[900] my-0 text-white py-[16px] px-[60px]">BOOK</p>
                                </div>
                            </Link>
                        </div> {/*Booking button Ends Here*/}
                    </div>
                </div> {/*Consultant Rate and Booking Ends Here */}
            </div> {/*Card Wrapper Ends Here */}
        </div> //SingleCard Ends Here
    )
};

export default ConsultantCard