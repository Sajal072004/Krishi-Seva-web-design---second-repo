import React from 'react';
import Navbar from './components/Navbar.jsx';
import Sidebar from '../Dashboard/components/Sidebar/Sidebar.jsx';
import { FaUserGraduate } from 'react-icons/fa';
import { FaCheckCircle } from 'react-icons/fa';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import { BsGraphUpArrow } from "react-icons/bs";
import { FaBook } from "react-icons/fa";
import { VscCommentDiscussion } from "react-icons/vsc";

const WebsiteOverview = () => (
  <div className="p-6 bg-white rounded-lg shadow-md mb-0">
    <h2 className="text-3xl font-bold text-gray-700 mb-4">About the Website</h2>
    <p className="text-gray-600 leading-relaxed">
      Welcome to our website! This platform is designed to provide valuable information and resources related to farming and agriculture.
      Whether you are a farmer looking for the latest market trends, an enthusiast seeking educational content, or a business interested in
      agricultural products, our website has something for you.
    </p>

    {/* Video Player Section */}
    <div className="mt-8 mb-4">
      <h3 className="text-xl font-semibold text-gray-700 mb-4">Watch a Demo of Our Platform</h3>
      <div className="relative w-full pb-[60%] h-0">
        <iframe
          className="absolute top-0 left-0 w-full h-[75%] rounded-lg shadow-md"
          src="https://www.youtube.com/embed/S7ehMmF--MQ"
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
          icon={<BsGraphUpArrow />}
        />
        <FeatureItem
          title="Educational Content"
          description="Access a wide range of videos and articles designed to enhance your knowledge of modern farming techniques."
          icon={<FaBook />}
        />
        <FeatureItem
          title="Discussion Forum"
          description="Engage with a community of like-minded individuals, share insights, and get answers to your questions."
          icon={<VscCommentDiscussion />}
        />
        {/* Add more features as needed */}
      </div>
    </div>
  </div>
);

const FeatureItem = ({ title, description, icon: Icon }) => (
  <div className="flex items-center space-x-4">
    <div className='w-8 text-3xl text-gray-700'>
      {Icon}
    </div>

    <div>
      <h4 className="text-lg font-bold text-gray-700 ml-4">{title}</h4>
      <p className="text-gray-600 leading-relaxed ml-4">{description}</p>
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


const CreatorDetails = [
  {
    desc1: "Hello! I'm ",
    name: 'Sajal Namdeo ',
    desc2: "one of the members of this project. I am currently a third-year B.Tech student at IIIT Ranchi, specializing in computer science and full-stack development. My passion for technology and agriculture inspired me to contribute to this platform, aiming to bridge the gap between traditional farming practices and modern technology.",

    desc3: "I have worked on the frontend of this website with hard work and dedication, ensuring a seamless and visually appealing user experience. My focus was on creating a user-friendly platform that meets the needs of the farming community while maintaining high-quality design standards.",
    github: "www.github.com/Sajal072004",
    linkedin: "www.linkedin.com/in/sajaln",
    image: "sajal.jpg"
  },
  {
    desc1: "Hello! I'm ",
    name: 'Ayushman singh ',
    desc2: "one of the members of this project. I am currently a third-year B.Tech student at IIIT Ranchi, specializing in computer science and artificial intelligence. My passion for leveraging AI to advance farming practices inspired me to join this platform and contribute towards empowering farmers with cutting-edge technology.",
    desc3: "I was part of the team that implemented the chatbot and disease predictor, ensuring these tools effectively support the farming community. Additionally, I worked on keeping the data on the site up-to-date, ensuring users have access to the most relevant and accurate information.",
    github: "www.github.com/ayushman72",
    linkedin: "www.linkedin.com/in/singh-ayushman",
    image: 'ayushman.jpg'
  },
  {
    desc1: "Hello! I'm ",
    name: 'Sharad Prakash ',
    desc2: "one of the contributors to this project. Currently, I'm a third-year B.Tech student at IIIT Ranchi, specializing in computer science and artificial intelligence. My interest in utilizing AI to enhance agricultural practices motivated me to be a part of this initiative, driving innovation for the farming community. ",
    desc3: "As a key member of the team, I contributed by developing the chatbot and disease prediction features, helping to enhance the platform’s usability. I also focused on regularly updating the site’s data, ensuring that users have access to the latest and most accurate resources.",
    github: "www.github.com/sharad117",
    linkedin: "www.linkedin.com/in/sharad-prakash117",
    image: 'sharad.jpg'
  },
  {
    desc1: "Hello! myself ",
    name: 'Devansh Varshney ',
    desc2: "one of the members of this project. I am currently a third-year B.Tech student at IIIT Ranchi, specializing in Electronics and Communication Engineering. I have always wondered if there could be a platform for farmers which have eveything that they need just like a digital world of solutions of all their problems.",

    desc3: "I have worked in this team as a U.I/U.X designer and thus desgined various parts of this website with hard work and dedication, ensuring a seamless and visually appealing user experience. My focus was on creating a user-friendly platform that meets the needs of the farming community while maintaining high-quality design standards.",
    github: "www.github.com/devanshvarshney",
    linkedin: "www.linkedin.com/in/devanshvarshney",
    image: "devansh.jpg"
  },
  {
    desc1: "Hello! I'm ",
    name: 'Pratham Dwivedi ',
    desc2: "a third-year B.Tech student at IIIT Ranchi, specializing in computer science and full-stack development. Driven by a passion for both technology and agriculture, I am excited to be part of this project. My goal is to help modernize traditional farming practices by integrating innovative tech solutions, creating a platform that empowers farmers with the tools and knowledge they need in today's digital age.",

    desc3: "I have dedicated my efforts to the backend development of this website, focusing on delivering a seamless and efficient user experience. My aim was to create a platform that is not only user-friendly but also tailored to meet the unique needs of the farming community. Throughout the process, I ensured that the design remains intuitive while upholding high standards of functionality and performance.",
    github: "www.github.com/PrathamDwivedi27",
    linkedin: "https://www.linkedin.com/in/pratham-dwivedi-6a5639256/",
    image: "pratham.jpg"
  }
];





const Creators = ({ desc1, name, desc2, desc3, linkedin, github, image }) => {
  return <div>
    <div className='flex gap-2 mt-12'>
      <div className='w-[15%]'>
        <img src={image} alt="" className='w-24 border rounded-[50%]' />
      </div>
      <div className='w-[90%] mt-2 '>
        <p className='text-gray-800'>
          {desc1}
          <span className="font-semibold text-gray-800">{name}</span>
          {desc2}
        </p>

      </div>

    </div>
    <p className="leading-relaxed mt-4">
      {desc3}
    </p>
    <p className="text-gray-600 leading-relaxed mt-1">
      Feel free to connect with me on <a href={`https://${linkedin}`} target='_blank' className="text-green-600 underline">LinkedIn</a> or view my work on
      <a href={`https://${github}`} target='_blank' className="text-green-600 underline ml-1">GitHub</a>.
    </p>
    <hr className='mt-4 border-2 text-black' />

  </div>
}

const CreatorInfo = () => (
  <div className="p-6 bg-white rounded-lg shadow-md mt-8">
    <div className="flex items-center mb-4">
      <FaUserGraduate className="text-green-600 text-3xl mr-4" />
      <h2 className="text-2xl font-bold text-gray-700">About the Creators</h2>
    </div>
    <div>
      {CreatorDetails.map((item, index) => {
        return <Creators key={index} {...item} />
      })}
    </div>

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
            {/* <UserStatistics /> */}

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
