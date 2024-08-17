import React from 'react'
import SearchBlogsUpdate from "./SearchBlogsUpdate"
import AllUpdates from './AllUpdates'

function BlogsAllArticles() {
  return (
    <>
      <main className='sm:max-w-[90%] max-w-[96%] my-8 mx-auto'>
        <SearchBlogsUpdate />
        <section>
          <AllUpdates />
        </section>
      </main>
    </>
  )
}

export default BlogsAllArticles