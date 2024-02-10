import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function User() {
  return (
    <>
      <Navbar/>
      <div className='w-full h-[60vh] bg-purple-300 flex items-center justify-center'>
        <h1 className='text-zinc-800 text-3xl font-extrabold '>
            Handle All User Job-Aplication Here
        </h1>
      </div>
      <Footer/>
    </>
  )
}

export default User
