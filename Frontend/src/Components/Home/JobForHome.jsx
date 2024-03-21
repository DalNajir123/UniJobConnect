import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function JobForHome() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    axios
      .get("http://localhost:8080/job/get")
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  }, []);
  return <>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((job, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg shadow-slate-600 hover:bg-purple-300 transition transform hover:scale-105"
            >
              <h3 className="text-xl text-purple-700 font-bold mb-4">
                {job.title}
              </h3>
              <p className="text-gray-700 mb-6">{job.description}</p>
              <p className="text-gray-700 mb-2">Company: {job.companyName}</p>
              <p className="text-gray-700 mb-2">Requirements: {job.requirements}</p>
            </div>
          ))}
        </div>
  </>;
}

export default JobForHome;
