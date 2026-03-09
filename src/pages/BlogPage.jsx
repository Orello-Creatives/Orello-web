import React from 'react'
import BlogHero from '../sections/BlogHero'
import UpcommingReads from '../sections/UpcommingReads'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
const BlogPage = () => {
  return (
    <div>
    <Navbar />
      <BlogHero />
      <Footer />
    </div>
  )
}

export default BlogPage
