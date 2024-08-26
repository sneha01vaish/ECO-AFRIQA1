import { useState, memo, useEffect } from 'react'
import { IoCaretDownSharp } from "react-icons/io5";
import { FaThumbsUp } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";
import { BsShareFill } from "react-icons/bs";

const BlogList = ({ post }) => {
    const { title, date, image, description } = post
    return (
        <section>
            <div>
                <div className='sm:w-[400px] sm:h-[300px] h-auto w-[320px] shadow-slate-600 shadow-sm rounded-[10px] bg-white/90'>
                    <div className='p-2'>
                        <p className='flex justify-between items-center m-0 pb-1'>
                            <span className='capitalize font-bold sm:max-w-[50%] w-[60%] flex-wrap text-start text-sm'>{title}</span>
                            <span className='cursor-pointer'><IoCaretDownSharp /></span>
                        </p>
                        <div className="flex gap-[3px] justify-between">
                            <div className='flex flex-col justify-between items-start w-[52%]'>
                                <p className='text-[10px] font-medium capitalize text-start mt-0'>by freshly farms, {date}</p>
                                <p className='text-start text-[10px] text-slate-900 mt-0'>{description}</p>
                                <p className='flex justify-between gap-5 text-[14px]'>
                                    <span className='cursor-pointer'>
                                        <FaThumbsUp />
                                    </span>
                                    <span className='cursor-pointer'>
                                        <MdMessage />
                                    </span>
                                    <span className='cursor-pointer'>
                                        <BsShareFill />
                                    </span>
                                </p>
                            </div>
                            <div>
                                <img
                                    src={image}
                                    alt={title}
                                    className="sm:w-[200px] w-[132px] sm:h-[240px] h-[150px] object-cover overflow-hidden rounded-md"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default memo(BlogList)