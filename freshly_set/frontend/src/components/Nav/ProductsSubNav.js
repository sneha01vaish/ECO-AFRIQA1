import React, { useEffect, useState } from 'react';

function ProductsSubNav() {
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
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
      });
  
      // Adjust the scroll position after smooth scrolling to ensure it aligns with the top of the component
      const yOffset = -360; // Adjust this value if you need to offset by a different amount
      const yPosition = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
  
      window.scrollTo({
        top: yPosition,
        behavior: 'smooth',
      });
    }
  };
  

  return (
    <div className={scrolled ? "flex fixed justify-center w-[100%] z-[40] transition-all duration-500 ease-in-out" : "hidden fixed justify-center w-[100%] z-[40] transition-all duration-500 ease-in-out"}>
      <nav className="pr-[170px] bg-white pt-[45px] pb-[30px] px-[30px]">
        <ul className="flex justify-between max-w-7xl space-x-[80px] w-[100%]">
        <li className="text-[#008000] my-auto text-[18px] font-inter font-[700] block h-[35px] w-[84px] cursor-pointer">
            <a className="freshlyGreenText" href="#metric" onClick={(e) => smoothScroll(e, '#metric')}>Metric</a>
          </li>
          <li className="text-[#008000] my-auto text-[18px] font-inter font-[700] block h-[35px] w-[84px] cursor-pointer">
            <a className="freshlyGreenText" href="#metric" onClick={(e) => smoothScroll(e, '#metric')}>Metric</a>
          </li>
          <li className="text-[#008000] my-auto text-[18px] font-inter font-[700] block h-[35px] w-[84px] cursor-pointer">
            <a className="freshlyGreenText" href="#promotion" onClick={(e) => smoothScroll(e, '#promotion')}>Promotion</a>
          </li>
          <li className="text-[#008000] my-auto text-[18px] font-inter font-[700] block h-[35px] w-[84px] cursor-pointer">
            <a  className="freshlyGreenText" href="#services" onClick={(e) => smoothScroll(e, '#services')}>Services</a>
          </li>
          <li className="text-[#008000] my-auto text-[18px] font-inter font-[700] block h-[35px] w-[84px] cursor-pointer">
            <a className="freshlyGreenText" href="#reviews" onClick={(e) => smoothScroll(e, '#reviews')}>Reviews</a>
          </li>
          <li className="text-[#008000] my-auto text-[18px] font-inter font-[700] block h-[35px] w-[84px] cursor-pointer">
            <a className="freshlyGreenText" href="#faqs" onClick={(e) => smoothScroll(e, '#faqs')}>FAQs</a>
          </li>
          <li className="text-[#008000] my-auto text-[18px] font-inter font-[700] block h-[35px] w-[84px] cursor-pointer">
            <a className="freshlyGreenText" href="#partnership" onClick={(e) => smoothScroll(e, '#partnership')}>Partnership</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default ProductsSubNav;
