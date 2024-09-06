import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services.jsx'
import Dashboard from './pages/Dashboard/Dashboard';
import Mandi from './pages/Mandi/Mandi';
import ContactUs from './pages/ContactUs/ContactUs';
import ScrollToTop from './components/ScrollToTop';
import Discussion from './pages/Discussion/Discussion';
import NewThread from './pages/Discussion/components/NewThread';
import ThreadDetail from './pages/Discussion/components/ThreadDetail';
import Educational from './pages/Educational/Educational';
import News from './pages/News/News';
import NewsDetail from './pages/News/components/NewsDetail';
import AboutUs from './pages/AboutUs/AboutUs';
import Settings from './pages/Settings/Settings';
import Seller from './pages/Seller/Seller';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import GovtSchemes from './pages/Govt-Schemes/GovtSchemes';
import PrivateRoute from './components/PrivateRoute';
import ChatBot from './pages/ChatBot/ChatBot';
import DiseasePrediction from './pages/DiseasePrediction/DiseasePrediction';
import LabsNearby from './pages/LabsNearby/LabsNearby';

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />

        <Route path="/explore/govt-schemes" element={<GovtSchemes />} />

        <Route path="/explore" element={<Services />} />

        <Route path="/contact-us" element={<ContactUs />}/>

        <Route path="/about-us" element={<AboutUs />} />

        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* Protected routes */}

        <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />

        <Route path="/disease-prediction" element={<PrivateRoute element={<DiseasePrediction />} />} />

        <Route path="/nearby-labs" element={<PrivateRoute element={<LabsNearby />} />} />

        <Route path="/chat-bot" element={<PrivateRoute element={<ChatBot />} />} />
        <Route path="/mandi" element={<PrivateRoute element={<Mandi />} />} />
        <Route path="/educational" element={<PrivateRoute element={<Educational />} />} />
        <Route path="/latest-news" element={<PrivateRoute element={<News />} />} />
        
        
        <Route path="/mandi-seller" element={<PrivateRoute element={<Seller />} />} />
        <Route path="/discussions" element={<PrivateRoute element={<Discussion />} />} />
        <Route path="/discussions/new-thread" element={<PrivateRoute element={<NewThread />} />} />
        <Route path="/discussions/:id" element={<PrivateRoute element={<ThreadDetail />} />} />
        <Route path="/latest-news/:id" element={<PrivateRoute element={<NewsDetail />} />} />
        <Route path="/settings" element={<PrivateRoute element={<Settings />} />} />
        
        
      </Routes>
    </>
  );
};

export default App;
