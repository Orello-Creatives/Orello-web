import React from 'react'
import ColdeasyHero from '../sections/ColdeasyHero'
import WhatWeDeliveredColdeasy from '../sections/WhatWeDeliveredColdeasy'
import ColdeasyGallery from '../sections/ColdeasyGallery'
import ColdeasyReview from '../sections/ColdeasyReview'
import MoreCaseStudy from '../sections/MoreCaseStudy'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const ColdeasyCasestudy = () => {
  return (
    <div>
     <Navbar />
      <ColdeasyHero />
      <WhatWeDeliveredColdeasy />
      <ColdeasyGallery />
      <ColdeasyReview />
      <MoreCaseStudy />
      <Footer />
     
    </div>
  )
}

export default ColdeasyCasestudy
