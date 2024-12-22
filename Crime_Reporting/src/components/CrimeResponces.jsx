import React, { useEffect, useState } from "react";
import Banner from './Banner';
import { FaArrowDown } from 'react-icons/fa';  
import { useTheme } from "./ThemeContext"; 

const CrimeReports = () => {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [complaintsPerPage] = useState(10);

  // Fetch data from API
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://project-2d5f7-default-rtdb.firebaseio.com/crimereport.json"
      );
      const data = await response.json();
      const complaintsArray = Object.keys(data).map((key) => ({
        ...data[key],
        id: key,
      }));

      complaintsArray.sort((a, b) => {
        const dateA = new Date(a.date); 
        const dateB = new Date(b.date);
        return dateB - dateA; 
      });

      setComplaints(complaintsArray);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const { theme } = useTheme(); 

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="w-16 h-16 border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  const indexOfLastComplaint = currentPage * complaintsPerPage;
  const indexOfFirstComplaint = indexOfLastComplaint - complaintsPerPage;
  const currentComplaints = complaints.slice(indexOfFirstComplaint, indexOfLastComplaint);

  const handleSeeMore = () => {
    if (indexOfLastComplaint < complaints.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const totalComplaints = complaints.length;

  return (
    <>
      <Banner />
      <section className={`p-6 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
          <div className={`p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 ${theme === 'dark' ? 'bg-blue-700' : 'bg-blue-500'} text-white hover:${theme === 'dark' ? 'bg-blue-600' : 'bg-blue-400'}`}>
            <h3 className="text-3xl font-bold">{complaints.filter(complaint => complaint.status === 'Pending').length}</h3>
            <p className="text-lg">Pending Complaints</p>
          </div>
          <div className={`p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 ${theme === 'dark' ? 'bg-teal-700' : 'bg-teal-500'} text-white hover:${theme === 'dark' ? 'bg-teal-600' : 'bg-teal-400'}`}>
            <h3 className="text-3xl font-bold">{totalComplaints}</h3>
            <p className="text-lg">Total Complaints</p>
          </div>
          <div className={`p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 ${theme === 'dark' ? 'bg-green-700' : 'bg-green-500'} text-white hover:${theme === 'dark' ? 'bg-green-600' : 'bg-green-400'}`}>
            <h3 className="text-3xl font-bold">{complaints.filter(complaint => complaint.status === 'Resolved').length}</h3>
            <p className="text-lg">Resolved Complaints</p>
          </div>
        </div>

        <div className="flex justify-between items-center mb-4 flex-wrap">
          <button className={`px-6 py-2 rounded-lg transition duration-300 hover:bg-gray-400 ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-300 text-black'} hover:${theme === 'dark' ? 'bg-gray-600' : 'bg-gray-400'}`}>Complaints</button>
          <button className={`px-6 py-2 rounded-lg transition duration-300 hover:bg-gray-400 ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-300 text-black'} hover:${theme === 'dark' ? 'bg-gray-600' : 'bg-gray-400'}`}>People Responses</button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="overflow-x-auto">
            <table className={`table-auto w-full text-left border-collapse ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              <thead>
                <tr>
                  <th className={`border px-4 py-2 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>Complaint</th>
                  <th className={`border px-4 py-2 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>Location</th>
                  <th className={`border px-4 py-2 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>Status</th>
                  <th className={`border px-4 py-2 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>Action</th>
                </tr>
              </thead>
              <tbody>
  {currentComplaints.map((complaint, i) => (
    <tr 
      key={i} 
      className={`hover:bg-gray-100 transition duration-300 ${theme === 'dark' ? 'hover:bg-gray-600' : 'hover:bg-gray-50'}`}
    >
      <td className="border px-4 py-2">{complaint.description}</td>
      <td className="border px-4 py-2">{complaint.location}</td>
      <td className="border px-4 py-2">{complaint.status}</td>
      <td className="border px-4 py-2">
        <button className={`px-4 py-2 rounded transition duration-300 hover:bg-teal-700 ${theme === 'dark' ? 'bg-teal-600 text-white' : 'bg-teal-600 text-white'} hover:${theme === 'dark' ? 'bg-teal-500' : 'bg-teal-400'}`}>
          View Details
        </button>
      </td>
    </tr>
  ))}
</tbody>
            </table>
          </div>

          <div className={`h-[400px] sm:h-[500px] rounded-lg shadow-md ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
            <h3 className={`text-xl font-bold mb-4 p-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Location: Delhi</h3>
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2859.710348024914!2d77.22951061627769!3d28.613939220857524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03f4be61f3fb%3A0x87ecb2d8a8fefb32!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1670515674943!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Delhi Location"
            ></iframe>
          </div>
        </div>

        <div className="flex justify-center items-center mt-6">
          {indexOfLastComplaint < complaints.length && (
            <button
              onClick={handleSeeMore}
              className={`flex items-center px-6 py-2 ${theme === 'dark' ? 'bg-blue-700' : 'bg-blue-500'} text-white rounded-lg transition duration-300 hover:bg-blue-600`}
            >
              See More <FaArrowDown className="ml-2" />
            </button>
          )}
        </div>
      </section>
    </>
  );
};

export default CrimeReports;
