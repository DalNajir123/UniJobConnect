import React from "react";
import "./Feature.css"; // Import CSS file for animations

function Feature() {
  return (
    <fieldset className="container text-white  hover:text-black bg-opacity-50 bg-purple-300 hover:bg-violet-300 mx-auto text-center rounded-lg border-4 border-zinc-800 mt-10">
      <legend className="text-5xl font-bold font-serif text-left transition transform duration-700">
        Feature Of Dream Job Website
      </legend>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8">
        <div className="max-w-full h-[200px] animate-on-scroll relative">
          <img
            className="w-full h-full object-cover shadow-2xl shadow-purple-700 rounded-xl transition duration-300 transform hover:scale-105"
            src="./job-search.webp"
            alt=""
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 hover:opacity-100 bg-black bg-opacity-70 rounded-xl">
            <p className="text-white text-lg font-bold">'Job Search Find Your Dream Jobs And Discover Your Next Career Move '</p>
            <p className="text-white text-lg font-bold"></p>
          </div>
        </div>
        {/* <div className="max-w-full h-[200px] animate-on-scroll relative swipe-top-to-bottom">
  <img
    className="w-full h-full object-cover shadow-2xl shadow-purple-700 rounded-xl transition duration-300 transform hover:scale-105"
    src="./job-search.webp"
    alt=""
  />
  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50 rounded-xl">
    <p className="text-white text-lg font-bold">Job Search</p>
  </div>
</div> */}

        <div className="max-w-full h-[200px] animate-on-scroll relative">
          <img
            className="w-full h-full object-cover shadow-2xl shadow-purple-700 rounded-xl transition duration-300 transform hover:scale-105"
            src="./jobNew.jpg"
            alt=""
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 hover:opacity-100 bg-black bg-opacity-70 rounded-xl">
            <p className="text-white text-lg font-bold">Search New Jobs And Explore Exciting Job Opportunities With Dream Job!</p>
          </div>
        </div>
        <div className="max-w-full h-[200px] animate-on-scroll relative">
          <img
            className="w-full h-full object-cover shadow-2xl shadow-purple-700 rounded-xl transition duration-300 transform hover:scale-105"
            src="./jobApply.jpg"
            alt=""
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 hover:opacity-100 bg-black bg-opacity-70 rounded-xl">
            <p className="text-white text-lg font-bold">Apply to Your Dream Job with Just a Click. Access Thousands of Job Opportunities and Apply Online.</p>
          </div>
        </div>
        <div className="max-w-full h-[200px] animate-on-scroll relative">
          <img
            className="w-full h-full object-cover shadow-2xl shadow-purple-700 rounded-xl transition duration-300 transform hover:scale-105"
            src="./online.jpg"
            alt=""
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 hover:opacity-100 bg-black bg-opacity-70 rounded-xl">
            <p className="text-white text-lg font-bold">It Is A Online Platform For Connecting you to a world of opportunities, all from the comfort of your screen.</p>
          </div>
        </div>
      </div>
    </fieldset>
  );
}

export default Feature;
