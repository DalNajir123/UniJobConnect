import React, { useState, useEffect } from "react";
import axios from "axios";
import { ImLocation2 } from "react-icons/im";
import { FaSearch } from "react-icons/fa";


function JobForHome() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/job/get")
      .then((res) => {
        setData(res.data.data);
        setFilteredJobs(res.data.data); // Initially set filtered jobs to all jobs
      })
      .catch((err) => console.log(err));
  }, []);

  // Function to handle search input changes
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const filtered = data.filter((job) =>
      job.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredJobs(filtered);
  };
  const logo = <FaSearch />;

  return (
    <>
      <div className="sticky top-20 z-50  m-10 hover:shadow-xl hover:shadow-white ">
        <div className="text-black font-bold">
          <input
            type="text"
            placeholder="🔍 Search for jobs..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none bg-opacity-10 hover:text-white hover:bg-fuchsia-500 focus:border-purple-600 transition-colors duration-500"
            value={searchTerm}
            onChange={handleSearch} // Call handleSearch on input change
          />
          {/* <button className="absolute inset-y-0 left-0 px-4 py-3 bg-opacity-50 bg-purple-600 text-white font-semibold rounded-r-lg hover:bg-purple-700 transition-colors duration-300">
          {logo}
          </button> */}
          
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredJobs.map((job, index) => (
          <div
            key={index}
            className="bg-neutral-100 p-2 border-4 border-black rounded-lg shadow-lg shadow-slate-700 hover:shadow-xl hover:shadow-white hover:scale-105 transition transform duration-500"
          >
            <h3 className="text-xl p-1 rounded-lg bg-purple-300 font-bold mb-2">
              {job.title}
            </h3>
            <div className="bg-purple-200 rounded-lg p-1 border-2 border-black">
              <p className="font-semibold text-base mb-2">{job.description}</p>
              <p className="text-gray-700 mb-1">
                <span className="text-black font-medium">Company:</span>{" "}
                {job.companyName}
              </p>
              <p className="text-gray-700 mb-1">
                <span className="text-black font-medium">Requirements: </span>
                {job.requirements}
              </p>
              <p className="font-semibold text-lg">
                <ImLocation2 className="inline text-sky-400" />
                {job.country}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default JobForHome;
