import React from 'react'
import Serviceshero from '../sections/ServicesHero'
import OurServices from '../sections/OurProcess'
import WhatWeOffer from '../sections/WhatWeOffer'
import AFew from '../sections/AFew'
import LatestReads from '../sections/LatestReads'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
const ServicesPage = () => {
  return (
    <div>
    <Navbar />
      <Serviceshero />
      <OurServices />
      <WhatWeOffer />
      <AFew />
      <LatestReads />
    <Footer />
    </div>
  )
}

export default ServicesPage
