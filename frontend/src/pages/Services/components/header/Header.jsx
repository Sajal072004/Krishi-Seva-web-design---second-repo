import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleNavigation = (path, id) => {
    if (id) {
      // Scroll to the section with an offset
      const element = document.getElementById(id);
      if (element) {
        const offset = 100; // Adjust this value as needed
        const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });

        // Ensure that hash is removed from the URL
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
      }
    } else {
      // Navigate to different routes
      navigate(path);
    }
  };

  return (
    <div className='fixed top-0 left-0 w-full bg-white z-20 flex items-center h-20 px-4'>
      <img src="/logo.png" alt="Logo" width={56} className='mx-4' />
      <div className='flex-grow flex justify-center'>
        <ul className='flex gap-x-6 lg:gap-x-12 list-none p-0 text-gray-500 text-lg cursor-pointer'>
          <li onClick={() => handleNavigation('/dashboard')}>Dashboard</li>
          <li onClick={() => handleNavigation('', 'products')}>Mandi</li>
          <li onClick={() => handleNavigation('', 'services')}>Services</li>
          <li onClick={() => handleNavigation('', 'labs')}>Labs</li>
          <li onClick={() => handleNavigation('', 'schemes')}>Schemes</li>
          <li onClick={() => handleNavigation('/contact-us')}>Contact Us</li>
        </ul>
      </div>
      <img src="profile_icon.png" alt="Profile Icon" className='mr-6' />
      <img src="Notification.png" alt="Notification Icon" className='mr-12' />
    </div>
  );
}

export default Header;
