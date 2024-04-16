import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import ScrollToTopButton from "../../Scrolluser";

function Application() {
  const [applications, setApplications] = useState([]);
  const [total, setTotal] = useState('')

  useEffect(() => {
    const token = localStorage.getItem("token");
    const headers = { Authorization: token };
    const fetchApplications = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/application/get?page=1&pageSize=10&title=&description=",
          { headers }
        );
        setApplications(response.data.data);
        setTotal(response.data.total);
      } catch (error) {
        console.error("Error fetching applications:", error);
      }
    };

    fetchApplications();
  }, []);

  const handleDelete = async (applicationId) => {
    const token = localStorage.getItem("token");
    const headers = { Authorization: token };
    try {
      const response = await axios.delete(
        `http://localhost:8080/application/delete/${applicationId}`,
        { headers }
      );
      toast.success(response.data.message);
      // If deletion is successful, remove the deleted application from the state
      setApplications(
        applications.filter((application) => application.id !== applicationId)
      );
    } catch (error) {
      console.error("Error deleting application:", error);
    }
  };

  return (
    <>
      <div className="w-full min-h-screen bg-purple-300 flex justify-center">
        <div className="max-w-7xl w-full px-4">
          <h2 className="sticky top-20 z-50 mx-1 my-8 p-3 text-3xl text-center font-bold text-black border-2 border-purple-400 bg-neutral-100 shadow-md shadow-purple-500 rounded-lg transition-transform duration-1000 ease-in-out">
            Your Applying Job Application
          </h2>
          
          <div className="">
        <h1 className="text-2xl inline-block font-bold p-2 mb-3 rounded-lg border-2 border-black bg-neutral-100">Total Applyed Job  <span className="bg-purple-300 px-3 py-1 border-2 border-black rounded-2xl">{total}</span></h1>
        </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {applications.map((application) => (
              <div
                key={application.id}
                className="bg-white border-2 mb-4 border-black pb-1 shadow-lg drop-shadow-lg shadow-violet-600 rounded-md overflow-hidden"
              >
                <div className="bg-white  p-8 pt-4 px-2 pb-0">
                  <h3 className="text-lg font-semibold text-purple-700 mb-2">
                    {application.Job.title}
                  </h3>
                  <div className="bg-neutral-50 border-black p-2 rounded-lg mb-1 border-2">
                    <p className=" mb-2">
                      {application.Job.description}
                    </p>
                    <p className="">
                      Company: {application.Job.companyName}
                    </p>
                    <p className="">
                      Job ID: {application.Job.id}
                    </p>
                    <p className="">
                      Status: {application.status}
                    </p>
                  </div>
                  <div className="flex justify-between text-white">
                    <div className=" hover:text-black rounded-lg border-2 border-black">
                      <button
                        onClick={() => handleDelete(application.id)}
                        className="bg-purple-400 py-2 px-4 rounded-md hover:bg-purple-300 focus:outline-none focus:ring focus:border-blue-300"
                      >
                        Delete
                      </button>
                    </div>
                    <div className=" hover:text-black rounded-lg border-2 border-black">
                      <button className="bg-purple-400 py-2 px-4 rounded-md hover:bg-purple-300 focus:outline-none focus:ring focus:border-blue-300">
                        {application.status}
                      </button>
                    </div>
                  </div>
                  {application.status == "accepted" ? (
                    <div className=" text-center text-lg italic font-bold">
                      <IoCheckmarkDoneCircleSharp className="inline text-2xl text-green-600" />{" "}
                      Congratulation Your Job Application Is Accepted By{" "}
                      {application.Job.companyName}🎊👍✨
                    </div>
                  ) : (
                    ""
                  )}
                  {application.status == "rejected" ? (
                    <div className=" text-center text-lg italic font-bold">
                      <MdCancel className="inline text-2xl text-red-600" />{" "}
                      Sorry Your Job Application Is Rejected By{" "}
                      {application.Job.companyName}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </>
  );
}

export default Application;
