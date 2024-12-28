import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const TravelCard = ({ travelPlan }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
      <div className="p-6">
        <h3 className="font-bold text-xl mb-2 text-gray-800">{travelPlan.name}'s Trip to {travelPlan.destination}</h3>
        <div className="flex items-center text-gray-600 mb-2">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{travelPlan.startDate} - {travelPlan.endDate}</span>
        </div>
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="w-4 h-4 mr-2" />
          <span>{travelPlan.placesToVisit}</span>
        </div>
        <p className="text-gray-700">
          {travelPlan.name} is planning to visit {travelPlan.destination}. They're excited to explore {travelPlan.placesToVisit}.
        </p>
      </div>
    </div>
  );
};

export default TravelCard;

