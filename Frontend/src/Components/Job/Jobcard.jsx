import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate
import { ImLocation2 } from "react-icons/im";
import Scroll from "../../Scroll";

function JobCard() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedJobType, setSelectedJobType] = useState("all");
  const navigate = useNavigate(); // Use useNavigate hook
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("http://localhost:8080/job/get")
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  const applyJob = async (jobId) => {
    const headers = { Authorization: token };
    try {
      const response = await axios.post(
        `http://localhost:8080/application/create/${jobId}`,
        {},
        { headers }
      );
      console.log(response);
      navigate("/application");
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const filteredData = data.filter((job) => {
    const titleMatch = job.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const jobTypeMatch =
      selectedJobType === "all" || job.jobType === selectedJobType;
    return titleMatch && jobTypeMatch;
  });

  const jobTypes = ["all", "fullTime", "partTime"];
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

        {/* Display job cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredData.map((job, index) => (
            <div
              key={index}
              className="bg-neutral-100 p-2 border-4 border-black rounded-lg shadow-lg shadow-slate-700 hover:text-white hover:scale-105 transition transform duration-500"
            >
              <h3 className="text-xl p-1 rounded-lg bg-purple-300 font-extrabold mb-2">
                {job.title}
              </h3>
              <div className="bg-purple-200 rounded-lg p-1 mb-2 border-2 border-black">
                <p className="font-semibold text-black mb-2">
                  {job.description}
                </p>
                <p className="text-gray-700 mb-1">
                  <span className="text-black font-medium">Company:</span>{" "}
                  {job.companyName}
                </p>
                <p className="text-gray-700 mb-1">
                  <span className="text-black font-medium">Requirements: </span>
                  {job.requirements}
                </p>
                <p className="font-semibold text-black text-lg">
                  <ImLocation2 className="inline text-sky-400" />
                  {job.country}
                </p>
              </div>
              <div className="flex justify-between">
                <button
                  onClick={
                    token ? () => applyJob(job.id) : () => navigate("/login")
                  }
                  className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-400 focus:outline-none focus:ring focus:border-blue-300"
                >
                  Apply Now
                </button>
                {/* Use Link to navigate to SingleJob page */}
                <Link
                  to={`/job/${job.id}`}
                  className="block mt-4 text-center text-blue-600 hover:underline"
                >
                  View More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Scroll />
    </section>
  );
}

export default JobCard;
