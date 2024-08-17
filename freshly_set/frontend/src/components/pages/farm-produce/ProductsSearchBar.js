import React from 'react'

function ProductsSearchBar() {
  return (
    <div className="relative  my-[30px] h-[42.188px] lg:h-[100px] w-[853.653p] flex items-center justify-center border-[#008000] bg-white-100 pb--2">
      <div className="flex justify-between items-center lg:pt-[12px] pr-[32px] w-[100%] lg:w-[853.653px] font-[600] h-[54px] lg:h-[100px] rounded-[20px] my-[29px] border-solid border-[5px] bg-white  border-[#008000] mb-[-150px] mt-[12px] shadow-lg">
        <input
          type="text"
          className="px-4 text-[15px] lg:text-[30px] text-black/[50%] font-inter font-semibold border-none outline-none mx-[30px] my-[20px] w-[217px] lg:w-auto"
          placeholder="Search For Farming System"
        //   value={query}
        //   onChange={handleInputChange}
        />
        <div>
          <img className="h-[39px] lg:h-[88px] w-[39px] lg:w-[89px]" src="/static/media/searchIcon.png"/>
        </div>
      </div>
    </div>
)
}

export default ProductsSearchBar