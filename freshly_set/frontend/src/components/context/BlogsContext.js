import { createContext, useEffect, useState } from "react";
import blogItems from "../pages/blogs/blogItems.json"
export const SelectedBlogContext = createContext();
export const UpdateBlogsContext = createContext();
export const BlogsContext = createContext();

export const BlogsContextProvider  = ({children}) => {
    const [selectedBlog, setSelectedBlog] = useState({});
    const [updateBlogs, setUpdateBlogs] = useState(blogItems)
    const [blogs, setBlogs] = useState([]);


    useEffect(() => {
        console.log("Updated Blogs", updateBlogs)
    },[])
   return(
        <SelectedBlogContext.Provider value={[selectedBlog, setSelectedBlog]}>
            <UpdateBlogsContext.Provider value={[updateBlogs, setUpdateBlogs]}>
                <BlogsContext.Provider value={[blogs, setBlogs]}>
                    {children}
                </BlogsContext.Provider>
            </UpdateBlogsContext.Provider>
        </SelectedBlogContext.Provider>
   )
}