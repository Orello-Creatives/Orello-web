import React from 'react'
import AarkivaHero from '../sections/AarkivaHero'
import MoreCaseStudy1 from '../sections/MoreCaseStudy1'
import Footer from '../components/Footer'
import AarkivaSecond from '../sections/AarkivaSecond'
import AarkivaThird from '../sections/AarkivaThird'
import Navbar from '../components/Navbar'
const AarkivaCasestudyPage = () => {
  return (
    <div>
    <Navbar />
      <AarkivaHero />
      <AarkivaSecond />
      <AarkivaThird />
       <MoreCaseStudy1 />
      <Footer />
    </div>
  )
}

export default AarkivaCasestudyPage
