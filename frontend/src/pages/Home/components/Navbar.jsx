import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-[#1b7a43] flex items-center h-20 px-4'>
      <img src="/logo.png" alt="" width={56} className='mx-4' />
      <p className='text-white text-xl'>Krishi Seva</p>
      <div className='flex-grow flex justify-center'>
        <ul className='flex space-x-8 list-none p-0 text-white text-lg cursor-pointer'>
          <Link to="/"><li>Home</li></Link>
          <Link to="/services"> <li>Services</li></Link>
          <Link to="/about-us"><li>About Us</li></Link>
          <Link to="contact-us"> <li>Contact Us</li></Link>
          
         
        </ul>
      </div>
    </div>
  )
}

export default Navbar
