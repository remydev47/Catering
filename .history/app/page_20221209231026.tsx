import React from 'react'
import Navbar from '../components/Navbar'
import { Aboutus, Blog, CTA, Faqs, Footer, Hero, Menu, Pricing, Services, Team, Testimonials } from '../components'

const Home = () => {
  return (
    <div>
       <Navbar />
        <Hero />
        <Menu />
        <CTA />
        <Aboutus />
        <Services />
        <Testimonials/>
        <Pricing />
        <Blog/>
        <Team />
        <Faqs />
        <Footer />
    </div>
  )
}

export default Home