import React, { useState } from 'react';
import Nav from '../../Nav/Navbar';
import BlogSearch from './BlogSearch';
import BlogHero from './BlogHero';

const Blogs = () => {
  const [blogs] = useState([]); // No need for setBlogs if you're not using it

   // useEffect(() => {
  //   const fetchBlogs = async () => {
  //     const response = await axios.get('/api/blogs/', {
  //       headers: {
  //         'Authorization': Token ${localStorage.getItem('authToken')},
  //       },
  //     });
  //     setBlogs(response.data);
  //   };

  //   fetchBlogs();
  // }, []);

  return (
    <div>
      <Nav />
      <BlogSearch />
      <BlogHero />
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
    </div>
  );
};

export default Blogs;
