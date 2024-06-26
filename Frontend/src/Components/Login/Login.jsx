import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';
import { BsEyeSlash, BsEye } from 'react-icons/bs';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error('Please enter both email and password.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/user/login', { email, password });

      console.log(response);
      const role = response.data.data.role;
      localStorage.setItem('Role', role);

      // Handle the authentication result
      if (response.data.success == true) {
        if (role === 'candidate') {
          const name = response.data.data.firstName;
          toast.success(`Login Successful Welcome ${name}`);
          navigate('/');
          const token = response.data.data.token;
          localStorage.setItem('token', token);
          localStorage.setItem('name', name);
        } else {
          toast.success('Login Successful Welcome ');
          navigate('/admin');
          const token = response.data.data.token;
          localStorage.setItem('token', token);
        }
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error('Login Field Please Check Email or Password');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-200">
      <div className="max-w-md w-full space-y-8 p-8 bg-purple-400 rounded-md">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          <Logo />Login
        </h2>
        <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="text"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email"
            />
          </div>
          <div className="relative">
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm pr-10"
              placeholder="Password"
            />
            <div
              className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <BsEyeSlash className='text-gray-600 text-xl' /> : <BsEye className='text-gray-600 text-xl' />}
            </div>
          </div>
          <div>
            <button
              type="submit"
              onClick={handleLogin}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-bold rounded-md text-white bg-purple-600 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-900"
            >
              Login
            </button>
          </div>
          <div>
            <h1 className="text-center text-slate-950 text-sm hover:text-white">
              You Don't Have Account ?{' '}
              <Link to="/registration" className="text-white font-extrabold hover:text-xl hover:text-slate-900">
                Create Account
              </Link>
            </h1>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
