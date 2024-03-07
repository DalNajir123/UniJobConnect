import React, { useEffect, useState } from "react";
import axios from "axios";

function Getjob(props) {
  const [data, setData] = useState([]);
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
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:8080/job/get")
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    const token = localStorage.getItem("token");
    const headers = { Authorization: token };
    axios
      .delete(`http://localhost:8080/job/delete/${id}`, { headers })
      .then(() => {
        fetchData();
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
      .put(`http://localhost:8080/job/update/${updateFormData.id}`, updatedData,{headers})
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
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mx-auto">
      <div className="mt-3">
        <h3 className="text-2xl font-semibold mb-2">Your Posted Job</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-collapse hover:shadow-md transition duration-300">
            <thead>
              <tr className="bg-gray-100">
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
                  className="transition duration-300 hover:bg-gray-200"
                >
                  <td className="p-2 border">{job.id}</td>
                  <td className="p-2 border">{job.title}</td>
                  <td className="p-2 border">{job.description}</td>
                  <td className="p-2 border">{job.companyName}</td>
                  <td className="p-2 border">{job.requirements}</td>
                  <td className="p-2 border">{job.jobType}</td>
                  <td className="p-2 border">{job.locationType}</td>
                  <td className="p-2 border">{job.address}</td>
                  <td className="p-2 border">{job.city}</td>
                  <td className="p-2 border">{job.state}</td>
                  <td className="p-2 border">{job.country}</td>
                  <td className="p-2 border flex justify-between">
                    <button
                      className="p-1 rounded-xl border-2 mr-2 border-black"
                      onClick={() => handleDelete(job.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="p-1 rounded-xl border-2 border-black"
                      onClick={() => handleUpdate(job)}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Update Form */}
      {updateFormData.id && (
        <div className="mt-3">
          <h3 className="text-2xl font-semibold mb-2">Update Job</h3>
          <form className="max-w-md mx-auto border-4 border-sky-200 rounded-lg mb-5">
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={updateFormData.title}
              onChange={(e) =>
                setUpdateFormData({ ...updateFormData, title: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
            <label>Description:</label>
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
              className="w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
            <label>CompanyName:</label>
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
              className="w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
            <label>Requirements:</label>
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
              className="w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
            <label>JobType:</label>
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
              className="w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
            <label>LocationType:</label>
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
              className="w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
            <label>Address:</label>
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
              className="w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
            <label>City:</label>
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
              className="w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
            <label>State:</label>
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
              className="w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
            <label>Country:</label>
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
              className="w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
            <button
              type="button"
              onClick={handleUpdateSubmit}
              className="bg-blue-500 text-white px-4 py-2 rounded-md mt-3"
            >
              Update Job
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Getjob;
