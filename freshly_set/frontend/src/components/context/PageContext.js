import {  createContext, useState } from "react";

export const PageContext = createContext();
export const PopupContext = createContext();
export const ModalContext = createContext();
export const ModalContentsContext = createContext();
export const CurrentIndexContext = createContext();
export const ModalToggleContentsContext = createContext();

export const SelectedSectionContext = createContext();


export  const PageContextProvider = ({ children }) => {
    const [activeTab, setActiveTab] = useState("home");
    const [popUpOpen, setPopUpOpen] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Selected Sections Context

    const [selectedSection, setSelectedSection] = useState("blogs")

    // Modal Context
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContents, setModalContents] = useState({});
    const [modalToggleContents, setModalToggleContents]  = useState([
        {
            number:1,
            img:"/static/media/veggieRack.png",
            title:"Hydroponics System",
            body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut."
            // Add Images Array
        },

        {
            number:2,
            img:"/static/media/veggieRack2.png",
            title:"Vertical System",
            body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut."
            // Add Images Array
        },

        {
            number:3,
            img:"/static/media/veggieFish.png",
            title:"Container Gardens",
            body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut."

        }
    ])

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
    return(
        <PageContext.Provider value={[activeTab, setActiveTab]}>
            <PopupContext.Provider value={[popUpOpen, setPopUpOpen]}>
                <ModalContext.Provider value={[modalOpen, setModalOpen]}>
                    <ModalContentsContext.Provider value={[modalContents, setModalContents]}>
                        <CurrentIndexContext.Provider value={[currentIndex, setCurrentIndex]}>
                            <ModalToggleContentsContext.Provider value={[modalToggleContents, setModalToggleContents]}>
                                <SelectedSectionContext.Provider value={[selectedSection, setSelectedSection]}>
                                    {children}

                                </SelectedSectionContext.Provider>

                            </ModalToggleContentsContext.Provider>

                        </CurrentIndexContext.Provider>

                    </ModalContentsContext.Provider>
                </ModalContext.Provider>
            </PopupContext.Provider>
        </PageContext.Provider>
    )
}