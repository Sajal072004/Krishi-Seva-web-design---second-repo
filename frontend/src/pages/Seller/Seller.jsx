import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from '../Discussion/components/Sidebar.jsx';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdCloudUpload } from "react-icons/md";
import { useDropzone } from 'react-dropzone';
import { useNavigate } from 'react-router-dom';

const Seller = () => {
  const [formData, setFormData] = useState({
    images: [], 
    title: '',
    description: '',
    price: '',
    weight: '',
  });

  const navigate = useNavigate();

  const onDrop = (acceptedFiles) => {
    setFormData((prevState) => ({
      ...prevState,
      images: [...prevState.images, ...acceptedFiles],
    }));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      setFormData({
        ...formData,
        [name]: [...files],  
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { images, title, description, price, weight } = formData;

    if (!images.length || !title || !description || !price || !weight) {
      toast.warning('Please fill out all fields', {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      console.log('Form Submitted:', formData);

      toast.success('Item added to the Mandi!', {
        position: toast.POSITION.TOP_RIGHT,
      });

      setFormData({
        images: [],
        title: '',
        description: '',
        price: '',
        weight: '',
      });
    }
  };

  const handleAddToMandi = () => {
    navigate('/mandi/seller-profile');
  }

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

          <div className='mt-[10vh] p-8 flex justify-center items-center' style={{ height: '105vh' }}>
            <form onSubmit={handleSubmit} className='bg-white p-6 rounded shadow-md' style={{ height: '80%', width: '100%' }}>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 h-full'>
                <div className='md:col-span-1'>
                  <label className='block text-[#1b7a49] text-sm font-bold mb-2'>Upload Images</label>
                  <div
                    {...getRootProps()}
                    className={`flex flex-col justify-center items-center w-full h-[70%] border-2 border-dashed rounded cursor-pointer ${
                      isDragActive ? 'border-[#1b7a49]' : 'border-gray-300'
                    }`}
                  >
                    <input {...getInputProps()} multiple name="images" />
                    <MdCloudUpload style={{ width: '100px', height: '100px' }} className='text-gray-300' />
                    <p className='text-gray-400'>
                      {isDragActive ? "Drop the files here ..." : "Drag & drop some files here, or click to select files"}
                    </p>
                  </div>
                  {formData.images.length > 0 && (
                    <div className='mt-4 grid grid-cols-2 gap-4'>
                      {formData.images.map((image, index) => (
                        <img
                          key={index}
                          src={URL.createObjectURL(image)}
                          alt={`Selected ${index}`}
                          className='w-full h-48 object-cover rounded border'
                          style={{ borderColor: '#1b7a49' }}
                        />
                      ))}
                    </div>
                  )}
                </div>

                <div className='md:col-span-1 flex flex-col justify-between'>
                  <div>
                    <div className='mb-4'>
                      <label className='block text-[#1b7a49] text-sm font-bold mb-2'>Title</label>
                      <input
                        type='text'
                        name='title'
                        value={formData.title}
                        onChange={handleChange}
                        className='w-full px-3 py-2 border rounded'
                        style={{ borderColor: '#1b7a49' }}
                      />
                    </div>

                    <div className='mb-4'>
                      <label className='block text-[#1b7a49] text-sm font-bold mb-2'>Description</label>
                      <textarea
                        name='description'
                        value={formData.description}
                        onChange={handleChange}
                        className='w-full px-3 py-2 border rounded'
                        rows='4'
                        style={{ borderColor: '#1b7a49' }}
                      ></textarea>
                    </div>

                    <div className='mb-4'>
                      <label className='block text-[#1b7a49] text-sm font-bold mb-2'>Price</label>
                      <input
                        type='number'
                        name='price'
                        value={formData.price}
                        onChange={handleChange}
                        className='w-full px-3 py-2 border rounded'
                        style={{ borderColor: '#1b7a49' }}
                      />
                    </div>

                    <div className='mb-4'>
                      <label className='block text-[#1b7a49] text-sm font-bold mb-2'>Weight (Kg per unit)</label>
                      <input
                        type='number'
                        name='weight'
                        value={formData.weight}
                        onChange={handleChange}
                        className='w-full px-3 py-2 border rounded'
                        style={{ borderColor: '#1b7a49' }}
                      />
                    </div>
                  </div>

                  <div className='flex items-center justify-end  mt-6'>
                    <button
                    onClick={()=>handleAddToMandi()}
                      type='submit'
                      className='bg-[#1b7a49] hover:bg-[#145a36] text-white font-bold py-2 px-4 rounded mr-2'
                    >
                      Add to Mandi
                    </button>
                    <button
                    onClick={()=>navigate('/mandi/seller-profile')}
                      type='submit'
                      className='bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-4 rounded'
                    >
                      Cancel
                    </button>
                  </div>
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
