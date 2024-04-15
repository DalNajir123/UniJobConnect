import React from "react";
import Slider from "../../Slider";
import "./Home.css";
import { Link } from "react-router-dom";
import JobForHome from "./JobForHome";
import ScrollToTopButton from "../../Scrolluser";
import Feature from "./Feature";
import TopCompany from "./TopCompany";

const slide = ["./1.webp", "./2.webp","./3.jpg","./4.jpg","./5.jpg","./6.jpg"];

const HomePage = () => {
  return (
    <div className="bg-purple-200">
      <section className="bg-purple-300 text-white py-16 pt-3">
        <div className="text-center mb-8">
          <h1 className="animated-text ">
            <span className="shadow-xl  shadow-fuchsia-700  sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl">
              Explore Opportunities With Top Companies!
            </span>
          </h1>
        </div>

        <div className="flex justify-center items-center  ">
          <div className="w-[45%] ">
            <Slider autoSlide={true}>
              {slide.map((s, i) => (
                <img key={i} src={s} />
              ))}
            </Slider>
          </div>
        </div>
      </section>

      <Feature />

      <section className="bg-purple-400 text-white mt-12  py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            " Find Your Dream Jobs And Discover Your Next Career Move "
          </h2>
          <p className="text-lg mb-8">
            Browse through thousands of job listings and discover opportunities
            that match your skills.
          </p>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="mb-10 mt-10 p-10 pt-3 transition duration-1000 ease-in-out hover:bg-gradient-to-b hover:from-black hover:to-purple-600">
        <div className="container mx-auto">
          <JobForHome />
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
      <TopCompany />
      <section className="bg-purple-300 text-white mt-5 py-16 pt-3">
        <div className="text-center mb-8"> 
        </div>
      </section>

      <ScrollToTopButton/>
    </div>
  );
};

export default HomePage;
