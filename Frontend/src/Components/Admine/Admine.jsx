import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Getjob from "./getJob";

function Admine() {
  const [darkmode, setDarkmode] = useState(false)
  const toggleDarkmode = () =>{
    setDarkmode(!darkmode)
  }
  return (
    <>
      <button onClick={toggleDarkmode}>Dark Mode</button>
      <Navbar />
      <div className={darkmode ? 'bg-zinc-900 text-white w-full h-[60vh] flex items-center justify-center' : "w-full h-[60vh] bg-purple-300 flex items-center justify-center text-zinc-800"}>
        <h1 className="text-3xl font-extrabold ">Admine Home</h1>
      </div>
      <Getjob />
      <Footer />
    </>
  );
}

export default Admine;
