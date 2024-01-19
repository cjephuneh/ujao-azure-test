import React from 'react'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import Cta from '@/components/cta'
import Accelerate from '@/components/accelerate'
import Models from '@/components/llm'


const hero = () => {
  return (
    <div>
      <Accelerate/>
      <Models/>
      <Cta/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default hero
