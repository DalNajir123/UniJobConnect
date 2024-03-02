import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Getjob(props) {
  const [data, setData] = useState([]);
  const [updateFormData, setUpdateFormData] = useState({
    id: '',
    title: '',
    description: '',
    location: '',
    requirements: '',
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get("http://localhost:8080/job/get")
      .then(res => setData(res.data.data))
      .catch(err => console.log(err));
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/job/delete/${id}`)
      .then(() => {
        fetchData();
      })
      .catch(err => console.log(err));
  };

  const handleUpdate = (job) => {
    setUpdateFormData({
      id: job.id,
      title: job.title,
      description: job.description,
      location: job.location,
      requirements: job.requirements,
    });
  };

  const handleUpdateSubmit = () => {
    axios.put(`http://localhost:8080/job/update/${updateFormData.id}`, updateFormData)
      .then(() => {
        setUpdateFormData({
          id: '',
          title: '',
          description: '',
          location: '',
          requirements: '',
        });
        fetchData();
      })
      .catch(err => console.log(err));
  };

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
                  <th className='p-2 border'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((job, index) => (
                  <tr key={index} className='transition duration-300 hover:bg-gray-200'>
                    <td className='p-2 border'>{job.id}</td>
                    <td className='p-2 border'>{job.title}</td>
                    <td className='p-2 border'>{job.description}</td>
                    <td className='p-2 border'>{job.location}</td>
                    <td className='p-2 border'>{job.requirements}</td>
                    <td className='p-2 border'>
                      <button className='p-1 rounded-xl border-2 ml-10 mr-5 border-black' onClick={() => handleDelete(job.id)}>Delete</button>
                      <button className='p-1 rounded-xl border-2 border-black' onClick={() => handleUpdate(job)}>Update</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Update Form */}
        {updateFormData.id && (
          <div className='mt-3'>
            <h3 className='text-2xl font-semibold mb-2'>Update Job</h3>
            <form>
              <label>Title:</label>
              <input
                type='text'
                name='title'
                value={updateFormData.title}
                onChange={(e) => setUpdateFormData({ ...updateFormData, title: e.target.value })}
              />
              <label>Description:</label>
              <input
                type='text'
                name='description'
                value={updateFormData.description}
                onChange={(e) => setUpdateFormData({ ...updateFormData, description: e.target.value })}
              />
              <label>Location:</label>
              <input
                type='text'
                name='location'
                value={updateFormData.location}
                onChange={(e) => setUpdateFormData({ ...updateFormData, location: e.target.value })}
              />
              <label>requirements:</label>
              <input
                type='text'
                name='requirements'
                value={updateFormData.requirements}
                onChange={(e) => setUpdateFormData({ ...updateFormData, requirements: e.target.value })}
              />
              <button type='button' onClick={handleUpdateSubmit}>Update Job</button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}

export default Getjob;
