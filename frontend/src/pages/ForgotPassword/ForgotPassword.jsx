import React, { useState } from 'react';
import { FaPhoneAlt } from "react-icons/fa";

const ForgotPassword = () => {
  const [otp, setOtp] = useState('');

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle OTP submission logic here
    console.log('Entered OTP:', otp);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
          <div className="flex items-center">
            <img src="logo.png" alt="Logo" className="h-12" /> {/* Replace with your logo */}
            <h1 className="text-xl ml-4">Krishi Seva</h1>
          </div>

          {/* Centered Menu Items */}
          <div className="flex-1 flex justify-center space-x-6">
            <a href="/" className="text-gray-700 hover:text-green-700">Home</a>
            <a href="/services" className="text-gray-700 hover:text-green-700">Services</a>
            <a href="/about" className="text-gray-700 hover:text-green-700">About</a>
            <a href="/contact" className="text-gray-700 hover:text-green-700">Contact</a>
          </div>

          {/* Call Us Section */}
          <div className="flex items-center">
            <div className='bg-[#f7c35f] py-4 px-8 rounded-lg flex text-white'>
              <a href="tel:+1234567890" className="flex items-center">
                <FaPhoneAlt className='mr-2 text-white' />
                <span>Call Us: +91 7225989023</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* OTP Section */}
      <div className="bg-[#c5f4c1] flex flex-1 justify-center items-center">
        <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-md">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-4">
            Forgot Password
          </h2>
          <p className="text-center text-gray-700 mb-6">
            An OTP has been sent to your registered email. Please enter the 6-digit OTP below to reset your password.
          </p>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="otp"
              placeholder="Enter 6-digit OTP"
              value={otp}
              onChange={handleChange}
              required
              maxLength="6"
              className="w-full p-3 border border-gray-300 rounded-lg text-center text-xl focus:outline-none focus:ring-2 focus:ring-green-700"
            />

            <button
              type="submit"
              className="w-full py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition duration-300 font-semibold"
            >
              Verify OTP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
