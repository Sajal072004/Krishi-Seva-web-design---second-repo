import React, { useState } from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

const ForgotPassword = () => {
  const [otp, setOtp] = useState(new Array(6).fill('')); // Create an array for 6 digits
  const navigate = useNavigate(); // To handle redirection

  // Handle the input change for each OTP box
  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d$/.test(value)) { // Ensure only digits are entered
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move focus to the next input field if available
      if (index < 5 && value) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    } else if (value === '') {
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const enteredOtp = otp.join('');
    const storedOtp = localStorage.getItem('otp');

    if (enteredOtp === storedOtp) {
      toast.success('The OTP is verified');
    
      setTimeout(() => {
          navigate('/reset-password');
        }, 1000);
    } else {
      
      toast.error('The OTP you entered is incorrect. Please try again.');
    }
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
            <div className="flex justify-between space-x-2">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-input-${index}`}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(e, index)}
                  className="w-12 h-12 text-center text-xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                />
              ))}
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition duration-300 font-semibold"
            >
              Verify OTP
            </button>
          </form>
        </div>
      </div>

      {/* Toast container */}
      <ToastContainer />
    </div>
  );
};

export default ForgotPassword;
