import React, { useState } from 'react';
import Sidebar from '../Dashboard/components/Sidebar/Sidebar'; // Adjust the path as necessary
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CountUp from 'react-countup'; // Import react-countup
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const SellerProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'Sajal Namdeo',
    email: 'sajal@example.com',
    password: '********',
    bank: 'Union Bank',
    Account: '1234567890',
    IFSC: 'UBIN0566934',
    postalCode: '834001',
    gender: 'Male',
    phone: '+91 9876543210',
    ordersPlaced: 42,
    moneySpent: 3400,
    ordersReceived: 56,
    moneyEarned: 2000
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const getUser = async() => {
    const response = axios.get('https://localhost:3001/api/v1/user/')
  }

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    // Check if any field is empty
    for (let key in userInfo) {
      if (userInfo[key].trim() === '') {
        toast.error(`${key} cannot be empty`);
        return; // Stop the function if any field is empty
      }
    }
    
    // Show success message
    toast.success('Profile updated successfully!');
    setIsEditing(false);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className='w-[20vw] fixed'>
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex flex-col w-full items-center justify-center p-6 bg-gradient-to-r from-green-100 via-green-50 to-blue-50 ml-48">
        <div className="bg-white shadow-lg rounded-lg flex overflow-hidden w-[85%] md:w-[85%] lg:w-[85%]">
          
          {/* Left Section - Profile Image and Info */}
          <div className="flex flex-col items-center justify-start bg-green-600 text-white w-[40%] p-8">
            <img
              src={'./apple.png'} // Replace with actual image path
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover mb-4 shadow-lg"
            />
            <h1 className="text-2xl font-bold">{userInfo.name}</h1>
            <p className="text-sm mt-2">{userInfo.email}</p>

            {/* Add react-countup and 4 lines of information */}
            <div className="mt-20 space-y-2 text-center">
              <div className='flex justify-between text-[20px]'>
              <div>
                <CountUp end={userInfo.ordersPlaced} duration={2} />
                <p >Orders Placed</p>
              </div>
              <div>
                <CountUp end={userInfo.moneySpent} duration={2} />
                <p >Money Spent</p>
              </div>
              </div>

              <div className='flex justify-between text-[20px] '>

              <div className='mr-12  mt-8 '>
                <CountUp end={userInfo.ordersReceived} duration={2} />
                <p>Orders Received</p>
              </div>
              <div className='mt-8'>
                <CountUp end={userInfo.moneyEarned} decimals={1} duration={2} />
                <p className="text-[18px]">Money Earned</p>
              </div>

              </div>
              
              
            </div>
          </div>

          {/* Right Section - Editable Fields */}
          <div className="flex flex-col w-2/3 p-8">
            <div className='flex justify-between mb-8'>
              <button className='bg-green-400 px-4 py-2 rounded-lg text-white'
              onClick={()=>navigate('/profile')}
              >
              Profile Details

              </button>

              <button className='bg-green-700 px-4 rounded-lg py-2 text-white'>
              Seller Details

              </button>
            
           
            </div>
            

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Name Field */}
              <div className="flex flex-col">
                <label className="text-gray-600 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={userInfo.name}
                  disabled={true}
                  onChange={handleChange}
                  className={`p-3 border ${isEditing ? 'border-gray-300' : 'border-transparent'} rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 transition`}
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col">
                <label className="text-gray-600 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={userInfo.email}
                  disabled={true}
                  onChange={handleChange}
                  className={`p-3 border ${isEditing ? 'border-gray-300' : 'border-transparent'} rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 transition`}
                />
              </div>

              {/* Phone Field */}
              <div className="flex flex-col">
                <label className="text-gray-600 mb-2">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={userInfo.phone}
                  disabled={true}
                  onChange={handleChange}
                  className={`p-3 border ${isEditing ? 'border-gray-300' : 'border-transparent'} rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 transition`}
                />
              </div>

              {/* Bank Name Field */}
              <div className="flex flex-col">
                <label className="text-gray-600 mb-2">Bank Name</label>
                <input
                  type="text"
                  name="bank"
                  value={userInfo.bank}
                  disabled={!isEditing}
                  onChange={handleChange}
                  className={`p-3 border ${isEditing ? 'border-gray-300' : 'border-transparent'} rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 transition`}
                />
              </div>

              {/* Account Number Field */}
              <div className="flex flex-col">
                <label className="text-gray-600 mb-2">Account Number</label>
                <input
                  type="text"
                  name="account"
                  value={userInfo.Account}
                  disabled={!isEditing}
                  onChange={handleChange}
                  className={`p-3 border ${isEditing ? 'border-gray-300' : 'border-transparent'} rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 transition`}
                />
              </div>

              {/* IFSC Code Field */}
              <div className="flex flex-col">
                <label className="text-gray-600 mb-2">IFSC Code</label>
                <input
                  type="text"
                  name="ifsc"
                  value={userInfo.IFSC}
                  disabled={!isEditing}
                  onChange={handleChange}
                  className={`p-3 border ${isEditing ? 'border-gray-300' : 'border-transparent'} rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 transition`}
                />
              </div>

              {/* Postal Code Field */}
              <div className="flex flex-col">
                <label className="text-gray-600 mb-2">Postal Code</label>
                <input
                  type="text"
                  name="postalCode"
                  value={userInfo.postalCode}
                  disabled={true}
                  onChange={handleChange}
                  className={`p-3 border ${isEditing ? 'border-gray-300' : 'border-transparent'} rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 transition`}
                />
              </div>

              {/* Gender Field */}
              <div className="flex flex-col">
                <label className="text-gray-600 mb-2">Gender</label>
                <input
                  type="text"
                  name="gender"
                  value={userInfo.gender}
                  disabled={true}
                  onChange={handleChange}
                  className={`p-3 border ${isEditing ? 'border-gray-300' : 'border-transparent'} rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 transition`}
                />
              </div>
            </div>

            {/* Edit / Save Button */}
            <div className="mt-6 flex justify-end">
              {isEditing ? (
                <button
                  onClick={handleSave}
                  className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-md transition duration-200"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={handleEdit}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition duration-200"
                >
                  Edit
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Toast container */}
      <ToastContainer />
    </div>
  );
};

export default SellerProfile;
