import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Sidebar from '../Discussion/components/Sidebar.jsx'

const GovtSchemes = () => {
  const [selectedOption, setSelectedOption] = useState('India');
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        if (selectedOption === 'India') {
          response = await import(`../../../jsons/india.json`);
        } else {
          response = await import(`../../../jsons/${selectedOption}.json`);
        }
        setData(response.default || []); // Ensure it's an array
      } catch (error) {
        console.error('Error loading the JSON file:', error);
        setData([]); // Reset data in case of error
      }
    };

    fetchData();
  }, [selectedOption]);

  return (
    <div className='flex h-screen overflow-hidden bg-gray-200'>
      <Sidebar className='fixed top-0 right-0 h-full w-[20vw] bg-gray-800 text-white' /> {/* Fixed Sidebar */}
      
      <div className='flex flex-col flex-1'>
        <Navbar className='fixed top-0 left-0 right-[20vw] z-10' /> {/* Fixed Navbar */}
        
        <main className='pt-[4rem] p-4 overflow-auto ml-[0vw] mt-[-7vh]'>
          <div className='max-w-7xl mx-auto'>
            <h1 className='text-5xl font-bold mt-0 mb-6 text-center text-[#1b7a43]'>Government Schemes</h1>

            <div className='mb-4'>
              <label htmlFor='dropdown' className='block text-lg font-medium text-gray-700'>
                Select Option
              </label>
              <select
                id='dropdown'
                className='mt-1 block w-[40vh] border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 p-2'
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
              >
                <option value='india'>India</option>
                <option value='andhra_pradesh'>Andhra Pradesh</option>
<option value='arunachal_pradesh'>Arunachal Pradesh</option>
<option value='assam'>Assam</option>
<option value='bihar'>Bihar</option>
<option value='chattisgarh'>Chhattisgarh</option>
<option value='goa'>Goa</option>
<option value='gujarat'>Gujarat</option>
<option value='haryana'>Haryana</option>
<option value='himachal_pradesh'>Himachal Pradesh</option>
<option value='jharkhand'>Jharkhand</option>
<option value='karnataka'>Karnataka</option>
<option value='kerala'>Kerala</option>
<option value='madhya_pradesh'>Madhya Pradesh</option>
<option value='maharashtra'>Maharashtra</option>
<option value='manipur'>Manipur</option>
<option value='meghalaya'>Meghalaya</option>
<option value='mizoram'>Mizoram</option>
<option value='nagaland'>Nagaland</option>
<option value='odisha'>Odisha</option>
<option value='punjab'>Punjab</option>
<option value='rajasthan'>Rajasthan</option>
<option value='sikkim'>Sikkim</option>
<option value='tamil_nadu'>Tamil Nadu</option>
<option value='telangana'>Telangana</option>
<option value='tripura'>Tripura</option>
<option value='uttar_pradesh'>Uttar Pradesh</option>
<option value='uttarakhand'>Uttarakhand</option>
<option value='west_bengal'>West Bengal</option>

              </select>
            </div>

            {/* Table */}
            <table className='min-w-[100%] divide-y divide-gray-200'>
              <thead className='bg-[#1b7a43] h-16'>
                <tr>
                  <th className='px-4 py-3 text-left text-[18px] font-medium text-white uppercase tracking-wider'>Sr No.</th>
                  <th className='px-6 py-3 text-left text-[18px] font-medium text-white uppercase tracking-wider'>Name</th>
                  <th className='px-6 py-3 text-left text-[18px] font-medium text-white uppercase tracking-wider'>Link</th>
                </tr>
              </thead>
              <tbody className='bg-gray-200 divide-y divide-gray-200'>
                {data.length ? (
                  data.map((item, index) => (
                    <tr key={index}>
                      <td className='px-8 py-4 whitespace-nowrap text-left'>{index + 1}</td>
                      <td className='px-6 py-4 whitespace-nowrap'>{item.Title.slice(0, 102)}</td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        {item.Download && item.Download !== 'NA' ? (
                          <a href={item.Download} target='_blank' rel='noopener noreferrer' className='text-blue-500 underline'>
                            Download
                          </a>
                        ) : item.Link ? (
                          <a href={item.Link} target='_blank' rel='noopener noreferrer' className='text-blue-500 underline'>
                            Visit Link
                          </a>
                        ) : (
                          'Not Available'
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan='3' className='px-6 py-4 text-center text-gray-500'>
                      No data available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default GovtSchemes;
