import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import HeroCTA from '@/components/HeroCTA'

import HeroTrustList from '@/components/HeroTrustList'
import Navbar from '@/components/Navbar'
import React from 'react'

const Home = () => {
  return (
    <>
      
      <main>
        <Hero/>
        <HeroTrustList/>
        <HeroCTA/>
      </main>
      
    </>
  )
}
export default Home