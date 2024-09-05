import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { FaPhoneAlt } from "react-icons/fa";
import axios from 'axios';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    gender: '',
    city: '',
    street: '',
    state: '',
    postalCode: '',
  });

  const [url , setUrl] = useState('https://kisansevao.onrender.com/api/v1/user/signup');

  const onChangeHandler = (e) => {
    const name = e.target.name; // This should refer to the input's name attribute
    const value = e.target.value; // This is correct for getting the input's value
    setFormData((data) => ({ ...data, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUrl = url;
  
    console.log(newUrl);
    const response = await axios.post(newUrl, formData); // Use formData here
    console.log(response);
  
    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem('token', response.data.token); 
      localStorage.setItem('userId', response.data.userId);
      setShowLogin(false);
    } else {
      alert(response.data.message);
    }
  };

  return (
    <div className="flex flex-col h-screen">

      <nav className="bg-white shadow-md">
        <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
          <div className="flex items-center">
            <img src="logo.png" alt="Logo" className="h-12" /> {/* Replace with your logo */}
            <h1 className='text-xl ml-4'>Krishi Seva</h1>
          </div>
          <div className="flex space-x-6">
            <a href="/" className="text-gray-700 hover:text-green-700">Home</a>
            <a href="/services" className="text-gray-700 hover:text-green-700">Services</a>
            <a href="/about" className="text-gray-700 hover:text-green-700">About</a>
            <a href="/contact" className="text-gray-700 hover:text-green-700">Contact</a>
          </div>
          <div>
            <div className='bg-[#f7c35f] py-4 px-8 rounded-lg flex text-white'>
              <a href="tel:+1234567890" className="text-gray-700 hover:text-green-700 flex items-center">
                <div className='mr-2 text-white'>
                  <FaPhoneAlt />
                </div>
                <div className='text-white'>
                  Call Us: +91 7225989023
                </div>
              </a>
            </div>
          </div>
        </div>
      </nav>


      <div className="bg-[#c5f4c1] flex flex-1">

        <div className="w-2/3 flex justify-center items-center px">
          <form
            onSubmit={handleSubmit}
            className="p-6 rounded-xl w-full space-y-5 max-w-[80%]"
          >
            <h2 className="text-3xl font-bold text-center text-green-800 mb-4">
              Get Started Now
            </h2>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={onChangeHandler}
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={onChangeHandler}
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={onChangeHandler}
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
            />

            <div className="flex space-x-4">
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={onChangeHandler}
                required
                className="w-1/2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
              />

              <select
                name="gender"
                value={formData.gender}
                onChange={onChangeHandler}
                required
                className="w-1/2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </select>
            </div>

            <input
              type="text"
              name="street"
              placeholder="Street"
              value={formData.street}
              onChange={onChangeHandler}
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
            />

            <div className="flex space-x-4">
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={onChangeHandler}
                required
                className="w-1/3 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
              />

              <input
                type="text"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={onChangeHandler}
                required
                className="w-1/3 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
              />

              <input
                type="text"
                name="postalCode"
                placeholder="Postal Code"
                value={formData.postalCode}
                onChange={onChangeHandler}
                required
                className="w-1/3 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition duration-300 font-semibold"
            >
              Sign Up
            </button>

            <div className='text-center font-bold text-[17px] '>
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
              <span>Sign Up with Google</span>
            </button>

            <div className="text-center mt-4">
              <span className="text-gray-700">Already have an account? </span>
              <a href="/Sign-in" className="text-green-700 hover:underline">
                Log In
              </a>
            </div>
          </form>
        </div>

        <div className="w-1/2">
          <div className='h-1/3'>
            <h2 className="text-3xl font-bold text-center mt-12 text-green-500">Reach Your Customer Faster</h2>
          </div>
          <img
            src="signin.jpg"
            alt="Sign Up"
            className="w-[500px] h-[300px]"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
