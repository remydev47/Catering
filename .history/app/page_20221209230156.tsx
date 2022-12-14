import React from 'react'
import { Aboutus, CTA, Hero, Menu, Services } from '../components'

const Home = () => {
  return (
    <div>
        <Hero />
        <Menu />
        <CTA />
        <Services />
        <Aboutus />
    </div>
  )
}

export default Home