import React from 'react';
import Navbar from './components/Navbar.jsx';
import Sidebar from '../Dashboard/components/Sidebar/Sidebar.jsx';
import NewsCard from './components/NewsCard.jsx';

// Dummy news array
const news = [
  {
    id: "1",
    title: "React 18 Released: What's New?",
    imageUrl: "https://bsmedia.business-standard.com/_media/bs/img/article/2021-11/01/full/1635790072-5528.jpg?im=FeatureCrop,size=(826,465)",
    description: "React 18 comes with several new features and improvements. Let's dive into what's new!",
    date: "2023-08-31",
  },
  {
    id: "2",
    title: "JavaScript: The Definitive Guide 7th Edition Released",
    imageUrl: "https://bsmedia.business-standard.com/_media/bs/img/article/2021-11/01/full/1635790072-5528.jpg?im=FeatureCrop,size=(826,465)",
    description: "The 7th edition of JavaScript: The Definitive Guide is now available. Learn what's covered!",
    date: "2023-08-30",
  },
  {
    id: "3",
    title: "TypeScript vs. JavaScript: Which One Should You Choose?",
    imageUrl: "https://bsmedia.business-standard.com/_media/bs/img/article/2021-11/01/full/1635790072-5528.jpg?im=FeatureCrop,size=(826,465)",
    description: "A detailed comparison of TypeScript and JavaScript to help you decide which one to use.",
    date: "2023-08-29",
  },
  {
    id: "4",
    title: "Top 10 VS Code Extensions for Web Developers",
    imageUrl: "https://bsmedia.business-standard.com/_media/bs/img/article/2021-11/01/full/1635790072-5528.jpg?im=FeatureCrop,size=(826,465)",
    description: "Enhance your productivity with these top 10 Visual Studio Code extensions.",
    date: "2023-08-28",
  },
  
];


const News = () => {
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

          <div className="pt-[20vh] p-4 flex flex-wrap gap-4">
            {news.map(item => (
              <NewsCard
                key={item.id}
                id={item.id}
                title={item.title}
                imageUrl={item.imageUrl}
                description={item.description}
                date={item.date}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;


