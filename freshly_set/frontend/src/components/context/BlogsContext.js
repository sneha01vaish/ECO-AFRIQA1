import { createContext, useEffect, useState } from "react";
import blogItems from "../pages/blogs/blogItems.json"
export const SelectedBlogContext = createContext();
export const UpdateBlogsContext = createContext();

export const BlogsContextProvider  = ({children}) => {
    const [selectedBlog, setSelectedBlog] = useState({});
    const [updateBlogs, setUpdateBlogs] = useState(blogItems)


    useEffect(() => {
        console.log("Updated Blogs", updateBlogs)
    },[])
   return(
        <SelectedBlogContext.Provider value={[selectedBlog, setSelectedBlog]}>
            <UpdateBlogsContext.Provider value={[updateBlogs, setUpdateBlogs]}>
                {children}
            </UpdateBlogsContext.Provider>
        </SelectedBlogContext.Provider>
   )
}