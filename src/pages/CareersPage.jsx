import React from 'react'
import CareersHero from '../sections/CareersHero'
import Availablevancies from '../sections/AvailableVacancies'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const CareersPage = () => {
  return (
    <div>
    <Navbar />
      <CareersHero />
      <Availablevancies />
      <Footer />
    </div>
  )
}

export default CareersPage
