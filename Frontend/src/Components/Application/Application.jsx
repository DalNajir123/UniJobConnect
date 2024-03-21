import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function Application() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const headers = { Authorization: token };
    const fetchApplications = async () => {
      try {
        const response = await axios.get('http://localhost:8080/application/get?page=1&pageSize=10&title=&description=', { headers });
        setApplications(response.data.data);
      } catch (error) {
        console.error('Error fetching applications:', error);
      }
    };

    fetchApplications();
  }, []);

  const handleDelete = async (applicationId) => {
    const token = localStorage.getItem("token");
    const headers = { Authorization: token };
    try {
      const response = await axios.delete(`http://localhost:8080/application/delete/${applicationId}`, { headers });
      toast.success(response.data.message);
      // If deletion is successful, remove the deleted application from the state
      setApplications(applications.filter(application => application.id !== applicationId));
    } catch (error) {
      console.error('Error deleting application:', error);
    }
  };

  return (
    <>
      <div className='w-full min-h-screen bg-purple-300 flex justify-center'>
        <div className="max-w-7xl w-full px-4">
          <h1 className='text-zinc-800 text-3xl font-extrabold text-center my-8'>
            Your Applying Job Application
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {applications.map(application => (
              <div key={application.id} className="bg-white shadow-lg drop-shadow-lg shadow-violet-600 rounded-md overflow-hidden">
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-purple-700 mb-2">{application.Job.title}</h3>
                  <p className="text-gray-600 mb-4">{application.Job.description}</p>
                  <p className="text-gray-700">Company: {application.Job.companyName}</p>
                  <p className="text-gray-700">Job ID: {application.Job.id}</p>
                  <p className="text-gray-700">Status: {application.status}</p>
                  <button onClick={() => handleDelete(application.id)} className="bg-purple-400 text-white py-2 px-4 rounded-md hover:bg-purple-300 focus:outline-none focus:ring focus:border-blue-300">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Application;
