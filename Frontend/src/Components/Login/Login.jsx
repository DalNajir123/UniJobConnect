import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import axios from 'axios';
import { toast } from 'react-toastify'
import { useNavigate, Link } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error('Please enter both email and password.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/user/login', { email, password });

      // Handle the authentication result
      if (response.data.success == true){
          if (response.data.data.role == "candidate"){
            toast.success('Login Successful Welcome ');
            navigate('/')
            console.log(response.data.data.token);
            localStorage.setItem(response.data.data, response.data.data.token)
          }else{
            toast.success('Login Successful Welcome ');
            navigate('/admine')
            console.log(response.data.data.token);
            localStorage.setItem(response.data.data, response.data.data.token)
          }
        }
       else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error('Login Field Please Check Email or Password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-200">
      <div className="max-w-md w-full space-y-8 p-8 bg-purple-400  rounded-md">

        <h2 className="text-3xl font-bold text-center text-gray-800"><Logo />Login</h2>
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
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
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
            <h1 className='text-center text-slate-950 text-sm hover:text-white'>You Don't Have Account ? <Link to="/Ragistration" className='text-white font-extrabold hover:text-xl hover:text-slate-900'>Create Accoount</Link></h1>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
