import { createContext, useState } from "react";

export const SelectedBlogContext = createContext();

export const BlogsContextProvider  = ({children}) => {
    const [selectedBlog, setSelectedBlog] = useState({})

   return(
        <SelectedBlogContext.Provider value={[selectedBlog, setSelectedBlog]}>
            {children}
        </SelectedBlogContext.Provider>
   )
}