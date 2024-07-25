// src/components/Blogs.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from '../../Nav/Navbar';
import BlogHero from './BlogHero';
import FreshlyFooter from '../../footer/FreshlyFooter';
import BlogWidgets from './BlogWidgets';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  // useEffect(() => {
  //   const fetchBlogs = async () => {
  //     const response = await axios.get('/api/blogs/', {
  //       headers: {
  //         'Authorization': `Token ${localStorage.getItem('authToken')}`,
  //       },
  //     });
  //     setBlogs(response.data);
  //   };

  //   fetchBlogs();
  // }, []);

  return (
    <div>
      <Nav />
      <BlogHero />

      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
            <p>Author: {blog.author}</p>
          </li>
        ))}
      </ul>
      <BlogWidgets />
      <FreshlyFooter />
    </div>
  );
};

export default Blogs;
