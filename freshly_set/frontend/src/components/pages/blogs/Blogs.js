import React, { useContext, useEffect, useState } from 'react';
import Nav from '../../Nav/Navbar';
import BlogSearch from './BlogSearch';
import BlogHero from './BlogHero';
import FreshlyFooter from '../../footer/FreshlyFooter';
import BlogPosts from './BlogList'
import blogItems from './blogItems.json'

// import BlogForm from './BlogForm';
import Contact from './Contact';
import { BlogsClickedContext, PageContext, SelectedSectionContext } from '../../context/PageContext';
import BlogWidgetsNew from './BlogWidgetsNew';
import BlogWidgets from './BlogWidgets';
import { useNavigate } from 'react-router-dom';
import api from "../../../api/blogs"
import axios from 'axios';
import BlogMain from './BlogMain';
import { FaArrowLeft } from 'react-icons/fa';
import BlogCtaPopup from './BlogCtaPopup';
import BlogsAllUpdates from '../cta-detail/BlogsAllUpdates';
import { BlogsContext } from '../../context/BlogsContext';

const Blogs = () => {
  const [blogs, setBlogs] = useContext(BlogsContext);
  const [visible, setVisible] = useState(3);
  const [activeTab, setActiveTab] = useContext(PageContext);

  const [csrfToken, setCsrfToken] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null)
  const [selectedSection, setSelectedSection] = useContext(SelectedSectionContext);

  const [blogModalOpen, setBlogModalOpen] = useContext(BlogsClickedContext);

  const showMore = () => {
    setVisible((prevCount) => Math.min(prevCount + 3, blogs.length));
  };

  const showLess = () => {
    setVisible((prevCount) => Math.max(prevCount - 3, 3));
  };

  useEffect(() => {
    setActiveTab("products")
},[activeTab])


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
      <BlogCtaPopup />
      <div className=" min-h-[100vh] py-16 bg-[#F5FAF9]">
        <Nav />


        {
          selectedSection!=="blogs" && (
            <FaArrowLeft onClick={() => setSelectedSection("blogs")} className="absolute h-[61px] w-[61px] text-[#008000] lg:top-[240px] left-[38px] cursor-pointer z-[50]"/>

          )
        }
        <BlogSearch />
        
        { selectedSection === "blogs" && (
          <BlogMain blogs={blogs}/>
       )}       

        { selectedSection === "all-updates" && (
       <div>
          <BlogsAllUpdates />
        </div>
       )}

       
        <FreshlyFooter />
      </div>
    </div>
  );
};

export default Blogs;
