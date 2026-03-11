import React from 'react'
import GangpurHero from '../sections/GangpurHero'
import MoreCaseStudy2 from '../sections/MoreCaseStudy2'
import Footer from '../components/Footer'
import GangpurSecond from '../sections/GangpurSecond'
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
       <MoreCaseStudy2 />
      <Footer />
    </div>
  )
}

export default CanvasePage
