import React, { useState, useEffect } from "react";
import axios from "axios";
import { ImLocation2 } from "react-icons/im";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function JobForHome() {
  const [data, setData] = useState([]);
  const [jobId, setJobId] = useState(null);
  const[singleJob,setSingleJob] = useState('');
  
  useEffect(() => {
    axios
      .get("http://localhost:8080/job/get")
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  const viewMore = (jobId) => {
    axios
      .get(`http://localhost:8080/job/get/${jobId}`)
      .then((res) => {
        console.log(res);
        setSingleJob(res.data.data);
        setJobId(jobId); 
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {data.map((job, index) => (
        <div
          key={index}
          className="bg-neutral-100 p-2 border-4 border-black rounded-lg shadow-lg shadow-slate-700 hover:scale-105 transition transform duration-500"
        >
          <h3 className="text-xl p-1 rounded-lg bg-purple-300 font-bold mb-2">
            {job.title}
          </h3>
          <div className="bg-purple-200 rounded-lg p-1 border-2 border-black">
            <p className="font-semibold text-base mb-2">{job.description}</p>
            <p className="text-gray-700 mb-1"><span className="text-black font-medium">Company:</span> {job.companyName}</p>
            <p className="text-gray-700 mb-1"><span className="text-black font-medium">Requirements: </span>{job.requirements}</p>
            <p className="font-semibold text-lg"><ImLocation2 className="inline text-sky-400" />{job.country}</p>
          </div>
          {/* Link to view more details */}
          <button onClick={() => viewMore(job.id)} className="block mt-4 text-center text-blue-600 hover:underline">
            View More
          </button>
        </div>
      ))}
      {jobId && <h1>{singleJob.description}</h1>} <h1>{singleJob.jobType}</h1> {/* Render if jobId is present */}
    </div>
  );
}

export default JobForHome;
