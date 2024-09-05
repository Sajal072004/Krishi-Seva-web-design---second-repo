import React from 'react';
import Sidebar from '../Dashboard/components/Sidebar/Sidebar';
import Navbar from './components/Navbar';
import Thread from './components/Thread';  // Import the Thread component
import { FaPlus } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Discussion = () => {
  const navigate = useNavigate();

  // Dummy JSON array with 10 entries
  const threads = [
    {
      profilePic: '/farmer_profile_icon.png',
      username: 'farmer_john',
      heading: 'How to optimize React apps?',
      hashtag: '#React',
      likes: 15,
      comments: 8,
      description: 'Discuss various techniques to improve the performance of React applications, including code splitting and lazy loading.',
      commentDesc: [
        {
          commenter: "Alice",
          comment: "Great tips on code splitting!",
          replies: [
            { username: "Bob", reply: "I agree! Also, consider using React.lazy for dynamic imports." },
            { username: "Charlie", reply: "What about code splitting for vendor libraries?" }
          ]
        },
        {
          commenter: "Bob",
          comment: "Any recommendations on libraries for lazy loading?",
          replies: [
            { username: "Alice", reply: "React Loadable is a good one to start with." },
            { username: "Charlie", reply: "I've heard good things about React Loadable too." }
          ]
        },
        {
          commenter: "Charlie",
          comment: "What about handling large images in React?",
          replies: [
            { username: "Alice", reply: "Consider using responsive images and lazy loading." }
          ]
        }
      ]
    },
    {
      profilePic: '/farmer_profile_icon.png',
      username: 'farmer_sue',
      heading: 'Best practices for state management',
      hashtag: '#StateManagement',
      likes: 20,
      comments: 12,
      description: 'Share insights and strategies for effective state management in applications, including popular libraries and patterns.',
      commentDesc: [
        {
          commenter: "Dave",
          comment: "Redux is great for state management!",
          replies: [
            { username: "Eve", reply: "Yes, but it can be quite verbose. How about using Redux Toolkit?" }
          ]
        },
        {
          commenter: "Eve",
          comment: "How do you handle side effects in state management?",
          replies: [
            { username: "Dave", reply: "Redux-Saga or Redux-Thunk are popular choices for handling side effects." }
          ]
        },
        {
          commenter: "Frank",
          comment: "What do you think about using Context API for state management?",
          replies: [
            { username: "Eve", reply: "Context API is good for simpler state needs but might not scale well for complex apps." }
          ]
        }
      ]
    }
  ];
  
  

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
          <div className="fixed top-[18vh] left-[20vw] md:left-[17vw] w-[calc(100vw-25vw)] md:w-[calc(100vw-17vw)] bg-white shadow-md z-20 py-4 pl-4 pr-8">
            <div className="flex justify-between items-center p-4">
              <div className="flex space-x-4">
                <button className="px-4 py-2 bg-gray-200 rounded hover:bg-[#1b7a43] hover:text-white">Latest</button>
                <button className="px-4 py-2 bg-gray-200 rounded hover:bg-[#1b7a43] hover:text-white">Popular</button>
                <button className="px-4 py-2 bg-gray-200 rounded hover:bg-[#1b7a43] hover:text-white">My Threads</button>
                {/* Category Dropdown */}
                <select className="px-4 py-2 bg-gray-200 border border-gray-300 rounded focus:bg-green-100 focus:border-green-500 focus:outline-none">
                  <option value="general">General</option>
                  <option value="feedback">Feedback</option>
                  <option value="discussion">Help</option>
                </select>
              </div>

              {/* New Thread Button */}
              <button 
                onClick={handleNewThreadClick}
                className="px-4 py-2 bg-[#1b7a43] text-white rounded hover:bg-green-600 flex items-center mx-2"
              >
                <span className='mr-2'>New Thread </span>
                <FaPlus />
              </button>
            </div>
          </div>

          {/* Content Below Navbar and Top Options */}
          <div className="mt-[35vh]">
            {/* List of Threads */}
            <div className="p-4 space-y-4">
              {threads.map((thread, index) => (
                <Thread
                  key={index}
                  profilePic={thread.profilePic}
                  heading={thread.heading}
                  hashtag={thread.hashtag}
                  likes={thread.likes}
                  comments={thread.comments}
                  description={thread.description}
                  username={thread.username}
                  commentDesc={thread.commentDesc}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discussion;
