import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Getjob() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/job/get")
      .then(res => setData(res.data.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <div className='container mx-auto'>
        <div className='mt-3'>
          <h3 className='text-2xl font-semibold mb-2'>Your Posted Job</h3>
          <div className='overflow-x-auto'>
            <table className='min-w-full table-auto border border-collapse hover:shadow-md transition duration-300'>
              <thead>
                <tr className='bg-gray-100'>
                  <th className='p-2 border'>Id</th>
                  <th className='p-2 border'>Title</th>
                  <th className='p-2 border'>Description</th>
                  <th className='p-2 border'>Location</th>
                  <th className='p-2 border'>Requirements</th>
                </tr>
              </thead>
              <tbody>
                {data.map((jobs, index) => (
                  <tr key={index} className='transition duration-300 hover:bg-gray-200'>
                    <td className='p-2 border'>{jobs.id}</td>
                    <td className='p-2 border'>{jobs.title}</td>
                    <td className='p-2 border'>{jobs.description}</td>
                    <td className='p-2 border'>{jobs.location}</td>
                    <td className='p-2 border'>{jobs.requirements}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Getjob;
