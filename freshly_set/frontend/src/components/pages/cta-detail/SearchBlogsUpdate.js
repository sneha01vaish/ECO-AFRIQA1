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

      <div className='flex my-8 gap-3'>    
        <div className='w-7/12'>
          <img
            src='/static/media/blogsUpdate.png'
            alt='blogs update thumbnail'
            className='w-full'
          />
        </div>

        <div className='w-5/12'>
          <h1 className='mt-0 text-center text-3xl text-green-500 font-bold'>Popular updates</h1>

          <div className='flex flex-col gap-3'>

            <div className='flex gap-3 items-start'>
              <img
                src='/static/media/blogsUpdate.png'
                alt='blogs update thumbnail'
                className='w-5/12'
              />
              <h6 className='capitalize text-xl mt-0'>benefits of vertical farming both financially and socially</h6>
            </div>

            <div className='flex gap-3 items-start'>
              <img
                src='/static/media/blogsUpdate.png'
                alt='blogs update thumbnail'
                className='w-5/12'
              />
              <h6 className='capitalize text-xl mt-0'>benefits of vertical farming both financially and socially</h6>
            </div>

            <div className='flex gap-3 items-start'>
              <img
                src='/static/media/blogsUpdate.png'
                alt='blogs update thumbnail'
                className='w-5/12'
              />
              <h6 className='capitalize text-xl mt-0'>benefits of vertical farming both financially and socially</h6>
            </div>

          </div>

        </div>
      </div>

    </section>
  )
}
