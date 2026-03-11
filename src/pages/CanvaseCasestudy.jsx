import React from 'react'
import CanvaseHero from '../sections/CanvaseHero'
import MoreCaseStudy6 from '../sections/MoreCaseStudy6'
import Footer from '../components/Footer'
import CanvaseSecond from '../sections/CanvaseSecond'
import CanvaseThird from '../sections/CanvaseThird'
import CanvaseFourth from '../sections/CanvaseFourth'
import Navbar from '../components/Navbar'
const CanvasePage = () => {
  return (
    <div>
    <Navbar />
      <CanvaseHero />
      <CanvaseSecond />
      <CanvaseThird />
      <CanvaseFourth />
       <MoreCaseStudy6 />
      <Footer />
    </div>
  )
}

export default CanvasePage
