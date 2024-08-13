import React from 'react';
import Nav from '../../Nav/Navbar';

function Detailed() {
  return (
    <div className="min-h-screen bg-[#F5FAF9]">
      <Nav />

      <div className="block mt-[150px] lg:mt-[200px]">
      <div className="flex-shrink-0 ml-[5%]">
  <img
    src="/static/media/image10.png"
    alt="image 10"
    className="w-[61px] h-[47px]"
  />
</div>

        <h4 className="text-[#008000] text-[35px] text-center font-inter">reviews</h4>
        
      </div>

     {/* First Reviewer */}
<div className="flex flex-col lg:flex-row items-center justify-center mt-[20px] px-4 lg:px-6">
  {/* Image and Content Container with Border */}
  <div className="relative flex flex-col lg:flex-row items-start space-x-0 lg:space-x-4 p-6 rounded-[26px] border border-[rgba(0,0,0,0.20)] bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)] w-[345.586px] lg:w-[1222px] h-[158.963px] lg:h-[562px] flex-shrink-0">
    {/* Image */}
    <div className="flex-shrink-0 mb-4 lg:mb-0 lg:mr-4 order-1 lg:order-none">
      <img
        className="object-cover lg:w-[262px] w-[74.095px] h-[120.192px] lg:h-[425px] lg:rounded-[11px] rounded-[3.1111px]"
        src="/static/media/image4.jpg"
        alt="Charles Kisika"
      />
    </div>

    {/* Content */}
    <div className="flex flex-col justify-start lg:flex-1 flex-shrink-0 order-2 lg:order-none">
      <p className="w-[187.856px] lg:w-[664.263px] h-[8.774px] lg:h-[31.024px] text-black font-inter text-[12px] lg:text-[29px] font-bold">
        Charles Kisika
      </p>
      <p className="w-[166px] lg:w-[460.698px] h-[64px] lg:h-[184.374px] mt-2 text-black font-josefin text-[16px] lg:text-[20px] font-semibold leading-[130%]">
        "Freshly Farm's expertise has empowered our local farmers,<br />
        improving the quality and quantity of our<br />
        community garden's harvests."
      </p>
      <div className="w-80.011px lg:w-[282.922px] h-9.846px lg:h-[34.816px] mt-6 text-[#008000] font-josefin text-[8.486px] lg:text-[30px] font-bold leading-[130%]">
        Been Farmer
      </div>
      <div className="mt-2">
      <img className="lg:h-[24px] h-[15.271px] lg:w-[128px] w-[83.993px]" src="/static/media/image 17.png" alt="image17" />
      </div>
    </div>

    {/* Green Vertical Rectangle */}
    <div className="absolute right-0 top-0 h-full flex items-center justify-end pr-6 order-3 lg:order-none">
      <div className="lg:w-[18px] w-[5.09px] lg:h-[364px] h-[103.941px] flex-shrink-0 lg:rounded-[25px] rounded-[7.07px] bg-[#008000] lg:mr-[20px] mr-[5px]"></div>
    </div>
  </div>
</div>

      {/* Second Reviewer */}
<div className="flex items-center justify-center mt-[20px] sm:mt-[20px] px-6 lg:mt-[20px]">
  {/* Image and Content Container with Border */}
  <div className="relative flex items-start space-x-4 p-6 rounded-[26px] border border-[rgba(0,0,0,0.20)] bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)] w-[1222px] h-[562px] flex-shrink-0">
    {/* Image on the Left */}
    <div className="flex-shrink-0">
      <img
        className="object-cover w-[262px] h-[425px] rounded-[11px]"
        src="/static/media/image4.jpg"
        alt="Charles Kisika"
      />
    </div>

    {/* Content */}
    <div className="flex flex-col justify-start flex-1">
      <p className="w-[664.263px] h-[31.024px] text-black font-inter text-[29px] font-bold">
        Charles Kisika
      </p>
      <p className="w-[460.698px] h-[184.374px] mt-2 text-black font-josefin text-[20px] font-semibold leading-[130%]">
        "Freshly Farm's expertise has empowered our local farmers,<br />
        improving the quality and quantity of our<br />
        Freshly Farm's expertise has empowered our local farmers,<br />
        improving the quality and quantity of our<br />
        community garden's harvests."
      </p>
      <div className="w-[282.922px] h-[34.816px] mt-6 text-[#008000] font-josefin text-[30px] font-bold leading-[130%]">
        Been Farmer
      </div>
      <div className="mt-2">
        <img className="h-[24px] w-[128px]" src="/static/media/image 17.png" alt="image17" />
      </div>
    </div>

    {/* Green Vertical Rectangle */}
    <div className="absolute right-0 top-0 h-full flex items-center justify-end pr-6">
      <div className="w-[18px] h-[364px] flex-shrink-0 rounded-[25px] bg-[#008000] mr-[20px]"></div>
    </div>
  </div>
</div>


      {/* Third Reviewer */}
<div className="flex items-center justify-center mt-[20px] sm:mt-[20px] px-6 lg:mt-[20px]">
  {/* Image and Content Container with Border */}
  <div className="relative flex items-start space-x-4 p-6 rounded-[26px] border border-[rgba(0,0,0,0.20)] bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)] w-[1222px] h-[562px] flex-shrink-0">
    {/* Image on the Left */}
    <div className="flex-shrink-0">
      <img
        className="object-cover w-[262px] h-[425px] rounded-[11px]"
        src="/static/media/image4.jpg"
        alt="Charles Kisika"
      />
    </div>

    {/* Content */}
    <div className="flex flex-col justify-start flex-1">
      <p className="w-[664.263px] h-[31.024px] text-black font-inter text-[29px] font-bold">
        Charles Kisika
      </p>
      <p className="w-[460.698px] h-[184.374px] mt-2 text-black font-josefin text-[20px] font-semibold leading-[130%]">
        "Freshly Farm's expertise has empowered our local farmers,<br />
        improving the quality and quantity of our<br />
        Freshly Farm's expertise has empowered our local farmers,<br />
        improving the quality and quantity of our<br />
        community garden's harvests."
      </p>
      <div className="w-[282.922px] h-[34.816px] mt-6 text-[#008000] font-josefin text-[30px] font-bold leading-[130%]">
        Been Farmer
      </div>
      <div className="mt-2">
        <img className="h-[24px] w-[128px]" src="/static/media/image 17.png" alt="image17" />
      </div>
    </div>

    {/* Green Vertical Rectangle */}
    <div className="absolute right-0 top-0 h-full flex items-center justify-end pr-6">
      <div className="w-[18px] h-[364px] flex-shrink-0 rounded-[25px] bg-[#008000] mr-[20px]"></div>
    </div>
  </div>
</div>


      {/* Fourth Reviwer */}
<div className="flex items-center justify-center mt-[20px] sm:mt-[20px] px-6 lg:mt-[20px]">
  {/* Image and Content Container with Border */}
  <div className="relative flex items-start space-x-4 p-6 rounded-[26px] border border-[rgba(0,0,0,0.20)] bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)] w-[1222px] h-[562px] flex-shrink-0">
    {/* Image on the Left */}
    <div className="flex-shrink-0">
      <img
        className="object-cover w-[262px] h-[425px] rounded-[11px]"
        src="/static/media/image4.jpg"
        alt="Charles Kisika"
      />
    </div>

    {/* Content */}
    <div className="flex flex-col justify-start flex-1">
      <p className="w-[664.263px] h-[31.024px] text-black font-inter text-[29px] font-bold">
        Charles Kisika
      </p>
      <p className="w-[460.698px] h-[184.374px] mt-2 text-black font-josefin text-[20px] font-semibold leading-[130%]">
        "Freshly Farm's expertise has empowered our local farmers,<br />
        improving the quality and quantity of our<br />
        Freshly Farm's expertise has empowered our local farmers,<br />
        improving the quality and quantity of our<br />
        community garden's harvests."
      </p>
      <div className="w-[282.922px] h-[34.816px] mt-6 text-[#008000] font-josefin text-[30px] font-bold leading-[130%]">
        Been Farmer
      </div>
      <div className="mt-2">
        <img className="h-[24px] w-[128px]" src="/static/media/image 17.png" alt="image17" />
      </div>
    </div>

    {/* Green Vertical Rectangle */}
    <div className="absolute right-0 top-0 h-full flex items-center justify-end pr-6">
      <div className="w-[18px] h-[364px] flex-shrink-0 rounded-[25px] bg-[#008000] mr-[20px]"></div>
    </div>
  </div>
</div>


      {/* Fith Reviewer */}
<div className="flex items-center justify-center mt-[20px] sm:mt-[20px] px-6 lg:mt-[20px]">
  {/* Image and Content Container with Border */}
  <div className="relative flex items-start space-x-4 p-6 rounded-[26px] border border-[rgba(0,0,0,0.20)] bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)] w-[1222px] h-[562px] flex-shrink-0">
    {/* Image on the Left */}
    <div className="flex-shrink-0">
      <img
        className="object-cover w-[262px] h-[425px] rounded-[11px]"
        src="/static/media/image4.jpg"
        alt="Charles Kisika"
      />
    </div>

    {/* Content */}
    <div className="flex flex-col justify-start flex-1">
      <p className="w-[664.263px] h-[31.024px] text-black font-inter text-[29px] font-bold">
        Charles Kisika
      </p>
      <p className="w-[460.698px] h-[184.374px] mt-2 text-black font-josefin text-[20px] font-semibold leading-[130%]">
        "Freshly Farm's expertise has empowered our local farmers,<br />
        improving the quality and quantity of our<br />
        Freshly Farm's expertise has empowered our local farmers,<br />
        improving the quality and quantity of our<br />
        community garden's harvests."
      </p>
      <div className="w-[282.922px] h-[34.816px] mt-6 text-[#008000] font-josefin text-[30px] font-bold leading-[130%]">
        Been Farmer
      </div>
      <div className="mt-2">
        <img className="h-[24px] w-[128px]" src="/static/media/image 17.png" alt="image17" />
      </div>
    </div>

    {/* Green Vertical Rectangle */}
    <div className="absolute right-0 top-0 h-full flex items-center justify-end pr-6">
      <div className="w-[18px] h-[364px] flex-shrink-0 rounded-[25px] bg-[#008000] mr-[20px]"></div>
    </div>
  </div>
</div>

      {/* Sixth Reviewer */}
<div className="flex items-center justify-center mt-[20px] sm:mt-[20px] px-6 lg:mt-[20px]">
  {/* Image and Content Container with Border */}
  <div className="relative flex items-start space-x-4 p-6 rounded-[26px] border border-[rgba(0,0,0,0.20)] bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)] w-[1222px] h-[562px] flex-shrink-0">
    {/* Image on the Left */}
    <div className="flex-shrink-0">
      <img
        className="object-cover w-[262px] h-[425px] rounded-[11px]"
        src="/static/media/image4.jpg"
        alt="Charles Kisika"
      />
    </div>

    {/* Content */}
    <div className="flex flex-col justify-start flex-1">
      <p className="w-[664.263px] h-[31.024px] text-black font-inter text-[29px] font-bold">
        Charles Kisika
      </p>
      <p className="w-[460.698px] h-[184.374px] mt-2 text-black font-josefin text-[20px] font-semibold leading-[130%]">
        "Freshly Farm's expertise has empowered our local farmers,<br />
        improving the quality and quantity of our<br />
        Freshly Farm's expertise has empowered our local farmers,<br />
        improving the quality and quantity of our<br />
        community garden's harvests."
      </p>
      <div className="w-[282.922px] h-[34.816px] mt-6 text-[#008000] font-josefin text-[30px] font-bold leading-[130%]">
        Been Farmer
      </div>
      <div className="mt-2">
        <img className="h-[24px] w-[128px]" src="/static/media/image 17.png" alt="image17" />
      </div>
    </div>

    {/* Green Vertical Rectangle */}
    <div className="absolute right-0 top-0 h-full flex items-center justify-end pr-6">
      <div className="w-[18px] h-[364px] flex-shrink-0 rounded-[25px] bg-[#008000] mr-[20px]"></div>
    </div>
  </div>
</div>

 {/* Back Button */}
 <div className="flex items-center justify-start mt-[30px] ml-[5%]">
        <button
          className="bg-[#008000] text-white w-[200px] h-[60px] text-[35px] font-inter font-extrabold rounded-[8px]"
        >
          BACK
        </button>
      </div>
      </div>
    
  );
}

export default Detailed;