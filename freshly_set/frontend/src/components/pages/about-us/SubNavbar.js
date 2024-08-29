import React, { useEffect, useState } from 'react';

function SubNavbar() {
  const [scrolled, setScrolled] = useState(false);

  const scrollNow = () => {
    if (window.scrollY > 60) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollNow);

    return () => {
      window.removeEventListener('scroll', scrollNow);
    };
  }, []);

  // Smooth scrolling function
  const smoothScroll = (event, targetId) => {
    event.preventDefault();
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div className={scrolled ? "flex fixed justify-center w-[100%] z-[40] transition-all duration-500 ease-in-out mt-[100px]" : "hidden fixed justify-center w-[100%] z-[40] transition-all duration-500 ease-in-out mt-[100px]"}>
      <nav className="pr-[170px] bg-white pt-[45px] pb-[30px] px-[30px] w-[100%] whitespace-nowrap">
        <ul className="flex justify-between max-w-7xl space-x-[80px] w-[100%]">
          <li className="text-[#008000] my-auto text-[18px] font-inter font-[700] block h-[35px] w-[84px] cursor-pointer">
            <a className="freshlyGreenText" href="#mission" onClick={(e) => smoothScroll(e, '#functions')}>Freshly Functions</a>
          </li>
          <li className="text-[#008000] my-auto text-[18px] font-inter font-[700] block h-[35px] w-[84px] cursor-pointer">
            <a className="freshlyGreenText" href="#metric" onClick={(e) => smoothScroll(e, '#objectives')}>Freshly Objectives</a>
          </li>
          <li className="text-[#008000] my-auto text-[18px] font-inter font-[700] block h-[35px] w-[84px] cursor-pointer">
            <a className="freshlyGreenText" href="#promotion" onClick={(e) => smoothScroll(e, '#testimonials')}>Freshly Testimonials</a>
          </li>
          <li className="text-[#008000] my-auto text-[18px] font-inter font-[700] block h-[35px] w-[84px] cursor-pointer">
            <a  className="freshlyGreenText" href="#services" onClick={(e) => smoothScroll(e, '#team')}>Freshly Team</a>
          </li>
         
          <li className="text-[#008000] my-auto text-[18px] font-inter font-[700] block h-[35px] w-[84px] cursor-pointer">
            <a className="freshlyGreenText" href="#partnership" >Partnership</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SubNavbar;
