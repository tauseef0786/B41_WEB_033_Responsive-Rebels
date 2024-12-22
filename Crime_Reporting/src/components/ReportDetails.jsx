import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { useTheme } from "./ThemeContext"; 
// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

export const ReportDetails = () => {
  const { id } = useParams(); 
  const [yearlyReports, setYearlyReports] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
  const { theme } = useTheme(); 

  useEffect(() => {
    // Fetching all reports from Firebase
    fetch("https://project-2d5f7-default-rtdb.firebaseio.com/crimereport.json")
      .then((response) => response.json())
      .then((data) => {
        const reportsArray = Object.keys(data).map((key) => ({
          ...data[key],
          id: key,
        }));

        // Filter reports by year (id)
        const filteredReports = reportsArray.filter(
          (report) => new Date(report.date).getFullYear() === parseInt(id)
        );

        setYearlyReports(filteredReports);

        // Group reports by category
        const groupedCategories = filteredReports.reduce((acc, report) => {
          const category = report.category || "Uncategorized";
          if (!acc[category]) {
            acc[category] = [];
          }
          acc[category].push(report);
          return acc;
        }, {});

        setCategoryData(Object.entries(groupedCategories));
      })
      .catch((error) => console.error("Error fetching reports:", error))
      .finally(() => setIsLoading(false)); 
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-teal-500 border-solid"></div>
      </div>
    );
  }

  return (
    <div className={`container mx-auto px-6 py-8 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className={`shadow-xl rounded-lg p-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white'}`}>
        <h1 className={`text-4xl font-bold text-teal-600 text-center mb-8 ${theme === 'dark' ? 'text-white' : ''}`}>
          Crime Report Summary for {id}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {categoryData.map(([category, reports]) => {
            const chartData = {
              labels: ["Resolved", "Processing", "Pending"],
              datasets: [
                {
                  label: `${category} Status`,
                  data: [
                    reports.filter((r) => r.status === "Resolved").length,
                    reports.filter((r) => r.status === "Processing").length,
                    reports.filter((r) => r.status === "Pending").length,
                  ],
                  backgroundColor: ["#34D399", "#FBBF24", "#EF4444"],
                  hoverBackgroundColor: ["#10B981", "#F59E0B", "#DC2626"],
                  borderWidth: 1,
                },
              ],
            };

            return (
              <div
                key={category}
                className={`flex flex-col shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}
              >
                <h2 className={`text-2xl font-semibold text-center mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                  {category} Crimes
                </h2>

                {/* Doughnut Chart for Crime Status */}
                <div className="mb-6">
                  <Doughnut data={chartData} />
                </div>

                {/* List of crime details */}
                <div className="mt-6">
                  <p className={`text-lg font-medium text-teal-500 mb-2 ${theme === 'dark' ? 'text-white' : 'text-teal-600'}`}>
                    Total Crimes: {reports.length}
                  </p>
                  <ul className="space-y-4">
                    {reports.map((report) => (
                      <li
                        key={report.id}
                        className={`border-l-4 border-teal-500 shadow-sm rounded-lg p-4 hover:shadow-md transition-shadow ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white'}`}
                      >
                        <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                          {report.title}
                        </h3>
                        <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                          <span className="font-medium">Location:</span> {report.location}
                        </p>
                        <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                          <span className="font-medium">Date:</span> {new Date(report.date).toLocaleDateString()}
                        </p>
                        <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                          <span className="font-medium">Status:</span> 
                          <span
                            className={`font-semibold ${report.status === "Resolved"
                                ? "text-green-500"
                                : report.status === "Processing"
                                ? "text-yellow-500"
                                : "text-red-500"}`}
                          >
                            {report.status}
                          </span>
                        </p>
                        <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                          {report.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
