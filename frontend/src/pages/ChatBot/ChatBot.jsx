import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar.jsx';
import Sidebar from '../Dashboard/components/Sidebar/Sidebar.jsx';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  
  // Reference to the chatbox div
  const chatboxRef = useRef(null);

  const handleSendMessage = async () => {
    if (userInput.trim() === '') return;

    const now = new Date();
    const formattedTime = now.toLocaleTimeString();
    const formattedDate = now.toLocaleDateString();

    const newMessages = [...messages, { sender: 'You', text: userInput, time: formattedTime, date: formattedDate }];
    setMessages(newMessages);

    try {
      const response = await axios.post('https://chatbotbackend-w1fu.onrender.com/chat', { message: userInput });
      setMessages([...newMessages, { sender: 'Bot', text: response.data.reply, time: formattedTime, date: formattedDate }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages([...newMessages, { sender: 'Bot', text: 'An error occurred', time: formattedTime, date: formattedDate }]);
    }

    setUserInput('');
  };

  // Automatically scroll down to the last message when messages change
  useEffect(() => {
    if (chatboxRef.current) {
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  }, [messages]);

  // Handle Enter key press
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent the default Enter key behavior
      handleSendMessage();
    }
  };

  return (
    <div className="overflow-x-hidden">
      <div className="flex bg-[#f9fafc] w-[100vw] h-[100vh] overflow-x-hidden">
        <div className="fixed h-screen w-[25vw] md:w-[20vw]">
          <Sidebar />
        </div>

        <div className="ml-[25vw] md:ml-[20vw] w-[calc(100vw-25vw)] md:w-[calc(100vw-20vw)]">
          {/* Navbar */}
          <div className="fixed w-full bg-[#f9fafc] z-10" style={{ height: '18vh' }}>
            <Navbar />
          </div>

          {/* Main Content */}
          <div className="pt-[20vh] p-4 flex gap-4">

            {/* Right Side - Chatbox */}
            <div className="w-3/5 flex flex-col gap-4">
              {/* Chatbox UI */}
              <div
                id="chatbox"
                ref={chatboxRef}  // Add ref to the chatbox
                className="w-full h-[60vh] p-4 border rounded-lg overflow-y-auto bg-white"
                style={{ border: '1px solid #ccc' }}
              >
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.sender === 'You' ? 'justify-end' : 'justify-start'} mb-3`}
                  >
                    <div
                      className={`w-full p-3 rounded-lg max-w-xs ${
                        message.sender === 'You'
                          ? 'bg-green-100 text-left' // User's message styles
                          : 'bg-blue-100 text-left' // Bot's message styles
                      }`}
                      style={{ borderRadius: '20px', padding: '10px 15px' }}
                    >
                      <div className='flex justify-between'>
                      <p className="font-bold">{message.sender}:</p>
                      <p className="text-xs text-gray-500">{message.date}</p>
                      </div>
                      
                      <p>{message.text}</p>
                      
                    </div>
                  </div>
                ))}
              </div>

              {/* Input box and send button */}
              <div className="flex w-full">
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyDown={handleKeyDown} // Add onKeyDown handler
                  className="flex-grow p-2 border rounded-l-lg"
                  placeholder="Type your message here..."
                />
                <button
                  onClick={handleSendMessage}
                  className="p-2 bg-green-600 text-white rounded-r-lg"
                >
                  Send
                </button>
              </div>
            </div>

            {/* Left Side - Image */}
            <div className="w-2/5">
              <img
                src='/chatbot_img1.avif'
                alt="Chatbot"
                className=" rounded-lg shadow-lg object-cover w-full h-full"
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
