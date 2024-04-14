import React, { useState } from 'react';
import axios from 'axios';

function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const token = localStorage.getItem("token");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const headers = { Authorization: token };
      const response = await axios.post('http://localhost:8080/user/change-password', {
        currentPassword,
        newPassword,
        confirmPassword
      },{ headers });
      // Handle success response
      console.log(response.data);
    } catch (error) {
      setError('Failed to change password. Please try again.');
      // Handle error response
      console.error(error);
    }
  };
  
return (
    <div className="flex justify-center mt-8">
      <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white shadow-md rounded-lg px-8 pt-6 pb-8">
        <h2 className="text-center text-2xl font-bold mb-4">Change Password</h2>
        <div className="mb-6">
          <label htmlFor="currentPassword" className="block text-gray-700 text-sm font-bold mb-2">
            Current Password
          </label>
          <input
            type="password"
            id="currentPassword"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter current password"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="newPassword" className="block text-gray-700 text-sm font-bold mb-2">
            New Password
          </label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter new password"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Confirm new password"
            required
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Change Password
          </button>
        </div>
      </form>
    </div>
  );
  
  
  
}

export default ChangePassword;
