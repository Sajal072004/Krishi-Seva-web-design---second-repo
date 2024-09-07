import React, { useState } from 'react';
import NavExtra from './NavExtra.jsx';
import Sidebar from '../../Dashboard/components/Sidebar/Sidebar.jsx';
import videosData from './sowing.json';

// Helper function to convert YouTube URL to Embed URL
const getEmbedUrl = (url) => {
  const urlObj = new URL(url);
  const videoId = urlObj.searchParams.get('v');
  return `https://www.youtube.com/embed/${videoId}`;
};

// Sample comments array
const comments = [
  { id: "1", username: "JohnDoe", text: "Great video! Very informative." },
  { id: "2", username: "JaneSmith", text: "Thanks for the tutorial!" },
  { id: "3", username: "Coder123", text: "Helped me understand the basics of React." }
];

const Sowing = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('english'); // Default language
  const [selectedVideo, setSelectedVideo] = useState(videosData[selectedLanguage][0]);
  const [showFullDescription, setShowFullDescription] = useState(false); // State to toggle description view

  const videos = videosData[selectedLanguage];

  const handleToggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  // Handle language switch and update selected video based on the new language
  const handleLanguageChange = (event) => {
    const lang = event.target.value;
    setSelectedLanguage(lang);
    setSelectedVideo(videosData[lang][0]);
  };

  return (
    <div className="overflow-x-hidden">
      <div className="flex bg-[#f9fafc] w-[100vw] overflow-x-hidden h-[100vh]">
        <div className="fixed h-screen w-[25vw] md:w-[20vw]">
          <Sidebar />
        </div>

        <div className="ml-[25vw] md:ml-[18vw] w-[calc(100vw-25vw)] md:w-[calc(100vw-20vw)]">
          <div className="fixed w-[84vw] bg-[#f9fafc] z-10 -ml-4" style={{ height: '18vh' }}>
            <NavExtra title={'Sowing'} />
          </div>

          {/* Language Selector Dropdown below Navbar */}
          <div className="fixed w-[10vw] z-10 mt-[15vh] p-4">
            <div className="flex justify-start">
              <select
                value={selectedLanguage}
                onChange={handleLanguageChange}
                className="px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring focus:ring-green-500"
              >
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
              </select>
            </div>
          </div>

          <div className="flex mt-[24vh] p-4">
            {/* Video Player Section */}
            <div className="w-full md:w-[70%] pr-4">
              <div className="relative" style={{ paddingTop: '56.25%' /* 16:9 Aspect Ratio */ }}>
                <iframe
                  src={getEmbedUrl(selectedVideo.videoUrl)}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                ></iframe>
              </div>
              <div className="mt-4">
                <h2 className="text-xl font-bold">{selectedVideo.title}</h2>
                <p className="text-sm text-gray-600">{selectedVideo.views} views • {selectedVideo.uploadDate}</p>

                {/* Description with 'Read More'/'Read Less' functionality */}
                <p className="text-gray-800">
                  {showFullDescription
                    ? selectedVideo.description // Show full description
                    : `${selectedVideo.description.slice(0, 100)}...`} {/* Show truncated description */}
                  <span
                    className="text-blue-500 cursor-pointer"
                    onClick={handleToggleDescription}
                  >
                    {showFullDescription ? ' Read Less' : ' Read More'}
                  </span>
                </p>
              </div>
            </div>

            {/* Suggested Videos Section */}
            <div className="hidden md:block w-full md:w-[40%] h-[60vh] overflow-y-auto border p-2 border-gray-400 rounded-lg">
              <h3 className="font-semibold mb-2">Suggested Videos</h3>
              {videos.map((video, index) => (
                <div 
                  key={index} 
                  className="flex mb-4 cursor-pointer" 
                  onClick={() => setSelectedVideo(video)}
                >
                  <img src={video.thumbnailUrl} alt={video.title} className="w-[40%] h-[10vh] object-cover" />
                  <div className="ml-2">
                    <h4 className="text-sm font-bold truncate w-[100%]">{video.title.substring(0,30)}</h4> {/* Truncate long titles */}
                    <p className="text-xs text-gray-600">{video.channelName}</p>
                    <p className="text-xs text-gray-600">{video.views} views</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sowing;
