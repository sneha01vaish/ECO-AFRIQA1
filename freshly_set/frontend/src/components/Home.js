import React from 'react'
import Hero from './Hero'
import Mission from './Mission'
import Nav from './Nav'
import FreshlyFooter from "../components/footer/FreshlyFooter";
import Contact from "./Contact";
function Home() {
  return (
    <div>
        <Nav />

     <Hero />
     <Mission />

     {/* <Contact /> */}
  
    <FreshlyFooter />
     </div>
  )
}

export default Home