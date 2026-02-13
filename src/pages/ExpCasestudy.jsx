import React from 'react'
import ExpHero from '../sections/ExpHero'
import MoreCaseStudy from '../sections/MoreCaseStudy'
import Footer from '../components/Footer'
import ExpSecond from '../sections/ExpSecond'
import ExpThird from '../sections/ExpThird'
import Navbar from '../components/Navbar'
const ExpCasestudyPage = () => {
  return (
    <div>
    <Navbar />
      <ExpHero />
      <ExpSecond />
      <ExpThird />
       <MoreCaseStudy />
      <Footer />
    </div>
  )
}

export default ExpCasestudyPage
