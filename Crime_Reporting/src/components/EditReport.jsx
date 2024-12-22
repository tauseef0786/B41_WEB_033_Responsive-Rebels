import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditReport = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const crimeCategories = [
    "Homicide",
    "Public Disorder",
    "Theft",
    "Fraud",
    "Assault",
    "Robbery",
    "Vandalism",
    "Other",
  ];

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    date: "",
    location: "",
    status: "Pending",
    customCategory: "",
  });

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const response = await fetch(
          `https://project-2d5f7-default-rtdb.firebaseio.com/crimereport/${id}.json`
        );
        const data = await response.json();
        setFormData(data);
      } catch (error) {
        console.error("Error fetching report:", error);
      }
    };

    fetchReport();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "title" && value === "Other") {
      setFormData({ ...formData, [name]: value, customCategory: "" });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedData = {
      ...formData,
      title: formData.title === "Other" ? formData.customCategory : formData.title,
    };

    try {
      await fetch(
        `https://project-2d5f7-default-rtdb.firebaseio.com/crimereport/${id}.json`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedData),
        }
      );
      alert("Report updated successfully!");
      navigate("/admin");
    } catch (error) {
      console.error("Error updating report:", error);
    }
  };
  return (
    <div
    className="min-h-screen bg-cover bg-center flex items-center justify-center p-4"
    style={{
      backgroundImage: `url('https://c8.alamy.com/comp/TRXKFJ/crime-scene-do-not-cross-tape-with-bloody-wall-and-shadow-of-handgun-shooting-background-horror-theme-TRXKFJ.jpg')`,
    }}
  >
    <div
      className="w-full max-w-3xl bg-gray-900 bg-opacity-80 shadow-lg rounded-lg p-8"
      style={{
        backgroundImage: `url('https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/blood-on-grunge-wall-crime-background_MyijAwcu_thumb.jpg')`,
      }}
    >
      <h1 className="text-3xl font-bold text-red-600 mb-6 text-center drop-shadow-lg">
        Edit Crime Report
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Crime Category */}
        <div>
          <label className="block text-gray-200 font-medium mb-2">
            Crime Category
          </label>
          <select
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={`w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-200 focus:ring focus:ring-red-400`}
          >
            {crimeCategories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
  
        {/* Custom Category */}
        {formData.title === "Other" && (
          <div>
            <label className="block text-gray-200 font-medium mb-2">
              Custom Category
            </label>
            <input
              type="text"
              name="customCategory"
              value={formData.customCategory}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-200 focus:ring focus:ring-red-400"
              placeholder="Enter custom crime category"
              required
            />
          </div>
        )}
  
        {/* Category */}
        <div>
          <label className="block text-gray-200 font-medium mb-2">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-200 focus:ring focus:ring-red-400"
          />
        </div>
  
        {/* Description */}
        <div>
          <label className="block text-gray-200 font-medium mb-2">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-200 focus:ring focus:ring-red-400"
          />
        </div>
  
        {/* Date */}
        <div>
          <label className="block text-gray-200 font-medium mb-2">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-200 focus:ring focus:ring-red-400"
          />
        </div>
  
        {/* Location */}
        <div>
          <label className="block text-gray-200 font-medium mb-2">
            Location
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-200 focus:ring focus:ring-red-400"
          />
        </div>
  
        {/* Status */}
        <div>
          <label className="block text-gray-200 font-medium mb-2">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-200 focus:ring focus:ring-red-400"
          >
            <option value="Pending">Pending</option>
            <option value="Processing">Processing</option>
            <option value="Resolved">Resolved</option>
          </select>
        </div>
  
        {/* Submit Button */}
        <div className="text-right">
          <button
            type="submit"
            className="bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-2 rounded-lg shadow-lg hover:from-red-500 hover:to-red-600 focus:ring focus:ring-red-300 transition"
          >
            Update Report
          </button>
        </div>
      </form>
    </div>
  </div>
  
  );
};

export default EditReport;
