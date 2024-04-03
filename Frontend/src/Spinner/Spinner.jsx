import React from "react";
import './Spinner.css'

function Spinner() {
  return (
    <>
    <div>
    <div className="flex justify-center items-center h-full">
      <div className="w-16 h-16 border-t-4 border-sky-500 rounded-full animate-spin-slow">
        <div className="w-14 h-14 border-t-4 border-red-500 rounded-full animate-spin-slow ">
          <div className="w-12 h-12 border-t-4 border-green-500 rounded-full animate-spin-slow ">
            <div className="w-10 h-10 border-t-4 border-black rounded-full animate-spin-slow "></div>
          </div>
        </div>
      </div>
    </div>
    <h1 className="text-3xl text-gray-700 font-semibold animate-pulse">Loading...</h1>

    </div>
    
    </>
  );
}

export default Spinner;

// import React from 'react';

// function Spinner() {
//   return (
//     <div className="flex justify-center items-center h-full">
//       <div className="relative w-12 h-12">
//         <div className="absolute inset-0 border-4 border-black rounded-full animate-spin"></div>
//         <div className="absolute inset-1 border-4 border-sky-600 rounded-full ">

//         </div>
//       </div>
//     </div>
//   );
// }

// export default Spinner;
