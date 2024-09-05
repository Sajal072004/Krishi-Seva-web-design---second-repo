import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Sidebar from '../Dashboard/components/Sidebar/Sidebar.jsx';

const videos = [
  {
    id: "1",
    title: "Introduction to React",
    videoUrl: "https://www.youtube.com/watch?v=vqTOZEQq5zM",
    thumbnailUrl: "https://d14a823tufvajd.cloudfront.net/images/JommdOYvYQB3MH5YfV1b.jpg",
    description: "Learn the basics of React, a popular JavaScript library for building user interfaces.",
    channelName: "Code Academy",
    views: "1.2M",
    uploadDate: "2023-07-10",
    duration: "12:34"
  },
  {
    id: "2",
    title: "Understanding State and Props in React",
    videoUrl: "https://www.youtube.com/watch?v=G4V4xO9wyD8&t=2635s",
    thumbnailUrl: "https://d14a823tufvajd.cloudfront.net/images/JommdOYvYQB3MH5YfV1b.jpg",
    description: "A detailed guide on managing state and props in React components.",
    channelName: "Tech Simplified",
    views: "800K",
    uploadDate: "2023-08-15",
    duration: "15:20"
  },
  {
    id: "3",
    title: "React Hooks: A Deep Dive",
    videoUrl: "https://www.youtube.com/watch?v=vqTOZEQq5zM",
    thumbnailUrl: "https://d14a823tufvajd.cloudfront.net/images/JommdOYvYQB3MH5YfV1b.jpg",
    description: "Explore the power of React Hooks in modern functional components.",
    channelName: "Code with Harry",
    views: "950K",
    uploadDate: "2023-09-01",
    duration: "18:45"
  },
  {
    id: "4",
    title: "Building a Todo App with React",
    videoUrl: "https://www.youtube.com/watch?v=G4V4xO9wyD8&t=2635s",
    thumbnailUrl: "https://d14a823tufvajd.cloudfront.net/images/JommdOYvYQB3MH5YfV1b.jpg",
    description: "Step-by-step tutorial on building a functional Todo app using React.",
    channelName: "Dev Ed",
    views: "1.5M",
    uploadDate: "2023-06-25",
    duration: "22:30"
  },
  {
    id: "5",
    title: "Optimizing React Performance",
    videoUrl: "https://www.youtube.com/watch?v=vqTOZEQq5zM",
    thumbnailUrl: "https://d14a823tufvajd.cloudfront.net/images/JommdOYvYQB3MH5YfV1b.jpg",
    description: "Learn how to optimize the performance of your React applications.",
    channelName: "Traversy Media",
    views: "600K",
    uploadDate: "2023-07-05",
    duration: "14:50"
  },
  {
    id: "6",
    title: "React Router: Navigating Your React App",
    videoUrl: "https://www.youtube.com/watch?v=G4V4xO9wyD8&t=2635s",
    thumbnailUrl: "https://d14a823tufvajd.cloudfront.net/images/JommdOYvYQB3MH5YfV1b.jpg",
    description: "Understand how to implement routing in your React applications using React Router.",
    channelName: "Academind",
    views: "1.1M",
    uploadDate: "2023-08-20",
    duration: "19:35"
  },
  {
    id: "7",
    title: "State Management with Redux in React",
    videoUrl: "https://www.youtube.com/watch?v=vqTOZEQq5zM",
    thumbnailUrl: "https://d14a823tufvajd.cloudfront.net/images/JommdOYvYQB3MH5YfV1b.jpg",
    description: "Master state management in React using Redux and the Redux Toolkit.",
    channelName: "Programming with Mosh",
    views: "900K",
    uploadDate: "2023-05-30",
    duration: "21:40"
  },
  {
    id: "8",
    title: "Deploying React Apps with Netlify",
    videoUrl: "https://www.youtube.com/watch?v=G4V4xO9wyD8&t=2635s",
    thumbnailUrl: "https://d14a823tufvajd.cloudfront.net/images/JommdOYvYQB3MH5YfV1b.jpg",
    description: "A guide to deploying your React applications to the web using Netlify.",
    channelName: "The Net Ninja",
    views: "1.3M",
    uploadDate: "2023-09-10",
    duration: "13:55"
  },
  {
    id: "9",
    title: "Styling React Components with Styled-Components",
    videoUrl: "https://www.youtube.com/watch?v=vqTOZEQq5zM",
    thumbnailUrl: "https://d14a823tufvajd.cloudfront.net/images/JommdOYvYQB3MH5YfV1b.jpg",
    description: "Learn how to style your React components using the Styled-Components library.",
    channelName: "Codevolution",
    views: "750K",
    uploadDate: "2023-08-05",
    duration: "16:10"
  },
  {
    id: "10",
    title: "Testing React Applications with Jest",
    videoUrl: "https://www.youtube.com/watch?v=G4V4xO9wyD8&t=2635s",
    thumbnailUrl: "https://d14a823tufvajd.cloudfront.net/images/JommdOYvYQB3MH5YfV1b.jpg",
    description: "Get started with testing your React applications using Jest and React Testing Library.",
    channelName: "FreeCodeCamp",
    views: "1.8M",
    uploadDate: "2023-06-15",
    duration: "20:25"
  }
];

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

const Educational = () => {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

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

          <div className="flex mt-[18vh] p-4">
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
                <p className="text-gray-800">{selectedVideo.description}</p>
              </div>
            </div>

            {/* Suggested Videos Section */}
            <div className="hidden md:block w-full md:w-[40%] h-[60vh] overflow-y-auto">
              <h3 className="font-semibold mb-2">Suggested Videos</h3>
              {videos.map(video => (
                <div 
                  key={video.id} 
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

export default Educational;
