import React from 'react'
import OceanHero from '../sections/OceanHero'
import MoreCaseStudy5 from '../sections/MoreCaseStudy5'
import Footer from '../components/Footer'
import OceanSecond from '../sections/OceanSecond'
import OceanThird from '../sections/OceanThird'
import OceanFourth from '../sections/OceanFourth'
import Navbar from '../components/Navbar'
const OceanPage = () => {
  return (
    <div>
    <Navbar />
      <OceanHero />
      <OceanSecond />
      <OceanThird />
      <OceanFourth />
       <MoreCaseStudy5 />
      <Footer />
    </div>
  )
}

export default OceanPage
