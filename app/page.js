import React from 'react'
import Hero from './components/hero'
import WhyToChoose from './components/why'
import GetInTouch from './components/getintouch'
import Goals from './components/goals'
import Services from './components/services'
import About from './components/about'
import Faq from './components/faq'
import Footer from './components/footer'

function page() {
  return (
    <>
      <Hero />
      <GetInTouch />
      <WhyToChoose />
      <Goals />
      <Services />
      <About />
      <Faq />
      <Footer />
    </>
  )
}

export default page