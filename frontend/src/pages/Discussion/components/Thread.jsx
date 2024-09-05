import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCommentAlt } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";

const Thread = ({ id, profilePic, heading, hashtag, likes, comments, username, description, commentDesc }) => {
  const navigate = useNavigate();

  const handleThreadClick = () => {
    navigate('/discussions/thread-detail', {
      state: {
        profilePic,
        heading,
        hashtag,
        likes,
        comments,
        username,
        description,
        commentDesc: commentDesc || [] // Ensure this is an array
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
            <h3 className="text-lg font-semibold">{heading}</h3>
            <p className="text-sm">{hashtag}</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <BiSolidLike className="text-lg" />
              <span>{likes}</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaCommentAlt className="text-lg" />
              <span>{comments}</span>
            </div>
          </div>
        </div>
        <p className="text-sm">{username}</p>
      </div>
    </div>
  );
};

export default Thread;
