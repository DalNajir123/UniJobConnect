import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function UpdateJob({ job, fetchData }) {
  const [updateFormData, setUpdateFormData] = useState({
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

  const handleUpdateSubmit = () => {
    const token = localStorage.getItem("token");
    const headers = { Authorization: token };
    const updatedData = { ...updateFormData };

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
        toast.success("Job Updated Successfully");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="max-w-md mx-auto bg-sky-200 border-4 border-black p-8 rounded-lg">
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
      {/* Add other input fields for updating job properties */}
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
        className="w-full mt-5 py-2 px-4 border-2 border-white text-2xl font-bold rounded-md text-white bg-gradient-to-r from-zinc-500 to-sky-500 hover:from-sky-500 hover:to-zinc-600 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-900 transition-transform duration-700 ease-in-out transform"
      >
        Update Job
      </button>
    </div>
  );
}

export default UpdateJob;
