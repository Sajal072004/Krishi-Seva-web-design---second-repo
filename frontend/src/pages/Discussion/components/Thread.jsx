import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCommentAlt } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import axios from 'axios';

const Thread = ({ profilePic, title, hashtag, likes, comments, content, commentDesc, username }) => {
  
  const navigate = useNavigate();
  
  const handleThreadClick = () => {
    navigate('/discussions/thread-detail', {
      state: {
        username,
        profilePic,
        title,
        hashtag,
        likes,
        comments,
        content,
        commentDesc: commentDesc || [] 
      }
    });
  };

  return (
    <div 
      onClick={handleThreadClick} 
      className="flex items-start p-4 bg-white rounded-lg shadow-md hover:bg-[#1b7a43] hover:text-white cursor-pointer"
    >
      <img
        src={profilePic}
        alt="User Profile"
        className="w-12 h-12 rounded-full mr-4"
      />
      <div className="flex-grow">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm">{hashtag}</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <BiSolidLike className="text-lg" />
              <span>{likes.length}</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaCommentAlt className="text-lg" />
              <span>{comments.length}</span>
            </div>
          </div>
        </div>
        {/* Display the fetched username */}
        <p className="text-sm">{username}</p>
      </div>
    </div>
  );
};

export default Thread;
