import React, { useEffect, useState } from 'react';
import Nav from '../../Nav/Navbar';
import BlogSearch from './BlogSearch';
import BlogHero from './BlogHero';
import FreshlyFooter from '../../footer/FreshlyFooter';
import BlogWidgets from './BlogWidgets';
import api from '../../../api/blogs';
import BlogWidgetsNew from './BlogWidgetsNew';
// import BlogForm from './BlogForm';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [visible, setVisible] = useState(3);

  const showMore = () => {
    setVisible((prevCount) => Math.min(prevCount + 3, blogs.length));
  };

  const showLess = () => {
    setVisible((prevCount) => Math.max(prevCount - 3, 3));
  };

  const [activeTab, setActiveTab] = useContext(PageContext);

  useEffect(() => {
    setActiveTab("products")
},[activeTab])

//  useEffect(() => {

//   const fetchBlogs = async () => {
//     try {
//       const response = await api.get('freshlyapp/blogs');
//       setBlogs(response.data);

//     } catch (error) {
//       if (error) {
//         // Catch errors out of 200 range
//         console.log(error.response.data)
//         console.log(error.response.headers)
//         console.log(error.response.status)
//       } else {
//         // any other errors within 200
//         console.log(error.response.message)
//       }
//     };
//     fetchBlogs();
//     console.log("Blogs fetched", blogs)
//   }, [] };

const navigate = useNavigate()
const handleNavigateToAllBlogs = () => navigate('all-blogs-update')
const handleNavigateToAllUpdates = () => navigate('allUpdates')

  return (
    <div>

      <div className=" min-h-[100vh] py-16 bg-[#F5FAF9]">
        <Nav />
        <BlogSearch />
        <BlogHero />
        <h1 className="text-center text-nowrap text-[48px] my-2 sm:text-[64px] lg:text-[140px] text-[#008000] font-inter font-[900]">What's new?</h1>

        <div className='flex justify-end items-center pr-3 sm:pr-16'>
          <button onClick={handleNavigateToAllBlogs}            className="h-[27.922px] lg:h-[44.571px] w-[144px] lg:w-[229.858px] bg-[#008000] rounded-[9.551px] text-white cursor-pointer"
          >View All Updates</button>
        </div>

        <div className="flex flex-col gap-8 pb-8 max-w-[96%] sm:w-full mx-auto">
          {blogs ? blogs.slice(0, visible).map((blog) => (
            <BlogPosts key={blog.id} post={blog} />
          )) : <h4>Loading ... </h4>}
        </div>
        <div className="flex justify-center w-[100%]">
            <h3 className="font-[900] text-[35px] lg:text-[45px] text-[#008000] font-inter text-center whitespace-nowrap">ARTICLE CENTER</h3>
        </div>

        <div className="flex justify-center space-x-[19px] lg:space-x-[78px]">
            <img className="h-[132px] w-[132px] lg:h-[512px] lg:w-[512px]" src="/static/media/bulbWidget.png" alt="Article light bulb"/>

            <p className="text-[27.5px] lg:text-[55px] font-[900] lg:w-[478px] font-inter">Vertical Farms Can Be Implemented In Slums ?</p>

           
        </div>

        <div className="flex justify-end lg:mr-[40px]">
          
            <button
                className="h-[27.922px] lg:h-[44.571px] w-[144px] lg:w-[229.858px] bg-[#008000] rounded-[9.551px] text-white cursor-pointer"
                onClick={handleNavigateToAllUpdates}
            >
                View All Updates

            </button>
        </div>

          <BlogWidgetsNew />  
          {/* <BlogWidgets /> */}
        <Contact />
        <FreshlyFooter />
      </div>
    </div>
  );
};

export default Blogs;
