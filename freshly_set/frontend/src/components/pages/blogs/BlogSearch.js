import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { SearchContext } from '../../context/PageContext';
import { useNavigate } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function BlogSearch() {
  const [query, setQuery] = useState('');

  
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [csrfToken, setCsrfToken] = useState('');
  const [isLoading, setIsLoading] = useState(false); // To manage loading state
  const [error, setError] = useState(null); // To manage error state
  const navigate = useNavigate();

  // const { handleSearch } = useContext(SearchContext);
  // useEffect(() => {
  //   // Fetch CSRF token from meta tag
  //   const token = document.querySelector('meta[name="csrf-token"]');
  //   if (token) {
  //     setCsrfToken(token.getAttribute('content'));
  //   }

  //   // Fetch initial blogs
  //   axios.get('http://localhost:8000/freshlyapp/search/', {
  //     headers: {
  //       'X-CSRFToken': csrfToken
  //     },
  //     withCredentials: true
  //   })
  //   .then(response => {
  //     setBlogs(response.data);
  //     setFilteredBlogs(response.data);
  //   })
  //   .catch(error => {
  //     console.error('Error fetching blogs:', error);
  //   });
  // }, [csrfToken]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

    // Helper function to get the query parameters from the URL
    const getSearchParams = () => {
      const params = new URLSearchParams(location.search);
      return params.get('q') || '';  // use 'q' to match the Django query param
    };

    const handleSearch = (e) => {
      e.preventDefault();
      navigate(`/search?q=${query}`); 
    };
  
  return (
    
    <div className="relative mt-[100px] h-[42.188px] lg:h-[100px] w-[853.653p] flex items-center justify-center border-[#008000] bg-white-100 pb--2">
      <form onSubmit={handleSearch} className="flex justify-between items-center pt-[12px] pr-[32px] w-[853.653px] font-[600] h-[100px] rounded-[20px] my-[29px] border-solid border-[5px] bg-white border-[#008000] mb-[-150px] mt-[12px] shadow-lg">
        
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value) }
          className="px-4 text-[15px] lg:text-[30px] text-black/[50%] font-inter font-semibold border-none outline-none mx-[30px] my-[20px] w-[217px] lg:w-auto"
          placeholder="Search For News, Media etc..."
          defaultValue={getSearchParams()}
        />
        <button 
          // onClick={}
          type="submit"
          className="focus:outline-none"
          aria-label="Search"
        >
          <img 
            className={`h-[88px] w-[89px] ${isLoading ? 'opacity-50' : ''}`} 
            src="/static/media/searchIcon.png" 
            alt="Search Icon" 
          />
        </button>
      </form>
     
      {isLoading && <p>Loading...</p>} {/* Show loading text while searching */}
      {error && <p className="text-red-500">{error}</p>} {/* Show error message if any */}
      
      {/* Need to style properly */}
      {/* <ul>
        {filteredBlogs.map(blog => (
          <li key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default BlogSearch;
