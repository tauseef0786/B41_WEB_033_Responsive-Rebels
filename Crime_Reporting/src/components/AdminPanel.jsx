import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";

const AdminPanel = () => {
  const [crimeReports, setCrimeReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("date");

  // Fetch reports from Firebase
  const fetchReports = async () => {
    try {
      const response = await fetch(
        "https://project-2d5f7-default-rtdb.firebaseio.com/crimereport.json"
      );
      const data = await response.json();
      const formattedData = Object.keys(data).map((key) => ({
        firebaseId: key, // Firebase unique key
        ...data[key],
      }));
      setCrimeReports(formattedData);
    } catch (error) {
      console.error("Error fetching reports:", error);
    } finally {
      setLoading(false);
    }
  };

  // Delete report
  const deleteReport = async (firebaseId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this report?");
    if (confirmDelete) {
      try {
        await fetch(
          `https://project-2d5f7-default-rtdb.firebaseio.com/crimereport/${firebaseId}.json`,
          {
            method: "DELETE",
          }
        );
        setCrimeReports(crimeReports.filter((report) => report.firebaseId !== firebaseId));
      } catch (error) {
        console.error("Error deleting report:", error);
      }
    }
  };

  // Update Status
  const updateStatus = async (firebaseId, newStatus) => {
    try {
      await fetch(
        `https://project-2d5f7-default-rtdb.firebaseio.com/crimereport/${firebaseId}.json`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: newStatus }),
        }
      );
      setCrimeReports((prevReports) =>
        prevReports.map((report) =>
          report.firebaseId === firebaseId ? { ...report, status: newStatus } : report
        )
      );
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);

  // Filter and Sort Reports
  const filteredReports = crimeReports.filter((report) =>
    report.caseNumber.toLowerCase().includes(searchQuery.toLowerCase())
  );

  filteredReports.sort((a, b) => {
    if (sortOption === "date") {
      return new Date(b.date) - new Date(a.date);
    }
    if (sortOption === "status") {
      return a.status.localeCompare(b.status);
    }
    return 0;
  });

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>

      {/* Search and Sort */}
      <div className="flex items-center mb-6 space-x-4">
        <input
          type="text"
          placeholder="Search by Case Number"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg"
        />
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg"
        >
          <option value="date">Sort by Date</option>
          <option value="status">Sort by Status</option>
        </select>
      </div>

      {/* Reports */}
      {loading ? (
        <p>Loading reports...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReports.map((report) => (
            <div
              key={report.firebaseId}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col"
            >
              {/* Header */}
              <h2 className="text-lg font-bold mb-2">{report.caseNumber}</h2>
              <p className="text-sm text-gray-600 mb-4">
                ID: {report.id} | Date: {new Date(report.date).toLocaleDateString()}
              </p>

              {/* Body */}
              <p className="text-gray-700">
                <strong>Category:</strong> {report.category}
              </p>
              <p className="text-gray-700">
                <strong>Description:</strong> {report.description}
              </p>
              <p className="text-gray-700">
                <strong>Location:</strong> {report.location}
              </p>
              <p className="text-gray-700">
                <strong>Status:</strong>
              </p>
              <select
                value={report.status}
                onChange={(e) => updateStatus(report.firebaseId, e.target.value)}
                className="p-2 border border-gray-300 rounded-lg w-full mb-4"
              >
                <option value="Pending">Pending</option>
                <option value="Processing">Processing</option>
                <option value="Resolved">Resolved</option>
              </select>

              {/* Actions */}
              <div className="flex justify-between mt-auto">
                <Link to={`/edit-report/${report.firebaseId}`} className="text-blue-600">
                  <FaEdit size={20} />
                </Link>
                <button
                  onClick={() => deleteReport(report.firebaseId)}
                  className="text-red-600"
                >
                  <FaTrash size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
