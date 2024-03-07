import React from "react";
import Slider from "../../Slider";
import "./Home.css";
import { Link } from "react-router-dom";

const slide = ["./1.webp", "./2.webp"];

const HomePage = () => {
  return (
    <div className="bg-purple-200">
      <section className="bg-purple-300 text-white py-16 pt-3">
        <div className="text-center mb-8">
          <h1 className="animated-text ">
            <span className="shadow-xl shadow-fuchsia-700">
              Explore Opportunities With Top Companies!
            </span>
          </h1>
        </div>

        <div className="flex justify-center items-center  ">
          <div className="w-[60%] ">
            <Slider autoSlide={true}>
              {slide.map((s, i) => (
                <img key={i} src={s} />
              ))}
            </Slider>
          </div>
        </div>
      </section>

      <section className="bg-purple-400 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Find Your Dream Jobs</h2>
          <p className="text-lg mb-8">
            Browse through thousands of job listings and discover opportunities
            that match your skills.
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
      </section>

      {/* Featured Jobs Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Featured Jobs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Job Card Component */}
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">Frontend Developer</h3>
              <p className="text-gray-700 mb-4">Company ABC</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Apply Now
              </button>
            </div>
            {/* Repeat similar cards for other featured jobs */}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      {localStorage.getItem("token") ? (
        ""
      ) : (
        <>
          <section className="bg-purple-400 text-white py-16">
            <div className="container mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-lg mb-8">
                Create an account or login to explore more job opportunities.
              </p>
              <div>
                <Link to="/Ragistration">
                  <button className="bg-white text-blue-500 py-3 px-6 rounded-full font-semibold hover:bg-blue-100">
                    Create Account
                  </button>
                </Link>
                <span className="mx-4">or</span>
                <Link to="/login">
                  <button className="bg-white text-blue-500 py-3 px-6 rounded-full font-semibold hover:bg-blue-100">
                    Login
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default HomePage;
