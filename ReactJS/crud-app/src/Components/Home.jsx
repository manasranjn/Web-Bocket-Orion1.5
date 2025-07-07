import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 md:p-10 lg:p-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 min-h-screen bg-gray-300">
      <div className="p-6 rounded shadow bg-slate-800 text-white h-52 md:h-60 max-h-64">
        <h1 className="text-sm md:text-lg lg:text-xl">Name</h1>
        <h1 className="text-sm md:text-lg lg:text-xl">Salary</h1>
        <h1 className="text-sm md:text-lg lg:text-xl">Company</h1>
        <h1 className="text-sm md:text-lg lg:text-xl">Designation</h1>
        <div className="flex justify-between items-center mt-5">
          <button
            className="px-5 md:px-8 lg:px-10 py-2 md:py-3 rounded shadow-lg cursor-pointer text-sm md:text-base bg-blue-400"
            onClick={() => navigate("/edit-user")}
          >
            Edit
          </button>
          <button className="px-5 md:px-8 lg:px-10 py-2 md:py-3 rounded shadow-lg cursor-pointer text-sm md:text-base bg-red-600">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
