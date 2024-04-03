import React from "react";
import "./Feature.css"; // Import CSS file for animations

function Feature() {
  return (
    <fieldset className="container mx-auto text-center rounded-lg border-4 border-neutral-300 mt-10">
      <legend className="text-5xl font-bold font-serif text-black text-left"> Featured Of Dream Job Website</legend>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8">
        <div className="max-w-full h-[200px] animate-on-scroll">
          <img
            className="w-full h-full object-cover rounded-xl transition duration-300 transform hover:scale-105"
            src="./job-search.webp"
            alt=""
          />
        </div>
        <div className="max-w-full h-[200px] animate-on-scroll">
          <img
            className="w-full h-full object-cover rounded-xl transition duration-300 transform hover:scale-105"
            src="./jobNew.jpg"
            alt=""
          />
        </div>
        <div className="max-w-full h-[200px] animate-on-scroll">
          <img
            className="w-full h-full object-cover rounded-xl transition duration-300 transform hover:scale-105"
            src="./jobApply.jpg"
            alt=""
          />
        </div>
        <div className="max-w-full h-[200px] animate-on-scroll">
          <img
            className="w-full h-full object-cover rounded-xl transition duration-300 transform hover:scale-105"
            src="./online.jpg"
            alt=""
          />
        </div>
      </div>
    </fieldset>
  );
}

export default Feature;
