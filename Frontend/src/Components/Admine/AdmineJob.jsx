import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Scroll from '../../Scroll'

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
      <h2 className="sticky top-20 z-50 mx-10 my-8 p-3 text-3xl text-center font-bold text-sky-400 border-2 border-sky-400 bg-neutral-100 shadow-md shadow-sky-500 rounded-lg transition-transform duration-1000 ease-in-out">
       ---------- Create New Job ----------
      </h2>

      <div className="flex justify-center items-center min-h-screen ">
        <div className="w-full md:max-w-md p-8 bg-sky-300 border-4 border-black rounded-lg">
          <form className="space-y-6" onSubmit={createJob}>
            <h2 className="text-3xl bg-white rounded-md p-2 font-bold text-center text-sky-500 mt-3 border-2 border-black">
              Fill Job Information
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
              className="w-full py-2 px-4 border-2 border-white text-2xl font-bold rounded-md text-white bg-gradient-to-r from-zinc-500 to-sky-500 hover:from-sky-500 hover:to-zinc-600 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-900 transition-transform duration-700 ease-in-out transform"
            >
              Create Job
            </button>
          </form>
        </div>
      </div>
      <Scroll/>
      <Footer />
    </>
  );
}

export default AdmineJob;
