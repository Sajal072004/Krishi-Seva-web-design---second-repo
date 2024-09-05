import React from 'react'

const Footer = () => {
  return (
    <div className='mt-16 bg-[#d2eacf] h-[48vh]'>
      <div className='h-[30vh] flex justify-center'>
        <div className='w-[35vw] flex justify-center flex-col items-center mt-6'>
          <img 
            src="logo.png" 
            alt="logo" 
            style={{ width: '110px', height: 'auto' }}
          />
          <p className='mt-4 text-center text-[18px] mx-6'>
            Agro, short for agriculture, encompasses all activities related to the cultivation of crops, food, fiber, and agricultural commodities.
          </p>
        </div>
        <div className='w-[5vw]'></div>

        <div className='w-[20vw]'>
          <h1 className='mt-8 text-3xl'> Useful Links</h1>
          <ul className='mt-8 text-xl'>
            <li className='mt-2'>About Us</li>
            <li className='mt-2'>Privacy & Policy</li>
            <li className='mt-2'>Terms & conditions</li>
          </ul>
        </div>
        <div className='w-[25vw]'>
        <h1 className='mt-8 text-3xl'>Contact</h1>
          <ul className='mt-8 text-xl'>
            <li className='mt-2'>Address: Ranchi , Jharkhand</li>
            <li className='mt-2'>Phone: +91 7225989023</li>
            <li className='mt-2'>Email : krishisevakr@gmail.com</li>
          </ul>
        </div>
        <div className='w-[15vw]'>
        <h1 className='mt-8 text-3xl'>Follow Us</h1>
          <ul className='mt-8 text-xl'>
            <li className='mt-2'>Facebook</li>
            <li className='mt-2'>Youtube</li>
            <li className='mt-2'>Instagram</li>
          </ul>
        </div>
      </div>

      <div className='mt-20'>
        <p className='text-center text-[18px] mx-6 mt-6'>All rights reserved by krishiseva.org </p>
      </div>
    </div>
  )
}

export default Footer
