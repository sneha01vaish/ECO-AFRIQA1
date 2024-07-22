import React from 'react'
import Nav from '../../Nav/Navbar'
import Hero from './Hero'
import MissionVision from './MissionVision'
import WhyChoose from './WhyChoose'
import JoinUs from './JoinUs'
import StriveFor from './StriveFor'

function About() {
  return (
    <div>
        <Nav />

      <Hero />
      <WhyChoose/>
      <MissionVision />
      <JoinUs />
        <Hero />
        <MissionVision />
      <StriveFor />
      
    </div>
  )
}

export default About