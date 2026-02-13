import React from 'react'
import FindHero from '../sections/FindHero'
import MoreCaseStudy from '../sections/MoreCaseStudy'
import Footer from '../components/Footer'
import FindSecond from '../sections/FindSecond'
import FindThird from '../sections/FindThird'
import Navbar from '../components/Navbar'
const FindCasestudyPage = () => {
  return (
    <div>
    <Navbar />
      <FindHero />
      <FindSecond />
      <FindThird />
       <MoreCaseStudy />
      <Footer />
    </div>
  )
}

export default FindCasestudyPage
