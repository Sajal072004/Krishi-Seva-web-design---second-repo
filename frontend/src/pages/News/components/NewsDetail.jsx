import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Sidebar from '../../Discussion/components/Sidebar.jsx';

const NewsDetail = () => {
  const { state: newsItem } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!newsItem) {
      navigate('/latest-news');
    }
  }, [newsItem, navigate]);

  // Show nothing while redirecting
  if (!newsItem) {
    return null;
  }

  return (
    <div className="overflow-x-hidden">
      <div className="flex bg-[#f9fafc] w-[100vw] overflow-x-hidden h-[100vh]">
        <div className="fixed h-screen w-[25vw] md:w-[20vw]">
          <Sidebar />
        </div>

        <div className="ml-[25vw] md:ml-[18vw] w-[calc(100vw-25vw)] md:w-[calc(100vw-20vw)]">
          <div className="fixed w-[84vw] bg-[#f9fafc] z-10 -ml-4" style={{ height: '18vh' }}>
            <Navbar />
          </div>

          <div className="pt-[20vh] p-4">
            <img src={newsItem.imageUrl} alt={newsItem.title} className="w-full h-[300px] object-cover rounded-lg" />
            <h2 className="text-2xl font-bold mt-4">{newsItem.title}</h2>
            <p className="text-gray-500 mt-2">{newsItem.date}</p>
            <p className="text-gray-700 mt-4">{newsItem.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
