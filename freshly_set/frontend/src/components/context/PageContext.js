import {  createContext, useState } from "react";

export const PageContext = createContext();

export  const PageContextProvider = ({ children }) => {
    const [activeTab, setActiveTab] = useState("home");
    return(
        <PageContext.Provider value={[activeTab, setActiveTab]}>
            {children}
        </PageContext.Provider>
    )
}