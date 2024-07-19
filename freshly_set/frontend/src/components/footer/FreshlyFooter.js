import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom"
import { FaSquareInstagram, FaTiktok, FaFacebook, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";

const FreshlyFooter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const date = new Date()
  const year = date.getFullYear()
  // console.log(now)

  const toggleVisibility = () => {
    if (window.pageYOffset > 800) {
      setIsVisible(true);
      // console.log("window scroll to height > 300", isVisible)
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
    <div className="p-4 py-8">
      <div className="w-full bg-[#008000] mx-auto pb-8 rounded-xl">
        <div className=" lg:flex justify-around items-center py-8 text-gray-600 gap-8">
 
 
          <section className="flex">
 
 
            <div className="bg-white rounded-full p-2 mx-auto">
              <img className="h-[113px] w-[120px]" src="/static/media/logo2.png" alt="Freshly farms logo" />
            </div>
 
 
          </section>
 
 
          <div className="flex lg:flex-wrap justify-center items-start gap-x-[40px]">
 
 
            <div className="text-nowrap flex flex-col space-y-[8px]">
              <h4 className="font-bold text-gray-100 ">Quick Link</h4>
                <Link className="text-gray-200 font-inter text-[15px] font-[500]" to="/">Home</Link>
                <Link className="text-gray-200 font-inter text-[15px] font-[500]" to="tutor">Services</Link>
                <Link className="text-gray-200 font-inter text-[15px] font-[500]" to="students">Resources</Link>
                <Link className="text-gray-200 font-inter text-[15px] font-[500]" to="about">Our History</Link>
                <Link className="text-gray-200 font-inter text-[15px] font-[500]" to="contact">Contact Us</Link>
             
            </div>
 
 
            <div className="text-nowrap flex flex-col space-y-[8px]">
              <h4 className="font-bold text-gray-100 ">Explore</h4>
              <Link className="text-gray-200 font-inter text-[15px] font-[500]" to="blog">Blog</Link>
              <Link className="text-gray-200 font-inter text-[15px] font-[500]" to="faq">FAQs</Link>
              <Link className="text-gray-200 font-inter text-[15px] font-[500]" to="terms">Terms of Service</Link>
              <Link className="text-gray-200 font-inter text-[15px] font-[500]" to="policy">Privacy Policy</Link>
            </div>
 
 
            <div className="text-nowrap flex flex-col space-y-[8px]">
              <h4 className="font-bold text-gray-100 ">Services</h4>
              <Link  className="text-gray-200 font-inter  text-[15px] font-[500] underline" to="about">Careers</Link>
              <Link  className="text-gray-200 font-inter text-[15px] font-[500] underline" to="tutor">Blog</Link>
              <Link  className="text-gray-200 font-inter text-[15px] font-[500] underline" to="students">Farming Techniques</Link>
              <Link  className="text-gray-200 font-inter text-[15px] font-[500] underline" to="parents">Become a Member</Link>
              <Link  className="text-gray-200 font-inter text-[15px]  font-[500] underline" to="contact">Officer</Link>
            </div>
 
 
            <div className="text-nowrap flex flex-col space-y-[8px]">
              <h4 className="font-bold text-gray-100 ">Quick Link</h4>
                <Link className="text-gray-200 font-inter text-[15px] font-[500]" to="/">Home</Link>
                <Link className="text-gray-200 font-inter text-[15px] font-[500]" to="tutor">Services</Link>
                <Link className="text-gray-200 font-inter text-[15px] font-[500]" to="students">Resources</Link>
                <Link className="text-gray-200 font-inter text-[15px] font-[500]" to="about">Our History</Link>
                <Link className="text-gray-200 font-inter text-[15px] font-[500]" to="contact">Contact Us</Link>
             
            </div>
 
 
          </div>
 
 
          <div className="p-1 fixed bottom-4 right-4">
          {isVisible && (
            <button
            onClick={scrollToTop}
            className="bg-green-300 text-xs p-1 px-1.5 animate-ping cursor-pointer rounded-full text-white border-none transition">
            <FaArrowUp />
          </button>
          )}
          </div>
 
 
        </div>
        <hr className="w-full bg-gray-200" />
      </div>
    </div>
  )
 }
     


export default FreshlyFooter