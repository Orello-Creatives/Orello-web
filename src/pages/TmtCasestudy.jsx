import React from 'react'
import TmtHero from '../sections/TmtHero'
import MoreCaseStudy from '../sections/MoreCaseStudy'
import Footer from '../components/Footer'
import TmtSecond from '../sections/TmtSecond'
import TmtThird from '../sections/TmtThird'
import Navbar from '../components/Navbar'
const TmtCasestudyPage = () => {
  return (
    <div>
    <Navbar />
      <TmtHero />
      <TmtSecond />
      <TmtThird />
       <MoreCaseStudy />
      <Footer />
    </div>
  )
}

export default TmtCasestudyPage
