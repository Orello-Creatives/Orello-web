import React from 'react'
import ScaleHero from '../sections/ScaleHero'
import MoreCaseStudy from '../sections/MoreCaseStudy'
import Footer from '../components/Footer'
import ScaleSecond from '../sections/ScaleSecond'
import ScaleThird from '../sections/ScaleThird'
import Navbar from '../components/Navbar'
const ScalepointPage = () => {
  return (
    <div>
    <Navbar />
      <ScaleHero />
      <ScaleSecond />
      <ScaleThird />
       <MoreCaseStudy />
      <Footer />
    </div>
  )
}

export default ScalepointPage
