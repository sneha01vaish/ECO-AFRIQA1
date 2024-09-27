import React from 'react';

function Mission() {
  return (
    <section id="mission" className="flex flex-col justify-center items-center pt-14 pb-14">
      {/* Heading */}
      <h2 className="text-center font-inter text-[35px] lg:text-[45px] text-[#008000] font-bold mb-8">
        Our Mission
      </h2>

      {/* Content Wrapper (Text and Images) */}
      <div className="flex flex-col lg:flex-row justify-between items-center w-full lg:w-3/4 space-y-6 lg:space-y-0 lg:space-x-6">
        {/* Left Side (Text) */}
        <div className="lg:w-1/2 text-center lg:text-start">
          <div className="space-y-4 mt-4">
          <p className="text-[15px] text-start font-josefin text-[#525560] leading-[26px] w-[90%] lg:w-[552px] mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          <p className="text-[15px] text-start font-josefin text-[#525560] leading-[26px] w-[90%] lg:w-[552px] mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-[15px] text-start font-josefin text-[#525560] leading-[26px] w-[90%] lg:w-[552px] mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-[15px] text-start font-josefin text-[#525560] leading-[26px] w-[90%] lg:w-[552px] mx-auto lg:mx-0">
              Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>

        {/* Right Side (Images) */}
        <div className="lg:w-1/2 grid grid-cols-2 gap-2">
          {/* Square images with small sizes and rounded corners */}
          <img src="/static/media/hero1.png" alt="heroTop1" className="w-[100px] h-[100px] lg:w-[180px] lg:h-[180px] object-cover rounded-lg" />
          <img src="/static/media/hero2.png" alt="heroTop2" className="w-[100px] h-[100px] lg:w-[180px] lg:h-[180px] object-cover rounded-lg" />
          <img src="/static/media/hero3.png" alt="heroBottom1" className="w-[100px] h-[100px] lg:w-[180px] lg:h-[180px] object-cover rounded-lg" />
          <img src="/static/media/hero4.png" alt="heroBottom2" className="w-[100px] h-[100px] lg:w-[180px] lg:h-[180px] object-cover rounded-lg" />
        </div>
      </div>
    </section>
  );
}

export default Mission;
