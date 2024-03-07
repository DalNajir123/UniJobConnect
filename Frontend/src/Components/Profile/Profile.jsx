// Profile.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import Login from "../Login/Login";
import "./Profile.css";

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
        <div className={`profile-container ${loading ? 'pulse' : 'fadeIn'}`}>
          <div className="profile-card">
            <h2 className="profile-title">User Profile</h2>
            <div className="profile-info">
              <strong>ID:</strong> {data.id}
            </div>
            <div className="profile-info">
              <strong>Name:</strong> {data.firstName} {data.lastName}
            </div>
            <div className="profile-info">
              <strong>Email:</strong> {data.email}
            </div>
            <div className="profile-info">
              <strong>Phone:</strong> {data.phone}
            </div>
            <div className="profile-info">
              <strong>Role:</strong> {data.role}
            </div>
            <div className="profile-info">
              <strong>Created At:</strong> {data.createdAt}
            </div>
            <div className="profile-info">
              <strong>Updated At:</strong> {data.updatedAt}
            </div>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}

export default Profile;
