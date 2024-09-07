import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
import Sidebar from '../Dashboard/components/Sidebar/Sidebar'; // Adjust the path as necessary
import { useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';

const Weather = () => {
  const [inputCity, setInputCity] = useState('Ranchi'); // Use a separate state for the input value
  const [city, setCity] = useState('Ranchi'); // City used for fetching weather
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const API_KEY = '447545d7ef0bfacfe791012707fed2a3';
  const navigate = useNavigate();

  // Fetch weather data for the default city when the component mounts
  useEffect(() => {
    handleSearch();
  }, []);

  const handleSearch = async () => {
    if (inputCity.trim() === '') {
      alert('Please enter a city name.');
      return;
    }
    setCity(inputCity); // Update city state with the input value
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${inputCity}&appid=${API_KEY}`
      );
      const data = response.data;
      setWeatherData(data.list[0]); // Current weather
      setForecastData(data.list.slice(1, 6)); // Next 5 days forecast
    } catch (error) {
      console.error('Error fetching weather data:', error);
      Toastify({
        text: 'City not found!',
        duration: 3000,
        backgroundColor: 'linear-gradient(to right, #ff5f6d, #ffc371)',
      }).showToast();
    }
  };

  const handleUseCurrentLocation = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            // Fetch the weather data for the current location
            const response = await axios.get(
              `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
            );
            const data = response.data;
            setWeatherData(data.list[0]);
            setForecastData(data.list.slice(1, 6));
    
            // Fetch the city name from the reverse geocoding API
            const reverseGeocodeResponse = await axios.get(
              `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
            );
            const cityName = reverseGeocodeResponse.data.name;
            setCity(cityName); // Update city state with the current location city
    
            // Clear the input city
            setInputCity('');
    
          } catch (error) {
            console.error('Error fetching location weather:', error);
            Toastify({
              text: 'Error fetching weather data for current location.',
              duration: 3000,
              backgroundColor: 'linear-gradient(to right, #ff5f6d, #ffc371)',
            }).showToast();
          }
        },
        (error) => {
          console.error('Error getting location:', error);
          Toastify({
            text: 'Error getting current location.',
            duration: 3000,
            backgroundColor: 'linear-gradient(to right, #ff5f6d, #ffc371)',
          }).showToast();
        }
      );
    } else {
      Toastify({
        text: 'Geolocation is not supported by this browser.',
        duration: 3000,
        backgroundColor: 'linear-gradient(to right, #ff5f6d, #ffc371)',
      }).showToast();
    }
  };
  
  

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className='w-[20vw] fixed'>
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="ml-[25vw] md:ml-[18vw] w-[calc(100vw-25vw)] md:w-[calc(100vw-20vw)]">
        <div className="fixed w-[84vw] bg-[#f9fafc] z-10 -ml-4" style={{ height: '18vh' }}>
          <Navbar />
        </div>
        <div className="flex flex-col w-full items-center justify-center p-6 bg-gradient-to-r from-green-100 via-green-50 to-blue-50 mt-12">
          <h1 className="text-3xl font-bold text-center mb-8">Weather Dashboard</h1>

          <div className="flex flex-col md:flex-row justify-between items-start">
            {/* Search Section */}
            <div className="weather-input bg-white p-6 rounded-lg shadow-md max-w-md w-full md:w-1/5 -ml-4">
              <h3 className="text-lg font-medium mb-4">Enter a City Name</h3>
              <input
                type="text"
                placeholder="E.g., New York, London, Tokyo"
                value={inputCity} // Use inputCity state
                onChange={(e) => setInputCity(e.target.value)} // Update inputCity state
                className="w-full p-2 border border-gray-300 rounded mb-4"
              />
              <button
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                onClick={handleSearch}
              >
                Search
              </button>
              <div className="separator my-4"></div>
              <button
                className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
                onClick={handleUseCurrentLocation}
              >
                Use Current Location
              </button>
            </div>

            {/* Weather Information Section */}
            {weatherData && (
              <div className="weather-data mt-8 md:mt-0 md:ml-4 bg-white p-6 rounded-lg shadow-md flex-1">
                <div className="current-weather flex justify-between items-center mb-6">
                  <div className="details">
                    <h2 className="text-2xl font-semibold">
                      {city} ({new Date(weatherData.dt_txt).toLocaleDateString()})
                    </h2>
                    <p className="text-lg">
                      Temperature: {(weatherData.main.temp - 273.15).toFixed(2)}°C
                    </p>
                    <p className="text-lg">Wind: {weatherData.wind.speed} M/S</p>
                    <p className="text-lg">Humidity: {weatherData.main.humidity}%</p>
                  </div>
                  <div className="icon text-center p-2 bg-[#1b7a43] text-white rounded-lg">
                    <img
                      src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`}
                      alt="weather icon"
                      className="w-24 h-24"
                    />
                    <p className="text-lg capitalize">{weatherData.weather[0].description}</p>
                  </div>
                </div>

                {/* 5-Day Forecast */}
                <div className="days-forecast">
                  <h2 className="text-xl font-semibold mb-4">5-Day Forecast</h2>
                  <ul className="weather-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {forecastData.map((day, index) => (
                      <li
                        key={index}
                        className="card p-4 bg-[#1b7a43] text-white rounded-lg shadow text-center"
                      >
                        <h3 className="font-medium mb-2">
                          {new Date(day.dt_txt).toLocaleDateString()}
                        </h3>
                        
                        <img
                          src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png`}
                          alt="weather icon"
                          className="w-16 h-16 mx-auto"
                        />
                        <p className="text-lg">Temp: {(day.main.temp - 273.15).toFixed(2)}°C</p>
                        <p className="text-lg">Wind: {day.wind.speed} M/S</p>
                        <p className="text-lg">Humidity: {day.main.humidity}%</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
