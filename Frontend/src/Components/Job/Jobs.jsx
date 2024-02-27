import React from "react";
import Jobcard from "./Jobcard";

function Jobs() {
  return (
    <>
      <div className="bg-purple-200">
        <section className="bg-purple-400 text-white py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Find Your Dream Jobs</h2>
            <p className="text-lg mb-8">
              Browse through thousands of job listings and discover
              opportunities that match your skills.
            </p>
            <div className="max-w-md mx-auto">
              {/* Search Bar */}
              <div className="flex items-center border rounded overflow-hidden">
                <input
                  type="text"
                  placeholder="Search for jobs..."
                  className="w-full p-3 focus:outline-offset-2 from-fuchsia-950"
                />
                <button className="bg-blue-600 text-white p-3">Search</button>
              </div>
            </div>
          </div>
          <Jobcard/>
        </section>

        
      </div>
    </>
  );
}

export default Jobs;
