import Head from 'next/head'
import CTA from '../components/CTA'
import Hero from '../components/Hero'
import Menu from '../components/Menu'
import Aboutus from '../components/Aboutus'
import Services from '../components/Services'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Nellys</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 
       <Hero />
       <Menu />
       <CTA />
       <Aboutus />
       <Services />
    </div>
  )
}