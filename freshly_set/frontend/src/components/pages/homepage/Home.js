import React, { useContext, useEffect } from 'react'
import Nav from '../../Nav/Navbar'
import Mission from './Mission'
import Hero from "./Hero"
import Services from "./Services"
import ProductSection from "./ProductSection"
import Reviews2 from "./Reviews2";
import Faq from "./Faq";
import Contact from "./Contact";
import Metrics from "../../metrics/Metrics"
import FreshlyFooter from '../../footer/FreshlyFooter'
import { PageContext } from '../../context/PageContext'
import Banner from './Banner'
import SubNavbar from "../../Nav/SubNavbar";
function Home() {

  const [activeTab, setActiveTab] = useContext(PageContext);

  useEffect(() => {
    setActiveTab("home")
},[activeTab])
  return (
    <div className="">
      <Nav />
      <SubNavbar />
     <Hero id="hero" />
     <Mission id="mission"/>
     <Metrics id="metrics"/>
     <Banner id="promotion"/>
     <Services id="services" />
     <ProductSection id="product" />
     <Reviews2 id="reviews"/>
     <Faq id="faqs"/>

     <Contact id="contact"/>  
    <FreshlyFooter />
     </div>
  )
}

export default Home