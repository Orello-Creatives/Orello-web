import React from 'react'
import G3Hero from '../sections/G3Hero'
import MoreCaseStudy5 from '../sections/MoreCaseStudy5'
import Footer from '../components/Footer'
import G3Second from '../sections/G3Second'
import G3Third from '../sections/G3Third'
import Navbar from '../components/Navbar'
const CanvasePage = () => {
  return (
    <div>
    <Navbar />
      <G3Hero />
      <G3Second />
      <G3Third />
       <MoreCaseStudy5 />
      <Footer />
    </div>
  )
}

export default CanvasePage
