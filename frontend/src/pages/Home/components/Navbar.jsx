import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-[#1b7a43] flex items-center h-20 px-4'>
      <img src="/logo.png" alt="" width={56} className='mx-4' />
      <p className='text-white text-xl'>Krishi Seva</p>
      <div className='flex-grow flex justify-center'>
        <ul className='flex space-x-8 list-none p-0 text-white text-lg cursor-pointer'>
          <a href="/"><li>Home</li></a>
          <a href="/services"> <li>Services</li></a>
          <a href="/about-us"><li>About Us</li></a>
          <a href="contact-us"> <li>Contact Us</li></a>
          
         
        </ul>
      </div>
    </div>
  )
}

export default Navbar
