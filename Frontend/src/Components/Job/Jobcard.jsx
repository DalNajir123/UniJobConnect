import React, { useState, useEffect } from "react";
import axios from "axios";
import {toast} from "react-toastify";
import { useNavigate } from "react-router-dom";
 
function JobCard() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedJobType, setSelectedJobType] = useState("all");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8080/job/get")
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  const applyJob = async (jobId) => {
    const token = localStorage.getItem("token");
    const headers = { Authorization: token };
    try {
      const response = await axios.post(`http://localhost:8080/application/create/${jobId}`, {}, { headers });
      console.log(response);
      navigate('/application')
      toast.success(response.data.message);

    } catch (error) {
      toast.error(error.response.data.message)
    }
  };
  

  const filteredData = data.filter((job) => {
    const titleMatch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
    const jobTypeMatch = selectedJobType === "all" || job.jobType === selectedJobType;
    return titleMatch && jobTypeMatch;
  });

  const jobTypes = ["all", "fullTime","partTime"];
  return (
    <section className="py-16 bg-purple-200">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
          Explore Exciting Opportunities to Shape Your Career
        </h2>
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Find Your Dream Jobs</h2>
          <p className="text-lg mb-8">
            Browse through thousands of job listings and discover opportunities
            that match your skills.
          </p>
        </div>
        {/* Search Bar and Job Type Filter */}
        <div className="mb-6 flex justify-center space-x-4">
          <input
            type="text"
            placeholder="Search for a job..."
            className="px-4 py-2 text-black border border-purple-400 rounded-md w-full sm:w-3/4 lg:w-1/2 xl:w-1/3 focus:outline-none focus:ring focus:border-purple-700"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            value={selectedJobType}
            onChange={(e) => setSelectedJobType(e.target.value)}
            className="px-4 py-2 text-black border border-purple-400 rounded-md focus:outline-none focus:ring focus:border-purple-700"
          >
            {jobTypes.map((type) => (
              <option key={type} value={type}>
                {type === "all" ? "All Job Types" : type}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredData.map((job, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg shadow-slate-600 hover:bg-purple-300 transition transform hover:scale-105"
            >
              <h3 className="text-xl text-black font-semibold mb-4">
                {job.title}
              </h3>
              <p className="text-gray-700 mb-6">{job.description}</p>
              <p className="text-gray-700 mb-2">Company: {job.companyName}</p>
              <p className="text-gray-700 mb-2">Requirements: {job.requirements}</p>
              <p className="text-gray-700 mb-2">Job Type: {job.jobType}</p>
              <p className="text-gray-700 mb-2">Location Type: {job.locationType}</p>
              <p className="text-gray-700 mb-2">Address: {job.address}</p>
              <p className="text-gray-700 mb-2">City: {job.city}</p>
              <p className="text-gray-700 mb-2">State: {job.state}</p>
              <p className="text-gray-700 mb-2">Country: {job.country}</p>
              <button onClick={() => applyJob(job.id)} className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-400 focus:outline-none focus:ring focus:border-blue-300">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default JobCard;
