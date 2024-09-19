import React, { useState, useEffect } from 'react';
import { FaGoogle, FaPhoneAlt } from 'react-icons/fa';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

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

  const [url, setUrl] = useState('https://krishisevabackendnew.onrender.com/api/v1/user/signup');
  const navigate = useNavigate(); // Initialize useNavigate


  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/dashboard');
    }
  }, [navigate]);

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUrl = url;

    try {
      const response = await axios.post(newUrl, formData);
      console.log(response);

      if (response.data.success) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userId', response.data.userId);
        localStorage.setItem('userName', response.data.data.name);
        if (response.data.data.isSeller == true) localStorage.setItem('isSeller', true);

        if (response.data.message === 'User already exists') {
          toast.error('User already exists. Please log in.');
          navigate('/Sign-in');
        } else {
          toast.success('Signup successful! Redirecting to dashboard...');
          navigate('/dashboard');
        }
      }
    } catch (error) {
      console.error('Error during signup:', error);
      toast.error('Signup failed. Please try again later.');
    }
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Toast notifications */}
      <ToastContainer />

      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
          <div className="flex items-center">
            <img src="logo.png" alt="Logo" className="h-12 cursor-pointer" onClick={() => navigate('/dashboard')} />
            <h1 className='text-xl ml-4'>Krishi Seva</h1>
          </div>
          <div className="flex space-x-6">
            <Link to={'/'} className="text-gray-700 hover:text-green-700">Home</Link >
            <Link to={'/services'} className="text-gray-700 hover:text-green-700">Services</Link>
            <Link to={'/about-us'} className="text-gray-700 hover:text-green-700">About</Link >
            <Link to={'/contact-us'} className="text-gray-700 hover:text-green-700">Contact</Link>
          </div>
          <div>
            <div className='bg-[#f7c35f] py-4 px-8 rounded-lg flex text-white'>
              <div href="tel:+1234567890" className="text-gray-700 hover:text-green-700 flex items-center">
                <div className='mr-2 text-white'>
                  <FaPhoneAlt />
                </div>
                <a href="mailto:krishiseva27@gmail.com">
                  <div className="text-white">
                    Reach Us: krishiseva27@gmail.com
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="bg-[#c5f4c1] flex flex-1">
        <div className="w-2/3 flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="p-6 rounded-xl w-full space-y-5 max-w-[80%]"
          >
            <h2 className="text-3xl font-bold text-center text-green-800 mb-4">
              Get Started Now
            </h2>

            {/* Form inputs */}
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

            {/* Phone and Gender */}
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

            {/* Address */}
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

            {/* Submit button */}
            <button
              type="submit"
              className="w-full py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition duration-300 font-semibold"
            >
              Sign Up
            </button>

            {/* Google sign-up */}
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
              <span>Sign Up with Google</span>
            </button>

            {/* Already have an account */}
            <div className="text-center mt-4">
              <span className="text-gray-700">Already have an account? </span>
              <Link to="/Sign-in" className="text-green-700 hover:underline">
                Log In
              </Link>
            </div>
          </form>
        </div>

        {/* Right section */}
        <div className="w-1/2">
          <div className="h-1/3">
            <h2 className="text-3xl font-bold text-center mt-4 text-green-500">Join Us for a Better Future</h2>
          </div>
          <img
            src="signin.jpg"
            alt="Sign In"
            className="w-[500px] h-[300px]"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
