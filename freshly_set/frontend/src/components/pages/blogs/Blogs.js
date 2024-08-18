import React, { useEffect, useState } from 'react';
import Nav from '../../Nav/Navbar';
import BlogSearch from './BlogSearch';
import BlogHero from './BlogHero';
import FreshlyFooter from '../../footer/FreshlyFooter';
import BlogWidgets from './BlogWidgets';
import api from '../../../api/blogs';
import BlogForm from './BlogForm';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [visible, setVisible] = useState(3);

  const showMore = () => {
    setVisible((prevCount) => Math.min(prevCount + 3, blogs.length));
  };

  const showLess = () => {
    setVisible((prevCount) => Math.max(prevCount - 3, 3));
  };

  const fetchBlogs = async () => {
    try {
      const response = await api.get('freshlyapp/blogs/');
      setBlogs(response.data);
    } catch (error) {
      if (error.response) {
        console.log('Error data:', error.response.data);
        console.log('Error status:', error.response.status);
        console.log('Error headers:', error.response.headers);
      } else if (error.request) {
        console.log('Error request:', error.request);
      } else {
        console.log('Error message:', error.message);
      }
      console.log('Error config:', error.config);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Function to handle when a new blog is created
  const handleBlogCreated = (newBlog) => {
    setBlogs([newBlog, ...blogs]);
  };

  return (
    <div>
      <Nav />
      <BlogSearch />
      <BlogHero />
      <BlogForm onBlogCreated={handleBlogCreated} />
      <BlogWidgets />
      <ul>
        {blogs.length === 0 ? (
          <p>No blogs available.</p>
        ) : (
          blogs.map((blog, index) => (
            index < visible && (
              <li key={blog.id}>
                <h2>{blog.title}</h2>
                <p>{blog.content}</p>
                <p>Author: {blog.author}</p>
              </li>
            )
          ))
        )}
      </ul>
      {visible < blogs.length && (
        <button onClick={showMore}>Show More</button>
      )}
      {visible > 3 && (
        <button onClick={showLess}>Show Less</button>
      )}
      <FreshlyFooter />
    </div>
  );
};

export default Blogs;
