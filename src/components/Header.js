import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-orange-500 to-pink-500 text-white py-6 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center hover:text-yellow-300 transition duration-300">
            <MapPin className="w-8 h-8 mr-2" />
            <h1 className="text-3xl font-bold">Incredible India Travel</h1>
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li><Link to="/" className="hover:text-yellow-300 transition duration-300">Home</Link></li>
              <li><Link to="/destinations" className="hover:text-yellow-300 transition duration-300">Destinations</Link></li>
              <li><Link to="/about" className="hover:text-yellow-300 transition duration-300">About</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-300 transition duration-300">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

