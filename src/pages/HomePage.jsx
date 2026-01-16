import React from 'react'
import HomeHero from '../sections/HomeHero'
import HomeAbout from '../sections/HomeAbout'
import AFewSelected from '../sections/AFewSelected'
import HeresWhat from '../sections/HeresWhat'
import LatestReads from '../sections/LatestReads'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div>
     
      <HomeHero />
      <HomeAbout />
      <AFewSelected />
      <HeresWhat />
      <LatestReads />
      <Footer />
    </div>
  )
}

export default HomePage
