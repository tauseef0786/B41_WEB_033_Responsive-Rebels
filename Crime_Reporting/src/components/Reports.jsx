import React, { useEffect, useState } from "react";
import { BsBookmarkStar } from "react-icons/bs";
import { Link } from "react-router-dom";
import ReportCardLogo from "../assets/ReportCardsLogo.svg";
import { useTheme } from "./ThemeContext";

export const Reports = () => {
  const [crimeReports, setCrimeReports] = useState([]);
  const [crimeCountsByYear, setCrimeCountsByYear] = useState({}); 
  const [isLoading, setIsLoading] = useState(true); 
  const { theme } = useTheme(); 

  useEffect(() => {
    fetch("https://project-2d5f7-default-rtdb.firebaseio.com/crimereport.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const reportsArray = Object.keys(data).map((key) => ({
          ...data[key],
          id: key,
        }));
        setCrimeReports(reportsArray);

        // Group and count crimes by year
        const counts = reportsArray.reduce((acc, report) => {
          const year = new Date(report.date).getFullYear();
          acc[year] = (acc[year] || 0) + 1;
          return acc;
        }, {});
        setCrimeCountsByYear(counts);
      })
      .catch((error) => {
        console.error("Error fetching crime reports:", error);
      })
      .finally(() => {
        setIsLoading(false); // Set loading to false when done
      });
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 border-teal-500 border-t-transparent rounded-full" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`space-y-6 p-6 sm:p-10 md:p-20 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {Object.keys(crimeCountsByYear).sort((a, b) => b - a).map((year) => (
        <div
          key={year}
          className={`rounded-lg shadow-md px-16 py-6 border flex justify-between items-center ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
        >
          <div className="flex items-start space-x-4">
            <div className="flex-col">
              <span className={`text-sm font-medium px-3 py-1 rounded-md ${theme === 'dark' ? 'bg-teal-600 text-teal-100' : 'bg-teal-100 text-teal-600'}`}>
                Year: {year}
              </span>

              <div className="flex items-start py-4">
                <img
                  src={ReportCardLogo}
                  alt="Crime Reports Icon"
                  className="w-12 h-12"
                />
                <div className="px-4">
                  <p className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Total Crimes in {year}
                  </p>
                  <p className={`text-lg font-semibold ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    Crimes: {crimeCountsByYear[year]}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end space-y-2">
            <button className={`p-2 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
              <BsBookmarkStar />
            </button>

            <Link
              to={`/report-details/${year}`}
              className={`px-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-teal-600 text-white hover:bg-teal-500' : 'bg-teal-600 text-white hover:bg-teal-500'}`}
            >
              See More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
