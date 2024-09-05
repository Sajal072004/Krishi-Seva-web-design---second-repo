import React from 'react';
import Navbar from './components/Navbar.jsx';
import Sidebar from '../Dashboard/components/Sidebar/Sidebar.jsx';
import { FaUserGraduate } from 'react-icons/fa';
import { FaCheckCircle } from 'react-icons/fa';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const WebsiteOverview = () => (
  <div className="p-6 bg-white rounded-lg shadow-md mb-8">
    <h2 className="text-3xl font-bold text-gray-700 mb-4">About the Website</h2>
    <p className="text-gray-600 leading-relaxed">
      Welcome to our website! This platform is designed to provide valuable information and resources related to farming and agriculture.
      Whether you are a farmer looking for the latest market trends, an enthusiast seeking educational content, or a business interested in
      agricultural products, our website has something for you.
    </p>

    {/* Video Player Section */}
    <div className="mt-8 mb-8">
      <h3 className="text-xl font-semibold text-gray-700 mb-4">Watch a Demo of Our Platform</h3>
      <div className="relative w-full pb-[56.25%] h-0">
  <iframe
    className="absolute top-0 left-0 w-full h-[75%] rounded-lg shadow-md"
    src="https://www.youtube.com/embed/Wezg66EQ1PQ"
    title="Platform Demo"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>
    </div>

    {/* Detailed Features Section */}
    <div className="mt-8">
      <h3 className="text-xl font-semibold text-gray-700 mb-4">Key Features</h3>
      <div className="space-y-6">
        <FeatureItem
          title="Real-time Market Data"
          description="Get the latest market trends and prices in real-time, helping you make informed decisions."
          imageUrl="/images/market-data.png"
        />
        <FeatureItem
          title="Educational Content"
          description="Access a wide range of videos and articles designed to enhance your knowledge of modern farming techniques."
          imageUrl="/images/education-content.png"
        />
        <FeatureItem
          title="Discussion Forum"
          description="Engage with a community of like-minded individuals, share insights, and get answers to your questions."
          imageUrl="/images/discussion-forum.png"
        />
        {/* Add more features as needed */}
      </div>
    </div>
  </div>
);

const FeatureItem = ({ title, description, imageUrl }) => (
  <div className="flex items-start space-x-4">
    <img src={imageUrl} alt={title} className="w-24 h-24 object-cover rounded-lg shadow-md" />
    <div>
      <h4 className="text-lg font-bold text-gray-700">{title}</h4>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

const UserStatistics = () => {
  const data = {
    labels: ['Feature A', 'Feature B', 'Feature C', 'Feature D'],
    datasets: [
      {
        label: 'Usage Statistics',
        backgroundColor: '#48bb78',
        borderColor: '#48bb78',
        borderWidth: 1,
        hoverBackgroundColor: '#38a169',
        hoverBorderColor: '#38a169',
        data: [65, 59, 80, 81],
      },
    ],
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md mt-8 mb-8">
      <h3 className="text-xl font-semibold text-gray-700 mb-4">Usage Statistics</h3>
      <Bar data={data} />
    </div>
  );
};

const Testimonials = () => (
  <div className="p-6 bg-white rounded-lg shadow-md mt-8">
    <h3 className="text-xl font-semibold text-gray-700 mb-4">What Our Users Say</h3>
    <div className="space-y-4">
      <Testimonial
        text="This platform has completely transformed the way I manage my farm. The real-time data is invaluable."
        author="John Doe, Farmer"
      />
      <Testimonial
        text="The educational content is top-notch. I've learned so much about sustainable farming practices."
        author="Jane Smith, Agriculture Enthusiast"
      />
      {/* Add more testimonials as needed */}
    </div>
  </div>
);

const Testimonial = ({ text, author }) => (
  <div className="flex items-start space-x-4">
    <FaCheckCircle className="text-green-600 text-2xl" />
    <div>
      <p className="text-gray-600 italic">"{text}"</p>
      <p className="text-gray-700 font-semibold mt-2">- {author}</p>
    </div>
  </div>
);

const CreatorInfo = () => (
  <div className="p-6 bg-white rounded-lg shadow-md mt-8">
    <div className="flex items-center mb-4">
      <FaUserGraduate className="text-green-600 text-3xl mr-4" />
      <h2 className="text-2xl font-bold text-gray-700">About the Creator</h2>
    </div>
    <p className="text-gray-600 leading-relaxed">
      Hello! I'm <span className="font-semibold text-gray-800">Sajal Namdeo</span>, the creator of this website. I am currently a third-year B.Tech student
      at IIIT Ranchi, specializing in software development and full-stack development. My passion for technology and agriculture inspired me to create
      this platform to bridge the gap between traditional farming practices and modern technology.
    </p>
    <p className="text-gray-600 leading-relaxed mt-4">
      Over the years, I have worked on various projects that involve web development, algorithm design, and problem-solving. I have a strong foundation
      in coding and a deep interest in making technology accessible and useful for everyone. This website is a reflection of my dedication to innovation
      and my commitment to helping others.
    </p>
    <p className="text-gray-600 leading-relaxed mt-4">
      Feel free to connect with me on <a href="https://www.linkedin.com/in/sajalnamdeo" className="text-green-600 underline">LinkedIn</a> or view my work on 
      <a href="https://github.com/sajalnamdeo" className="text-green-600 underline ml-1">GitHub</a>.
    </p>
  </div>
);

const AboutUs = () => {
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

          <div className="pt-[20vh] p-6">
            {/* About the Website Section */}
            <WebsiteOverview />

            {/* Usage Statistics */}
            <UserStatistics />

            {/* Testimonials */}
            <Testimonials />

            {/* About the Creator Section */}
            <CreatorInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
