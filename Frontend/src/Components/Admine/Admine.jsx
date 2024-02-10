import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Admine() {
  return (
    <>
      <Navbar/>
      <div className='w-full h-[60vh] bg-purple-300 flex items-center justify-center'>
        <h1 className='text-zinc-800 text-3xl font-extrabold '>
            Admine Home
        </h1>
      </div>
      <Footer/>
    </>
  )
}

export default Admine
