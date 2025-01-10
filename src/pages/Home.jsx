import React, { useState } from 'react';

const Home = () => {
  const [assignmentData, setAssignmentData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Backend URL for dynamic use
  const backendUrl =
    process.env.REACT_APP_BACKEND_URL || 'http://3.7.65.206:3003';

  const fetchAssignment = async (role) => {
    setLoading(true);
    setError(null);
    setAssignmentData(null);
    try {
      const response = await fetch(`${backendUrl}/assignment/${role}`);
      if (!response.ok) {
        throw new Error('Failed to fetch assignment for this role');
      }
      const data = await response.json();
      setAssignmentData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = () => {
    // Redirect to Google Form
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSc2vVXt-gjYcTYOa507mZeH7bWRzA1GDvqtB_nMy1cwFEvYhA/viewform?usp=dialog', '_blank');
  };

  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 min-h-screen flex flex-col items-center py-8 px-4">
      {/* Title */}
      <h1 className="text-4xl font-bold text-white mb-8">
        Assignment Portal by Viral Fission
      </h1>

      {/* Content Wrapper */}
      <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Section: Role Buttons */}
        <div className="flex flex-col w-full md:w-1/3 bg-blue-100 p-6">
          <h2 className="text-2xl font-semibold mb-4">Select Your Role</h2>
          <button
            onClick={() => fetchAssignment('frontend')}
            className="bg-blue-600 text-white font-semibold py-2 px-4 mb-4 rounded-lg hover:bg-blue-700"
          >
            Frontend Developer
          </button>
          <button
            onClick={() => fetchAssignment('backend')}
            className="bg-blue-600 text-white font-semibold py-2 px-4 mb-4 rounded-lg hover:bg-blue-700"
          >
            Backend Developer
          </button>
          <button
            onClick={() => fetchAssignment('net')}
            className="bg-blue-600 text-white font-semibold py-2 px-4 mb-4 rounded-lg hover:bg-blue-700"
          >
            .NET Developer
          </button>
          <button
            onClick={() => fetchAssignment('cloud')}
            className="bg-blue-600 text-white font-semibold py-2 px-4 mb-4 rounded-lg hover:bg-blue-700"
          >
            Cloud Developer
          </button>
          <button
            onClick={() => fetchAssignment('devops')}
            className="bg-blue-600 text-white font-semibold py-2 px-4 mb-4 rounded-lg hover:bg-blue-700"
          >
            DevOps Engineer
          </button>
          <button
            onClick={() => fetchAssignment('product')}
            className="bg-blue-600 text-white font-semibold py-2 px-4 mb-4 rounded-lg hover:bg-blue-700"
          >
            Product Manager
          </button>
        </div>

        {/* Right Section: Assignment Display */}
        <div className="flex flex-col w-full md:w-2/3 p-6">
          <h2 className="text-2xl font-semibold mb-4">Assignment Details</h2>
          {loading && (
            <div className="text-blue-600 text-xl font-medium animate-pulse">
              Fetching assignment...
            </div>
          )}
          {error && (
            <div className="text-red-500 text-lg font-medium mt-4">
              Error: {error}
            </div>
          )}
          {assignmentData ? (
            <div className="p-4 bg-blue-50 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-600">
                {assignmentData.message}
              </h3>
              <p className="text-gray-700 mt-2">{assignmentData.details}</p>
            </div>
          ) : (
            <p className="text-gray-500">
              Please select a role to view the assignment details.
            </p>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="mt-8 bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700"
      >
        Submit Assignment
      </button>
    </div>
  );
};

export default Home;