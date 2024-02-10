import React from 'react'
import ReactDOM from 'react-dom/client'
import { Flip, Slide, ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Login from './Components/Login/Login.jsx'
import SignUp from './Components/Ragistration/Ragistration.jsx'
import Profile from './Components/Profile/Profile.jsx'
import Admine from './Components/Admine/Admine.jsx';
import AdmineJob from './Components/Admine/AdmineJob.jsx';
import User from './Components/Admine/User.jsx';
import AdmineProfile from './Components/Admine/AdmineProfile.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='Ragistration' element={<SignUp />} />
      <Route path='profile' element={<Profile />} />
    </Route>
    <Route path='admine' element={<Admine/>}/>
    <Route path='admineJob' element={<AdmineJob/>}/>
    <Route path='user' element={<User/>}/>
    <Route path='admineProfile' element={<AdmineProfile/>}/>
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer
      position="top-center"
      autoClose={3000}
      limit={1}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
  </React.StrictMode>,
)
