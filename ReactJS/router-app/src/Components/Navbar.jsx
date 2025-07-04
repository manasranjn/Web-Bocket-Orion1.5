import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center h-16 bg-slate-800 text-white px-10">
      <h1 className="text-2xl">Logo</h1>
      <ul className="flex gap-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
      </ul>
      <button
        className="px-4 py-2 rounded border-none cursor-pointer bg-green-500"
        onClick={() => navigate("/login")}
      >
        Login
      </button>
    </div>
  );
};

export default Navbar;
