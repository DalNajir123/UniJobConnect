import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate
import { ImLocation2 } from "react-icons/im";
import ScrollToTopButton from "../../Scrolluser";

function JobCard() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [job, setJob] = useState('')
  const [selectedJobType, setSelectedJobType] = useState("all");
  const navigate = useNavigate(); // Use useNavigate hook
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("http://localhost:8080/job/get")
      .then((res) => {setData(res.data.data);setJob(res.data.pagination.totalCount);})
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
        <h2 className="text-4xl font-extrabold p-3 rounded-xl bg-neutral-100 text-center border-2 border-white text-gray-900 mb-3">
          Explore Exciting Opportunities to Shape Your Career
        </h2>
        <div className="container mx-auto text-center"> 
          <h2 className="text-4xl font-bold border-2 p-2 rounded-xl bg-neutral-100 border-white mb-4">Find Your Dream Jobs</h2>
          <p className="text-lg mb-8">
            Browse through thousands of job listings and discover opportunities
            that match your skills.
          </p>
        </div>
        <div className="">
        <h1 className="text-2xl inline-block font-bold p-2 mb-3 rounded-lg border-2 border-black bg-neutral-100">Total Jobs <span className="bg-purple-300 px-3 py-1 border-2 border-black rounded-2xl">{job}</span></h1>
        </div>

        {/* Search Bar and Job Type Filter */}
        <div className="sticky top-20 z-50 mb-6 flex justify-center space-x-4">
          <input
            type="text"
            placeholder="🔍 Search for a job..."
            className="w-full px-4 py-3 border border-purple-400 rounded-lg focus:outline-none bg-opacity-10 hover:text-white hover:bg-fuchsia-300 focus:border-purple-700 transition-colors duration-500"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            value={selectedJobType}
            onChange={(e) => setSelectedJobType(e.target.value)}
            className="px-4 py-2 text-black border hover:bg-fuchsia-300 border-purple-400 rounded-md focus:outline-none focus:border-purple-700 transition-colors duration-500"
          >
            {jobTypes.map((type) => (
              <option key={type} value={type} className="bg-purple-200">
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
                  See Detail
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ScrollToTopButton/>
    </section>
  );
}

export default JobCard;
