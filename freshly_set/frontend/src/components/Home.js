import React from 'react'
import Hero from './Hero'
import Mission from './Mission'
import Reviews2 from './Reviews2'
import Nav from './Nav'
import Contact from "./Contact";
import Faq from './Faq'
import Metrics from '../components/metrics/Metrics';
import Services from './Services'
import ProductSection from './ProductSection'
import FreshlyFooter from '../components/footer/FreshlyFooter'
function Home() {
  return (
    <div className="">
        <Nav />

     <Hero />
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