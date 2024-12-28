import React, { useState } from 'react';
import TravelCard from './TravelCard';

const TravelList = ({ travelPlans }) => {
  const [filterDestination, setFilterDestination] = useState('');
  const [filterDate, setFilterDate] = useState('');

  const filteredPlans = travelPlans.filter((plan) => {
    const destinationMatch = plan.destination.toLowerCase().includes(filterDestination.toLowerCase());
    const dateMatch = !filterDate || plan.startDate === filterDate;
    return destinationMatch && dateMatch;
  });

  return (
    <div>
      <div className="mb-4 flex space-x-4">
        <input
          type="text"
          placeholder="Filter by destination"
          value={filterDestination}
          onChange={(e) => setFilterDestination(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <input
          type="date"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPlans.map((plan) => (
          <TravelCard key={plan.id} travelPlan={plan} />
        ))}
      </div>
    </div>
  );
};

export default TravelList;

