// src/components/Blogs.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from '../../Nav/Navbar';
import BlogHero from './BlogHero';
import BlogForm from './BlogForm';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  // useEffect(() => {
  //   const fetchBlogs = async () => {
  //     const response = await axios.get('/api/blogs/', {
  //     setBlogs(response.data);
  //   };

  //   fetchBlogs();
  // }, []);

  return (
    <div>
      <Nav />
      <BlogHero />
      <BlogForm/>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
            <p>Author: {blog.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blogs;
