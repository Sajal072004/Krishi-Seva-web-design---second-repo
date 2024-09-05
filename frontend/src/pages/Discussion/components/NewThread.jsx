import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { FaPlus } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewThread = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleCreate = () => {
    // Validate input fields
    if (!title) {
      toast.error('Please fill in the title');
      return;
    }
    if (!description) {
      toast.error('Please fill in the description');
      return;
    }

    toast.success('Thread Created');

    
    setTimeout(() => {
      navigate('/discussions');
    }, 2000); 
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
                <label htmlFor="description" className="block text-lg font-semibold text-gray-700 mb-2">Description</label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows="6"
                  required
                  className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter thread description"
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
