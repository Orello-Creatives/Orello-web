import React from 'react'
import GbmHero from '../sections/GbmHero'
import WhatWeDelivered from '../sections/WhatWeDelivered'
import GbmGallery from '../sections/GbmGallery'
import GbmReview from '../sections/GbmReview'
import MoreCaseStudy from '../sections/MoreCaseStudy'
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
      <MoreCaseStudy />
      <Footer />
     
    </div>
  )
}

export default GBMCasestudy
