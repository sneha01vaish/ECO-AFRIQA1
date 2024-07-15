import React from 'react'
import Hero from './Hero'
import Mission from './Mission'
import Reviews2 from './Reviews2'
import Nav from './Nav'
import FreshlyFooter from "../components/footer/FreshlyFooter";
import Contact from "./Contact";
function Home() {
  return (
    <div>
        <Nav />

     <Hero />
     <Mission />
     <Reviews2 />
     {/* <Contact /> */}  
    <FreshlyFooter />
     </div>
  )
}

export default Home