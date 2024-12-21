import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AfterReport = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect back to the form after 5 seconds
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000);

    // Cleanup the timer on unmount
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="h-screen flex items-center justify-center bg-green-100">
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-green-700">Thanks for Visiting out WebSite!</h2>
        <p className="text-lg text-gray-600 mt-4">You Login successfully. Redirecting you back to the Home...</p>
      </div>
    </div>
  );
};

export default AfterReport;
