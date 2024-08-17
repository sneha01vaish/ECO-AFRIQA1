import React from 'react'
import { MdArrowBackIosNew, MdOutlineSearch } from "react-icons/md";

export default function SearchBlogsUpdate() {
  return (
    <section className=''>
      <div className="block sm:flex gap-2 justify-center items-center w-full">

        <div className='text-[24.00px] sm:text-[32.00px] pl-0 py-2 flex items-center text-[#67ed67]'>
          <MdArrowBackIosNew />
        </div>

        <div className='flex grow flex-nowrap items-center'>
          <input
            type="text"
            name="search"
            placeholder="Search updates..."
            className='py-3 pl-3 font-josefin text-[24px] text-[#1e241e] rounded-xl border-[#008000] outline-[#008000] overflow-hidden m-0 w-full'
          />
          <MdOutlineSearch className='-ml-[47.000px] float-end font-josefin text-[#008000] text-[47px] bg-white rounded-full'/>
        </div>
      </div>

      <div className='sm:flex block my-8 gap-5 overflow-hidden rounded-lg'>
        <div className='sm:w-7/12 w-full h-auto relative rounded-lg'>
          <img
            src='/static/media/blogsUpdate.png'
            alt='blogs thumbnail'
            className='w-full object-cover rounded-lg'
          />
          <p className='capitalize bg-black/60 text-white opacity-90 font-inter text-[16px] sm:text-[18px] md:text-[22px] font-bold absolute bottom-0 w-full m-0 inset-x-0 rounded-lg'>
            <span className='flex justify-start pl-3'>new product release enhance </span>
            <span className='block text-start pl-3'>urban farming</span>
            <span className='text-[12px] text-end block capitalize pr-3 my-0'>freshly farms</span>
          </p>
        </div>

        <div className='w-full sm:w-6/12 font-inter grow'>
          <h1 className='sm:mt-0 sm:mb-4 sm:text-center text-xl md:text-3xl capitalize text-green-600 font-bold'>Popular updates</h1>

          <div className='flex flex-col gap-3 text-[32.00px] sm:max-h-[200px] md:max-h-[240px] lg:max-h-[340px] xl:max-h-[400px] overflow-y-auto scrollbar-thumb-green-200 scrollbar-thin hover:scrollbar-thumb-green-400'>

            <div className='flex gap-3 items-center'>
              <img
                src='/static/media/update1.png'
                alt='blogs thumbnail'
                className='w-3/12 rounded-lg'
              />
              <h6 className='capitalize text-[12px] sm:text-[13.00px] md:text-[16px] lg:text-[18px] m-0 grow'>benefits of vertical farming both financially and socially</h6>
            </div>

            <div className='flex gap-3 items-center'>
              <img
                src='/static/media/update2.png'
                alt='blogs thumbnail'
                className='w-3/12 rounded-lg'
              />
              <h6 className='capitalize text-[12px] sm:text-[13.00px] md:text-[16px] lg:text-[18px] m-0 grow'>freshly farms new developments in Kenya </h6>
            </div>
            <div className='flex gap-3 items-center'>
              <img
                src='/static/media/update3.png'
                alt='blogs thumbnail'
                className='w-3/12 rounded-lg'
              />
              <h6 className='capitalize text-[12px] sm:text-[13.00px] md:text-[16px] lg:text-[18px] m-0 grow'>our produce difference and benefits</h6>
            </div>
            <div className='flex gap-3 items-center'>
              <img
                src='/static/media/update4.png'
                alt='blogs thumbnail'
                className='w-3/12 rounded-lg'
              />
              <h6 className='capitalize text-[12px] sm:text-[13.00px] md:text-[16px] lg:text-[18px] m-0 grow'>benefits of vertical farming both financially and .. </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
