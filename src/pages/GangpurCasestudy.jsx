import React from 'react'
import GangpurHero from '../sections/GangpurHero'
import MoreCaseStudy from '../sections/MoreCaseStudy'
import Footer from '../components/Footer'
import GangpurSecond from '../sections/Gangpursecond'
import GangpurThird from '../sections/GangpurThird'
import GangpurFourth from '../sections/GangpurFourth'
import Navbar from '../components/Navbar'
const CanvasePage = () => {
  return (
    <div>
    <Navbar />
      <GangpurHero />
      <GangpurSecond />
      <GangpurThird />
      <GangpurFourth />
       <MoreCaseStudy />
      <Footer />
    </div>
  )
}

export default CanvasePage
