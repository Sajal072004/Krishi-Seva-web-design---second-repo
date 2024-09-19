import React, { useState } from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'; // Import axios
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      toast.error('Password and confirm password fields cannot be empty.');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Password and Confirm Password should be same');
      return;
    }

    const otp = Number(localStorage.getItem('otp'));
    if (!otp) {
      toast.error('OTP not found. Please request a new OTP.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/api/v1/user/resetPassword', {
        password: password,
        otp,
      }
      );

      if (response.status === 202) {
        toast.success('Password successfully reset.');
        localStorage.removeItem('otp');
        setTimeout(() => {
          navigate('/sign-in');
        }, 2000);
      } else {
        toast.error('Failed to reset password. Please try again.');
      }
    } catch (error) {
      console.error('Error resetting password:', error);
      toast.error('An error occurred. Please try again.');
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

      {/* Reset Password Section */}
      <div className="bg-[#c5f4c1] flex flex-1 justify-center items-center">
        <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-md">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-4">
            Reset Password
          </h2>
          <p className="text-center text-gray-700 mb-6">
            Please enter your new password and confirm it to reset your password.
          </p>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="password"
              name="password"
              placeholder="New Password"
              value={password}
              onChange={handlePasswordChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm New Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
            />

            <button
              type="submit"
              className="w-full py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition duration-300 font-semibold"
            >
              Save
            </button>
          </form>
        </div>
      </div>

      {/* Toast container */}
      <ToastContainer />
    </div>
  );
};

export default ResetPassword;
