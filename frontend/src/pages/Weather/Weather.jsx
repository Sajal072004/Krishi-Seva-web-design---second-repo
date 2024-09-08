import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
import Sidebar from '../Dashboard/components/Sidebar/Sidebar'; // Adjust the path as necessary
import Navbar from './components/Navbar';
import { useNavigate } from 'react-router-dom';

const Weather = () => {
  const [inputCity, setInputCity] = useState('Ranchi');
  const [city, setCity] = useState('Ranchi');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const API_KEY = '447545d7ef0bfacfe791012707fed2a3';
  const navigate = useNavigate();

  useEffect(() => {
    handleSearch();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleSearch = async () => {
    if (inputCity.trim() === '') {
      alert('Please enter a city name.');
      return;
    }
    setCity(inputCity);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${inputCity}&appid=${API_KEY}`
      );
      const data = response.data;
      setWeatherData(data.list[0]);

      const dailyForecast = processForecastData(data.list);
      setForecastData(dailyForecast);
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
            const response = await axios.get(
              `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
            );
            const data = response.data;
            setWeatherData(data.list[0]);

            const dailyForecast = processForecastData(data.list);
            setForecastData(dailyForecast);

            const reverseGeocodeResponse = await axios.get(
              `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
            );
            const cityName = reverseGeocodeResponse.data.name;
            setCity(cityName);
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

  const processForecastData = (forecastList) => {
    const forecastData = [];
    const dateSet = new Set();
    forecastList.forEach(item => {
      const date = new Date(item.dt_txt);
      const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
      if (dateSet.size < 5 && !dateSet.has(formattedDate)) {
        dateSet.add(formattedDate);
        forecastData.push({
          date: formattedDate,
          temp: (item.main.temp - 273.15).toFixed(2),
          humidity: item.main.humidity,
          wind: item.wind.speed,
          icon: item.weather[0].icon,
        });
      }
    });
    console.log("Processed Forecast Data:", forecastData); // Debugging line
    return forecastData;
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
                value={inputCity}
                onChange={(e) => setInputCity(e.target.value)}
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
                      {city} ({formatDate(weatherData.dt_txt)})
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
                    {forecastData.length > 0 ? (
                      forecastData.map((day, index) => (
                        <li
                          key={index}
                          className="forecast-card bg-[#1b7a49] text-white p-4 rounded-lg shadow-md text-center"
                        >
                          <p className="text-lg font-semibold">{day.date}</p>
                          <img
                            src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
                            alt="weather icon"
                            className="w-16 h-16 mx-auto"
                          />
                          <p className="text-lg">Temp: {day.temp}°C</p>
                          <p className="text-lg">Humidity: {day.humidity}%</p>
                          <p className="text-lg">Wind: {day.wind} M/S</p>
                        </li>
                      ))
                    ) : (
                      <li className="forecast-card bg-white p-4 rounded-lg shadow-md text-center">
                        <p className="text-lg">No data available</p>
                      </li>
                    )}
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
