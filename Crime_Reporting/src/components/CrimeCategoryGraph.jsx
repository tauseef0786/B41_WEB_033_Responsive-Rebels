import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CrimeCategoryGraph = () => {
  const [crimeData, setCrimeData] = useState([]);
  const [year, setYear] = useState(2024); // Default to 2024
  const [graphData, setGraphData] = useState({ labels: [], datasets: [] });

  // Fetch crime data from Firebase
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://project-2d5f7-default-rtdb.firebaseio.com/crimereport.json');
        const data = await response.json();
        const filteredData = Object.values(data).filter(item => item.year === year);
        setCrimeData(filteredData);
      } catch (error) {
        console.error("Error fetching crime data:", error);
      }
    };

    fetchData();
  }, [year]);

  const generateGraphData = () => {
    const categories = [...new Set(crimeData.map(item => item.category))]; 
    const statusCount = categories.map(category => {
      const statusMap = { Pending: 0, Processing: 0, Resolved: 0 }; 
      crimeData.forEach(item => {
        if (item.category === category) {
          statusMap[item.status] = (statusMap[item.status] || 0) + 1;
        }
      });
      return { category, statusMap };
    });

    const labels = categories;
    const pendingData = statusCount.map(item => item.statusMap.Pending);
    const processingData = statusCount.map(item => item.statusMap.Processing);
    const resolvedData = statusCount.map(item => item.statusMap.Resolved);

    setGraphData({
      labels,
      datasets: [
        {
          label: "Pending",
          data: pendingData,
          borderColor: "rgba(255, 99, 132, 1)",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          fill: true,
        },
        {
          label: "Processing",
          data: processingData,
          borderColor: "rgba(54, 162, 235, 1)",
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          fill: true,
        },
        {
          label: "Resolved",
          data: resolvedData,
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          fill: true,
        },
      ],
    });
  };

  useEffect(() => {
    if (crimeData.length > 0) {
      generateGraphData();
    }
  }, [crimeData, year]);

  // Handle year change
  const handleYearChange = (event) => {
    setYear(Number(event.target.value));
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Crime Data by Category ({year})</h2>
        <div>
          <label htmlFor="year-select" className="mr-4">Select Year:</label>
          <select
            id="year-select"
            value={year}
            onChange={handleYearChange}
            className="border px-4 py-2 rounded-lg"
          >
            <option value={2024}>2024</option>
            <option value={2023}>2023</option>
            <option value={2022}>2022</option>
            <option value={2021}>2021</option>
            <option value={2020}>2020</option>
            {/* Add more years as needed */}
          </select>
        </div>
      </div>
      <div className="w-full max-w-3xl mx-auto">
        <Line data={graphData} />
      </div>
    </div>
  );
};

export default CrimeCategoryGraph;
