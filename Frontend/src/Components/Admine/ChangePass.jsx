import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import Footer from './Footer';
import Navbar from './Navbar';

function ChangePass() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (newPassword !== confirmPassword) {
      toast.error("New password and confirm password do not match");
      return;
    }
    try {
      const headers = { Authorization: token };
      const response = await axios.post('http://localhost:8080/user/change-password', {
        currentPassword,
        newPassword,
        confirmPassword
      }, { headers });
      if (response.data.success === false) {
        toast.error(response.data.message);
      } else {
        toast.success(response.data.message);
        navigate("/profile");
      }
    } catch (error) {
      console.error(error);
    }

  };

  const togglePasswordVisibility = (field) => {
    switch (field) {
      case 'currentPassword':
        setShowCurrentPassword(!showCurrentPassword);
        break;
      case 'newPassword':
        setShowNewPassword(!showNewPassword);
        break;
      case 'confirmPassword':
        setShowConfirmPassword(!showConfirmPassword);
        break;
      default:
        break;
    }
  };

  return (
    <>
    <Navbar/>
    <div className="flex justify-center mt-8 mb-8">
      <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white shadow-lg shadow-sky-600 rounded-lg px-8 pt-6 pb-8">
        <h2 className="text-center text-2xl font-bold mb-4">Change Password</h2>
        <div className="mb-6">
          <label htmlFor="currentPassword" className="block text-gray-700 text-sm font-bold mb-2">
            Current Password
          </label>
          <div className="relative">
            <input
              type={showCurrentPassword ? "text" : "password"}
              id="currentPassword"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter current password"
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-700"
              onClick={() => togglePasswordVisibility('currentPassword')}
            >
              {showCurrentPassword ? <IoEyeOff /> : <IoEye />}
            </button>
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="newPassword" className="block text-gray-700 text-sm font-bold mb-2">
            New Password
          </label>
          <div className="relative">
            <input
              type={showNewPassword ? "text" : "password"}
              id="newPassword"
              minLength="8"
              maxLength="16"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter new password"
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-700"
              onClick={() => togglePasswordVisibility('newPassword')}
            >
              {showNewPassword ? <IoEyeOff /> : <IoEye />}
            </button>
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              minLength="8"
              maxLength="16"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Confirm new password"
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-700"
              onClick={() => togglePasswordVisibility('confirmPassword')}
            >
              {showConfirmPassword ? <IoEyeOff /> : <IoEye />}
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-sky-400 hover:bg-sky-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Change Password
          </button>
        </div>
      </form>
    </div>
    <Footer/>
    </>
  );

}

export default ChangePass;
