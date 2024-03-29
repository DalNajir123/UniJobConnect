import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Getjob from "./Getjob";

function Admine() {
  // const [darkmode, setDarkmode] = useState(false);

  // const toggleDarkmode = () => {
  //   setDarkmode(!darkmode);
  // };

  return (
    <>
      {/* <button onClick={toggleDarkmode}>Dark Mode</button> */}
      <Navbar />
      <div
        className="flex text-black min-h-[60vh]  items-center justify-center
        "
      >
        <div className="container mx-auto">
          <Getjob />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Admine;
