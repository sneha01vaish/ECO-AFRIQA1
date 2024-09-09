import React from 'react';
import Nav from '../../Nav/Navbar';

function ResultsSearch() {
  return (
    <div className="min-h-screen bg-[#F5FAF9] overflow-x-hidden">
      <Nav /> {/* The Upper NavBar */}

      {/* Main Content */}
      <div className="flex justify-center items-center mt-[150px] lg:mt-[200px]">

        {/* Rounded Container */}
        <div className="container bg-white rounded-[24px]  p-6 lg:p-10 w-[85%] lg:w-[80%] space-y-8  border-green-400 border-solid shadow-md shadow-gray-500">
          
          {/* Button Section */}
          <div className="flex justify-center space-x-4">
            <button className="bg-[#008000] text-white py-9 px-10 rounded-lg  text-[30px]">
              Update
            </button>
            <button className="bg-white text-black py-9 px-10 rounded-lg text-[30px]">
              Articles
            </button>
          </div>

          {/* First Section */}
<div className="UpperBanner bg-white flex justify-between border-[1px] border-gray-400 border-solid shadow-md shadow-gray-500 py-[18px] lg:py-[6px] px-[8px] lg:px-[10px] rounded-[8px] lg:rounded-[12px]">
  <div className="flex items-center w-full">
    {/* Image 83 */}
    <div className="flex-shrink-0">
      <img src="/static/media/image 83.png" alt="Image 83" className="w-[100px] h-[100px] lg:w-[100px] lg:h-[100px]" />
    </div>

    {/* Text Section */}
    <div className="flex-grow ml-6 lg:ml-12 text-center">
      <h1 className="text-[#0a0a0a] text-[24px] lg:text-[36px] font-['Inter'] font-bold">
      Freshly Farms new product release
      </h1>
    </div>

    {/* Group 518 Image (pushes to the end with ml-auto) */}
    <div className="flex-shrink-0 ml-auto">
      <img src="/static/media/group 518.png" alt="Group 518" className="w-[80px] h-[30px] lg:w-[100px] lg:h-[30px]" />
    </div>
  </div>
</div>

          {/* Second Section */}
          <div className="UpperBanner bg-white flex justify-between border-[1px] border-gray-400 border-solid shadow-md shadow-gray-500 py-[18px] lg:py-[6px] px-[8px] lg:px-[10px] rounded-[8px] lg:rounded-[12px]">
  <div className="flex items-center w-full">
    {/* Image 83 */}
    <div className="flex-shrink-0">
      <img src="/static/media/image 83.png" alt="Image 83" className="w-[100px] h-[100px] lg:w-[100px] lg:h-[100px]" />
    </div>

    {/* Text Section */}
    <div className="flex-grow ml-6 lg:ml-12 text-center">
      <h1 className="text-[#0a0a0a] text-[24px] lg:text-[36px] font-['Inter'] font-bold">
      Freshly Farms new product release
      </h1>
    </div>

    {/* Group 518 Image (pushes to the end with ml-auto) */}
    <div className="flex-shrink-0 ml-auto">
      <img src="/static/media/group 518.png" alt="Group 518" className="w-[80px] h-[30px] lg:w-[100px] lg:h-[30px]" />
    </div>
  </div>
</div>

          {/* Third Section */}
          <div className="UpperBanner bg-white flex justify-between border-[1px] border-gray-400 border-solid shadow-md shadow-gray-500 py-[18px] lg:py-[6px] px-[8px] lg:px-[10px] rounded-[8px] lg:rounded-[12px]">
  <div className="flex items-center w-full">
    {/* Image 83 */}
    <div className="flex-shrink-0">
      <img src="/static/media/image 83.png" alt="Image 83" className="w-[100px] h-[100px] lg:w-[100px] lg:h-[100px]" />
    </div>

    {/* Text Section */}
    <div className="flex-grow ml-6 lg:ml-12 text-center">
      <h1 className="text-[#080808] text-[24px] lg:text-[36px] font-['Inter'] font-bold">
      Freshly Farms new product release
      </h1>
    </div>

    {/* Group 518 Image (pushes to the end with ml-auto) */}
    <div className="flex-shrink-0 ml-auto">
      <img src="/static/media/group 518.png" alt="Group 518" className="w-[80px] h-[30px] lg:w-[100px] lg:h-[30px]" />
    </div>
  </div>
</div>

   {/* Third Section */}
   <div className="UpperBanner bg-white flex justify-between border-[1px] border-gray-400 border-solid shadow-md shadow-gray-500 py-[18px] lg:py-[6px] px-[8px] lg:px-[10px] rounded-[8px] lg:rounded-[12px]">
  <div className="flex items-center w-full">
    {/* Image 83 */}
    <div className="flex-shrink-0">
      <img src="/static/media/image 83.png" alt="Image 83" className="w-[100px] h-[100px] lg:w-[100px] lg:h-[100px]" />
    </div>

    {/* Text Section */}
    <div className="flex-grow ml-6 lg:ml-12 text-center">
      <h1 className="text-[#020202] text-[24px] lg:text-[36px] font-['Inter'] font-bold">
        Freshly Farms new product release
      </h1>
    </div>

    {/* Group 518 Image (pushes to the end with ml-auto) */}
    <div className="flex-shrink-0 ml-auto">
      <img src="/static/media/group 518.png" alt="Group 518" className="w-[80px] h-[30px] lg:w-[100px] lg:h-[30px]" />
    </div>
  </div>
</div>
        </div>
      </div>
    </div>
  );
}

export default ResultsSearch;
