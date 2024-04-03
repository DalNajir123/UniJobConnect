import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Logo from "../Logo/Logo";

export default function Header() {

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("Role");
    toast.success("Logout Successfully");
    navigate("/");
  };

  return (
    <header className="shadow sticky z-50 top-0 ">
      <nav className="border-gray-900  lg:px-6 py-4 bg-purple-600 text-white">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Logo />
          {/* header button link */}
          <div className="flex items-center lg:order-2">
            {token ? (
              <>
                <button
                  onClick={handleLogout}
                  className="text-white hover:bg-gray-300 hover:text-purple-950 focus:ring-4 focus:ring-gray-300 font-bold rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                >
                  Log out
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-white hover:bg-gray-300 hover:text-purple-950 focus:ring-4 focus:ring-gray-300  font-bold rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                >
                  Log in
                </Link>
                <Link
                  to="Ragistration"
                  className="text-white hover:bg-gray-300 hover:text-purple-950 focus:ring-4 focus:ring-gray-300 font-bold rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                >
                  Sign up
                </Link>
              </>
            )}
          </div>
          {/* header link in ui */}
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-purple-950" : "text-white"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 font-bold`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/jobs"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-purple-950" : "text-white"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 font-bold`
                  }
                >
                  Jobs
                </NavLink>
              </li>
              {token ? (
                <li>
                  <NavLink
                    to="/application"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-purple-950" : "text-white"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 font-bold`
                    }
                  >
                    Application
                  </NavLink>
                </li>
              ) : null}

              <li>
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-purple-950" : "text-white"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 font-bold`
                  }
                >
                  Profile
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
