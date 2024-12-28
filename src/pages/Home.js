import React, { useState } from 'react';
import TravelForm from '../components/TravelForm';
import TravelList from '../components/TravelList';

const Home = () => {
  const [travelPlans, setTravelPlans] = useState([
    {
      id: '1',
      name: 'John Doe',
      destination: 'Jaipur',
      startDate: '2023-06-15',
      endDate: '2023-06-20',
      placesToVisit: 'Amber Fort, Hawa Mahal, City Palace',
    },
    {
      id: '2',
      name: 'Jane Smith',
      destination: 'Goa',
      startDate: '2023-07-01',
      endDate: '2023-07-07',
      placesToVisit: 'Baga Beach, Fort Aguada, Dudhsagar Falls',
    },
  ]);

  const handleSubmit = (newPlan) => {
    setTravelPlans([...travelPlans, newPlan]);
  };

  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">Plan Your Indian Adventure</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-gray-700">Post Your Travel Plan</h3>
          <TravelForm onSubmit={handleSubmit} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-gray-700">Discover Travel Plans</h3>
          <TravelList travelPlans={travelPlans} />
        </div>
      </div>
    </div>
  );
};

export default Home;

