
import { useState, memo, useEffect, useContext } from 'react'
import { IoCaretDownSharp, IoCaretUpSharp } from "react-icons/io5";
import { FaThumbsUp } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";
import { BsShareFill } from "react-icons/bs";
import { BlogsClickedContext } from '../../context/PageContext';
import { SelectedBlogContext } from '../../context/BlogsContext';

const BlogList = ({ post }) => {
    const [clicked, setClicked] = useState(null)
    const {id, title, date, image, description } = post

    const [blogModalOpen, setBlogModalOpen] = useContext(BlogsClickedContext)
  const [selectedBlog, setSelectedBlog] = useContext(SelectedBlogContext);
    const toggleBlog =(postId) => {
        setClicked((prev) => (prev === postId ? null : postId))
    }

    const addLike = () => {
    }

    const onBlogClicked = () => {
        setBlogModalOpen(true);
        setSelectedBlog({id:post.id, image:post.image, title:post.title, date:post.date, description:post.description})


    }
    return (
        <section>
            <div>
                <div className={`cursor-pointer ${ clicked ? "sm:h-[300px] h-auto shadow-slate-600 shadow-sm rounded-[10px] bg-white/90": "h-[40px] py-2 " } sm:w-[400px] w-[320px] h-auto shadow-slate-600 shadow-sm rounded-[10px] bg-white/90 transition-all duration-300 ease-in-out`}>
                    <div className='p-2'>
                        <p className='flex justify-between items-center m-0 pb-1'>
                            <span onClick={() => onBlogClicked()}  className='capitalize font-bold w-[80%] text-start text-sm'>{title}</span>
                            <span
                                onClick={() => toggleBlog(id)}
                                className={`${clicked ? "rotate-180 text-black/80": ""} cursor-pointer transition-all duration-300 ease-in-out`}
                            >
                                <IoCaretDownSharp />
                            </span>
                        </p>
                        <div className={`${clicked ? "flex gap-[3px] justify-between": "hidden"} `}>
                            <div className='flex flex-col justify-between items-start w-[52%]'>
                                <p className='text-[10px] font-medium capitalize text-start mt-0'>{`by freshly farms, ${date}`}</p>
                                <p className='text-start text-[10px] text-slate-900 mt-0'>{description}</p>
                                <p className='flex justify-between gap-5 text-[14px]'>
                                    <span className='cursor-pointer'>
                                        <FaThumbsUp onClick={addLike}/>
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