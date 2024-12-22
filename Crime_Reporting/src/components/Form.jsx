import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from './Banner';
import RecentReports from './RecentReports';

const CrimeReportForm = () => {
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');
  const [status] = useState('Pending');
  const [date] = useState(new Date().toISOString().split('T')[0]);
  const [year] = useState(new Date().getFullYear());
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newReport = {
      category,
      location,
      description,
      status,
      date,
      year,
      caseNumber: `CASE-${Math.floor(Math.random() * 1000000)}`,
      id: Date.now(), 
    };

    try {
      const response = await fetch('https://project-2d5f7-default-rtdb.firebaseio.com/crimereport.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newReport),
      });

      if (response.ok) {
        setMessage('Crime report submitted successfully!');
        navigate('/after-report'); 
      } else {
        setMessage('Failed to submit the report. Please try again.');
      }
    } catch (error) {
      setMessage('Error occurred while submitting the report.');
      console.error('Error:', error);
    }
  };

  return (
    <>

<Banner/>
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-0 px-0 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Submit Crime Report</h2>
        </div>
        <div className="bg-white shadow-xl rounded-lg px-8 pt-6 pb-8 mb-4 ring-2 ring-indigo-600/20">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Category Select */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              >
                <option value="">Select a category</option>
                <option value="Theft">Theft</option>
                <option value="Robbery">Robbery</option>
                <option value="Kidnapping">Kidnapping</option>
                <option value="Assault">Assault</option>
                <option value="Cybercrime">Cybercrime</option>
                <option value="Fraud">Fraud</option>
                <option value="Domestic Violence">Domestic Violence</option>
                <option value="Others">Others</option>
              </select>
            </div>

            {/* Location Input */}
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
              <input
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>

            {/* Description Input */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Submit Report
              </button>
            </div>
          </form>

          {message && (
            <div className="mt-4 text-center text-sm font-semibold text-gray-700">
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
    <RecentReports/>
    </>
  );
};

export default CrimeReportForm;
