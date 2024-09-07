import React from 'react';
import Navbar from './components/Navbar.jsx';
import Sidebar from '../Dashboard/components/Sidebar/Sidebar.jsx';
import { FaUser, FaLock, FaBell, FaShieldAlt } from 'react-icons/fa';

const UserProfile = ({ name }) => (
  <div className="flex items-center p-4 bg-white rounded-lg shadow-md">
    <img src="/profile_icon.png" alt="Profile" className="w-[60px] h-[60px] rounded-full mr-4" />
    <div>
      <h2 className="text-2xl font-semibold text-gray-700">{name}</h2>
      <p className="text-gray-500">Manage your account settings</p>
    </div>
  </div>
);

const SettingsSection = ({ icon, title, children }) => (
  <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center mb-4">
      {icon && <div className="text-xl text-green-600 mr-3">{icon}</div>}
      <h3 className="text-xl font-semibold text-gray-700">{title}</h3>
    </div>
    <div className="text-gray-600">{children}</div>
  </div>
);

const Settings = () => {
  const userName = "Sajal Namdeo";

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
            {/* User Profile Section */}
            <UserProfile name={userName} />

            {/* Account Settings Section */}
            <SettingsSection icon={<FaUser />} title="Account Settings">
              <ul>
                <li className="py-2 border-b text-[17px] font-semibold"><a href="#" className="hover:text-green-600">Change Password</a></li>
                <li className="py-2 border-b"><a href="#" className="hover:text-green-600 text-[17px] font-semibold">Update Email</a></li>
                <li className="py-2 text-red-600 text-[17px] font-semibold"><a href="#" className="hover:text-red-600">Delete Account</a></li>
              </ul>
            </SettingsSection>

            {/* Privacy Settings Section */}
            {/* <SettingsSection icon={<FaShieldAlt />} title="Privacy Settings">
              <ul>
                <li className="py-2 border-b"><a href="#" className="hover:text-green-600">Manage Blocked Users</a></li>
                <li className="py-2 border-b"><a href="#" className="hover:text-green-600">Set Account to Private</a></li>
                <li className="py-2"><a href="#" className="hover:text-green-600">Two-Factor Authentication</a></li>
              </ul>
            </SettingsSection> */}

            {/* Notification Settings Section */}
            {/* <SettingsSection icon={<FaBell />} title="Notification Settings">
              <ul>
                <li className="py-2 border-b"><a href="#" className="hover:text-green-600">Email Notifications</a></li>
                <li className="py-2 border-b"><a href="#" className="hover:text-green-600">Push Notifications</a></li>
                <li className="py-2"><a href="#" className="hover:text-green-600">SMS Notifications</a></li>
              </ul>
            </SettingsSection> */}

            {/* Security Settings Section */}
            {/* <SettingsSection icon={<FaLock />} title="Security Settings">
              <ul>
                <li className="py-2 border-b"><a href="#" className="hover:text-green-600">Manage Security Questions</a></li>
                <li className="py-2 border-b"><a href="#" className="hover:text-green-600">Enable Login Alerts</a></li>
                <li className="py-2"><a href="#" className="hover:text-green-600">Recent Login Activity</a></li>
              </ul>
            </SettingsSection> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
