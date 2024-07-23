import React from 'react'
import Nav from '../../Nav/Navbar'
import Hero from './Hero'
import MissionVision from './MissionVision'
import Testimonials from './Testimonials'
import Team from './Team'

function About() {
  return (
    <div>
        <Nav />

        <Hero />
        <MissionVision />
        <Testimonials/>
        <Team/>
    </div>
  )
}

export default About