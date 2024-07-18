import React from 'react'
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
function Home() {
  return (
    <div className="">
      <Nav />
     <Hero  />
     <Mission />
     <Metrics />
     <Services />
     <ProductSection />
     <Reviews2 />
     <Faq />

     <Contact />  
    <FreshlyFooter />
     </div>
  )
}

export default Home