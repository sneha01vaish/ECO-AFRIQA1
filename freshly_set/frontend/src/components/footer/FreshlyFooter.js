import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom"
import { FaSquareInstagram, FaTiktok, FaFacebook, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";

const FreshlyFooter = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 800) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="Footer mt-[40px] mb-[30px]">
      <div className="FooterWrapper bg-gradient-to-r from-[#007000] to-[#000A00] shadow-md shadow-[#00000040] mx-[4px] pb-[50px] lg:pb-[70px] rounded-[39px]">
        <div className="LogoAndLinksWrapper lg:flex justify-between">
          {/*Freshly Logo */}
          <div className="LogoWrapper block pt-[20px] lg:pt-0 lg:w-[20%]">
            <div className="LogoContainer bg-white rounded-full mt-[50px] p-2 mx-auto h-[113px] w-[120px]">
              <img src="/static/media/logo2.png" alt="Freshly farms logo" className="w-full h-full"/>
            </div>  
          </div>            
         
          {/*Navidation Links */}
          <div className="OuterWrapper block lg:w-[80%] bg-[#D9D9D91A] rounded-[26px] lg:mr-[100px] mx-[14px] lg:mx-[20px] mt-[40px] pt-[6px]">
            <div className="GridsWrapper grid grid-cols-3 sm:grid-cols-4 gap-[2px] lg:gap-[30px] mx-[10px] lg:mx-[50px] mt-[30px] mb-[80px]">
              {/*Quick Link */}
              <div className="QuickLink mx-[4px]">
                <h4 className="block text-start font-inter text-[12px] lg:text-[16px] font-[700] my-0 text-white ">Quick Link</h4>
                <Link className="block text-start font-inter text-[10px] lg:text-[16px] font-[400] my-0 mt-[12px] text-white w-fit" to="/">Home</Link>
                <Link className="block text-start font-inter text-[10px] lg:text-[16px] font-[400] my-0 mt-[10px] lg:mt-[8px] text-white w-fit" to="/">Farmers Listing</Link>
                <Link className="block text-start font-inter text-[10px] lg:text-[16px] font-[400] my-0 mt-[10px] lg:mt-[8px] text-white w-fit" to="/">For Farmers</Link>
                <Link className="block text-start font-inter text-[10px] lg:text-[16px] font-[400] my-0 mt-[10px] lg:mt-[8px] text-white w-fit" to="/">For Clients</Link>
                <Link className="block text-start font-inter text-[10px] lg:text-[16px] font-[400] my-0 mt-[10px] lg:mt-[8px] text-white w-fit" to="/about-us">About Us</Link>
                <Link className="block text-start font-inter text-[10px] lg:text-[16px] font-[400] my-0 mt-[10px] lg:mt-[8px] text-white w-fit" to="/contact">Contact Us</Link>             
              </div>
              {/*Explore */}
              <div className="Explore ">
                <h4 className="block text-start font-inter text-[12px] lg:text-[16px] font-[700] my-0 text-white ">Explore</h4>
                <Link className="block text-start font-inter text-[10px] lg:text-[16px] font-[400] my-0 mt-[12px] lg:mt-[8px] text-white w-fit" to="/blogs">Blog</Link>
                <Link className="block text-start font-inter text-[10px] lg:text-[16px] font-[400] my-0 mt-[10px] lg:mt-[8px] text-white w-fit" to="/">FAQs</Link>
                <Link className="block text-start font-inter text-[10px] lg:text-[16px] font-[400] my-0 mt-[10px] lg:mt-[8px] text-white w-fit" to="/">Terms of Service</Link>
                <Link className="block text-start font-inter text-[10px] lg:text-[16px] font-[400] my-0 mt-[10px] lg:mt-[8px] text-white w-fit" to="/">Privacy Policy</Link>
              </div> 
              {/*Careers*/}
              <div className="Careers mx-[4px]">
                <h4 className="block text-start font-inter text-[12px] lg:text-[16px] font-[700] my-0 text-white underline">Careers</h4>
                <Link className="block text-start font-inter text-[10px] lg:text-[16px] font-[400] my-0 mt-[12px] lg:mt-[8px] text-white w-fit underline" to="/blogs">Blog</Link>
                <Link className="block text-start font-inter text-[10px] lg:text-[16px] font-[400] my-0 mt-[10px] lg:mt-[8px] text-white w-fit underline" to="/">Farming Techiques</Link>
                <Link className="block text-start font-inter text-[10px] lg:text-[16px] font-[400] my-0 mt-[10px] lg:mt-[8px] text-white w-fit underline" to="/">Become a member</Link>
                <Link className="block text-start font-inter text-[10px] lg:text-[16px] font-[400] my-0 mt-[10px] lg:mt-[8px] text-white w-fit underline" to="/">Offices</Link>                
              </div> 
              {/*QuickcLink 2 */} 
              <div className="QuickLink hidden lg:block "> {/*Only Visible in Desktop Versiom*/}
                <h4 className="block text-start font-inter text-[10px] lg:text-[16px] font-[700] my-0 text-white ">Quick Link</h4>
                <Link className="block text-start font-inter text-[10px] lg:text-[16px] font-[400] my-0 mt-[12px] text-white w-fit" to="/">Home</Link>
                <Link className="block text-start font-inter text-[10px] lg:text-[16px] font-[400] my-0 mt-[10px] lg:mt-[8px] text-white w-fit" to="/">Farmers Listing</Link>
                <Link className="block text-start font-inter text-[10px] lg:text-[16px] font-[400] my-0 mt-[10px] lg:mt-[8px] text-white w-fit" to="/">For Farmers</Link>
                <Link className="block text-start font-inter text-[10px] lg:text-[16px] font-[400] my-0 mt-[10px] lg:mt-[8px] text-white w-fit" to="/">For Clients</Link>
                <Link className="block text-start font-inter text-[10px] lg:text-[16px] font-[400] my-0 mt-[10px] lg:mt-[8px] text-white w-fit" to="about-us">About Us</Link>
                <Link className="block text-start font-inter text-[10px] lg:text-[16px] font-[400] my-0 mt-[10px] lg:mt-[8px] text-white w-fit" to="/contact">Contact Us</Link>       
              </div>
            </div>  {/*Grid Wrapper for Links Ends Here */}

            {/*White Line */}
            <div className="block lg:hidden w-full relative bottom-[50px]  bg-white h-[3px]" /> {/*Only show in Mobile Version*/}
          </div> {/*Outer Wrapper Ends Here */}         
        </div> {/*Links and Logo Container */}

        {/*White Line */}
        <div className="hidden lg:block mt-[20px] w-full bg-white h-[5px]" /> {/*Only show in Desktop Version*/}

        {/*Back to Top Buttton */}
        <div className="p-1 fixed bottom-4 right-4">
          {isVisible && (
            <button onClick={scrollToTop} className="bg-[#006600] text-xs p-1 px-1.5 animate-ping cursor-pointer rounded-full text-white border-none transition">
              <FaArrowUp />
            </button>
          )}
        </div> {/*Back-to-topp Button Ends Here */} 
        
      </div> {/*Footer Wwrapper Ends Here */}
    </div> //Footer Ends Here
  )
}
     
export default FreshlyFooter