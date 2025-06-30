import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const NotFoundPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen pt-20 px-4 text-center bg-[#f5f5f5]">
        <h1 className="font-cormorant text-6xl font-semibold text-[#1C4571] mb-4">404</h1>
        <h2 className="text-2xl font-medium text-gray-800 mb-6">Page Not Found</h2>
        <p className="text-lg text-gray-600 max-w-md mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/" 
          className="px-6 py-3 bg-[#1C4571] text-white font-medium rounded-lg hover:bg-[#153454] transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </>
  );
};

export default NotFoundPage; 