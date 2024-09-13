import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar.jsx';
import Sidebar from '../Dashboard/components/Sidebar/Sidebar.jsx';

const DiseasePrediction = () => {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [disease, setDisease] = useState('');
  const [cure, setCure] = useState('');

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

      const rawResult = response.data.candidates[0].content.parts[0].text;
      console.log(rawResult);

      // Remove the ```json and ``` around the JSON data
      const cleanResult = rawResult.replace('```json', '').replace('```', '').trim();

      // Extract JSON part from the cleaned result
      const jsonStartIndex = cleanResult.indexOf('{');
      const jsonEndIndex = cleanResult.lastIndexOf('}') + 1;

      // Slice the JSON part and parse it
      const jsonData = cleanResult.slice(jsonStartIndex, jsonEndIndex);
      const parsedJson = JSON.parse(jsonData);

      // Set the parsed disease and cure
      setDisease(parsedJson.Disease);  // Disease
      setCure(parsedJson.Cure);        // Cure

      console.log('Disease:', parsedJson.Disease);
      console.log('Cure:', parsedJson.Cure);

      setResult('');  // Clear result, it will be replaced with the final output

    } catch (error) {
      console.error('Error:', error);
      setResult('An error occurred while processing the image.');
    } finally {
      setLoading(false);
    }
  };

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

          {/* Main Content */}
          <div className="flex-1 mt-[18vh] pt-6 p-4 bg-gray-50 overflow-auto">
            <div className="flex flex-wrap">
              {/* Left Side - Upload Image */}
              <div className="w-full md:w-1/3 p-4 border-r border-gray-300 bg-white rounded-lg shadow-lg">
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
              <div className="w-full md:w-2/3 p-4 bg-white rounded-lg shadow-lg">
                {disease && cure ? (
                  <div className="mt-6">
                    <h2 className="text-2xl font-semibold mb-4 text-green-700">Prediction Result</h2>
                    <div className="bg-gray-100 p-6 rounded-lg border border-gray-300 shadow-lg">
                      <p><strong>Disease: </strong>{disease}</p>
                      <p><strong>Cure: </strong>{cure}</p>
                    </div>
                  </div>
                ) : (
                  result && <p>{result}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiseasePrediction;
