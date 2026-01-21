import React from 'react'
import FaqHero from '../sections/FaqHero.jsx'
import FaqContents from '../sections/FaqContents.jsx'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
const FAQPage = () => {
  return (
    <div>
    <Navbar />
      <FaqHero />
      <FaqContents />
      <Footer />
    </div>
  )
}

export default FAQPage
