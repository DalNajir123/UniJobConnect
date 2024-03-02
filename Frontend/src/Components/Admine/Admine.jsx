import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Getjob from "./Getjob";

function Admine() {
  const [darkmode, setDarkmode] = useState(false);

  const toggleDarkmode = () => {
    setDarkmode(!darkmode);
  };

  return (
    <>
      <button onClick={toggleDarkmode}>Dark Mode</button>
      <Navbar />
      <div
        className={
          darkmode
            ? "bg-zinc-900 text-white min-h-[60vh] flex items-center justify-center"
            : "min-h-[60vh] bg-sky-100 flex items-center justify-center text-zinc-800"
        }
      >
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-6">NAJIR</h1>
          <Getjob />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Admine;
