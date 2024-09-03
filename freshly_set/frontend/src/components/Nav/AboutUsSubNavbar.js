import React, { useContext, useEffect, useState } from 'react';
import { ActiveSectionContext } from '../context/ActiveSectionContext';

function SubNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const [activeSection, setActiveSection] = useContext(ActiveSectionContext);
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos > 60) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    // Check if scrolling up or down
    if (prevScrollPos > currentScrollPos) {
      setVisible(true);  // Scrolling up
    } else {
      setVisible(false); // Scrolling down
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);


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
    <div
      className={`fixed w-full z-40 transition-all duration-500 ease-in-out ${scrolled ? 'bg-white' : ''} ${visible ? 'top-[120px]' : '-top-[100px]'}`}
      style={{ transform: visible ? 'translateY(0)' : 'translateY(-100%)' }}
    >
      <nav className="pr-[170px] bg-white pt-[45px] pb-[30px] px-[30px] whitespace-nowrap">
        <ul className="flex justify-between max-w-7xl space-x-[80px] w-[100%]">
          <li
            onMouseEnter={() => setActiveSection('functions')}
            onMouseLeave={() => activeSection !== 'functions' && setActiveSection('')}
            className="text-[#008000] my-auto text-[18px] font-inter font-[700] block h-[35px] w-[84px] cursor-pointer"
          >
            <a
              className="freshlyGreenText"
              href="#functions"
              onClick={(e) => {
                smoothScroll(e, '#functions');
                setActiveSection('functions');
              }}
            >
              Freshly Functions
            </a>
            <div
              className={
                activeSection === 'functions'
                  ? 'h-[7.5px] w-[109.005px] bg-[#008000] flex'
                  : 'hidden'
              }
            />
          </li>
          <li
  onMouseEnter={() => setActiveSection("objectives")}
  onMouseLeave={() => activeSection !== "objectives" && setActiveSection("")}
  className="text-[#008000] my-auto text-[18px] font-inter font-[700] block h-[35px] w-[84px] cursor-pointer"
>
  <a
    className="freshlyGreenText"
    href="#objectives"
    onClick={(e) => {
      smoothScroll(e, '#objectives');
      setActiveSection("objectives");
    }}
  >
    Fresshly Objectives
  </a>
  <div
    className={
      activeSection === "objectives" 
        ? "h-[7.5px] w-[109.005px] bg-[#008000] flex" 
        : "hidden"
    }
  />
</li>
          <li
      onMouseEnter={() => setActiveSection("testimonials")}
      onMouseLeave={() => activeSection !== "testimonials" && setActiveSection("")}
      className="text-[#008000] my-auto text-[18px] font-inter font-[700] block h-[35px] w-[84px] cursor-pointer"
        >
        <a
          className="freshlyGreenText"
          href="#testimonials"
          onClick={(e) => {
            smoothScroll(e, '#testimonials');
            setActiveSection("testimonials");
          }}
        >
          Freshly Testimonials
        </a>
  <div
    className={
      activeSection === "testimonials" 
        ? "h-[7.5px] w-[109.005px] bg-[#008000] flex" 
        : "hidden"
    }
  />
</li>
<li
  onMouseEnter={() => setActiveSection("team")}
  onMouseLeave={() => activeSection !== "team" && setActiveSection("")}
  className="text-[#008000] my-auto text-[18px] font-inter font-[700] block h-[35px] w-[84px] cursor-pointer"
>
  <a
    className="freshlyGreenText"
    href="#team"
    onClick={(e) => {
      smoothScroll(e, '#team');
      setActiveSection("team");
    }}
  >
    Freshly Team
  </a>
  <div
    className={
      activeSection === "team" 
        ? "h-[7.5px] w-[109.005px] bg-[#008000] flex" 
        : "hidden"
    }
  />
</li>
          
<li
  onMouseEnter={() => setActiveSection("partnership")}
  onMouseLeave={() => activeSection !== "partnership" && setActiveSection("")}
  className="text-[#008000] my-auto text-[18px] font-inter font-[700] block h-[35px] w-[84px] cursor-pointer"
>
  <a
    className="freshlyGreenText"
    href="#partnership"
    onClick={(e) => {
      smoothScroll(e, '#partnership');
      setActiveSection("partnership");
    }}
  >
    Partnership
  </a>
  <div
    className={
      activeSection === "partnership" 
        ? "h-[7.5px] w-[109.005px] bg-[#008000] flex" 
        : "hidden"
    }
  />
</li>
        </ul>
      </nav>
    </div>
  );
}

export default SubNavbar;
