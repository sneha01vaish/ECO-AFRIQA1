import React, { useEffect, useState } from 'react';

import Nav from '../../Nav/Navbar';
import BlogSearch from './BlogSearch';
import BlogHero from './BlogHero';
import FreshlyFooter from '../../footer/FreshlyFooter';
import BlogWidgets from './BlogWidgets';
import BlogPosts from './BlogPosts'
import api from '../../../api/blogs'
import BlogForm from './BlogForm';

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
      const response = await api.get('freshlyapp/blogs');
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

    <div>
      <Nav />
      <BlogSearch />
      <BlogHero />
      <BlogForm/>
      <BlogWidgets />
      <ul>
        {blogs.length === 0 ? (
          <p>No blogs available.</p>
        ) : (
          blogs.map(blog => (
            <li key={blog.id}>
              <h2>{blog.title}</h2>
              <p>{blog.content}</p>
              <p>Author: {blog.author}</p>
            </li>
          ))
        )}
      </ul>
      <FreshlyFooter />
    </div>
  );
};

export default Blogs;

