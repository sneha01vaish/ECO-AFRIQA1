import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const FreshlyFooter = () => {
  const [isVisible, setIsVisible] = useState(false);

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
    <div className="p-4">
      <div className="w-[90%] bg-green-700 mx-auto pb-8 rounded-xl">
        <div className="flex justify-around items-center py-6 text-gray-600 gap-8">

          <section className="hidden sm:flex">

            <div className="bg-white rounded-full p-2">
              <img src="/static/media/logo2.png" alt="Freshly farms logo" />
            </div>

          </section> 

          <div className="flex flex-wrap justify-center items-start gap-6">

            <div className="text-nowrap flex flex-col">
              <h4 className="font-bold text-gray-100 underline">Pages</h4>
              <a href="/">Home</a>
              <a href="tutor">Services</a>
              <a href="students">Resources</a>
              <a href="about">Our History</a>
              <a href="contact">Contact Us</a>
            </div>

            <div className="text-nowrap flex flex-col">
              <h4 className="font-bold text-gray-100 underline">Explore</h4>
              <a href="blog">Blog</a>
              <a href="faq">FAQs</a>
              <a href="terms">Terms of Service</a>
              <a href="policy">Privacy Policy</a>
            </div>

            <div className="text-nowrap flex flex-col">
              <h4 className="font-bold text-gray-100 underline">Services</h4>
              <a href="about">Personal Info</a>
              <a href="tutor">Orders</a>
              <a href="students">Adresses</a>
              <a href="parents">Parents</a>
              <a href="contact">New Password</a>
            </div>

            <div className="text-nowrap flex flex-col">
              <h4 className="font-text-gray-100 text-gray-100 underline">Pages</h4>
              <a href="/">Home</a>
              <a href="tutor">Services</a>
              <a href="students">Resources</a>
              <a href="about">Our History</a>
              <a href="contact">Contact Us</a>
            </div>

          </div>

          <div className="p-1 fixed bottom-4 right-4">
          {isVisible && (
            <button
            onClick={scrollToTop}
            className="bg-green-600 text-xs p-1 px-1.5 animate-ping cursor-pointer rounded-full text-white border-none transition">
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