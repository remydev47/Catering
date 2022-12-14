import React from 'react'
import { Aboutus, Blog, CTA, Hero, Menu, Pricing, Services, Testimonials } from '../components'

const Home = () => {
  return (
    <div>
        <Hero />
        <Menu />
        <CTA />
        <Aboutus />
        <Services />
        <Testimonials/>
        <Pricing />
        <Blog/>
        
    </div>
  )
}

export default Home