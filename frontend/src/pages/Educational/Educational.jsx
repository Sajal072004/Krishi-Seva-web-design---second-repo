import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Sidebar from '../Dashboard/components/Sidebar/Sidebar.jsx';
import { useNavigate } from 'react-router-dom';

const sections = [
  {
    title: {
      en: 'Fertilizers',
      hi: 'उर्वरक'
    },
    description: {
      en: 'Enhance crop growth and yield with the right use of fertilizers.',
      hi: 'उर्वरकों के सही उपयोग से फसल की वृद्धि और पैदावार बढ़ाएँ।'
    },
    image: '/yt_fertilizer.jpg',
    url: 'educational/fertilizers'
  },
  {
    title: {
      en: 'Pesticides',
      hi: 'कीटनाशक'
    },
    description: {
      en: 'Protect your crops from pests with safe and effective insecticides.',
      hi: 'सुरक्षित और प्रभावी कीटनाशकों से अपनी फसलों को कीड़ों से बचाएं।'
    },
    image: '/yt_insecticides.jpeg',
    url: 'educational/insecticides'
  },
  {
    title: {
      en: 'Irrigation',
      hi: 'सिंचाई'
    },
    description: {
      en: 'Ensure optimal water supply for healthy crops through efficient irrigation.',
      hi: 'प्रभावी सिंचाई से स्वस्थ फसलों के लिए उपयुक्त जल आपूर्ति सुनिश्चित करें।'
    },
    image: '/yt_irrigation.avif',
    url: 'educational/irrigation'
  },
  {
    title: {
      en: 'Sowing',
      hi: 'बुवाई'
    },
    description: {
      en: 'Master the art of proper sowing techniques for better germination and yield.',
      hi: 'बेहतर अंकुरण और उपज के लिए सही बुवाई तकनीकों में महारत हासिल करें।'
    },
    image: '/yt_sowing.jpg',
    url: 'educational/sowing'
  },
  {
    title: {
      en: 'Weeds',
      hi: 'खरपतवार'
    },
    description: {
      en: 'Control weeds effectively to ensure maximum nutrient absorption for your crops.',
      hi: 'अपनी फसलों के लिए अधिकतम पोषक तत्वों के अवशोषण के लिए खरपतवार को प्रभावी ढंग से नियंत्रित करें।'
    },
    image: '/yt_weeds.jpg',
    url: 'educational/weeds'
  },
];


const Educational = () => {
  const [language, setLanguage] = useState('en'); // Default language is English
  const navigate = useNavigate();

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value); // Update the language based on dropdown selection
  };

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

          <div className="mt-[15vh] p-6">
            {/* Language Dropdown below the Navbar */}
            <div className="flex justify-start mb-8">
              <select
                value={language}
                onChange={handleLanguageChange}
                className="border border-gray-300 rounded p-2"
              >
                <option value="en">English</option>
                <option value="hi">हिन्दी</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {sections.map((section, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => navigate(`/${section.url}`, { state: { language } })}  // Pass language in navigation
                >
                  <img
                    src={section.image}
                    alt={section.title[language]}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {section.title[language]} {/* Display title based on selected language */}
                    </h3>
                    <p className="text-gray-600 mt-2">
                      {section.description[language]} {/* Display description based on selected language */}
                    </p>
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
