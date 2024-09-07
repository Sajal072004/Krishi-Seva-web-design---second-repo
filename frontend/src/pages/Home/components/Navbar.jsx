import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className='bg-[#03391a] flex items-center h-20 px-4'>
      <img src="/logo.png" alt="" width={56} className='mx-4 cursor-pointer' onClick={()=>navigate('/dashboard')} />
      <p className='text-white text-xl'>Krishi Seva</p>
      <div className='flex-grow flex justify-center'>
        <ul className='flex space-x-8 list-none p-0 text-white text-lg cursor-pointer'>
          <Link to="/"><li>Home</li></Link>
          <Link to="/services"> <li>Services</li></Link>
          <Link to="/about-us"><li>About Us</li></Link>
          <Link to="contact-us"> <li>Contact Us</li></Link>
          
         
        </ul>
      </div>

      <div className='bg-white py-3 px-12 mr-12 rounded-lg text-[#1b7a43] font-semibold cursor-pointer'
      onClick={()=>navigate('/sign-in')}
      >
        <button>Login</button>
      </div>
    </div>
  )
}

export default Navbar
