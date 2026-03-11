import React from 'react'
import AboutHero from '../sections/AboutHero'
import OrelloIsa from '../sections/OrelloIsa'
import WhyWeAre from '../sections/WhyWeAre'
import MeetOur from '../sections/MeetOur'
import LatestReads from '../sections/LatestReads'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


const AboutPage = () => {
  return (
    <div>
    <Navbar />
      <AboutHero />
      <OrelloIsa />
      <WhyWeAre />
      <MeetOur />
      <LatestReads />
      <Footer />
    </div>
  )
}

export default AboutPage