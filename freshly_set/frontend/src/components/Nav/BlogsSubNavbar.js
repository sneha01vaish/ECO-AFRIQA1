import React, { useContext, useEffect, useState } from 'react';
import { ActiveSectionContext } from '../context/ActiveSectionContext';
import { FaChevronUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function BlogsSubNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const [activeSection, setActiveSection] = useContext(ActiveSectionContext);

  const [dropdownToggled, setDropdownToggled] = useState(false);
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
            onMouseEnter={() => setActiveSection('updates')}
            onMouseLeave={() => activeSection !== 'updates' && setActiveSection('')}
            className="text-[#008000] my-auto text-[18px] font-inter font-[700] block h-[35px] w-[84px] cursor-pointer"
          >
            <a
              className="freshlyGreenText"
              href="#articles"
              onClick={(e) => {
                smoothScroll(e, '#updates');
                setActiveSection('updates');
              }}
            >
              Freshly Updates
            </a>
            <div
              className={
                activeSection === 'updates'
                  ? 'h-[7.5px] w-[109.005px] bg-[#008000] flex'
                  : 'hidden'
              }
            />
          </li>
          <li
  onMouseEnter={() => setActiveSection("articles")}
  onMouseLeave={() => activeSection !== "articles" && setActiveSection("")}
  className="text-[#008000] my-auto text-[18px] font-inter font-[700] block h-[35px] w-[84px] cursor-pointer"
>
  <a
    className="freshlyGreenText"
    href="#articles"
    onClick={(e) => {
      smoothScroll(e, '#articles');
      setActiveSection("articles");
    }}
  >
    Freshly Articles
  </a>
  <div
    className={
      activeSection === "articles" 
        ? "h-[7.5px] w-[109.005px] bg-[#008000] flex" 
        : "hidden"
    }
  />
</li>
{/* Partnership Start */}
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

</div>

{/* Partnership End */}
        </ul>
      </nav>
    </div>
  );
}

export default BlogsSubNavbar;
