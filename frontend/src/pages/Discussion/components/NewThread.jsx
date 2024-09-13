import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { FaPlus } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const NewThread = () => {
  const [title, setTitle] = useState('');
  const [content, setDescription] = useState('');
  const navigate = useNavigate();



  const handleCreate = async () => {
    if (!title) {
      toast.error('Please fill in the title');
      return;
    }
    if (!content) {
      toast.error('Please fill in the content');
      return;
    }

    const userId = localStorage.getItem('userId');
    if (!userId) {
      toast.error('Failed to retrieve user ID');
      return;
    }
    console.log(userId);

    try {
      const response = await fetch('http://localhost:3001/api/v1/tweets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title,
          content,
          userId
        })
      });

      if (!response.ok) {
        throw new Error('Failed to create thread');
      }

      toast.success('Thread Created');
      setTimeout(() => {
        // Redirect to discussions with 'my-threads' selected
        navigate('/discussions', { state: { selectedOption: 'my-threads' } });
      }, 2000);
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };


  return (
    <div className="overflow-x-hidden bg-[#f9fafc] h-screen">
      <div className="flex bg-[#f9fafc] w-[100vw] overflow-x-hidden">
        {/* Sidebar */}
        <div className="fixed h-screen w-[25vw] md:w-[20vw]">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="ml-[25vw] md:ml-[20vw] w-[calc(100vw-25vw)] md:w-[calc(100vw-20vw)]">
          {/* Navbar */}
          <div className="fixed w-[calc(100vw-25vw)] md:w-[calc(100vw-20vw)] bg-[#f9fafc] z-10" style={{ height: '18vh' }}>
            <Navbar />
          </div>

          {/* Content Below Navbar */}
          <div className="mt-[25vh] p-6 bg-white shadow-lg rounded-lg border mr-12 border-green-500">
            {/* New Thread Form */}
            <div className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-lg font-semibold text-gray-700 mb-2">Title</label>
                <input
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter thread title"
                />
              </div>
              <div>
                <label htmlFor="content" className="block text-lg font-semibold text-gray-700 mb-2">content</label>
                <textarea
                  id="content"
                  value={content}
                  onChange={(e) => setDescription(e.target.value)}
                  rows="6"
                  required
                  className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter thread content"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end space-x-4 mt-6">
              <button
                onClick={() => navigate('/discussions')}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 focus:outline-none"
              >
                Cancel
              </button>
              <button
                onClick={handleCreate}
                className="px-4 py-2 bg-[#1b7a43] text-white rounded-lg hover:bg-green-600 focus:outline-none flex items-center"
              >
                <span className='mr-2'>Create</span>
                <FaPlus />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default NewThread;
