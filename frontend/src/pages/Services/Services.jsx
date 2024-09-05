import React from 'react'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Marketplace from './components/marketplace/Marketplace'
import Recommendations from './components/recommendations/Recommendations'
import Utilities from './components/utilities/Utilities'
import Labs from './components/labs/Labs'
import Schemes from './components/schemes/Schemes'
import Footer from './components/footer/Footer'

const Services = () => {
  return (
    <>
      <Header />
      <Hero />
      <div className='mt-16'>
        <Marketplace />
        <Recommendations/>
        <Utilities/>
        <Labs/>
        <Schemes/>
        <Footer/>
      </div>
      

    </>
  )
}

export default Services