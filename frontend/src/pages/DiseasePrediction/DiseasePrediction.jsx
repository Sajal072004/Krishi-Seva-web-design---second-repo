import React, { useState } from 'react';
import axios from 'axios';

const DiseasePrediction = () => {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!image) {
      alert('Please select an image first!');
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append('image', image);

    try {
      const response = await axios.post('http://localhost:3000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setResult(response.data);
    } catch (error) {
      console.error('Error:', error);
      setResult('An error occurred while processing the image.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="flex flex-wrap">
        {/* Left Side - Upload Image */}
        <div className="w-full md:w-1/3 p-4 border-r border-gray-300">
          <h1 className="text-3xl font-bold mb-6 text-center text-green-700">Upload Image</h1>
          <div className="flex flex-col items-center">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mb-4 border border-gray-300 rounded-lg p-2 w-full text-gray-700"
            />
            <button
              onClick={handleUpload}
              className="p-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition w-full"
              disabled={loading}
            >
              {loading ? 'Uploading...' : 'Upload Image'}
            </button>
          </div>
          {/* Image Preview */}
          {image && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-2 text-center text-gray-800">Image Preview</h2>
              <img
                src={URL.createObjectURL(image)}
                alt="Preview"
                className="w-full h-auto max-w-xs mx-auto rounded-lg border border-gray-300 shadow-md"
              />
            </div>
          )}
        </div>

        {/* Right Side - Result */}
        <div className="w-full md:w-2/3 p-4">
          {result && (
            <div className="mt-6">
              <h2 className="text-2xl font-semibold mb-4 text-green-700">Prediction Result</h2>
              <div className="bg-white p-6 rounded-lg border border-gray-300 shadow-lg">
                <p className="mb-4"><strong className="text-gray-800">Disease Found:</strong> {result}</p>
                <p><strong className="text-gray-800">Cure & Practices:</strong> {result}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DiseasePrediction;
