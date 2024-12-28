import React from 'react';

const destinations = [
  { name: 'Taj Mahal, Agra', image: '/placeholder.svg?height=200&width=300' },
  { name: 'Jaipur, Rajasthan', image: '/placeholder.svg?height=200&width=300' },
  { name: 'Goa Beaches', image: '/placeholder.svg?height=200&width=300' },
  { name: 'Kerala Backwaters', image: '/placeholder.svg?height=200&width=300' },
  { name: 'Varanasi Ghats', image: '/placeholder.svg?height=200&width=300' },
  { name: 'Ladakh', image: '/placeholder.svg?height=200&width=300' },
];

const Destinations = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">Popular Destinations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((dest, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <img src={dest.image} alt={dest.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{dest.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;

