
// import React, { useState, useEffect } from 'react';
// import { Line } from 'react-chartjs-2';
// import Chart from 'chart.js/auto';

// export const CrimeStatistics = () => {
//   const [totalVisits, setTotalVisits] = useState(250);
//   const [crimes, setCrimes] = useState(100);
//   const [activePercentage, setActivePercentage] = useState(70);
//   const [chartData, setChartData] = useState({
//     labels: ['2019', '2020', '2021', '2022', '2023'],
//     datasets: [
//       {
//         label: 'Reported Crimes',
//         data: [30, 50, 40, 60, 80], // Sample data for different years
//         borderColor: '#008080',
//         fill: true,
//         tension: 0.4, // Wave-like effect
//       },
//     ],
//   });

//   useEffect(() => {
//     const fetchCrimeData = async () => {
//       try {
//         const response = await fetch('https://project-2d5f7-default-rtdb.firebaseio.com/crimereport.json');
//         const data = await response.json();

//         // Grouping crimes by year
//         const yearlyData = {};

//         // Iterate through each report and categorize by year
//         Object.values(data).forEach((item) => {
//           const year = new Date(item.date).getFullYear();
//           if (!yearlyData[year]) {
//             yearlyData[year] = 0;
//           }
//           yearlyData[year]++;
//         });

//         // Convert yearlyData into chart data format
//         const labels = Object.keys(yearlyData); // List of years
//         const crimeCounts = labels.map((year) => yearlyData[year]); // Crime counts for each year

//         setChartData({
//           labels,
//           datasets: [
//             {
//               label: 'Reported Crimes',
//               data: crimeCounts,
//               borderColor: '#008080',
//               fill: true,
//               tension: 0.4, // For wave effect
//             },
//           ],
//         });
//       } catch (error) {
//         console.error('Error fetching crime data:', error);
//       }
//     };

//     fetchCrimeData();

//     const interval = setInterval(() => {
//       setTotalVisits((prevVisits) => prevVisits + Math.floor(Math.random() * 10));
//       setCrimes((prevCrimes) => prevCrimes + Math.floor(Math.random() * 5));
//       setActivePercentage(
//         (prevPercentage) => prevPercentage + Math.floor(Math.random() * 2) - 1
//       );
//     }, 2000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="bg-teal-50 min-h-screen p-4 sm:p-16">
//       <div className="text-center mb-8">
//         <h1 className="text-4xl font-bold">Crime Statistics</h1>
//         <p>Our portal delivers dynamic crime statistics, offering insights into registered complaints.</p>
//       </div>

//       {/* Grid Layout for Stats Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//         <div className="border p-4 rounded-lg shadow-md">
//           <h2 className="text-lg font-semibold mb-2">Total Visits</h2>
//           <p className="text-3xl font-bold">{totalVisits}</p>
//         </div>

//         <div className="border p-4 rounded-lg shadow-md">
//           <h2 className="text-lg font-semibold mb-2">Crimes</h2>
//           <div className="flex items-center">
//             <svg
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="mr-2"
//             >
//               <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
//               <path d="M22 4L12 14.01l-3-3"></path>
//             </svg>
//             <p className="text-3xl font-bold">{crimes}</p>
//           </div>
//         </div>

//         <div className="border p-4 rounded-lg shadow-md mt-4 sm:mt-0">
//           <h2 className="text-lg font-semibold mb-2">Active Percentage</h2>
//           <div className="flex items-center">
//             <p className="text-3xl font-bold">{activePercentage}%</p>
//             <div className="w-4 h-4 bg-green-500 rounded-full ml-2"></div>
//             <div className="w-4 h-4 bg-red-500 rounded-full ml-2"></div>
//           </div>
//           <div className="flex mt-2">
//             <div className="w-1/2">
//               <p className="text-sm">Online</p>
//               <p className="text-sm font-semibold">8 users</p>
//             </div>
//             <div className="w-1/2">
//               <p className="text-sm">Offline</p>
//               <p className="text-sm font-semibold">4 users</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Crime Trends Chart */}
//       <div className="mt-4 p-4 sm:p-16 rounded-lg shadow-md">
//         <h2 className="text-lg font-semibold mb-2">Crime Trends</h2>
//         <div className="relative">
//           <Line
//             data={chartData}
//             options={{
//               responsive: true,
//               maintainAspectRatio: false, // Ensures the chart scales properly
//             }}
//             height={300} // Ensure the height adjusts on small screens
//           />
//         </div>
//       </div>
//     </div>
//   );
// };
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

export const CrimeStatistics = () => {
  const [totalVisits, setTotalVisits] = useState(250);
  const [crimes, setCrimes] = useState(100);
  const [activePercentage, setActivePercentage] = useState(70);
  const [chartData, setChartData] = useState({
    labels: ['2019', '2020', '2021', '2022', '2023'],
    datasets: [
      {
        label: 'Reported Crimes',
        data: [30, 50, 40, 60, 80],
        borderColor: '#4ade80',
        backgroundColor: 'rgba(74, 222, 128, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  });

  useEffect(() => {
    const fetchCrimeData = async () => {
      try {
        const response = await fetch('https://project-2d5f7-default-rtdb.firebaseio.com/crimereport.json');
        const data = await response.json();

        const yearlyData = {};
        Object.values(data).forEach((item) => {
          const year = new Date(item.date).getFullYear();
          if (!yearlyData[year]) {
            yearlyData[year] = 0;
          }
          yearlyData[year]++;
        });

        const labels = Object.keys(yearlyData);
        const crimeCounts = labels.map((year) => yearlyData[year]);

        setChartData({
          labels,
          datasets: [
            {
              label: 'Reported Crimes',
              data: crimeCounts,
              borderColor: '#4ade80',
              backgroundColor: 'rgba(74, 222, 128, 0.2)',
              fill: true,
              tension: 0.4,
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching crime data:', error);
      }
    };

    fetchCrimeData();

    const interval = setInterval(() => {
      setTotalVisits((prev) => prev + Math.floor(Math.random() * 10));
      setCrimes((prev) => prev + Math.floor(Math.random() * 5));
      setActivePercentage((prev) => prev + Math.floor(Math.random() * 2) - 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-6 sm:p-16">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-teal-600">Crime Statistics</h1>
        <p className="text-lg mt-4 text-gray-600">Dynamic insights into reported crimes with real-time updates.</p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Total Visits */}
        <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-teal-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10h11M9 21V3m0 6l-6 6m6-6l6 6"
                />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Total Visits</p>
              <p className="text-2xl font-bold">{totalVisits}</p>
            </div>
          </div>
        </div>

        {/* Total Crimes */}
        <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-red-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10h11M9 21V3m0 6l-6 6m6-6l6 6"
                />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Crimes</p>
              <p className="text-2xl font-bold">{crimes}</p>
            </div>
          </div>
        </div>

        {/* Active Percentage */}
        <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-yellow-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10h11M9 21V3m0 6l-6 6m6-6l6 6"
                />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Active Percentage</p>
              <p className="text-2xl font-bold">{activePercentage}%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Trend Chart */}
      <div className="bg-gradient-to-r from-teal-500 to-green-400 rounded-xl p-8 mt-12 shadow-lg">
        <h2 className="text-white text-2xl font-bold mb-4">Crime Trends Over the Years</h2>
        <div className="bg-white rounded-lg p-4 shadow">
          <Line
            data={chartData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
            }}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};
