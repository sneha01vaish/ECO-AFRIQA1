import React, { useState } from 'react';

function BlogSearch() {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    console.log(`Searching for ${query}`);
    //  search 
  };

  return (
    <div className="relative mt-[100px]   h-[42.188px] lg:h-[120px] w-[853.653p] flex items-center justify-center border-[#008000] bg-white-100 pb--2">
      <div className="flex items-center w-[853.653px] h-[42.188px] rounded-[30px] border-solid border-[8px] bg-white  border-[#008000] mb-[-150px] mt-[12px] shadow-lg">
        <input
          type="text"
          className="w-full h-full px-4 text-[30px] text-gray-200 font-inter font-semibold border-none outline-none rounded-l-lg"
          placeholder="Search For News, Media etc..."
          value={query}
          onChange={handleInputChange}
        />
        <button
          onClick={handleSearch}
          className="w-[40px] h-[40px] bg-white border-4 border-[#008000] rounded-full flex items-center justify-center ml-2 focus:outline-none"
        >
          <svg 
            className="w-[20px] h-[20px] text-[#008000]" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1 0 9.65 9.65a7.5 7.5 0 0 0 7.5 7.5z" 
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default BlogSearch;
