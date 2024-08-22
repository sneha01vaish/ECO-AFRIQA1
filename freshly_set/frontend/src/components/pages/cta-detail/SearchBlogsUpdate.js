import React, { useState } from 'react'
import { BsFillShareFill } from "react-icons/bs";
import { MdArrowBackIosNew, MdOutlineSearch } from "react-icons/md";
import { IoWarningOutline } from "react-icons/io5";
import blogItems from "../blogs/blogItems.json"
import { Link } from 'react-router-dom'

export default function SearchBlogsUpdate() {
  const [query, setQuery] = useState("")
  const [updateBlogs, setUpdateBlogs] = useState(blogItems)

  const limitCharacters = (paragraph) => {
    if (paragraph.length > 100) {
      return paragraph.slice(0, 100) + '...'
    }
    return paragraph
  }

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase()
    setQuery(searchTerm)
    const filteredResults = blogs?.filter(
      item =>
      item.title.toLowerCase().includes(searchTerm) ||
      item.description.toLowerCase().includes(searchTerm)
    )
    setUpdateBlogs(filteredResults)
  }

  return (
    <section className=''>
      <div className="block sm:flex gap-2 justify-center items-center w-full">

        <div className='text-[24.00px] sm:text-[32.00px] pl-0 py-2 flex items-center text-[#67ed67]'>
          <MdArrowBackIosNew className="cursor-pointer" />
        </div>

        <div className='flex grow flex-nowrap items-center'>
          <input
            type="text"
            name="search"
            placeholder="Search updates..."
            value={query}
            onChange={handleSearch}
            className='py-3 pl-3 font-josefin text-[24px] text-[#1e241e] rounded-xl border-[#008000] outline-[#008000] overflow-hidden m-0 w-full'
          />
          <MdOutlineSearch className='-ml-[47.000px] float-end font-josefin text-[#008000] text-[47px] bg-white rounded-full cursor-pointer'/>
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
            {
              updateBlogs.length> 0 
              ? (updateBlogs.slice(0, 4).map(({id, title, image}) => (
              <div
                key={id}
                className='flex gap-3 items-center'>
                <img
                  src={image}
                  alt={title}
                  className='w-3/12 rounded-lg'
                />
                <h6 className='capitalize text-[12px] sm:text-[13.00px] md:text-[16px] lg:text-[18px] m-0 grow'>{title}</h6>
              </div>
              )))
              : 
              <section className='flex flex-col items-center'>
                <p className="text-green-600 my-2 text-[16px] font-inter">Sorry😢, no search update! &nbsp;
                <Link to='/blogs' className='text-blue-500'>Looking for something else?</Link>
              </p>
              <IoWarningOutline className='text-red-600 text-[48px] text-center'/>
              </section>
            }
          </div>
        </div>
      </div>
      <h2 className="text-green-600 text-start">All updates</h2>
      <div className="flex flex-wrap justify-center sm:justify-between items-center gap-2 sm:gap-6">

        {updateBlogs.length > 0
        ?
        (updateBlogs?.map(({ id, title, date, image, description }) => (
          <div
            key={id}
            className='sm:w-[300.00px] w-[160px] h-[250px] sm:h-[312.00px] shadow-slate-600 shadow-sm rounded-lg cursor-pointer'>
          <div className="sm:p-2 p-1 font-inter flex flex-col justify-between">
            <img
              src={image}
              alt={title}
              className='w-full rounded-md h-[96px] sm:h-[200px] my-auto'
            />
            <div className="mb-0 pb-0">
              <h2 className="m-0 font-bold text-[13px] text-start">{title}</h2>
              <p className="my-2 text-[11px] font-light text-start">{limitCharacters(description)}</p>
              <p className="flex justify-between text-[15px] items-center font-semibold m-0">
                <span className="text-[10px] capitalize text-start">By freshly farms, on {date}</span>
                <span className="cursor-pointers hidden sm:flex"><BsFillShareFill /></span>
              </p>
            </div>
          </div>
        </div>
        )))
        : <Link to='/blogs' className='text-blue-500 text-[16px]'>Looking for something else?</Link>
        }
      </div>
    </section>
  )
}
