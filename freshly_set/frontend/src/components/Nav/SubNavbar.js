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
      <nav className="pr-[170px] bg-white pt-[45px] pb-[30px] px-[30px]">
        <ul className="flex justify-between max-w-7xl space-x-[80px] w-[100%]">
          <li
            onMouseEnter={() => setActiveSection('mission')}
            onMouseLeave={() => activeSection !== 'mission' && setActiveSection('')}
            className="text-[#008000] my-auto text-[18px] font-inter font-[700] block h-[35px] w-[84px] cursor-pointer"
          >
            <a
              className="freshlyGreenText"
              href="#mission"
              onClick={(e) => {
                smoothScroll(e, '#mission');
                setActiveSection('mission');
              }}
            >
              Mission
            </a>
            <div
              className={
                activeSection === 'mission'
                  ? 'h-[7.5px] w-[109.005px] bg-[#008000] flex'
                  : 'hidden'
              }
            />
          </li>
          <li
  onMouseEnter={() => setActiveSection("metric")}
  onMouseLeave={() => activeSection !== "metric" && setActiveSection("")}
  className="text-[#008000] my-auto text-[18px] font-inter font-[700] block h-[35px] w-[84px] cursor-pointer"
>
  <a
    className="freshlyGreenText"
    href="#metric"
    onClick={(e) => {
      smoothScroll(e, '#metric');
      setActiveSection("metric");
    }}
  >
    Metrics
  </a>
  <div
    className={
      activeSection === "metric" 
        ? "h-[7.5px] w-[109.005px] bg-[#008000] flex" 
        : "hidden"
    }
  />
</li>
          <li
      onMouseEnter={() => setActiveSection("promotion")}
      onMouseLeave={() => activeSection !== "promotion" && setActiveSection("")}
      className="text-[#008000] my-auto text-[18px] font-inter font-[700] block h-[35px] w-[84px] cursor-pointer"
        >
        <a
          className="freshlyGreenText"
          href="#promotion"
          onClick={(e) => {
            smoothScroll(e, '#promotion');
            setActiveSection("promotion");
          }}
        >
          Promotion
        </a>
  <div
    className={
      activeSection === "promotion" 
        ? "h-[7.5px] w-[109.005px] bg-[#008000] flex" 
        : "hidden"
    }
  />
</li>
<li
  onMouseEnter={() => setActiveSection("services")}
  onMouseLeave={() => activeSection !== "services" && setActiveSection("")}
  className="text-[#008000] my-auto text-[18px] font-inter font-[700] block h-[35px] w-[84px] cursor-pointer"
>
  <a
    className="freshlyGreenText"
    href="#services"
    onClick={(e) => {
      smoothScroll(e, '#services');
      setActiveSection("services");
    }}
  >
    Services
  </a>
  <div
    className={
      activeSection === "services" 
        ? "h-[7.5px] w-[109.005px] bg-[#008000] flex" 
        : "hidden"
    }
  />
</li>
          
<li
  onMouseEnter={() => setActiveSection("reviews")}
  onMouseLeave={() => activeSection !== "reviews" && setActiveSection("")}
  className="text-[#008000] my-auto text-[18px] font-inter font-[700] block h-[35px] w-[84px] cursor-pointer"
>
  <a
    className="freshlyGreenText"
    href="#reviews"
    onClick={(e) => {
      smoothScroll(e, '#reviews');
      setActiveSection("reviews");
    }}
  >
    Reviews
  </a>
  <div
    className={
      activeSection === "reviews" 
        ? "h-[7.5px] w-[109.005px] bg-[#008000] flex" 
        : "hidden"
    }
  />
</li>
<li
  onMouseEnter={() => setActiveSection("faqs")}
  onMouseLeave={() => activeSection !== "faqs" && setActiveSection("")}
  className="text-[#008000] my-auto text-[18px] font-inter font-[700] block h-[35px] w-[84px] cursor-pointer"
>
  <a
    className="freshlyGreenText"
    href="#faqs"
    onClick={(e) => {
      smoothScroll(e, '#faqs');
      setActiveSection("faqs");
    }}
  >
    FAQs
  </a>
  <div
    className={
      activeSection === "faqs" 
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
    href="#partnershup"
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
