import React from 'react'
import CaseStudyOverview from '../sections/CaseStudyOverview'
import Navbar from '../components/Navbar'
import CaseStudySecond from '../sections/CaseStudySecond'
import LatestReads from '../sections/LatestReads'
import Footer from '../components/Footer'
const CaseStudyOverviewPage = () => {
  return (
    <div>
    <Navbar />
    <CaseStudyOverview />
    <CaseStudySecond />
    <LatestReads />
    <Footer />
    </div>
  )
}

export default CaseStudyOverviewPage
