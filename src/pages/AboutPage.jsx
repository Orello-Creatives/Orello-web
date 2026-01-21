import React from 'react'
import AboutHero from '../sections/AboutHero'
import OrelloIsa from '../sections/OrelloIsa'
import WhyWeAre from '../sections/WhyWeAre'
import MeetOur from '../sections/MeetOur'
const AboutPage = () => {
  return (
    <div className="w-full">
      <AboutHero />
      <OrelloIsa />
      <WhyWeAre />
      <MeetOur />
      <div className="h-screen"></div> 
    </div>
  )
}

export default AboutPage