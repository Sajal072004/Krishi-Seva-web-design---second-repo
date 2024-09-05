import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import SectionOne from './components/SectionOne/SectionOne'
import Weather from './components/Weather/Weather'
import RecentActivity from './components/RecentActivity/RecentActivity'
import TopSeller from './components/TopSeller/TopSeller'
import BottomSection from './components/BottomSection/BottomSection'

const Dashboard = () => {
  return (
    <div className='overflow-x-hidden'>
      <div className='flex bg-[#f9fafc] w-[100vw] overflow-x-hidden'>
        {/* Sidebar with fixed position */}
        <div className='fixed h-screen w-[25vw] md:w-[20vw]'>
          <Sidebar/>
        </div>

        {/* Main content area adjusted to account for the fixed sidebar */}
        <div className='ml-[25vw] md:ml-[17vw] w-[calc(100vw-25vw)] md:w-[calc(100vw-20vw)]'>
          <Navbar />

          <div className='flex w-full'>
            <div className='flex-row w-[55vw] z-0'>
              <SectionOne/>
              <TopSeller/>
              <BottomSection/>
            </div>

            <div className='flex flex-col w-[25vw] z-0 gap-10'>
              <Weather />
              <RecentActivity />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
