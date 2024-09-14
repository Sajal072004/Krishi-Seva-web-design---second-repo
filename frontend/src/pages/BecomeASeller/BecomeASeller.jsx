import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from '../Discussion/components/Sidebar.jsx';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// Register the required components for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BecomeASeller = () => {
  // Dummy Data for 12 months of orders
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Received',
        data: [120, 130, 110, 140, 150, 160, 155, 180, 175, 190, 200, 210],
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Green
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Delivered',
        data: [100, 120, 100, 130, 140, 150, 145, 170, 165, 180, 190, 195],
        backgroundColor: 'rgba(54, 162, 235, 0.6)', // Blue
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Cancelled',
        data: [20, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 15],
        backgroundColor: 'rgba(255, 99, 132, 0.6)', // Red
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        position: 'top',
      },
    },
    maintainAspectRatio: false,
  };

  // Example progress values
  const totalSales = 10000;
  const salesThisMonth = 2500;
  const totalEarnings = 7500;

  const totalSalesPercentage = (totalSales / 12000) * 100; // Assuming target is $12,000
  const salesThisMonthPercentage = (salesThisMonth / 5000) * 100; // Assuming target for month is $5000
  const totalEarningsPercentage = (totalEarnings / 10000) * 100; // Assuming target is $10,000

  return (
    <div className='overflow-x-hidden'>
      <ToastContainer />
      <div className='flex bg-[#f9fafc] w-[100vw] overflow-x-hidden'>
        <div className='fixed h-screen w-[25vw] md:w-[20vw]'>
          <Sidebar />
        </div>

        <div className='ml-[25vw] md:ml-[18vw] w-[calc(100vw-25vw)] md:w-[calc(100vw-20vw)]'>
          <div className='fixed w-[84vw] bg-[#f9fafc] z-10 -ml-4' style={{ height: '18vh' }}>
            <Navbar />
          </div>

          {/* Main Content Area */}
          <div className='mt-[20vh] flex'>
            {/* Left Section (85% width) */}
            <div className='w-[75%] p-4'>
              {/* Circular Progress Bars */}
              <div className='flex justify-between space-x-4'>
                {/* Total Sales */}
                <div className='bg-white p-4 rounded-lg shadow-md flex flex-col items-center w-[33%]'>
                  <h3 className='text-lg font-semibold'>Total Sales</h3>
                  <div className='w-24 h-24'>
                    <CircularProgressbar
                      value={totalSalesPercentage}
                      text={`${Math.round(totalSalesPercentage)}%`}
                      styles={buildStyles({
                        pathColor: `rgba(75, 192, 192, 1)`,
                        textColor: '#000',
                        trailColor: '#f4f4f4',
                      })}
                    />
                  </div>
                  <p className='text-2xl font-bold mt-2'>${totalSales}</p>
                </div>

                {/* Sales This Month */}
                <div className='bg-white p-4 rounded-lg shadow-md flex flex-col items-center w-[33%]'>
                  <h3 className='text-lg font-semibold'>Sales This Month</h3>
                  <div className='w-24 h-24'>
                    <CircularProgressbar
                      value={salesThisMonthPercentage}
                      text={`${Math.round(salesThisMonthPercentage)}%`}
                      styles={buildStyles({
                        pathColor: `rgba(54, 162, 235, 1)`,
                        textColor: '#000',
                        trailColor: '#f4f4f4',
                      })}
                    />
                  </div>
                  <p className='text-2xl font-bold mt-2'>${salesThisMonth}</p>
                </div>

                {/* Total Earnings */}
                <div className='bg-white p-4 rounded-lg shadow-md flex flex-col items-center w-[33%]'>
                  <h3 className='text-lg font-semibold'>Total Earnings</h3>
                  <div className='w-24 h-24'>
                    <CircularProgressbar
                      value={totalEarningsPercentage}
                      text={`${Math.round(totalEarningsPercentage)}%`}
                      styles={buildStyles({
                        pathColor: `rgba(255, 99, 132, 1)`,
                        textColor: '#000',
                        trailColor: '#f4f4f4',
                      })}
                    />
                  </div>
                  <p className='text-2xl font-bold mt-2'>${totalEarnings}</p>
                </div>
              </div>

              {/* Bar Graph */}
              <div className='bg-white p-4 mt-6 rounded-lg shadow-md'>
                <h3 className='text-lg font-semibold'>Orders Overview</h3>
                <div className='h-[400px] w-full'>
                  {/* Stacked Bar Chart */}
                  <Bar data={data} options={options} />
                </div>
              </div>
            </div>

            {/* Right Section (for other content) */}
            <div className=' p-4'>
              {/* Sell Items Card */}
              <div className='bg-white p-6 rounded-lg shadow-md mb-6 w-[300px] h-[200px] flex flex-col items-center justify-center'>
                <h1 className='text-3xl mb-4'>Sell Items</h1>
                <button className='bg-[#1b7a43] py-2 px-8 mt-4 text-white text-xl hover:bg-green-500 rounded-lg'>Sell</button>
                
              </div>

              {/* Top Selling Items */}
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-semibold'>Top Selling Items</h3>
                <ul className='mt-4 space-y-2'>
                  <li className='bg-gray-100 p-3 rounded-lg'>Item 1</li>
                  <li className='bg-gray-100 p-3 rounded-lg'>Item 2</li>
                  <li className='bg-gray-100 p-3 rounded-lg'>Item 3</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeASeller;
