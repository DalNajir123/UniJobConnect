import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Scroll from "../../Scroll.jsx";
import { toast } from "react-toastify";



function User() {
  const [applications, setApplications] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalJOb, setTotalJOb] = useState(0);

  useEffect(() => {
    fetchUserApplications();
  }, [currentPage]);

  const fetchUserApplications = async () => {
    try {
      const token = localStorage.getItem("token");
      const headers = { Authorization: token };

      const response = await axios.get(
        `http://localhost:8080/admin/application/get?page=${currentPage}&pageSize=6&title=&description=`,
        { headers }
      );

      console.log(response.data);
      setApplications(response.data.data);
      setTotalPages(response.data.totalPages);
      setTotalJOb(response.data.total);
    } catch (error) {
      console.error("Error fetching applications:", error);
    }
  };

  const updateStatus = async (id, newStatus) => {
    try {
      const token = localStorage.getItem("token");
      const headers = { Authorization: token };

      const response = await axios.post(
        `http://localhost:8080/admin/application/statusUpdate/${id}`,
        { status: newStatus },
        { headers }
      );

      // Update the status locally in the applications state
      setApplications(
        applications.map((app) => {
          if (app.id === id) {
            return { ...app, status: response.data.updatedStatus };
          }
          return app;
        })
      );
      toast.success("Status Updated Successfully");
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const headers = { Authorization: token };

      await axios.delete(
        `http://localhost:8080/admin/application/delete/${id}`,
        { headers }
      );

      // Filter out the deleted application from the applications state
      setApplications(applications.filter((app) => app.id !== id));
      toast.success("Application Deleted Successfully");
    } catch (error) {
      console.error("Error deleting application:", error);
    }
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <Navbar />
      <h2 className="sticky top-20 z-50 mx-16 my-8 p-3 text-3xl text-center font-bold text-sky-400 border-2 border-sky-400 bg-neutral-100 shadow-md shadow-sky-500 rounded-lg transition-transform duration-1000 ease-in-out">
       ---------- Manage User-Applications ----------
      </h2>
      <div className="ml-[70px] m-0">
        <h1 className="text-2xl inline-block font-bold p-2 mb-3 rounded-lg border-2 border-black bg-neutral-100">Total Available userApplication <span className="bg-sky-300 px-3 py-1 border-2 border-black rounded-2xl">{totalJOb}</span></h1>
        </div>
      <div className="container mx-auto mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {applications.map((application) => (
            <div
              key={application.id}
              className="bg-sky-200 rounded-lg border-2 border-zinc-900 shadow-md shadow-zinc-800 mb-4 p-4 transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              {/* Job Details */}
              <h3 className="text-2xl border-2 border-black text-sky-500 text-center font-bold mb-2 bg-white rounded-md p-1">
                Job Details
              </h3>
              <div className="bg-sky-300 rounded-lg border-4 border-white p-2">
                <h3 className="text-xl font-bold mb-1">
                  {application.Job.title}
                </h3>
                {/* <p className="text-gray-700">{application.Job.description}</p> */}
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
                    JobId:{" "}
                  </span>
                  {application.jobId}
                </p>
                <p className="text-gray-700">
                  <span className="text-black text-lg font-semibold">
                    Address:{" "}
                  </span>
                  {application.Job.address} {application.Job.city}{" "}
                  {application.Job.state} {application.Job.country}
                </p>
                {/* <p className="text-gray-700">
                  <span className="text-black text-lg font-semibold">
                    JobCreatedBy:{" "}
                  </span>
                  {application.Job.createdBy}
                </p> */}
              </div>
              <hr className="my-2 border-gray-900 sm:mx-auto lg:my-4" />
              {/* Application Details */}
              <h3 className="text-2xl text-center border-2 border-black text-sky-500 font-bold mb-2 bg-white rounded-md p-1">
                Application Details
              </h3>
              <div className="bg-sky-300 text-base rounded-lg border-4 border-white p-2">
                <p className="text-gray-700">
                  <span className="text-black text-lg font-semibold">
                    Application_Id:{" "}
                  </span>
                  {application.id}
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
                  FullName:{" "}
                  </span>
                  {application.User.firstName}{" "}{application.User.lastName}
                </p>
                <p className="text-gray-700">
                  <span className="text-black text-lg font-semibold">
                    Email:{" "}
                  </span>
                  {application.User.email}
                </p>
                <p className="text-gray-700">
                  <span className="text-black text-lg font-semibold">
                    Phone:{" "}
                  </span>
                  {application.User.phone}
                </p>
              </div>
              {/* buttons */}
              <div className="flex justify-between mt-4">
                <div className="flex">
                  <button
                  onClick={() => updateStatus(application.id, "accepted")}
                  className="mr-2 py-2 px-4 bg-gradient-to-r from-zinc-500 to-sky-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-900 transition-transform duration-700 ease-in-out transform hover:scale-110"
                >
                  Accepted
                </button>
               
                <button
                  onClick={() => updateStatus(application.id, "rejected")}
                  className="py-2 px-4 bg-gradient-to-r from-zinc-500 to-sky-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-900 transition-transform duration-700 ease-in-out transform hover:scale-110"
                >
                  Rejected
                </button>
                
                </div>
                <div>
                  <button
                  onClick={() => handleDelete(application.id)}
                  className="ml-2 py-2 px-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-900 transition-transform duration-700 ease-in-out transform hover:scale-110"
                >
                  Delete
                </button>
                
                </div>
                
              </div>
            </div>
          ))}
        </div>
        {/* pagination */}
        <div className="flex justify-center mt-8">
          <div className=" p-2 px-10 rounded-lg mb-5">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`mx-2 py-1 px-3 ${
                  currentPage === index + 1
                    ? "bg-sky-500 text-white"
                    : "bg-sky-200 text-gray-700"
                } rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-transform duration-700 ease-in-out transform hover:scale-110`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div>
        <Scroll />
      </div>
      <Footer />
    </>
  );
}

export default User;
