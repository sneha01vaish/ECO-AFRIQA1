import React from "react";
import { Link } from "react-router-dom";
import Nav from '../../Nav/Navbar';
import FreshlyFooter from '../../footer/FreshlyFooter';

function Installation() {
    return (
        <div className="min-h-screen bg-[#F5FAF9] overflow-x-hidden">
            <Nav /> {/* The Upper NavBar */}

            {/* Main Content Section */}
            <div className='relative'>
                {/* Full-width Background Image */}
                <div className='relative h-[420px] lg:h-[600px] overflow-hidden w-full'>
                    <img 
                        src='/static/media/Rectangle .png' 
                        alt="Installation Background" 
                        className='object-cover h-full w-full' 
                    />

                    {/* Centered Content */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black/[30%] p-4 lg:p-8">
                        {/* Heading */}
                        <h1 className="text-[24px] lg:text-[40px] font-suez font-[700] mb-4">
                            Freshly Farms Installation
                        </h1>

                        {/* Flex Container for Paragraph and Button */}
                        <div className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left">
                            {/* Paragraph */}
                            <p className="text-[14px] text-start lg:text-[18px] font-inter max-w-[700px] mb-6 lg:mb-0 lg:mr-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam imperdiet.<br></br>
                          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.<br></br>
                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.<br></br>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam imperdiet.<br></br>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.<br></br>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.<br></br>
                            </p>

                            {/* Request Quotation Button */}
                            <Link to="/Request-Quotation">
                                <button className="bg-green-500 hover:bg-green-700 text-white rounded-[8px] text-[16px] font-inter lg:text-[18px] font-inter font-[700] py-[12px] px-[24px] lg:px-[40px]">
                                    Request Quotation
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* New Section */}
            <div className="py-[40px] lg:py-[80px] bg-[#F5FAF9]">
                {/* Section Heading */}
                <h2 className="text-center text-[24px] lg:text-[36px] font-suez font-[700] mb-8">
                    Freshly Installation
                </h2>

                {/* Flex Container for Images and Paragraphs */}
                <div className="flex flex-col lg:flex-row lg:space-x-8 px-4 lg:px-8">
                    {/* Top Image and Paragraph */}
                    <div className="flex flex-col lg:flex-row lg:items-center mb-8 lg:mb-0 rounded-[24px] overflow-hidden shadow-md">
                        <img 
                            src='/static/media/image.png' 
                            alt="Top Image 1" 
                            className='w-full lg:w-[300px] h-auto object-cover'
                        />
                        <p className="text-[14px] text-start font-inter lg:text-[18px] p-4 lg:mr-4]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam imperdiet.<br></br>
                      Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.<br></br>
                       Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.<br></br>
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row lg:items-center mb-8 lg:mb-0 rounded-[24px] overflow-hidden shadow-md">
                        <img 
                            src='/static/media/image (2).png' 
                            alt="Top Image 2" 
                            className='w-full lg:w-[300px] h-auto object-cover'
                        />
                        <p className="text-[14px] text-start lg:text-[18px] font-inter p-4 lg:mr-4 ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam imperdiet.<br></br>
                       Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.<br></br>
                       Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.<br></br>
                        </p>
                    </div>
                </div>

                {/* Flex Container for Bottom Images and Paragraphs */}
                <div className="flex flex-col lg:flex-row lg:space-x-8 px-4 lg:mt-[20px] lg:px-8">
                    {/* Bottom Image and Paragraph */}
                    <div className="flex flex-col lg:flex-row lg:items-center mb-8 lg:mb-0 rounded-[24px] overflow-hidden shadow-md">
                        <img 
                            src='/static/media/image (1).png' 
                            alt="Bottom Image " 
                            className='w-full lg:w-[300px] h-auto object-cover'
                        />
                        <p className="text-[14px] text-start lg:text-[18px] font-inter p-4 lg:mr-4 ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam imperdiet.<br></br>
                       Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.<br></br>
                       Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.<br></br>
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row lg:items-center rounded-[24px] overflow-hidden shadow-md">
                        <img 
                            src='/static/media/image.png' 
                            alt="Bottom Image 2" 
                            className='w-full lg:w-[300px] h-auto object-cover'
                        />
                        <p className="text-[14px] text-start lg:text-[18px] font-inter p-4 lg:mr-4 ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam imperdiet.<br></br>
                         Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.<br></br>
                          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.<br></br>
                        </p>
                    </div>
                </div>
            </div>

 {/* New Section with Two Headings and an Image */}
 <div className="py-[40px] lg:py-[80px] bg-[#F5FAF9]">
    <h2 className="text-center text-[24px] lg:text-[36px] font-suez font-[700] mb-4">
        Our Installation Process
    </h2>
    <h3 className="text-center text-[20px] lg:text-[28px] font-suez font-[600] mb-8">
        Detailed and Efficient
    </h3>

    <div className="flex flex-col lg:flex-row lg:space-x-8 px-8 lg:px-32">
        {/* Image and Paragraph */}
        <div className="flex flex-col lg:flex-row lg:items-center mb-8 lg:mb-0">
            <img 
                src='/static/media/image 250.png' 
                alt="Installation Image" 
                className='w-full lg:w-[400px] h-auto object-cover'  
            />
            <p className="text-[14px] text-start lg:text-[18px] font-inter p-4 lg:ml-8">  {/* Added margin-left to create space */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam imperdiet.<br></br>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.<br></br>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.<br></br>
            </p>
        </div>
    </div>
</div>


            {/* New Section with Centered Image */}
            <div className="py-[40px] lg:py-[80px] bg-[#F5FAF9]">
                <div className="text-center">
                    <img 
                        src='/static/media/Group 647 .png' 
                        alt="Centered Image" 
                        className='w-auto h-auto mx-auto' 
                    />
                </div>
            </div>
            <FreshlyFooter /> {/* Footer Section */}
        </div>
    );
}

export default Installation;
