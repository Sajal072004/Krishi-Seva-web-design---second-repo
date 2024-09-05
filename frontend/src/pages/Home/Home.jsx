import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'


const Home = () => {
  return (
    <div className='w-[100vw] h-[100vh] ' style={{
      backgroundImage: `url('/home_image.png')`,
      backgroundSize: 'cover',  
      backgroundPosition: 'center', 
      backgroundRepeat: 'no-repeat'
    }}>
      <Navbar />
      <Hero />
    </div>

  )
}

export default Home