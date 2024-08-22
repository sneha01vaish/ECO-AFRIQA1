import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../Nav/Navbar';

function HeroDetail() {
  return (
    <div className="min-h-screen bg-[#F5FAF9] overflow-x-hidden">
      <Nav /> {/* The Upper NavBar */}

      {/* Main Content */}
      <div className="block">
        
        {/* Left Back Button */}
        <div className="mt-[150px] lg:mt-[200px] ml-2 lg:ml-6">
          <Link to='/about-us'>
            <img src='/static/media/image10.png' alt='image 10' className="w-[30px] h-[30px] lg:w-auto lg:h-auto"/>
          </Link>
        </div>

        {/* Main Title */}
        <div className="Title ml-4 lg:ml-16 mt-4 lg:mt-0">
          <h1 className="text-[#008000] text-[20px] lg:text-[30px] text-start font-['Suez_One'] font-normal leading-[24px] lg:leading-[28px]">
            WHY WE ARE COMMITTED<br />
            ENVIRONMENTALISTS
          </h1>

          {/* Sub Details Section */}
          <div className="SubThreeDetails flex flex-row lg:flex-row mt-[20px] space-y-4 lg:space-y-0">

            {/* Paragraphs Section */}
            <div className="Paragraphs flex-1">

              {/* First Details */}
              <div className="FirstDetails mb-[5px] space-y-4">
                <p className="text-start mb-[5px] w-full lg:w-[540px] flex-shrink-0 text-black font-['Josefin_Sans'] text-[14px] lg:text-[25px] font-semibold leading-[1.3]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, <br className="hidden lg:block"/>
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br className="hidden lg:block"/>
                  Ut enim ad minim veniam, quis nostrud.
                </p>
                <p className="text-start mt-[5px] w-full lg:w-[540px] flex-shrink-0 text-black font-['Josefin_Sans'] text-[14px] lg:text-[25px] font-semibold leading-[1.3]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
                </p>
                <p className="text-start mb-[5px] w-full lg:w-[540px] flex-shrink-0 text-black font-['Josefin_Sans'] text-[14px] lg:text-[25px] font-semibold leading-[1.3]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do <br className="hidden lg:block"/>
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. <br className="hidden lg:block"/>
                  Ut enim ad minim veniam, quis nostrud.
                </p>
                <p className="text-start mt-[5px] w-full lg:w-[540px] flex-shrink-0 text-black font-['Josefin_Sans'] text-[14px] lg:text-[25px] font-semibold leading-[1.3]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
                </p>
              </div>

              <div>
                <p className="text-start mt-[15px] w-full lg:w-[540px] h-auto lg:h-[184px] flex-shrink-0 text-[#008000] font-['Josefin_Sans'] text-[16px] lg:text-[30px] font-semibold leading-[1.3]">
                  -Kevin Manoti
                </p>
              </div>
            </div>

            {/* Image Section */}
            <div className="ImageSection flex-shrink-0 lg:mr-[420px] mt-[40px] mx-[4px] lg:mt-[-82px]">
              <img src="/static/media/image 188.png" alt="Team Member" className="w-[240px] h-[333px] lg:w-[481px] lg:h-[666px]" />
            </div>
          </div>
        </div>

        {/* New Section for Image 189 */}
        <div className="flex justify-center mt-[20px] lg:mt-[5px]">
          <img src="/static/media/image 189.png" alt="Environmental Image" className="w-[100px] h-[72px] lg:w-[296px] lg:h-[214px]" />
        </div>

        {/* New Section with Paragraphs and Green Vertical Line */}
        <div className="flex flex-row lg:flex-row justify-center mt-[20px]">
          {/* First Block of Paragraphs */}
          <div className="flex-1 mx-[5px] space-y-4 lg:ml-20">
            <p className="text-black font-['Josefin_Sans'] text-start  lg:text-start  text-[14px] lg:text-[25px] font-semibold leading-[1.3] w-full lg:w-[540px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam imperdiet.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.
            </p>
            <p className="text-black font-['Josefin_Sans'] text-start  lg:text-start text-[14px] lg:text-[25px] font-semibold leading-[1.3] w-full lg:w-[540px]">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.
            </p>
            <p className="text-black font-['Josefin_Sans'] text-start  lg:text-start text-[14px] lg:text-[25px] font-semibold leading-[1.3] w-full lg:w-[540px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.
            </p>
            <p className="text-black font-['Josefin_Sans'] text-start  lg:text-start  text-[14px] lg:text-[25px] font-semibold leading-[1.3] w-full lg:w-[540px]">
              Phasellus at dolor vitae nisl vehicula fringilla ac at odio.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.
            </p>
          </div>

          {/* Green Vertical Line */}
          <div className="flex items-center mx-[2px] mt-[20px] lg:mt-0 lg:ml-[120]">
            <div className="w-[4px] h-[675px] lg:w-[8px] lg:h-[755px] bg-[#008000]"></div>
          </div>

          {/* Second Block of Paragraphs */}
          <div className="flex-1 mx-[5px] space-y-4 mt-[2px] lg:mt-0">
            <p className="text-black font-['Josefin_Sans'] text-start lg:text-start text-[14px] lg:text-[25px] font-semibold leading-[1.3] w-full lg:w-[540px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam imperdiet.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.
            </p>
            <p className="text-black font-['Josefin_Sans'] text-start  lg:text-start text-[14px] lg:text-[25px] font-semibold leading-[1.3] w-full lg:w-[540px]">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.
            </p>
            <p className="text-black font-['Josefin_Sans'] text-start  lg:text-start text-[14px] lg:text-[25px] font-semibold leading-[1.3] w-full lg:w-[540px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.
            </p>
            <p className="text-black font-['Josefin_Sans'] text-start  lg:text-start text-[14px] lg:text-[25px] font-semibold leading-[1.3] w-full lg:w-[540px]">
              Phasellus at dolor vitae nisl vehicula fringilla ac at odio.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.
            </p>
          </div>
        </div>
        {/* Back Button */}
 <div className="flex items-center justify-start mt-[30px] ml-[5%]">
 <Link to='/about-us'>
        <button
          className="bg-[#008000] text-white w-[200px] h-[60px] text-[35px] font-inter font-extrabold rounded-[8px]"
        >
          BACK
        </button>
        </Link>
      </div>
      </div>
    </div>
  );
}

export default HeroDetail;
