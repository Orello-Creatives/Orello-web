import React from 'react'
import GbmHero from '../sections/GbmHero'
import WhatWeDelivered from '../sections/WhatWeDelivered'
import GbmGallery from '../sections/GbmGallery'
import GbmReview from '../sections/GbmReview'
import MoreCaseStudy1 from '../sections/MoreCaseStudy1'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const GBMCasestudy = () => {
  return (
    <div>
     <Navbar />
      <GbmHero />
      <WhatWeDelivered />
      <GbmGallery />
      <GbmReview />
      <MoreCaseStudy1 />
      <Footer />
     
    </div>
  )
}

export default GBMCasestudy
