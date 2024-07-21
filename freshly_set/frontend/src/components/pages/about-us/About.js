import React from 'react'
import Nav from '../../Nav/Navbar'
import Hero from './Hero'
import MissionVision from './MissionVision'
import WhyChoose from './WhyChoose'
import JoinUs from './JoinUs'

function About() {
  return (
    <div>
        <Nav />

      <Hero />
      <WhyChoose/>
      <MissionVision />
      <JoinUs />
    </div>
  )
}

export default About