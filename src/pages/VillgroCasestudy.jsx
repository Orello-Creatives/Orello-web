import React from 'react'
import VillgroHero from '../sections/VillgroHero'
import WhatWeDeliveredVillgro from '../sections/WhatWeDeliveredVillgro'
import VillgroGallery from '../sections/VillgroGallery'
import GbmReview from '../sections/GbmReview'
import MoreCaseStudy from '../sections/MoreCaseStudy'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const GBMCasestudy = () => {
  return (
    <div>
     <Navbar />
      <VillgroHero />
      <WhatWeDeliveredVillgro />
      <VillgroGallery />
      <GbmReview />
      <MoreCaseStudy />
      <Footer />
     
    </div>
  )
}

export default GBMCasestudy
