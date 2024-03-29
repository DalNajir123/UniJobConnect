import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Scroll from "../../Scroll.jsx"

function User() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const headers = { Authorization: token };

    const fetchUserApplications = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/admin/application/get?page=1&pageSize=10&title=&description=",
          { headers }
        );
        console.log(response.data.data);
        setApplications(response.data.data);
      } catch (error) {
        console.error("Error fetching applications:", error);
      }
    };

    fetchUserApplications();
  }, []);

  return (
    <>
      <Navbar />
      <h2 className="sticky top-20 z-50 mx-16 my-10 p-3 text-3xl text-center font-bold text-sky-400 border-2 border-sky-400 bg-neutral-100 shadow-md shadow-sky-500 rounded-lg transition-transform duration-1000 ease-in-out">
        User-Applications
      </h2>

      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {applications.map((application) => (
            <div
              key={application.id}
              className="bg-sky-200 rounded-lg shadow-md shadow-zinc-800 mb-4 p-4 transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              <h3 className="text-2xl border-2 border-black text-sky-500 text-center font-bold mb-2 bg-white rounded-md p-1">
                Job Details
              </h3>
              <div className="bg-sky-300 rounded-lg border-4 border-white p-2">
                <h3 className="text-xl font-bold mb-2">
                  {application.Job.title}
                </h3>
                <p className="text-gray-700">{application.Job.description}</p>
                <p className="text-gray-700">
                  <span className="text-black text-lg font-semibold">
                    Company:{" "}
                  </span>
                  {application.Job.companyName}
                </p>
                <p className="text-gray-700">
                  <span className="text-black text-lg font-semibold">
                    Requirements:{" "}
                  </span>
                  {application.Job.requirements}
                </p>
                <p className="text-gray-700">
                  <span className="text-black text-lg font-semibold">
                    JobType:{" "}
                  </span>
                  {application.Job.jobType}
                </p>
                <p className="text-gray-700">
                  <span className="text-black text-lg font-semibold">
                    LocationType:{" "}
                  </span>
                  {application.Job.locationType}
                </p>
                <p className="text-gray-700">
                  <span className="text-black text-lg font-semibold">
                    Address:{" "}
                  </span>
                  {application.Job.address} {application.Job.city}{" "}
                  {application.Job.state} {application.Job.country}
                </p>
                <p className="text-gray-700">
                  <span className="text-black text-lg font-semibold">
                    JobCreatedBy:{" "}
                  </span>
                  {application.Job.createdBy}
                </p>
              </div>
              <hr className="my-2 border-gray-900 sm:mx-auto lg:my-4" />

              <h3 className="text-2xl text-center border-2 border-black text-sky-500 font-bold mb-2 bg-white rounded-md p-1">
                Application Details
              </h3>
              <div className="bg-sky-300 rounded-lg border-4 border-white p-2">
                <p className="text-gray-700">
                  <span className="text-black text-lg font-semibold">
                    Application_Id:{" "}
                  </span>
                  {application.id}
                </p>
                <p className="text-gray-700">
                  <span className="text-black text-lg font-semibold">
                    JobId:{" "}
                  </span>
                  {application.jobId}
                </p>
                <p className="text-gray-700">
                  <span className="text-black text-lg font-semibold">
                    Status:{" "}
                  </span>
                  {application.status}
                </p>
                <p className="text-gray-700">
                  <span className="text-black text-lg font-semibold">
                    UserId:{" "}
                  </span>
                  {application.userId}
                </p>
                <p className="text-gray-700">
                  <span className="text-black text-lg font-semibold">
                    Time:{" "}
                  </span>
                  {application.createdAt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
      <Scroll/>
      </div>
      <Footer />
    </>
  );
}

export default User;
