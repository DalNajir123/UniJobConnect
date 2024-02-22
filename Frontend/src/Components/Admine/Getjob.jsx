import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Getjob() {
    const [data,setData] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8080/job/get")
        .then(res => setData(res.data.data))
        // .then(res => console.log(res.data.data))
        .catch(err => console.log(err));
    },[])
  return (
    <>
      <div className='container'>
        <div className='mt-3'>
            <h3>Your Posted Job</h3>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Location</th>
                        <th>Requirements</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((jobs,index)=>{
                            return <tr key={index}>
                                <td>{jobs.id}</td>
                                <td>{jobs.title}</td>
                                <td>{jobs.description}</td>
                                <td>{jobs.location}</td>
                                <td>{jobs.requirements}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
      </div>
    </>
  )
}

export default Getjob
