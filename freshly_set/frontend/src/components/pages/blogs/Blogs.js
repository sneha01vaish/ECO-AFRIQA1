import { useEffect, useState } from 'react'
import BlogPosts from './BlogList'
import api from '../../../api/blogs'

const Blogs = () => {

  const [blogs, setBlogs] = useState([])
  const [visible, setVisible] = useState(3)

  const showMore = () => {
    setVisible((prevCount) => Math.min(prevCount + 3, blogs.length))
  }

  const showLess = () => {
    setVisible((prevCount) => Math.max(prevCount - 3, 3))
  }

 useEffect(() => {

  const fetchBlogs = async () => {
    try {
      const response = await api.get('/blogs');
      setBlogs(response.data);

    } catch (error) {
      if (error) {
        // Catch errors out of 200 range
        console.log(error.response.data)
        console.log(error.response.headers)
        console.log(error.response.status)
      } else {
        // any other errors within 200
        console.log(error.response.message)
      }
    }
  }
  fetchBlogs()
 }, [])

//  console.log(blogs)
  return (
    <div className="bg-slate-100 min-h-[100vh] py-16">
      <h1 className="text-center text-6xl text-green-800 tracking-wider m-0">What's new?</h1>
        <div className="flex flex-col gap-8 py-8 max-w-[96%] sm:w-full mx-auto">
          {
            blogs ? blogs.slice(0, visible).map((blog) => {
              return <BlogPosts key={blog.id} post={blog} />
            })
            : <h4>Loading ... </h4>
          }
      </div>
      <div className="flex flex-wrap justify-center mx-auto gap-3 z-10">

        <button className="px-6 py-3 relative border-1 font-medium border-green-600 bg-green-400 text-white transition-colors before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-green-600 before:transition-transform before:duration-300 before:content-[''] rounded-xl overflow-hidden hover:text-white before:hover:scale-x-100 cursor-pointer shadow-sm before:opacity-50" disabled={visible >= blogs.length } onClick={showMore}>View All Updates</button>

        <button className="px-6 py-3 relative border-1 font-medium border-green-600 bg-green-400 text-white transition-colors before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-green-600 before:transition-transform before:duration-300 before:content-[''] text-center rounded-xl overflow-hidden hover:text-white before:hover:scale-x-100 cursor-pointer shadow-sm before:opacity-50" disabled={visible <= 3} onClick={showLess}>View less Updates</button>
      </div>
    </div>
  );
};

export default Blogs;

// src/components/Blogs.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

//   const [blogs, setBlogs] = useState([]);

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       const response = await axios.get('/api/blogs/', {
//         headers: {
//           'Authorization': `Token ${localStorage.getItem('authToken')}`,
//         },
//       });
//       setBlogs(response.data);
//     };

//     fetchBlogs();
//   }, []);

// <ul>
// {blogs.map(blog => (
// ))} 
// </ul>