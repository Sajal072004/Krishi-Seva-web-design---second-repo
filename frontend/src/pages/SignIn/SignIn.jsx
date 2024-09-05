import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form Data:', formData);
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
          <div className="flex space-x-6">
            <a href="/" className="text-gray-700 hover:text-green-700">Home</a>
            <a href="/services" className="text-gray-700 hover:text-green-700">Services</a>
            <a href="/about" className="text-gray-700 hover:text-green-700">About</a>
            <a href="/contact" className="text-gray-700 hover:text-green-700">Contact</a>
          </div>
          <div>
            <div className="bg-[#f7c35f] py-4 px-8 rounded-lg flex text-white">
              <a href="tel:+1234567890" className="text-gray-700 hover:text-green-700 flex items-center">
                <div className="mr-2 text-white">
                  <FaPhoneAlt />
                </div>
                <div className="text-white">
                  Call Us: +91 7225989023
                </div>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Green Background Div */}
      <div className="bg-[#c5f4c1] flex flex-1">
        {/* Left Half: Form */}
        <div className="w-2/3 flex justify-center items-center px">
          <form
            onSubmit={handleSubmit}
            className="p-6 rounded-xl w-full space-y-5 max-w-[80%]"
          >
            <h2 className="text-3xl font-bold text-center text-green-800 mb-4">
              Login to your Account
            </h2>

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
            />

            {/* Forgot Password Link */}
            <div className="text-left">
              <a href="/forgot-password" className="text-green-700 hover:underline">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition duration-300 font-semibold"
            >
              Sign In
            </button>

            <div className="text-center font-bold text-[17px]">
              <div className="flex items-center justify-center space-x-4">
                <div className="flex-grow h-[5px] bg-white"></div>
                <span className="bg-white py-1 px-2 text-black">Or</span>
                <div className="flex-grow h-[5px] bg-white"></div>
              </div>
            </div>

            <button
              type="button"
              className="w-full py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300 font-semibold flex items-center justify-center space-x-2"
            >
              <FaGoogle className="text-white text-xl" />
              <span>Sign In with Google</span>
            </button>

            <div className="text-center mt-4">
              <span className="text-gray-700">Don't have an account? </span>
              <a href="/sign-up" className="text-green-700 hover:underline">
                Sign Up
              </a>
            </div>
          </form>
        </div>

        <div className="w-1/2">
          <div className="h-1/3">
            <h2 className="text-3xl font-bold text-center mt-12 text-green-500">
              Reach Your Customer Faster
            </h2>
          </div>
          <img src="signin.jpg" alt="Sign In" className="w-[500px] h-[300px]" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
