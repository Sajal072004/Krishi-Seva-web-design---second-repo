import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { FaCommentAlt } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { IoSendSharp } from "react-icons/io5";
import { FaReplyAll } from "react-icons/fa";

const ThreadDetail = () => {
  const location = useLocation();
  const { profilePic, heading, hashtag, likes, comments, username, description, commentDesc } = location.state;

  // State for managing reply input visibility for each comment
  const [replyStates, setReplyStates] = useState({});

  const handleReplyClick = (index) => {
    setReplyStates(prev => ({
      ...prev,
      [index]: { isVisible: !prev[index]?.isVisible, replyText: prev[index]?.replyText || '' }
    }));
  };

  const handleReplyChange = (e, index) => {
    setReplyStates(prev => ({
      ...prev,
      [index]: { ...prev[index], replyText: e.target.value }
    }));
  };

  const handleReplySubmit = (index) => {
    const replyText = replyStates[index]?.replyText || '';
    console.log("Reply submitted:", replyText);
    setReplyStates(prev => ({
      ...prev,
      [index]: { ...prev[index], replyText: '', isVisible: false }
    }));
  };

  return (
    <div className="overflow-x-hidden">
      <div className="flex bg-[#f9fafc] w-[100vw] overflow-x-hidden">
        <div className="fixed h-screen w-[25vw] md:w-[20vw]">
          <Sidebar />
        </div>
        <div className="ml-[25vw] md:ml-[18vw] w-[calc(100vw-25vw)] md:w-[calc(100vw-20vw)]">
          <div className="fixed w-[84vw] bg-[#f9fafc] z-10 -ml-4" style={{ height: '18vh' }}>
            <Navbar />
          </div>
          <div className="mt-[15vh] p-8 w-[50vw] ml-[13vw]">
            <h1 className="text-4xl font-bold mb-4">{heading}</h1>
            <p className="text-sm text-gray-600 mb-2">{`${hashtag}`}</p>
            <div className='flex mt-4'>
              <img src={profilePic} alt="User Profile" className="w-12 h-12 rounded-full mb-4" />
              <div className='ml-4'>
                <p className="text-2xl font-semibold mb-6">{username}</p>
                <p className="text-lg text-gray-700 mb-6">{description}</p>
              </div>
            </div>
            <div className="flex space-x-4 text-gray-700 mb-4">
              <div className="flex items-center space-x-1">
                <BiSolidLike className="text-lg" />
                <span>{likes}</span>
              </div>
              <div className="flex items-center space-x-1">
                <FaCommentAlt className="text-lg" />
                <span>{comments}</span>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <input
                className="flex-grow pl-6 py-3 border rounded-l-[50px] border-r-0 focus:outline-none"
                placeholder="Add a comment..."
              />
              <button className="px-6 py-4 bg-[#1b7a43] text-white rounded-r-[50px] border-l-0 hover:bg-green-600">
                <IoSendSharp />
              </button>
            </div>
            <div className="mt-8">
              {commentDesc.map((comment, index) => (
                <div key={index} className="border-b pb-2 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-semibold">{comment.commenter}:</p>
                    <div className="flex items-center space-x-4">
                      <button className="text-black"><BiSolidLike/></button>
                      <button onClick={() => handleReplyClick(index)}>
                        <FaReplyAll />
                      </button>
                    </div>
                  </div>
                  <p>{comment.comment}</p>
                  {replyStates[index]?.isVisible && (
                    <div className="mt-4 flex items-center">
                      <input
                        className="flex-grow pl-6 py-3 border rounded-l-[50px] border-r-0 focus:outline-none"
                        placeholder="Write a reply..."
                        value={replyStates[index]?.replyText || ''}
                        onChange={(e) => handleReplyChange(e, index)}
                      />
                      <button
                        className="px-6 py-4 bg-[#1b7a43] text-white rounded-r-[50px] border-l-0 hover:bg-green-600"
                        onClick={() => handleReplySubmit(index)}
                      >
                        <IoSendSharp />
                      </button>
                    </div>
                  )}
                  {comment.replies && (
                    <div className="mt-4 pl-4">
                      {comment.replies.map((reply, idx) => (
                        <div key={idx} className="flex items-start mb-2">
                          <p className="font-semibold">{reply.username}:</p>
                          <p className="ml-2">{reply.reply}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreadDetail;
