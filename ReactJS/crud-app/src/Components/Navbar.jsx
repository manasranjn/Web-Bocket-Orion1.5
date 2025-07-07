import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-12 md:h-14 lg:h-18 xl:h-20 bg-gray-600 flex items-center justify-around text-white text-sm md:text-base lg:text-lg">
      <Link to="/">
        <button className="px-6 md:px-8 lg:px-10 py-2 md:py-3 rounded-md shadow-md bg-yellow-600 cursor-pointer hover:bg-yellow-400">
          Home
        </button>
      </Link>
      <Link to="/create-user">
        <button className="px-6 md:px-8 lg:px-10 py-2 md:py-3 rounded-md shadow-md bg-yellow-600 cursor-pointer hover:bg-yellow-400">
          Create User
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
