import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const [showDropdown, setShowDropdown] = useState(false); // State to toggle profile dropdown

  useEffect(() => {
    const token = localStorage.getItem('token'); // Check if token exists in local storage
    if (token) {
      setIsLoggedIn(true); // If token is found, user is logged in
    }
  }, []);

  const handleNavigation = (path, id) => {
    if (id) {
      const element = document.getElementById(id);
      if (element) {
        const offset = 100;
        const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
      }
    } else {
      navigate(path);
    }
  };

  const handleProfileClick = () => {
    setShowDropdown(!showDropdown); // Toggle profile dropdown visibility
  };

  const handleSellerProfile = () => {
    const isSeller = localStorage.getItem('isSeller');
    if(isSeller) navigate('/mandi/seller-profile');
    else navigate('/mandi/seller-signup');
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('isSeller');
    localStorage.removeItem('otp');
    setIsLoggedIn(false); // Update login status
    navigate('/sign-in'); // Redirect to sign-in page
  };

  return (
    <div className='fixed top-0 left-0 w-full bg-white z-20 flex items-center h-20 px-4'>
      <img src="/logo.png" alt="Logo" width={56} className='mx-4 cursor-pointer' onClick={() => navigate('/dashboard')} />
      <div className='flex-grow flex justify-center'>
        <ul className='flex gap-x-6 lg:gap-x-12 list-none p-0 text-gray-500 text-lg cursor-pointer'>
          <li onClick={() => handleNavigation('/dashboard')}>Dashboard</li>
          <li onClick={() => handleNavigation('', 'products')}>Mandi</li>
          <li onClick={() => handleNavigation('', 'services')}>Disease Prediction</li>
          <li onClick={() => handleNavigation('', 'labs')}>Labs</li>
          <li onClick={() => handleNavigation('', 'schemes')}>Schemes</li>
          <li onClick={() => handleNavigation('/contact-us')}>Contact Us</li>
        </ul>
      </div>

      {isLoggedIn ? (
        <>
          <div className="relative">
            <img 
              src="profile_icon.png" 
              alt="Profile Icon" 
              className='mr-6 cursor-pointer' 
              onClick={handleProfileClick} 
            />
            
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
                <ul className="text-gray-700">
                  <li 
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100" 
                    onClick={() => navigate('/profile')}
                  >
                    Profile
                  </li>
                  <li 
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100" 
                    onClick={() => handleSellerProfile()}
                  >
                    Seller Profile
                  </li>
                  <li 
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    onClick={handleLogout}
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
          <img src="Notification.png" alt="Notification Icon" className='mr-12 cursor-pointer' />
        </>
      ) : (
        <button
          onClick={() => navigate('/sign-in')}
          className="bg-green-600 text-white px-8 py-2 rounded-lg mr-12 text-xl hover:bg-green-700"
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Header;
