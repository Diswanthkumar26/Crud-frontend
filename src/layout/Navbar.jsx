import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-blue-600 text-white">
      <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-10 py-3">
        <h1 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-0 text-center sm:text-left">
          Full Stack Application
        </h1>

        <div className="flex flex-col sm:flex-row items-center gap-2 w-[70%] sm:w-auto">
          <Link
            to="/"
            className="bg-transparent border border-white px-5 py-2 rounded-md text-white text-sm sm:text-base w-full sm:w-auto text-center hover:bg-white hover:text-blue-600 transition duration-200"
          >
            Home
          </Link>

          <Link
            to="/addUser"
            className="bg-transparent border border-white px-5 py-2 rounded-md text-white text-sm sm:text-base w-full sm:w-auto text-center hover:bg-white hover:text-blue-600 transition duration-200"
          >
            Add User
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
