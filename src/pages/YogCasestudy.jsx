import React from 'react'
import YogHero from '../sections/YogHero'
import YogSecond from '../sections/YogSecond'
import YogThird from '../sections/YogThird'
import YogFourth from '../sections/YogFourth'
import MoreCaseStudy from '../sections/MoreCaseStudy'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const GBMCasestudy = () => {
  return (
    <div>
     <Navbar />
      <YogHero />
      <YogSecond />
      <YogThird />
      <YogFourth />
      <MoreCaseStudy />
      <Footer />
     
    </div>
  )
}

export default GBMCasestudy
