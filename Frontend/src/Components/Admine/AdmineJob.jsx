import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";

function AdmineJob() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    companyName: "",
    requirements: "",
    jobType: "",
    locationType: "",
    address: "",
    city: "",
    state: "",
    country: "",
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
    const token = localStorage.getItem("token");
    const headers = { Authorization: token };
    try {
      const response = await axios.post(
        "http://localhost:8080/job/create",
        formData,
        { headers }
      );
      console.log(response);
      if (response.data.success === true) {
        toast.success(response.data.message);
        navigate("/admine");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-sky-100">
        <div className="w-full md:max-w-md p-8 bg-sky-400 rounded-md">
          <form className="space-y-6" onSubmit={createJob}>
            <h2 className="text-3xl font-bold text-center text-gray-800 mt-5">
              Post New Job
            </h2>

            <div className="mb-4">
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
                className="w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Description"
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="companyName"
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                name="requirements"
                value={formData.requirements}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Requirements"
                required
              />
            </div>

            <div className="mb-4">
              <select
                id="jobType"
                name="jobType"
                value={formData.jobType}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              >
                <option value="" disabled>
                  Select job type
                </option>
                <option value="fullTime">Full Time</option>
                <option value="partTime">Part Time</option>
              </select>
            </div>

            <div className="mb-4">
              <select
                id="locationType"
                name="locationType"
                value={formData.locationType}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              >
                <option value="" disabled>
                  Select location type
                </option>
                <option value="onSite">On Site</option>
                <option value="remote">Remote</option>
                <option value="hybrid">Hybrid</option>
              </select>
            </div>

            <div className="mb-4 md:flex md:items-center">
              <div className="md:w-1/2 md:mr-2">
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Address"
                  required
                />
              </div>
              <div className="md:w-1/2 md:ml-2 mt-4 md:mt-0">
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="City"
                  required
                />
              </div>
            </div>

            <div className="mb-4 md:flex md:items-center">
              <div className="md:w-1/2 md:mr-2">
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="State"
                  required
                />
              </div>
              <div className="md:w-1/2 md:ml-2 mt-4 md:mt-0">
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Country"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 border-2 border-white text-lg font-bold rounded-md text-white bg-sky-600 hover:bg-sky-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-900"
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
