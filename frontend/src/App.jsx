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
import UserProfile from './pages/UserProfile/UserProfile';
import SellerProfile from './pages/SellerProfile/SellerProfile';
import FertilizersPage from './pages/Educational/components/Fertilizers';
import Insecticides from './pages/Educational/components/Insecticides';
import Irrigation from './pages/Educational/components/Irrigation';
import Sowing from './pages/Educational/components/Sowing';
import Weeds from './pages/Educational/components/Weeds';
import Finance from './pages/Finance/Finance';
import Weather from './pages/Weather/Weather';
import CardInfo from './pages/Mandi/components/CardInfo';

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

        <Route path="/explore/disease-prediction" element={<PrivateRoute element={<DiseasePrediction />} />} />

        <Route path="/explore/nearby-labs" element={<PrivateRoute element={<LabsNearby />} />} />

        <Route path="/seller" element={<PrivateRoute element={<Seller />} />} />

        <Route path="/chat-bot" element={<PrivateRoute element={<ChatBot />} />} />
        <Route path="/mandi" element={<PrivateRoute element={<Mandi />} />} />
        <Route path="/mandi/:category/:id" element={<PrivateRoute element={<CardInfo />} />} />
        <Route path="/educational" element={<PrivateRoute element={<Educational />} />} />
        <Route path="/latest-news" element={<PrivateRoute element={<News />} />} />
        
        
        <Route path="/mandi-seller" element={<PrivateRoute element={<Seller />} />} />
        <Route path="/discussions" element={<PrivateRoute element={<Discussion />} />} />
        <Route path="/discussions/new-thread" element={<PrivateRoute element={<NewThread />} />} />
        <Route path="/discussions/:id" element={<PrivateRoute element={<ThreadDetail />} />} />
        <Route path="/latest-news/:id" element={<PrivateRoute element={<NewsDetail />} />} />
        <Route path="/settings" element={<PrivateRoute element={<Settings />} />} />
        <Route path="/profile" element={<PrivateRoute element={<UserProfile />} />} />
        <Route path="/seller-profile" element={<PrivateRoute element={<SellerProfile/>} />} />
        <Route path="/educational/fertilizers" element={<PrivateRoute element={<FertilizersPage/>} />} />
        <Route path="/educational/insecticides" element={<PrivateRoute element={<Insecticides/>} />} />
        <Route path="/educational/irrigation" element={<PrivateRoute element={<Irrigation/>} />} />
        <Route path="/educational/sowing" element={<PrivateRoute element={<Sowing/>} />} />
        <Route path="/educational/weeds" element={<PrivateRoute element={<Weeds/>} />} />
        <Route path="/finance" element={<PrivateRoute element={<Finance/>} />} />
        <Route path="/weather" element={<PrivateRoute element={<Weather/>} />} />
        
        
        
      </Routes>
    </>
  );
};

export default App;
