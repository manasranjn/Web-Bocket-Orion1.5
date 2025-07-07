import React from "react";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-gray-300 flex justify-center items-center">
      <form className="flex flex-col gap-4 bg-slate-700 p-10 rounded-md shadiw-lg">
        <h1 className="text-center text-2xl text-green-500">Create User</h1>
        <input
          type="text"
          placeholder="Enter Your Name"
          className="px-4 py-3 rounded-md shadow bg-white outline-none border-none"
        />
        <input
          type="text"
          placeholder="Enter Company Name"
          className="px-4 py-3 rounded-md shadow bg-white outline-none border-none"
        />
        <input
          type="text "
          placeholder="Enter Your Salary"
          className="px-4 py-3 rounded-md shadow bg-white outline-none border-none"
        />
        <input
          type="text"
          placeholder="Enter Your Designation"
          className="px-4 py-3 rounded-md shadow bg-white outline-none border-none"
        />
        <button
          className="px-4 py-3 rounded-md shadow bg-green-500 cursor-pointer text-white"
          onClick={() => navigate("/")}
        >
          Create User
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
