import React, { useEffect, useState } from 'react';

const Category = () => {
  const [reportCounts, setReportCounts] = useState({});
  const categories = [
    "Theft",
    "Robbery",
    "Kidnapping",
    "Assault",
    "Cybercrime",
    "Fraud",
    "Domestic Violence",
    "Others"
  ];

  useEffect(() => {
    // Fetch the data from the Firebase API
    const fetchReportCounts = async () => {
      try {
        const response = await fetch('https://project-2d5f7-default-rtdb.firebaseio.com/crimereport.json');
        const data = await response.json();

        // Initialize an object to store the count of reports per category
        const counts = categories.reduce((acc, category) => {
          acc[category] = 0; // Start with 0 count for each category
          return acc;
        }, {});

        // Count the reports by category
        for (let id in data) {
          const report = data[id];
          const category = report.category;

          if (counts.hasOwnProperty(category)) {
            counts[category] += 1; // Increment the count for this category
          }
        }

        // Update the state with the counts
        setReportCounts(counts);
      } catch (error) {
        console.error('Error fetching crime reports:', error);
      }
    };

    fetchReportCounts();
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className="min-h-screen bg-[#3096894D] flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-gray-900 mb-10">Browse by Crime Category</h2>

      {/* Grid of Category Boxes */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 w-full max-w-6xl">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-8 bg-white shadow-2xl rounded-lg hover:bg-indigo-50 transition duration-300"
          >
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{category}</h3>
              <p className="text-3xl font-bold text-indigo-600">
                {reportCounts[category] || 0} Reports
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
