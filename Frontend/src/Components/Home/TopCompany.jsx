import React from 'react';

function TopCompany() {
  return (
    <>
    <fieldset className="container text-black  hover:text-white hover:bg-opacity-50 bg-purple-300 hover:bg-indigo-400 mx-auto text-center rounded-lg border-4 border-zinc-800 mt-5">
    <legend className="text-5xl font-bold p-2 font-serif bg-purple-300  border-4 border-black rounded-xl transition transform duration-700">
    Top IT Company In India
      </legend>
    <div className=''> 
     <marquee direction="left" className="overflow-hidden">
      <div className='flex gap-10 p-8 font-extrabold italic'> 
      <h1 className='text-5xl p-4 shadow-xl shadow-red-500 rounded-xl text-green-500 bg-white'>Google</h1>
      <h1 className='text-5xl p-4 shadow-xl shadow-red-500 rounded-xl bg-white text-yellow-400'>Microsoft</h1>
      <h1 className='text-5xl p-4 shadow-xl shadow-red-500 rounded-xl text-sky-500 bg-white'>Facebook</h1>
      <h1 className='text-5xl p-4 shadow-xl shadow-red-500 rounded-xl bg-white text-amber-950'>Amazon</h1>
      <h1 className='text-5xl p-4 shadow-xl shadow-red-500 rounded-xl bg-white text-orange-400'>Infosys</h1>
      <h1 className='text-5xl p-4 shadow-xl shadow-red-500 rounded-xl bg-white text-rose-500'>Vipro</h1>
      </div>
     </marquee>
     </div>
     </fieldset>
    </>
  );
}

export default TopCompany;
