import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'

function AdmineJob() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    requirements: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const createJob = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/job/create",
        formData
      );
      console.log(response);
      if (response.data.success == true) {
        toast.success(response.data.message);
        navigate('/admine')
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen bg-fuchsia-200">
        <div className="max-w-md w-full relative space-y-8 p-8 bg-fuchsia-400  rounded-md">
          <form
            className=" mt-5 space-y-6 rounded shadow-md w-96"
            onSubmit={createJob}
          >
            <h2 className="text-3xl font-bold text-center text-gray-800 mt-5">
              Post New Job
            </h2>

            <div className="mb-4">
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Job Title"
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Description"
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Location"
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                name="requirements"
                value={formData.requirements}
                onChange={handleChange}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Requirements"
                required
              />
            </div>

            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-bold rounded-md text-white bg-fuchsia-600 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-900"
            >
              Create Job
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AdmineJob;
