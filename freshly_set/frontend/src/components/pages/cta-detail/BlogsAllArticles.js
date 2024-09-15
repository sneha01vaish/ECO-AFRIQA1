import React from 'react'
import SearchBlogsUpdate from "./SearchBlogsUpdate"
import BlogCtaPopup from "../blogs/BlogCtaPopup";
function BlogsAllArticles() {
  return (
    <>
      <main className='sm:max-w-[90%] max-w-[96%] my-8 mx-auto mt-[40px]'>
        <BlogCtaPopup />
        <SearchBlogsUpdate />
      </main>
    </>
  )
}

export default BlogsAllArticles