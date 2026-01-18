import React from 'react'
import ResourcesHero from '../sections/ResourcesHero'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ResourcesAbout from '../sections/ResourcesAbout'

const ContactPage = () => {
  return (
    <div>
    <Navbar />
      <ResourcesHero />
      <ResourcesAbout />
      <Footer />
    </div>
  )
}

export default ContactPage
