import React, { useEffect, useState } from "react";
import axios from "axios";
import Login from "../Login/Login";
import { Link } from "react-router-dom";

function Profile() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const headers = { Authorization: token };
    axios
      .get("http://localhost:8080/user/self-data", { headers })
      .then((res) => {
        setData(res.data.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [token]);

  return (
    <>
    {token ? (
         <>
         <div className="flex items-center justify-center bg-gradient-to-r from-pink-400 via-blue-500 to-indigo-600">

    <div className="bg-white shadow-md rounded mt-4 px-8 pt-6 pb-7 mb-4 max-w-md mx-auto">
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Profile Information</h2>
        <hr className="mb-4"/>
        <div className="flex items-center mb-4">
          <img className="w-12 h-12 rounded-full mr-4" src="https://via.placeholder.com/150" alt="Profile" />
          <div>
            <p className="text-lg font-semibold">{data.firstName} {data.lastName}</p>
            <p className="text-gray-600">{data.email}</p>
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-700 mb-1">Bio:</p>
          <p className="text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget ligula eget sem ultrices fermentum eu et tellus.</p>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-2">Account Information</h2>
        <hr className="mb-4"/>
        <div className="mb-4">
          <p className="text-sm text-gray-700">Username:</p>
          <p className="text-gray-800 font-semibold">{data.firstName} {data.lastName}</p>
        </div>
        <div className="mb-4">
          <p className="text-sm text-gray-700">Email:</p>
          <p className="text-gray-800 font-semibold">{data.email}</p>
        </div>
        <div>
          <p className="text-sm text-gray-700">Phone:</p>
          <p className="text-gray-800 font-semibold">+91 {data.phone}</p>
        </div>
        <Link to="/change-password">
         <button className="bg-neutral-300 p-2 mt-2 rounded-lg transition transform duration-700 hover:scale-105 ">
           ChangePassword
         </button>
        </Link>
      </div>
    </div>
    </div>
    </>
      ) : (
        <Login />
      )}
    </>
  );
}

export default Profile;
