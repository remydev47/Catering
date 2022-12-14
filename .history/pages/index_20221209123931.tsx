import Head from 'next/head'
import Hero from '../components/Hero'
import { AboutUs } from '../sections'


export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Nellys</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 
       <Hero />
       <AboutUs />
    </div>
  )
}
