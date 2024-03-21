import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';

function User() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token"); // Fetch token from localStorage
    const headers = { Authorization: token }; // Set authorization headers with the token
    const fetchApplications = async () => {
      try {
        const response = await axios.get('http://localhost:8080/application/get?page=1&pageSize=10&title=&description=', { headers });
        console.log(response.data); // Logging the response data for debugging
        setApplications(response.data.data); // Set the fetched applications to the state
      } catch (error) {
        console.error('Error fetching applications:', error);
      }
    };

    fetchApplications(); // Call the fetchApplications function when component mounts
  }, []); // The empty dependency array ensures the effect runs only once after the initial render

  return (
    <>
      <Navbar />
      <div className='w-full h-[60vh] bg-purple-300 flex items-center justify-center'>
        <h1 className='text-zinc-800 text-3xl font-extrabold'>
          Handle All User Job Applications Here
        </h1>
      </div>
      <div>
        <h2>Applications:</h2>
        <ul>
          {applications.map(application => (
            <li key={application.id}>
              <p>Job ID: {application.jobId}</p>
              <p>User ID: {application.userId}</p>
              {/* Add more application details as needed */}
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default User;
