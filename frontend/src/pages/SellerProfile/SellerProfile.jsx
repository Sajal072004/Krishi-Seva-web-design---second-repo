import React, { useEffect, useState } from 'react';
import Sidebar from '../Dashboard/components/Sidebar/Sidebar'; // Adjust the path as necessary
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CountUp from 'react-countup'; // Import react-countup
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SellerProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    bank: '',
    Account: '',
    IFSC: '',
    postalCode: '',
    gender: '',
    phone: '',
    ordersPlaced: 0,
    moneySpent: 0,
    ordersReceived: 0,
    moneyEarned: 0,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const getSeller = async () => {
    try {
      const userId = localStorage.getItem('userId');
      const response = await axios.get(`http://localhost:3001/api/v1/seller/${userId}`);
      console.log(response);

      setUserInfo((prevState) => ({
        ...prevState,
        bank: response.data.data.bank,
        Account: response.data.data.accountNo,
        IFSC: response.data.data.ifscCode,
      }));
    } catch (error) {
      toast.error('Error occurred while fetching seller data');
      console.error('Error fetching seller data:', error);
    }
  };

  const getUser = async () => {
    try {
      const userId = localStorage.getItem('userId');
      const response = await axios.get(`http://localhost:3001/api/v1/user/${userId}`);
      console.log(response);

      setUserInfo((prevState) => ({
        ...prevState,
        name: response.data.data.name,
        email: response.data.data.email,
        city: response.data.data.city,
        street: response.data.data.street,
        state: response.data.data.state,
        postalCode: response.data.data.postalCode,
        gender: response.data.data.gender,
        phone: response.data.data.phone,
        ordersPlaced: response.data.data.ordersPlaced,
        moneySpent: response.data.data.moneySpent,
        ordersReceived: response.data.data.ordersReceived,
        moneyEarned: response.data.data.moneyEarned,
      }));
    } catch (error) {
      toast.error('Error occurred while fetching user data');
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    getSeller();
    getUser();
  }, []);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = async () => {
    try {
      console.log('handleSave');
      for (let key in userInfo) {
        if (userInfo[key] === '') {
          toast.error(`${key} cannot be empty`);
          return;
        }
      }
      const userId = localStorage.getItem('userId');
      console.log(userInfo);
      const response = await axios.patch(`http://localhost:3001/api/v1/seller/${userId}`, {
        bank: userInfo.bank,
        accountNo: userInfo.Account,
        ifscCode: userInfo.IFSC,
      });
      console.log('my request', response.data);
      toast.success('Profile updated successfully!');
      setIsEditing(false);
    } catch (error) {
      setIsEditing(false);
      toast.error(error.message);
      console.error('Error:', error.message);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-[20vw] fixed">
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
              <div className="flex justify-between text-[20px]">
                <div>
                  <CountUp end={userInfo.ordersPlaced} duration={2} />
                  <p>Orders Placed</p>
                </div>
                <div>
                  <CountUp end={userInfo.moneySpent} duration={2} />
                  <p>Money Spent</p>
                </div>
              </div>

              <div className="flex justify-between text-[20px]">
                <div className="mr-12 mt-8">
                  <CountUp end={userInfo.ordersReceived} duration={2} />
                  <p>Orders Received</p>
                </div>
                <div className="mt-8">
                  <CountUp end={userInfo.moneyEarned} decimals={1} duration={2} />
                  <p className="text-[18px]">Money Earned</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Editable Fields */}
          <div className="flex flex-col w-2/3 p-8">
            <div className="flex justify-between mb-8">
              <button
                className="bg-green-400 px-4 py-2 rounded-lg text-white"
                onClick={() => navigate('/profile')}
              >
                Profile Details
              </button>

              <button className="bg-green-700 px-4 rounded-lg py-2 text-white">
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
                  className="p-3 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 transition"
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
                  className="p-3 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 transition"
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
                  className="p-3 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 transition"
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
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 transition"
                />
              </div>

              {/* Account Number Field */}
              <div className="flex flex-col">
                <label className="text-gray-600 mb-2">Account Number</label>
                <input
                  type="text"
                  name="Account"
                  value={userInfo.Account}
                  disabled={!isEditing}
                  onChange={handleChange}
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 transition"
                />
              </div>

              {/* IFSC Code Field */}
              <div className="flex flex-col">
                <label className="text-gray-600 mb-2">IFSC Code</label>
                <input
                  type="text"
                  name="IFSC"
                  value={userInfo.IFSC}
                  disabled={!isEditing}
                  onChange={handleChange}
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 transition"
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
                  className="p-3 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 transition"
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
                  className="p-3 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 transition"
                />
              </div>
            </div>

            <div className="flex justify-end mt-8">
              {isEditing ? (
                <button
                  onClick={handleSave}
                  className="bg-green-600 text-white py-2 px-4 rounded-lg"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={handleEdit}
                  className="bg-blue-400 text-white py-2 px-4 rounded-lg"
                >
                  Edit
                </button>
              )}
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default SellerProfile;
