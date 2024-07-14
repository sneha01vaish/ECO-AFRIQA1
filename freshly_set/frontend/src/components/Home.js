import React from 'react'
import Hero from './Hero'
import Mission from './Mission'
import Nav from './Nav'
import FreshlyFooter from "../components/footer/FreshlyFooter";

function Home() {
  return (
    <div>
        <Nav />

     <Hero />
     <Mission />
  
    <FreshlyFooter />
     </div>
  )
}

export default Home