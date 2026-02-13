import React from 'react'
import AarkivaHero from '../sections/AarkivaHero'
import MoreCaseStudy from '../sections/MoreCaseStudy'
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
       <MoreCaseStudy />
      <Footer />
    </div>
  )
}

export default AarkivaCasestudyPage
