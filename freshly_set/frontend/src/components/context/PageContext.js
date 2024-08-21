import {  createContext, useState } from "react";

export const PageContext = createContext();
export const PopupContext = createContext();
export const ModalContext = createContext();
export const ModalContentsContext = createContext();

export  const PageContextProvider = ({ children }) => {
    const [activeTab, setActiveTab] = useState("home");
    const [popUpOpen, setPopUpOpen] = useState(true);

    const [modalOpen, setModalOpen] = useState(true);
    const [modalContents, setModalContents] = useState({});

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
    return(
        <PageContext.Provider value={[activeTab, setActiveTab]}>
            <PopupContext.Provider value={[popUpOpen, setPopUpOpen]}>
                <ModalContext.Provider value={[modalOpen, setModalOpen]}>
                    <ModalContentsContext.Provider value={[modalContents, setModalContents]}>
                        {children}

                    </ModalContentsContext.Provider>
                </ModalContext.Provider>
            </PopupContext.Provider>
        </PageContext.Provider>
    )
}