import React, { useState } from "react";
import axios from "axios";
import Logo from "../Logo/Logo";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password != formData.confirmPassword) {
      toast.error("Enter Same Password");
      return;
    }
    try {
      const responce = await axios.post(
        "http://localhost:8080/user/sign-up",
        formData
      );
      // console.log(responce);
      if (responce.data.success == true) {
        toast.success(responce.data.message);
        navigate("/login");
      }
    } catch (error) {
      toast.error(error.response.data.errors[0].msg);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-purple-200">
      <div className="max-w-md w-full relative space-y-8 p-8 bg-purple-400  rounded-md">
        <form
          className=" mt-5 space-y-6 rounded shadow-md w-96"
          onSubmit={handleSubmit}
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mt-5"> 
            <Logo />
            Registration
          </h2>

          <div className="mb-4">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="FirstName"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="LastName"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Phone Number"
              minLength="10"
              maxLength="10"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
              minLength="8"
              maxLength="16"
              required
            />
          </div>

          <div className="mb-6">
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Confirm Password"
              minLength="8"
              maxLength="16"
              required
            />
          </div>

          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-bold rounded-md text-white bg-purple-600 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-900"
          >
            Register
          </button>
          <div>
            <h1 className="text-center text-slate-950 text-lg hover:text-white">
              Already Have Account ?{" "}
              <Link
                to="/login"
                className="text-white font-extrabold hover:text-2xl hover:text-slate-900"
              >
                Login
              </Link>
            </h1>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
