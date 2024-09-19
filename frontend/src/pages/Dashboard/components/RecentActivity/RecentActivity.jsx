import React, { useState, useEffect } from 'react';
import { FaArrowRight } from "react-icons/fa6";
import axios from 'axios';

const RecentActivity = () => {
  const [transactions, setTransactions] = useState([]);
  const [usernames, setUsernames] = useState({}); // Store usernames for both buyers and sellers

  // Function to fetch username by user ID
  const getUserName = async (userId) => {
    if (!userId) return 'Unknown User';
    if (usernames[userId]) return usernames[userId]; // Return if already fetched

    try {
      const response = await axios.get(`http://localhost:3001/api/v1/user/${userId}`);
      const username = response.data.data.name;

      // Update state with new username
      setUsernames((prevUsernames) => ({
        ...prevUsernames,
        [userId]: username,
      }));
      return username;
    } catch (error) {
      console.error('Error fetching user:', error);
      return 'Unknown User'; // Fallback in case of error
    }
  };

  // Fetch transactions and buyer/seller names
  const getTransactions = async () => {
    const userId = localStorage.getItem('userId'); // Assuming userId is stored in localStorage
    try {
      const response = await axios.get(`http://localhost:3001/api/v1/transaction/last-10/${userId}`);
      const transactionsData = response.data.data;

      // Fetch usernames for buyers and sellers in parallel
      const buyerSellerPromises = transactionsData.map(async (item) => {
        await getUserName(item.buyerId); // Fetch buyer's name
        await getUserName(item.sellerId); // Fetch seller's name
      });

      await Promise.all(buyerSellerPromises);
      setTransactions(transactionsData);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <div>
      <div className='flex justify-between items-center mx-2'>
        <h1 className='text-3xl font-semibold text-[#2F580F]'>Recent Activity</h1>
        <div className='flex items-center text-gray-500 cursor-pointer'>
          <p className='mr-1'>View All</p>
          <FaArrowRight />
        </div>
      </div>

      <div className='mt-8'>
        {transactions.length > 0 ? (
          transactions.map((item) => (
            <div key={item._id} className='flex items-start justify-between py-2 border-b'>

              <div className='flex-shrink-0 mr-4'>
                <img src="profile_icon.png" alt="User" className='w-12 h-12 rounded-full' />
              </div>

              <div className='flex-1'>
                <p className='font-semibold'>
                  {/* Display fetched buyer's name */}
                  {usernames[item.buyerId] || 'Unknown Buyer'}
                </p>
                <p className='text-gray-700'>
                  {/* Display fetched seller's name */}
                  {`Purchased from ${usernames[item.sellerId] || 'Unknown Seller'}`}
                </p>
              </div>

              <div className='text-gray-500'>
                {new Date(item.createdAt).toLocaleTimeString()} {/* Display time of transaction */}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No recent activity found</p>
        )}
      </div>
    </div>
  );
};

export default RecentActivity;
