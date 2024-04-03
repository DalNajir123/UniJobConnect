import React from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { TbLogout } from "react-icons/tb";

export default function Navbar() {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("Role");
        toast.success('Logout Successfully');
        navigate('/');
    };

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="border-gray-900 lg:px-6 py-4 bg-sky-500 text-white">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <h1 className="font-bold text-4xl font-serif italic">Admin Panel</h1>
                    <div className="flex items-center lg:order-2">
                        <button onClick={logout} className="text-white hover:bg-gray-300 hover:text-purple-950 focus:ring-4 focus:ring-gray-300 font-bold rounded-lg text-lg px-4 lg:px-4 py-2 lg:py-2.5 mr-2 focus:outline-none">
                            Logout
                        </button>
                        <TbLogout className="text-4xl" />
                    </div>
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 text-lg" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0 font-extrabold">
                            <li>
                                <NavLink
                                    to="/admine"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-purple-950 " : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-fuchsia-800 lg:p-0 `
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/admin-job"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-purple-950 " : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-fuchsia-800 lg:p-0 font-bold`
                                    }
                                >
                                    Jobs
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/user-application"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-purple-950" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-fuchsia-800 lg:p-0 font-bold`
                                    }
                                >
                                    User-Application
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/admine-profile"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-purple-950" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-fuchsia-800 lg:p-0 font-bold`
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
