import React, { useState, useEffect } from "react";
import axios from "axios";

function Jobcard() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/job/get")
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  const filteredData = data.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
        {/* Search Bar */}
        <div className="mb-6 flex justify-center">
          <input
            type="text"
            placeholder="Search for a job..."
            className="px-4 py-2 text-black border border-purple-400 rounded-md w-full sm:w-3/4 lg:w-1/2 xl:w-1/3 focus:outline-none focus:ring focus:border-purple-700"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredData.map((job, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg shadow-slate-600 hover:bg-purple-300 transition transform hover:scale-110"
            >
              <h3 className="text-xl text-black font-semibold mb-4">
                {job.title}
              </h3>
              <p className="text-gray-700 mb-6">{job.description}</p>
              <button className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-400 focus:outline-none focus:ring focus:border-blue-300">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Jobcard;
