import React, { useState, useEffect } from "react";
import axios from "axios";

function Jobcard() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/job/get")
      .then((res) => setData(res.data.data))
      // .then(res => console.log(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Featured Jobs
        </h2>
        <div className="gap-10">
        {data.map((jobs, index) => {
          return (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Featured Job Card Component */}
                <div className="bg-white p-6 rounded shadow">
                  <h3 className="text-xl text-black font-semibold mb-2">
                    {jobs.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{jobs.description}</p>
                  <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                    Apply Now
                  </button>
                </div>
              </div>
          );
        })}
        </div>
      </div>
    </section>
  );
}

export default Jobcard;
