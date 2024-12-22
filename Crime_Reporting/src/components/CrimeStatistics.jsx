import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { useTheme } from './ThemeContext'; 

export const CrimeStatistics = () => {
  const { theme } = useTheme(); 
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
    <div className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'} min-h-screen p-6 sm:p-16`}>
      <div className="text-center mb-12">
        <h1 className={`${theme === 'dark' ? 'text-teal-400' : 'text-teal-600'} text-5xl font-extrabold`}>Crime Statistics</h1>
        <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-lg mt-4`}>Dynamic insights into reported crimes with real-time updates.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow hover:shadow-lg transition`}>
          <div className="flex items-center">
            <div className={`w-12 h-12 rounded-full ${theme === 'dark' ? 'bg-teal-700' : 'bg-teal-100'} flex items-center justify-center`}>
              <svg
                className={`${theme === 'dark' ? 'text-teal-400' : 'text-teal-600'} w-6 h-6`}
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
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'} text-sm`}>Total Visits</p>
              <p className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} text-2xl font-bold`}>{totalVisits}</p>
            </div>
          </div>
        </div>

        <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow hover:shadow-lg transition`}>
          <div className="flex items-center">
            <div className={`w-12 h-12 rounded-full ${theme === 'dark' ? 'bg-red-700' : 'bg-red-100'} flex items-center justify-center`}>
              <svg
                className={`${theme === 'dark' ? 'text-red-400' : 'text-red-600'} w-6 h-6`}
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
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'} text-sm`}>Crimes</p>
              <p className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} text-2xl font-bold`}>{crimes}</p>
            </div>
          </div>
        </div>

        {/* Active Percentage */}
        <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow hover:shadow-lg transition`}>
          <div className="flex items-center">
            <div className={`w-12 h-12 rounded-full ${theme === 'dark' ? 'bg-yellow-700' : 'bg-yellow-100'} flex items-center justify-center`}>
              <svg
                className={`${theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'} w-6 h-6`}
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
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'} text-sm`}>Active Percentage</p>
              <p className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} text-2xl font-bold`}>{activePercentage}%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Trend Chart */}
      <div className={`${theme === 'dark' ? 'from-teal-700 to-green-700' : 'from-teal-500 to-green-400'} bg-gradient-to-r rounded-xl p-8 mt-12 shadow-lg`}>
        <h2 className="text-white text-2xl font-bold mb-4">Crime Trends Over the Years</h2>
        <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg p-4 shadow`}>
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
