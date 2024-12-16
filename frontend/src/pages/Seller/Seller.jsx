import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from '../Discussion/components/Sidebar.jsx';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdCloudUpload } from "react-icons/md";
import { useDropzone } from 'react-dropzone';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Seller = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    images: [],
    price: '',
    quantity: '',
    unit: 'kg',
    category: '',
    harvestDate: '',
    expiryDate: '',
    Location: '',
    userId: '',
  });

  const [isLoading, setIsLoading] = useState(false); // State to handle loading
  const navigate = useNavigate();

  const onDrop = (acceptedFiles) => {
    setFormData((prevState) => ({
      ...prevState,
      images: [...prevState.images, ...acceptedFiles].slice(0, 6), // Limit to 6 images
    }));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddToMandi = async (e) => {
    e.preventDefault();
    const { name, description, images, price, quantity, unit, category, harvestDate, expiryDate, Location } = formData;

    const userId = localStorage.getItem('userId'); // Retrieve userId from localStorage

    // Check if all required fields are filled
    if (!name || !description || !images.length || !price || !quantity || !unit || !category || !harvestDate || !expiryDate || !Location) {
      toast.warning('Please fill out all fields', {
        position: "top-right",
      });
      return;
    }

    setIsLoading(true); // Set loading state to true

    const formDataToSend = new FormData();

    // Append each field to formData
    formDataToSend.append('name', name);
    formDataToSend.append('description', description);
    formDataToSend.append('price', price);
    formDataToSend.append('quantity', quantity);
    formDataToSend.append('unit', unit);
    formDataToSend.append('category', category);
    formDataToSend.append('harvestDate', harvestDate);
    formDataToSend.append('expiryDate', expiryDate);
    formDataToSend.append('Location', Location);
    formDataToSend.append('userId', userId);

    // Append images to formData (each file separately)
    images.forEach((image) => {
      formDataToSend.append('images', image);
    });

    try {
      const response = await axios.post('https://krishisevabackendnew-tfhz.onrender.com/api/v1/crops', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response);

      if (response.data.success) {
        toast.success('Crop added to Mandi successfully!', {
          position: "top-right",
          autoClose: 2000, // Auto-close after 2 seconds
        });

        // Delay the navigation to ensure the toast is visible
        setTimeout(() => {
          setIsLoading(false); // Reset loading state
          navigate('/mandi/seller-profile');
        }, 2000);
      } else {
        toast.error(`Error: ${response.data.message}`, {
          position: "top-right",
        });
        setIsLoading(false); // Reset loading state
      }
    } catch (error) {
      toast.error('Failed to add crop to Mandi', {
        position: "top-right",
      });
      console.error('Error adding crop to Mandi:', error);
      setIsLoading(false); // Reset loading state
    }
  };

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

          <div className='mt-[14vh] p-8 flex justify-center items-center ' style={{ height: '105vh' }}>
            <form className='bg-white p-6 rounded shadow-md w-full flex' style={{ height: '100vh' }}>
              {/* Left section - Upload Images */}
              <div className='w-[30%] flex flex-col justify-between'>
                <label className='block text-[#1b7a49] text-sm font-bold mb-1'>Upload Images</label>
                <div
                  {...getRootProps()}
                  className={`flex flex-col justify-center items-center w-full h-[70%] border-2 border-dashed rounded cursor-pointer ${isDragActive ? 'border-[#1b7a49]' : 'border-gray-300'} `}
                >
                  <input {...getInputProps()} multiple name="images" />
                  <MdCloudUpload style={{ width: '100px', height: '100px' }} className='text-gray-300' />
                  <p className='text-gray-400'>
                    {isDragActive ? "Drop the files here ..." : "Drag & drop some files here, or click to select files"}
                  </p>
                </div>

                {formData.images.length > 0 && (
                  <div className='mt-4 p-4 grid grid-cols-2 gap-4 bg-gray-100 border rounded' style={{ borderColor: '#1b7a49' }}>
                    {formData.images.slice(0, 6).map((image, index) => (
                      <div key={index} className="relative">
                        <img
                          src={URL.createObjectURL(image)}
                          alt={`Selected ${index}`}
                          className='w-full h-40 object-cover rounded border'
                          style={{ borderColor: '#1b7a49' }}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Right section - Input fields */}
              <div className='w-[70%] grid grid-cols-2 gap-6 px-8'>
                <div>
                  <label className='block text-[#1b7a49] text-sm font-bold mb-1'>Crop Name</label>
                  <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    className='w-full px-3 py-2 border rounded'
                    style={{ borderColor: '#1b7a49' }}
                  />
                </div>

                <div>
                  <label className='block text-[#1b7a49] text-sm font-bold mb-1'>Price</label>
                  <input
                    type='number'
                    name='price'
                    value={formData.price}
                    onChange={handleChange}
                    className='w-full px-3 py-2 border rounded'
                    style={{ borderColor: '#1b7a49' }}
                  />
                </div>

                <div>
                  <label className='block text-[#1b7a49] text-sm font-bold mb-1'>Quantity</label>
                  <input
                    type='number'
                    name='quantity'
                    value={formData.quantity}
                    onChange={handleChange}
                    className='w-full px-3 py-2 border rounded'
                    style={{ borderColor: '#1b7a49' }}
                  />
                </div>

                <div>
                  <label className='block text-[#1b7a49] text-sm font-bold mb-1'>Unit</label>
                  <select
                    name='unit'
                    value={formData.unit}
                    onChange={handleChange}
                    className='w-full px-3 py-2 border rounded'
                    style={{ borderColor: '#1b7a49' }}
                  >
                    <option value='kg'>kg</option>
                    <option value='tonnes'>tonnes</option>
                    <option value='liters'>liters</option>
                    <option value='pieces'>pieces</option>
                  </select>
                </div>

                <div>
                  <label className='block text-[#1b7a49] text-sm font-bold mb-1'>Category</label>
                  <select
                    name='category'
                    value={formData.category}
                    onChange={handleChange}
                    className='w-full px-3 py-2 border rounded'
                    style={{ borderColor: '#1b7a49' }}
                  >
                    <option value=''>Select Category</option> {/* Default empty option */}
                    <option value='Crops'>Crops</option>
                    <option value='Seeds'>Seeds</option>
                    <option value='Pulses'>Pulses</option>
                    <option value='Fruits'>Fruits</option>
                    <option value='Vegetables'>Vegetables</option>
                    <option value='Fertilizers'>Fertilizers</option>
                    <option value='Dairy Products'>Dairy Products</option>
                    <option value='Fodder Crops'>Fodder Crops</option>
                  </select>
                </div>

                <div>
                  <label className='block text-[#1b7a49] text-sm font-bold mb-1'>Harvest Date</label>
                  <input
                    type='date'
                    name='harvestDate'
                    value={formData.harvestDate}
                    onChange={handleChange}
                    className='w-full px-3 py-2 border rounded'
                    style={{ borderColor: '#1b7a49' }}
                  />
                </div>

                <div>
                  <label className='block text-[#1b7a49] text-sm font-bold mb-1'>Expiry Date</label>
                  <input
                    type='date'
                    name='expiryDate'
                    value={formData.expiryDate}
                    onChange={handleChange}
                    className='w-full px-3 py-2 border rounded'
                    style={{ borderColor: '#1b7a49' }}
                  />
                </div>

                <div className='col-span-1'>
                  <label className='block text-[#1b7a49] text-sm font-bold mb-1'>Location</label>
                  <input
                    type='text'
                    name='Location'
                    value={formData.Location}
                    onChange={handleChange}
                    className='w-full px-3 py-2 border rounded'
                    style={{ borderColor: '#1b7a49' }}
                  />
                </div>

                <div className='col-span-2'>
                  <label className='block text-[#1b7a49] text-sm font-bold mb-1'>Description</label>
                  <textarea
                    name='description'
                    value={formData.description}
                    onChange={handleChange}
                    rows='4'
                    className='w-full px-3 py-2 border rounded'
                    style={{ borderColor: '#1b7a49' }}
                  />
                </div>

                <div className='col-span-2 flex justify-end'>
                  <button
                    onClick={handleAddToMandi}
                    className={`bg-[#1b7a49] text-white px-6 py-2 rounded ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={isLoading} // Disable button while loading
                  >
                    {isLoading ? 'Submitting...' : 'Add to Mandi'} {/* Show loader text */}
                  </button>

                  <button
                    onClick={() => navigate('/mandi/seller-profile')}
                    className={`bg-red-600 text-white hover:bg-red-400 px-6 py-2 rounded ml-2 `}

                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seller;
