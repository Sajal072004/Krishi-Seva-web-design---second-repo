import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-[#334B35] flex items-center h-20 px-4'>
      <img src="/logo.png" alt="" width={56} className='mx-4' />
      <div className='flex-grow flex justify-center'>
        <ul className='flex space-x-8 list-none p-0 text-white text-lg cursor-pointer'>
          <li>Home</li>
          <a href="/services"> <li>Services</li></a>
          <a href="/aboutUs"><li>About Us</li></a>
          <a href="contactUs"> <li>Contact Us</li></a>
          
         
        </ul>
      </div>
    </div>
  )
}

export default Navbar
