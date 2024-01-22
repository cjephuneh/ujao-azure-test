import React from 'react'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import Cta from '@/components/cta'
import Accelerate from '@/components/accelerate'
import Models from '@/components/llm'
import Industry from '@/components/industry'
import Only from '@/components/only'
import Hero from '@/components/hero'

const hero = () => {
  return (
    <div>
      <Hero/>
      <Only/>
      <Industry/>
      <Accelerate/>
      <Models/>
      <Cta/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default hero
