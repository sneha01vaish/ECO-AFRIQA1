import React from "react";
import { Link } from "react-router-dom";
import { BiSolidEdit } from "react-icons/bi";

function PaymentMethodCard({name, img, CardNumber, expire, CardRank }) {
    return (
        <div className="PaymentMethodCard block rounded-[8px] w-fit bg-[#FFFFFF] border-solid border-[0.7px] border-[#0000004D] shadow-md shadow-[#00000040]">
            <div className="PaymentMethodWrapper flex justify-start mx-[10px] my-[12px] ">
                {/*method Image */}
                <div className="block w-[60px] h-[36px] ml-[10px] mr-[20px]">
                    <img src={img} alt={name} className="w-full h-full " />
                </div>
                {/*Method Data */}
                <div className="Details Wrapper block ">
                    {/*card Number */}
                    <div className="CardNumber mr-[24px]">
                        <p className="text-start text-[15px] text-[##000000B2] font-inter font-[700] my-0">{name} ending in {CardNumber}</p>
                    </div>
                    {/*Expire Date */}
                    <div className="ExpireDate mt-[10px] mr-[24px]">
                        <p className="text-start text-[15px] text-[#00000080] font-inter font-[600] my-0">Expiry {expire}</p>
                    </div>
                    {/*Default Or Secondary */}
                    <div className="RankOfMethod mt-[10px] mr-[24px]">
                        <p className="text-start text-[15px] text-[#008000] font-inter font-[900] my-0">{CardRank}</p>
                    </div>
                    {/*Edit Choice */}
                    <div className="Edit Choice  float-right">
                        <Link to="/checkout" className="w-fit float-right cursor-pointer" >
                            <BiSolidEdit  className="w-[20px] h-[20px] text-black"/>
                        </Link>
                    </div>
                </div>   {/*Method Data */}

            </div> {/*Payment Methods Wrapper */}
        </div> // Payment Method Card
    )
}

export default PaymentMethodCard