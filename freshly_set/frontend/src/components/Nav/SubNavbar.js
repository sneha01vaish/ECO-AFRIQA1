import React, { useContext, useEffect, useState } from 'react';
import { ActiveSectionContext } from '../context/ActiveSectionContext';
import { FaChevronUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function SubNavbar({ sections, partnership }) {
  const [scrolled, setScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const [activeSection, setActiveSection] = useContext(ActiveSectionContext);
  const [dropdownToggled, setDropdownToggled]  = useState(false);
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
      className={`fixed flex justify-center items-center w-[100%] mx-auto z-40 transition-all duration-500 ease-in-out  ${visible ? 'top-[120px]' : '-top-[100px]'}`}
      style={{ transform: visible ? 'translateY(0)' : 'translateY(-100%)' }}
    >
      <nav className="pr-[170px] bg-black/[0.40] backdrop-blur-[17px] mt-[50px]    px-[30px]">
        <ul className="flex justify-between max-w-7xl space-x-[80px] w-[100%]">
          
          {
            sections.map((section) => (
              <>
              <li
            onMouseEnter={() => setActiveSection(section.id)}
            onMouseLeave={() => activeSection !== section.id && setActiveSection('')}
            className="bg-[#D9D9D9]/[0.10] cursor-pointer py-[13px] px-[34px] whitespace-nowrap"
          >
            <a
              className="text-white text-center text-[19.25px] font-inter"
              href={`#${section.id}`}
              onClick={(e) => {
                smoothScroll(e, `#${section.id}`);
                setActiveSection(section.id);
              }}
            >
              {section.title}
            </a>
            {/* <div
              className={
                activeSection === 'mission'
                  ? 'h-[7.5px] w-[109.005px] bg-[#008000] flex'
                  : 'hidden'
              }
            /> */}
          </li>
              </>
            ))
          }

          {
            partnership && (
              <div className="flex items-center space-x-[10px] relative">

              <li onClick={() => setDropdownToggled(!dropdownToggled)} className="bg-[#D9D9D9]/[0.10] text-white cursor-pointer py-[13px] px-[34px] whitespace-nowrap"
              >Partnership</li>
              {/* <FaChevronUp onClick={() => setDropdownToggled(!dropdownToggled)} className={dropdownToggled ? "text-black text-[30px] ml-[10px] cursor-pointer rotate-180":"text-black text-[30px] ml-[10px] cursor-pointer" }/> */}
              
              <div className={dropdownToggled ? "block absolute bg-white  rounded-[14px] top-[50px] left-0 border border-solid shadow-lg border-gray-500 w-[285px] transition-all duration-500 ease-in-out":"hidden"}>
                      <Link to="/verified">
                          <p className="hover:bg-[#008000] cursor-pointer text-start bg-white px-[20px] py-[12px] rounded-[6px] transition-all duration-400 ease-in-out text-gray-800   text-[15px] hover:text-white">Verified Farmer</p>
              
                      </Link>
              
                      <Link to="/transporters">
                          <p className="hover:bg-[#008000] cursor-pointer text-start bg-white px-[20px] py-[12px] rounded-[6px] transition-all duration-400 ease-in-out text-gray-800   text-[15px] hover:text-white">Transporters</p>
              
                      </Link>
              
              </div>
              
              </div> 
            )
          }
          
          
          {/* <li
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

<div className="flex items-center space-x-[10px] relative">

<p className="text-[#008000] my-auto text-[18px] font-inter  font-[700] block h-[35px] cursor-pointer">Partnership</p>
<FaChevronUp onClick={() => setDropdownToggled(!dropdownToggled)} className={dropdownToggled ? "text-black text-[30px] ml-[10px] cursor-pointer rotate-180":"text-black text-[30px] ml-[10px] cursor-pointer" }/>

<div className={dropdownToggled ? "block absolute bg-white  rounded-[14px] top-[50px] left-0 border border-solid shadow-lg border-gray-500 w-[285px] transition-all duration-500 ease-in-out":"hidden"}>
        <Link to="/verified">
            <p className="hover:bg-[#008000] cursor-pointer text-start bg-white px-[20px] py-[12px] rounded-[6px] transition-all duration-400 ease-in-out text-gray-800   text-[15px] hover:text-white">Verified Farmer</p>

        </Link>

        <Link to="/transporters">
            <p className="hover:bg-[#008000] cursor-pointer text-start bg-white px-[20px] py-[12px] rounded-[6px] transition-all duration-400 ease-in-out text-gray-800   text-[15px] hover:text-white">Transporters</p>

        </Link>

</div>

</div> Partnership End 
 */}

        </ul>
      </nav>
    </div>
  );
}

export default SubNavbar;
