
import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "../homepage/ContactCard";

function ContactUS() {
    return (
        <div className="ContactUs">
             <div className="InnerBackground border-solid border-[0.1px] rounded-[24px]  border-gray-500 shadow-md shadow-gray-300 my-[60px] lg:my-[80px] mx-[10px] lg:mx-[180px] ">
                <div className="ContentsWrapper  p-[20px] lg:p-[40px]">
                    {/*Back Button */}
                    <Link to= "/about-us" className="BackButton float-right w-fit h-[30px] lg:h-[50px] ">
                        <img src="/static/media/close.png" alt="" className="lg:m-[6px] h-full"/>
                    </Link>
                    
                    
                    
                </div> {/*Contents Wrapper Ends Here */}
                {/*Contact Card From The Homepaage */}
                    <div className="ContactCard -mt-[50px] clear-both pb-[20px] lg:pb-[50px]">
                        <ContactCard />
                    </div>
            </div> {/*Inner Background Ends Here */}
        </div> //Contact us Section Ends
    )
}

export default ContactUS