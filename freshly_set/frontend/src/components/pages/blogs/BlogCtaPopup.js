import React, { useContext, useEffect, useState } from 'react'
import { BlogsClickedContext, CurrentIndexContext, ModalContentsContext, ModalContext, ModalToggleContentsContext } from '../../context/PageContext';
import { FaShareAlt, FaStar, FaThumbsUp } from 'react-icons/fa';
import { IoMdClose } from "react-icons/io";
import { MdMessage, MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { FaMessage } from 'react-icons/fa6';
import { SelectedBlogContext, UpdateBlogsContext } from '../../context/BlogsContext';

function CtaPopup() {
    const [blogModalOpen, setBlogModalOpen] = useContext(BlogsClickedContext)
    const [modalContents, setModalContents] = useContext(ModalContentsContext);
    const [modalToggleContents, setModalToggleContents]  = useContext(ModalToggleContentsContext)

    const [currentIndex, setCurrentIndex] = useContext(CurrentIndexContext);

    const [selectedBlog, setSelectedBlog] = useContext(SelectedBlogContext);

    const [updateBlog, setUpdateBlog] = useContext(UpdateBlogsContext);

    const handleNext = () => {
        if (currentIndex < modalToggleContents.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }

    };

    const handleBack = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    useEffect(() => {
        console.log("Changing Index", currentIndex)
    },[currentIndex])
  return (
    <div className="">
        {blogModalOpen && (

                <div 
                    className="fixed inset-0 z-[100] border border-gray-700 shadow-lg  flex  justify-center bg-[#F5FAF9]  transition-opacity duration-300 ease-in-out"
                >   

                <IoMdClose onClick={() => setBlogModalOpen(false)} className="absolute top-0 right-[30px] text-black h-[38px] w-[38px] z-[101] cursor-pointer"/>      


                {/* Back and Forward Icons */}

                <MdNavigateNext                                 
                onClick={handleNext}
                className="absolute top-[50%] right-[30px] z-[110] freshlyGreenText text-[38px] cursor-pointer"/>
                
                <MdNavigateBefore
                onClick={handleBack}

                className="absolute top-[50%] left-[30px] z-[110] freshlyGreenText text-[38px] cursor-pointer "/>

                <div className="fixed inset-0 z-[30] rounded-[14.021px] border border-gray-700 shadow-lg  flex  justify-center lg:justify-between bg-white items-center lg:items-start  mx-[15px] lg:mx-[126px] mt-[37px] mb-[47px] lg:mt-[96px]  lg:mb-[40px]">
                                     
                    <div className="block lg:flex">
                        <div className="flex justify-center">
                            {/* Left/Top Side */}
                            <img className="h-[207px] w-[276px] lg:h-[500px] lg:w-[386px]  rounded-[9.67px] object-cover" src={selectedBlog?.image} alt="ClickableBlogPostImage"/>

                        </div>
                        
                        <div className="flex justify-center">
                            <div className="block">
                              
                                <h3 className="w-[312px] text-center lg:text-start font-inter lg:ml-[29.67px] ml-[0px] lg:w-[666.33px] freshlyGreenText text-[15px] lg:text-[30.77px]">{selectedBlog?.title}</h3>

                                <div className="block max-h-[300px] oveflow-hidden overflow-y-scroll">
                                    <p className="text-[10.79px] lg:ml-[29.26px] lg:text-[17.58px]  font-josefin text-start font-[700] text-black/[0.70] leading-[14.03px] lg:leading-[22.86px] w-[278px] lg:w-[587.21px]"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru</p>
                                    <p className="text-[10.79px] lg:ml-[29.26px] lg:text-[17.58px]  font-josefin text-start font-[700] text-black/[0.70] leading-[14.03px] lg:leading-[22.86px] w-[278px] lg:w-[587.21px]"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru</p>
                                    <p className="text-[10.79px] lg:ml-[29.26px] lg:text-[17.58px]  font-josefin text-start font-[700] text-black/[0.70] leading-[14.03px] lg:leading-[22.86px] w-[278px] lg:w-[587.21px]"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru</p>
                                    <p className="text-[10.79px] lg:ml-[29.26px] lg:text-[17.58px]  font-josefin text-start font-[700] text-black/[0.70] leading-[14.03px] lg:leading-[22.86px] w-[278px] lg:w-[587.21px]"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru</p>
                                    <p className="text-[10.79px] lg:ml-[29.26px] lg:text-[17.58px]  font-josefin text-start font-[700] text-black/[0.70] leading-[14.03px] lg:leading-[22.86px] w-[278px] lg:w-[587.21px]"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru</p>

                                    <p className="text-[10.79px] lg:ml-[29.26px] lg:text-[17.58px]  font-josefin text-start font-[700] text-black/[0.70] leading-[14.03px] lg:leading-[22.86px] w-[278px] lg:w-[587.21px]"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru</p>
                                    <p className="text-[10.79px] lg:ml-[29.26px] lg:text-[17.58px]  font-josefin text-start font-[700] text-black/[0.70] leading-[14.03px] lg:leading-[22.86px] w-[278px] lg:w-[587.21px]"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru</p>
                                    <p className="text-[10.79px] lg:ml-[29.26px] lg:text-[17.58px]  font-josefin text-start font-[700] text-black/[0.70] leading-[14.03px] lg:leading-[22.86px] w-[278px] lg:w-[587.21px]"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru</p>

                                </div>
                                
                            </div>
                        </div>
             
                    </div>

                </div>

                  
            <div className="absolute flex justify-between space-x-[] lg:bottom-[60px] z-[40] right-[290px]">
                {/* Social Icons */}
                <div className="flex space-x-[27.69px] lg:space-x-[33.4px] items-center lg:ml-[55.92px]">
                    <FaThumbsUp className="text-black h-[21.21px] w-[17.68px] lg:h-[34.28px] lg:w-[35.16px]" />
                    <MdMessage className="text-black h-[21.21px] w-[17.68px] lg:h-[34.28px] lg:w-[35.16px]" />
                    <FaShareAlt className="text-black h-[21.21px] w-[17.68px] lg:h-[34.28px] lg:w-[35.16px]" />
                </div>

                {/* Right Side */}

                <div className="flex space-x-[32px]">
                    <p className="text-[#FF0C1A] text-[12px] lg:text-[17.58px] font-[900] ml-[55.92px] font-inter"> 11 Likes</p>
                    <p className="text-[#FF0C1A] text-[12px] lg:text-[17.58px] font-[900] ml-[55.92px] font-inter"> 4 Comments</p>

                </div>

                


            </div>
               
              
            </div>
        )}
    </div>
   
  )
}

export default CtaPopup