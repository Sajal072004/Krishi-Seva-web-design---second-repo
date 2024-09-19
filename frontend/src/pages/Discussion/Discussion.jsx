import React, { useState, useEffect } from 'react';
import Sidebar from '../Dashboard/components/Sidebar/Sidebar';
import Navbar from './components/Navbar';
import Thread from './components/Thread';  // Import the Thread component
import { FaPlus } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';  // Make sure to import axios

const Discussion = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('All');
  const [threads, setThreads] = useState([]);
  const [loading, setLoading] = useState(true);

  const userId = localStorage.getItem('userId');

  const [username, setUsername] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`https://krishisevabackendnew.onrender.com/api/v1/user/${userId}`);
        console.log(response.data);
        setUsername(response.data.data.name);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (userId) {
      fetchUserData();
    }
  }, [userId]);


  const fetchThreads = async (option) => {
    setLoading(true);
    try {
      let url = '';
      if (option === 'All') {
        url = 'https://krishisevabackendnew.onrender.com/api/v1/tweets';
      } else if (option === 'Latest') {
        url = 'https://krishisevabackendnew.onrender.com/api/v1/tweets';
      } else if (option === 'Popular') {
        url = 'https://krishisevabackendnew.onrender.com/api/v1/threads/popular';
      } else {
        url = `https://krishisevabackendnew.onrender.com/api/v1/threads/mytweets/${userId}`;
      }

      const response = await axios.get(url);
      setThreads(response.data.data);
      console.log(response);
    } catch (error) {
      console.error('Error fetching threads:', error);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchThreads(selectedOption);
  }, [selectedOption]);

  const handleNewThreadClick = () => {
    navigate('/discussions/new-thread');
  };

  return (
    <div className="overflow-x-hidden">
      <div className="flex bg-[#f9fafc] w-[100vw] overflow-x-hidden">
        {/* Sidebar */}
        <div className="fixed h-screen w-[25vw] md:w-[20vw]">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="ml-[25vw] md:ml-[18vw] w-[calc(100vw-25vw)] md:w-[calc(100vw-20vw)]">
          {/* Navbar */}
          <div className="fixed w-[84vw] bg-[#f9fafc] z-10 -ml-4" style={{ height: '18vh' }}>
            <Navbar />
          </div>

          {/* Top Options */}
          <div className="fixed top-[18vh] left-[20vw] md:left-[17vw] w-[calc(100vw-25vw)] md:w-[calc(100vw-17vw)] bg-white shadow-md z-2 py-4 pl-4 pr-8">
            <div className="flex justify-between items-center p-4">
              <div className="flex space-x-4">
                <button
                  className={`px-4 py-2 rounded ${selectedOption === 'All' ? 'bg-[#1b7a43] text-white' : 'bg-gray-200 hover:bg-[#1b7a43] hover:text-white'}`}
                  onClick={() => setSelectedOption('All')}
                >
                  All
                </button>
                <button
                  className={`px-4 py-2 rounded ${selectedOption === 'Latest' ? 'bg-[#1b7a43] text-white' : 'bg-gray-200 hover:bg-[#1b7a43] hover:text-white'}`}
                  onClick={() => setSelectedOption('Latest')}
                >
                  Latest
                </button>
                <button
                  className={`px-4 py-2 rounded ${selectedOption === 'Popular' ? 'bg-[#1b7a43] text-white' : 'bg-gray-200 hover:bg-[#1b7a43] hover:text-white'}`}
                  onClick={() => setSelectedOption('Popular')}
                >
                  Popular
                </button>
                <button
                  className={`px-4 py-2 rounded ${selectedOption === 'MyThreads' ? 'bg-[#1b7a43] text-white' : 'bg-gray-200 hover:bg-[#1b7a43] hover:text-white'}`}
                  onClick={() => setSelectedOption('MyThreads')}
                >
                  My Threads
                </button>
              </div>

              {/* New Thread Button */}
              <button
                onClick={handleNewThreadClick}
                className="px-4 py-2 bg-[#1b7a43] text-white rounded hover:bg-green-600 flex items-center mx-2"
              >
                <span className="mr-2">New Thread </span>
                <FaPlus />
              </button>
            </div>
          </div>

          {/* Content Below Navbar and Top Options */}
          <div className="mt-[35vh]">
            {/* Display loading spinner or threads */}
            {loading ? (
              <div className="text-center py-4">Loading...</div>
            ) : (
              <div className="p-4 space-y-4">
                {threads.map((thread, index) => (
                  <Thread
                    key={index}
                    profilePic={'/profile_icon.png'}
                    title={thread.title}
                    likes={thread.likes || 0}
                    comments={thread.comments || 0}
                    content={thread.content}
                    username={thread.username}


                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discussion;
