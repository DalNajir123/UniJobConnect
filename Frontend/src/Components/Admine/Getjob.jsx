import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import Scroll from "../../Scroll";

function Getjob(props) {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalJob, setTotalJob] = useState(0);
  const [updateFormData, setUpdateFormData] = useState({
    id: "",
    title: "",
    description: "",
    companyName: "",
    requirements: "",
    jobType: "",
    locationType: "",
    address: "",
    city: "",
    state: "",
    country: "",
  });

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = () => {
    axios
      .get(`http://localhost:8080/job/get?page=${currentPage}&pageSize=10`)
      .then((res) => {
        setData(res.data.data);
        setTotalPages(res.data.pagination.totalPages);
        setTotalJob(res.data.pagination.totalCount);
      })
      .catch((err) => console.log(err));
  };
  const handleDelete = (id) => {
    const token = localStorage.getItem("token");
    const headers = { Authorization: token };
    axios
      .delete(`http://localhost:8080/job/delete/${id}`, { headers })
      .then(() => {
        fetchData();
        toast.success("Job Deleted Successfully");
      })
      .catch((err) => console.log(err));
  };

  const handleUpdate = (job) => {
    setUpdateFormData({
      id: job.id,
      title: job.title,
      description: job.description,
      companyName: job.companyName,
      requirements: job.requirements,
      jobType: job.jobType,
      locationType: job.locationType,
      address: job.address,
      city: job.city,
      state: job.state,
      country: job.country,
    });
  };

  const handleUpdateSubmit = () => {
    const token = localStorage.getItem("token");
    const headers = { Authorization: token };
    const updatedData = {
      id: updateFormData.id,
      title: updateFormData.title,
      description: updateFormData.description,
      companyName: updateFormData.companyName,
      requirements: updateFormData.requirements,
      jobType: updateFormData.jobType,
      locationType: updateFormData.locationType,
      address: updateFormData.address,
      city: updateFormData.city,
      state: updateFormData.state,
      country: updateFormData.country,
    };

    axios
      .put(
        `http://localhost:8080/job/update/${updateFormData.id}`,
        updatedData,
        { headers }
      )
      .then(() => {
        setUpdateFormData({
          id: "",
          title: "",
          description: "",
          companyName: "",
          requirements: "",
          jobType: "",
          locationType: "",
          address: "",
          city: "",
          state: "",
          country: "",
        });
        fetchData();
        toast.success("Job Updated Successfuly");
      })
      .catch((err) => console.log(err));
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="container mx-auto">
      <div className="mt-3">
        <h2 className="sticky top-20 z-50  my-10 p-3 text-3xl text-center font-bold text-sky-400 border-2 border-sky-400 bg-neutral-100 shadow-md shadow-sky-500 rounded-lg transition-transform duration-1000 ease-in-out">
          ---------- Your Posted Job ----------
        </h2>
        <div className="">
        <h1 className="text-2xl inline-block font-bold p-2 mb-3 rounded-lg border-2 border-black bg-neutral-100">Total Posted Jobs <span className="bg-sky-300 px-3 py-1 border-2 border-black rounded-2xl">{totalJob}</span></h1>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-4 border-black  border-collapse hover:shadow-md transition duration-300 mb-7">
            <thead>
              <tr className="bg-sky-100 ">
                <th className="p-2 border">Id</th>
                <th className="p-2 border">Title</th>
                <th className="p-2 border">Description</th>
                <th className="p-2 border">CompanyName</th>
                <th className="p-2 border">Requirements</th>
                <th className="p-2 border">JobType</th>
                <th className="p-2 border">LocationType</th>
                <th className="p-2 border">Address</th>
                <th className="p-2 border">City</th>
                <th className="p-2 border">State</th>
                <th className="p-2 border">Country</th>
                <th className="p-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((job, index) => (
                <tr
                  key={index}
                  className="transition border-2 border-black duration-300 hover:bg-sky-200"
                >
                  <td className="p-2 border-2 border-black">{job.id}</td>
                  <td className="p-2 border-2 border-black">{job.title}</td>
                  <td className="p-2 border-2 border-black">
                    {job.description}
                  </td>
                  <td className="p-2 border-2 border-black">
                    {job.companyName}
                  </td>
                  <td className="p-2 border-2 border-black">
                    {job.requirements}
                  </td>
                  <td className="p-2 border-2 border-black">{job.jobType}</td>
                  <td className="p-2 border-2 border-black">
                    {job.locationType}
                  </td>
                  <td className="p-2 border-2 border-black">{job.address}</td>
                  <td className="p-2 border-2 border-black">{job.city}</td>
                  <td className="p-2 border-2 border-black">{job.state}</td>
                  <td className="p-2 border-2 border-black">{job.country}</td>
                  <td className="p-2  flex justify-between">
                    <button
                      className="p-1 rounded-xl mr-2 "
                      onClick={() => handleDelete(job.id)}
                    >
                      <MdDeleteForever className="text-4xl text-red-700 transition duration-700 hover:scale-125" />
                    </button>
                    <button
                      className="p-1 rounded-xl "
                      onClick={() => handleUpdate(job)}
                    >
                      <FaEdit className="text-4xl text-green-700 transition duration-700 hover:scale-125" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
 
      </div>
      {/* Pagination */}
        <div className="flex justify-center mt-8">
          <div className="p-2 px-10 rounded-lg mb-5">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
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

      {/* Update Form */}
      {updateFormData.id && (
        <div className="mt-3 mb-5 bg-neutral-100">
          <h2 className="sticky top-20 z-50  my-10 p-3 text-3xl text-center font-bold text-sky-400 border-2 border-sky-400 bg-neutral-100 shadow-md shadow-sky-500 rounded-lg transition-transform duration-1000 ease-in-out">
            ---------- Update Job ----------
          </h2>
          <form className="max-w-md mx-auto bg-sky-200 border-4 border-black p-8 rounded-lg ">
            <label className="text-lg italic font-bold">Title</label>
            <input
              type="text"
              name="title"
              value={updateFormData.title}
              onChange={(e) =>
                setUpdateFormData({ ...updateFormData, title: e.target.value })
              }
              className="w-full px-3 py-2 border-2 border-black placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-sky-600 focus:z-10 sm:text-sm"
            />
            <label className="text-lg italic font-bold">Description</label>
            <input
              type="text"
              name="description"
              value={updateFormData.description}
              onChange={(e) =>
                setUpdateFormData({
                  ...updateFormData,
                  description: e.target.value,
                })
              }
              className="w-full px-3 py-2 border-2 border-black placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-sky-600 focus:z-10 sm:text-sm"
            />
            <label className="text-lg italic font-bold">CompanyName</label>
            <input
              type="text"
              name="companyName"
              value={updateFormData.companyName}
              onChange={(e) =>
                setUpdateFormData({
                  ...updateFormData,
                  companyName: e.target.value,
                })
              }
              className="w-full px-3 py-2 border-2 border-black placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-sky-600 focus:z-10 sm:text-sm"
            />
            <label className="text-lg italic font-bold">Requirements</label>
            <input
              type="text"
              name="requirements"
              value={updateFormData.requirements}
              onChange={(e) =>
                setUpdateFormData({
                  ...updateFormData,
                  requirements: e.target.value,
                })
              }
              className="w-full px-3 py-2 border-2 border-black placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-sky-600 focus:z-10 sm:text-sm"
            />
            <label className="text-lg italic font-bold">JobType</label>
            <input
              type="text"
              name="jobType"
              value={updateFormData.jobType}
              onChange={(e) =>
                setUpdateFormData({
                  ...updateFormData,
                  jobType: e.target.value,
                })
              }
              className="w-full px-3 py-2 border-2 border-black placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-sky-600 focus:z-10 sm:text-sm"
            />
            <label className="text-lg italic font-bold">LocationType</label>
            <input
              type="text"
              name="locationType"
              value={updateFormData.locationType}
              onChange={(e) =>
                setUpdateFormData({
                  ...updateFormData,
                  locationType: e.target.value,
                })
              }
              className="w-full px-3 py-2 border-2 border-black placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-sky-600 focus:z-10 sm:text-sm"
            />
            <label className="text-lg italic font-bold">Address</label>
            <input
              type="text"
              name="address"
              value={updateFormData.address}
              onChange={(e) =>
                setUpdateFormData({
                  ...updateFormData,
                  address: e.target.value,
                })
              }
              className="w-full px-3 py-2 border-2 border-black placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-sky-600 focus:z-10 sm:text-sm"
            />
            <label className="text-lg italic font-bold">City</label>
            <input
              type="text"
              name="city"
              value={updateFormData.city}
              onChange={(e) =>
                setUpdateFormData({
                  ...updateFormData,
                  city: e.target.value,
                })
              }
              className="w-full px-3 py-2 border-2 border-black placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-sky-600 focus:z-10 sm:text-sm"
            />
            <label className="text-lg italic font-bold">State</label>
            <input
              type="text"
              name="state"
              value={updateFormData.state}
              onChange={(e) =>
                setUpdateFormData({
                  ...updateFormData,
                  state: e.target.value,
                })
              }
              className="w-full px-3 py-2 border-2 border-black placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-sky-600 focus:z-10 sm:text-sm"
            />
            <label className="text-lg italic font-bold">Country</label>
            <input
              type="text"
              name="country"
              value={updateFormData.country}
              onChange={(e) =>
                setUpdateFormData({
                  ...updateFormData,
                  country: e.target.value,
                })
              }
              className="w-full px-3 py-2 border-2 border-black placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-sky-600 focus:z-10 sm:text-sm"
            />

            <button
              type="button"
              onClick={handleUpdateSubmit}
              className="w-full mt-5 py-2 px-4 border-2 border-white text-2xl font-bold rounded-md text-white bg-gradient-to-r from-zinc-500 to-sky-500 hover:from-sky-500 hover:to-zinc-600 hover:scale-110
             focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-900 transition-transform duration-700 ease-in-out transform"
            >
              Update Job
            </button>
          </form>
        </div>
      )}
      <Scroll />
    </div>
  );
}

export default Getjob;
