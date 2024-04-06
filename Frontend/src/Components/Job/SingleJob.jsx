import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ImLocation2 } from "react-icons/im";

function SingleJob() {
  const { jobId } = useParams();
  const [singleJob, setSingleJob] = useState("");

  // Fetch job details using the jobId
  useEffect(() => {
    // Make an API call to fetch job details using the jobId
    axios
      .get(`http://localhost:8080/job/get/${jobId}`)
      .then((res) => {
        console.log(res.data.data);
        setSingleJob(res.data.data);
      })
      .catch((err) => console.error(err));
  }, [jobId]);

  return (
    <>
      <div className="bg-purple-200">
        <div className="container  mx-auto py-16 flex  justify-center">
          <div className="bg-neutral-100 border-2  shadow-2xl rounded-lg overflow-hidden shadow-purple-600  flex">
            <div className="p-8">
              <h3 className="text-2xl bg-purple-300 text-black rounded-lg p-2 font-bold  mb-2">
                {singleJob.title}
              </h3>
              <div className="text-gray-700 text-lg font-bold mb-2">
                <span className="font-medium text-black">Description:</span>{" "}
                {singleJob.description}
              </div>
            </div>
            <div className="p-8">
              <div className="text-gray-700 mb-2">
                <span className="font-medium">Company:</span>{" "}
                {singleJob.companyName}
              </div>
              <div className="text-gray-700 mb-2">
                <span className="font-medium">Requirements:</span>{" "}
                {singleJob.requirements}
              </div>
              <div className="text-gray-700 mb-2">
                <span className="font-medium">Job Type:</span>{" "}
                {singleJob.jobType}
              </div>
              <div className="text-gray-700 mb-2">
                <span className="font-medium">Location Type:</span>{" "}
                {singleJob.locationType}
              </div>
              <div className="text-gray-700 mb-2">
                <span className="font-medium">Address:</span>{" "}
                {singleJob.address}
              </div>
              <div className="text-gray-700 mb-2">
                <span className="font-medium">City:</span> {singleJob.city}
              </div>
              <div className="text-gray-700 mb-2">
                <span className="font-medium">State:</span> {singleJob.state}
              </div>
              <div className="text-gray-700 mb-2">
                <span className="font-medium">Country:</span>{" "}
                {singleJob.country}
              </div>
              <div className="text-gray-700 mb-2">
                <span className="font-medium">Posted At:</span>{" "}
                {singleJob.createdAt}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleJob;
