import React from 'react'
import FindHero from '../sections/FindHero'
import MoreCaseStudy2 from '../sections/MoreCaseStudy2'
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
       <MoreCaseStudy2 />
      <Footer />
    </div>
  )
}

export default FindCasestudyPage
