import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for routing

function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-center border-4 border-black rounded-xl p-5">
        <h1 className="text-5xl font-bold text-red-600">Unexpected Application Error! 404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mt-1">Page Not Found</h2>
        <p className="text-lg text-gray-600 mt-4">The page you are looking for does not exist.</p>
        <Link to="/">
          <button className="mt-8 px-6 py-3 text-xl bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Reload
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
