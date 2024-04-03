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
import Jobs from './Components/Job/Jobs.jsx';
import Application from './Components/Application/Application.jsx';
import PageNotFound from './PageNotFound.jsx';
import ProtectedRoutes from './ProtectedRoutes.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home/>} />
      <Route path='login' element={<Login />} />
      <Route path='Ragistration' element={<SignUp />} />
      <Route path='profile' element={<Profile />} />
      <Route path='Jobs' element={<Jobs />} />
      <Route path='application' element={<Application />} />
    </Route>
    
    <Route path='admine' element={<ProtectedRoutes Component={Admine} />}/>
    <Route path='admin-job' element={<ProtectedRoutes Component={AdmineJob} />}/>
    <Route path='user-application' element={<ProtectedRoutes Component={User} />}/>
    <Route path='admine-profile' element={<ProtectedRoutes Component={AdmineProfile} />}/>
    <Route path='pageNoteFound' element={<PageNotFound/>}/>
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
