// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom'; 
import logo from '../assets/logo.svg';

const crimeCategories = [
  'Murder',
  'Target Killing',
  'Bomb Blast',
  'Highway & Bank Robbery',
  'Snatching',
  'Gang Rape'
];

export const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto py-16 px-4 md:flex md:justify-between">
        {/* Logo and Description */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <div className="flex items-center mb-6">
            <img src={logo} alt="Crime Portal Logo" className="w-16 h-16" />
            <h1 className="text-2xl md:text-3xl font-bold ml-4">Crime Portal</h1>
          </div>
          <p className="text-sm md:text-md">
            Our Crime Monitoring Portal provides real-time crime data and empowers citizens
            to report incidents. Together, we enhance public safety and foster community
            collaboration.
          </p>
        </div>

        {/* Links and Newsletter */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full md:w-1/2">
          {/* Pages */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Pages</h2>
            <ul className="list-none space-y-2">
              <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-500">About Us</Link></li>
              <li><Link to="/crime-reports" className="hover:text-blue-500">Crime Reports</Link></li>
              <li><Link to="/crime-responses" className="hover:text-blue-500">Crime Responses</Link></li>
              <li><Link to="/contact-us" className="hover:text-blue-500">Contact Us</Link></li>
            </ul>
          </div>

          {/* Crime Categories */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Crime Categories</h2>
            <ul className="list-none space-y-2">
              {crimeCategories.map((category, index) => (
                <li key={index}>
                  <Link to={`/crime-category/${category}`} className="hover:text-teal-300">
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Newsletter</h2>
            <p className="text-sm mb-4">Get Updates Of Latest Crimes</p>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 border rounded-md text-black"
              />
              <button className="bg-teal-900 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded-md w-full">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col sm:flex-row justify-between items-center px-4 md:px-16 py-4 border-t border-gray-700">
        <p className="text-sm">&copy; Copyright Crime Portal 2024</p>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <Link to="/privacy-policy" className="hover:text-blue-500 text-sm">Privacy Policy</Link>
          <Link to="/terms-and-conditions" className="hover:text-blue-500 text-sm">Terms & Conditions</Link>
        </div>
      </div>
    </div>
  );
};
