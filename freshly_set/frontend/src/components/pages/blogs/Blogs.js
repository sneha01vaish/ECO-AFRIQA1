import React, { useContext, useEffect, useState } from 'react';
import Nav from '../../Nav/Navbar';
import BlogSearch from './BlogSearch';
import BlogHero from './BlogHero';
import FreshlyFooter from '../../footer/FreshlyFooter';
import BlogPosts from './BlogList'
import blogItems from './blogItems.json'

// import BlogForm from './BlogForm';
import Contact from './Contact';
import { PageContext } from '../../context/PageContext';
import BlogWidgetsNew from './BlogWidgetsNew';
import BlogWidgets from './BlogWidgets';
import { useNavigate } from 'react-router-dom';
import api from "../../../api/blogs"
import axios from 'axios';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [visible, setVisible] = useState(3);
  const [activeTab, setActiveTab] = useContext(PageContext);

  const [csrfToken, setCsrfToken] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null)
  const showMore = () => {
    setVisible((prevCount) => Math.min(prevCount + 3, blogs.length));
  };

  const showLess = () => {
    setVisible((prevCount) => Math.max(prevCount - 3, 3));
  };

  useEffect(() => {
    setActiveTab("products")
},[activeTab])

//  useEffect(() => {

//   const fetchBlogs = async () => {
//     try {
//       const response = await api.get('freshlyapp/blogs');
//       setBlogs(response.data);
//       console.log("Blogs set", blogs)

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
//     console.log("Blogs fetched", blogs)
//   }
//   fetchBlogs();

// }, [])
useEffect(() => {
  // Fetch CSRF token from meta tag
  const token = document.querySelector('meta[name="csrf-token"]');
  if (token) {
    setCsrfToken(token.getAttribute('content'));
  }

  axios.get('http://localhost:8000/freshlyapp/blogs/', {
    headers: {
      'X-CSRFToken': csrfToken
    },
    withCredentials: true
  })
  .then(response => {
    setBlogs(response.data);
  })
  .catch(error => {
    console.error('Error fetching blogs:', error);
  });

  console.log("Blogs", blogs)
}, [csrfToken]);

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

        <div className="flex flex-wrap justify-center mx-auto gap-3 z-10">
          <button
            className="standardBtn"
            disabled={visible >= blogs.length}
            onClick={showMore}
          >
            View All Updates
          </button>
          <button
            className="standardBtn"
            disabled={visible <= 3}
            onClick={showLess}
          >
            View less Updates
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
