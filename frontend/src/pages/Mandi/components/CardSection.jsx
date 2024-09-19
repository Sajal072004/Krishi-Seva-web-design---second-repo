import React, { useEffect, useState } from 'react';
import Card from './Card';

const CardSection = ({ title }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/v1/crops');
        const result = await response.json();

        if (result.success) {
          // Filter the data based on the category (title)
          const filteredData = result.data.filter(item => item.category === title);
          setData(filteredData);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [title]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col">
      <div className="text-2xl my-4 mr-8 text-gray-500">
        <h1>{title}</h1>
      </div>
      {/* Grid layout to display cards in a 4-column format */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map(item => (
          <Card
            key={item._id}
            id={item._id}
            name={item.name}
            description={item.description}
            image={item.image}
            price={item.price}
            quantity={item.quantity}
            unit={item.unit}
            status={item.status}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
};

export default CardSection;
