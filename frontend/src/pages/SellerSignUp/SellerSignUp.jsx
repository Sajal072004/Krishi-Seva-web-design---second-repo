import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import Navbar from './components/Navbar';
import Sidebar from '../Dashboard/components/Sidebar/Sidebar';
import { useNavigate } from 'react-router-dom';

const SellerSignUp = () => {
  // State to handle form inputs
  const [bank, setBank] = useState('');
  const [ifscCode, setIfscCode] = useState('');
  const [accountNo, setAccountNo] = useState('');
  const navigate = useNavigate();

  // Handle form submission
  const handleSaveClick = async (e) => {
    e.preventDefault();

    const sellerData = {
      userId: localStorage.getItem('userId'),
      accountNo,
      ifscCode,
      bank
    }

    try {
      const response = await axios.post('https://kisanseva-backend.onrender.com/api/v1/seller', sellerData);
      console.log('Response:', response.data);
      alert('Seller information saved successfully!');

      localStorage.setItem('isSeller', true);
      navigate('/mandi/seller-profile');


    } catch (error) {

      console.error('Error submitting form:', error);
      alert('Error saving seller information');
    }
  };

  return (
    <div className='overflow-x-hidden'>
      <div className='flex bg-[#f9fafc] w-[100vw] overflow-x-hidden'>

        <div className='fixed h-screen w-[25vw] md:w-[20vw]'>
          <Sidebar />
        </div>

        <div className='ml-[25vw] md:ml-[18vw] w-[calc(100vw-25vw)] md:w-[calc(100vw-20vw)]'>

          <div className='fixed w-[84vw] bg-[#f9fafc] z-10 -ml-4' style={{ height: '18vh' }}>
            <Navbar />
          </div>

          <div className='mt-[21vh] p-8 flex justify-center'>
            {/* Form Container */}
            <div className='bg-white shadow-lg rounded-lg p-8 w-[70vw] md:w-[50vw]'>
              <h1 className='text-3xl font-semibold text-center mb-8 text-[#1b7a43]'>Fill Additional Information</h1>
              <form className='space-y-6' onSubmit={handleSaveClick}>
                {/* Bank Name Field */}
                <div>
                  <label className='block text-lg font-medium text-gray-700 mb-2'>Bank Name</label>
                  <input
                    type='text'
                    value={bank}
                    onChange={(e) => setBank(e.target.value)} // Update state
                    placeholder='Enter Bank Name'
                    className='w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1b7a43] transition duration-300'
                  />
                </div>

                {/* IFSC Code Field */}
                <div>
                  <label className='block text-lg font-medium text-gray-700 mb-2'>IFSC Code</label>
                  <input
                    type='text'
                    value={ifscCode}
                    onChange={(e) => setIfscCode(e.target.value)} // Update state
                    placeholder='Enter IFSC Code'
                    className='w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1b7a43] transition duration-300'
                  />
                </div>

                {/* Account Number Field */}
                <div>
                  <label className='block text-lg font-medium text-gray-700 mb-2'>Account Number</label>
                  <input
                    type='text'
                    value={accountNo}
                    onChange={(e) => setAccountNo(e.target.value)} // Update state
                    placeholder='Enter Account Number'
                    className='w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1b7a43] transition duration-300'
                  />
                </div>

                {/* Submit Button */}
                <div className='flex justify-center mt-8'>
                  <button
                    type='submit'
                    className='bg-[#1b7a43] hover:bg-[#166a37] text-white font-semibold py-3 px-8 rounded-lg transition duration-300'
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default SellerSignUp;
