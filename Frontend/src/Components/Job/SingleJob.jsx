import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ImLocation2 } from "react-icons/im";

function SingleJob() {
  const { jobId } = useParams();
  const [singleJob, setSingleJob] = useState(null); // Initialize with null

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

  if (!singleJob) {
    return <div>Loading...</div>; // Render a loading indicator while data is being fetched
  }

  return (
    <div className="bg-purple-200 min-h-screen flex justify-center items-center">
      <div className="container mx-auto py-10">
        <div className="bg-white border-2 border-gray-300 shadow-2xl shadow-purple-600 rounded-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-3xl bg-purple-300 text-black rounded-lg p-4 font-bold mb-4">
              {singleJob.title}
            </h3>
            <table className="w-full table-fixed">
              <tbody>
                <tr className="bg-purple-300 text-black">
                  <td className="w-1/3 px-4 py-2 font-bold">Field</td>
                  <td className="w-2/3 px-4 py-2 font-bold">Details</td>
                </tr>

                <tr>
                  <td className="px-4 py-2 font-medium">Description</td>
                  <td className="px-4 py-2">
                    {singleJob.description.split("\n").map((line, index) => (
                      <p key={index} className="mb-2">{line}</p>
                    ))}
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-2 font-medium">Company</td>
                  <td className="px-4 py-2">{singleJob.companyName}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium">Requirements</td>
                  <td className="px-4 py-2">{singleJob.requirements}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium">Job Type</td>
                  <td className="px-4 py-2">{singleJob.jobType}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium">Location Type</td>
                  <td className="px-4 py-2">{singleJob.locationType}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium">Address</td>
                  <td className="px-4 py-2">{singleJob.address}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium">City</td>
                  <td className="px-4 py-2">{singleJob.city}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium">State</td>
                  <td className="px-4 py-2">{singleJob.state}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium">Country</td>
                  <td className="px-4 py-2">{singleJob.country}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium">Posted At</td>
                  <td className="px-4 py-2">{singleJob.createdAt}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleJob;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import { ImLocation2 } from "react-icons/im";

// function SingleJob() {
//   const { jobId } = useParams();
//   const [singleJob, setSingleJob] = useState("");

//   // Fetch job details using the jobId
//   useEffect(() => {
//     // Make an API call to fetch job details using the jobId
//     axios
//       .get(`http://localhost:8080/job/get/${jobId}`)
//       .then((res) => {
//         console.log(res.data.data);
//         setSingleJob(res.data.data);
//       })
//       .catch((err) => console.error(err));
//   }, [jobId]);

//   return (
//     <>
//       <div className="bg-purple-200">
//         <div className="container  mx-auto py-16 flex  justify-center">
//           <div className="bg-neutral-100 border-2  shadow-2xl rounded-lg overflow-hidden shadow-purple-600  flex">
//             <div className="p-8">
//               <h3 className="text-2xl bg-purple-300 text-black rounded-lg p-2 font-bold  mb-2">
//                 {singleJob.title}
//               </h3>
//               <div className="text-gray-700 text-lg font-bold mb-2">
//                 <span className="font-medium text-black">Description:</span>{" "}
//                 {singleJob.description}
//               </div>
//             </div>
//             <div className="p-8">
//               <div className="text-gray-700 mb-2">
//                 <span className="font-medium">Company:</span>{" "}
//                 {singleJob.companyName}
//               </div>
//               <div className="text-gray-700 mb-2">
//                 <span className="font-medium">Requirements:</span>{" "}
//                 {singleJob.requirements}
//               </div>
//               <div className="text-gray-700 mb-2">
//                 <span className="font-medium">Job Type:</span>{" "}
//                 {singleJob.jobType}
//               </div>
//               <div className="text-gray-700 mb-2">
//                 <span className="font-medium">Location Type:</span>{" "}
//                 {singleJob.locationType}
//               </div>
//               <div className="text-gray-700 mb-2">
//                 <span className="font-medium">Address:</span>{" "}
//                 {singleJob.address}
//               </div>
//               <div className="text-gray-700 mb-2">
//                 <span className="font-medium">City:</span> {singleJob.city}
//               </div>
//               <div className="text-gray-700 mb-2">
//                 <span className="font-medium">State:</span> {singleJob.state}
//               </div>
//               <div className="text-gray-700 mb-2">
//                 <span className="font-medium">Country:</span>{" "}
//                 {singleJob.country}
//               </div>
//               <div className="text-gray-700 mb-2">
//                 <span className="font-medium">Posted At:</span>{" "}
//                 {singleJob.createdAt}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default SingleJob;
