import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [salary, setSalary] = useState("");
  const [designation, setDesignation] = useState("");

  const [warning, setWarning] = useState("");
  const [failed, setFailed] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !company || !salary || !designation) {
      setWarning("All fields are required");
      return;
    }

    const data = {
      name: name,
      company: company,
      salary: salary,
      designation: designation,
    };
    axios
      .post("http://localhost:5000/employees", data)
      .then((res) => {
        console.log("Data Created");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setFailed("Something went wrong");
      });
  };

  return (
    <div className="h-screen bg-gray-300 flex justify-center items-center">
      <form className="flex flex-col gap-4 bg-slate-700 p-10 rounded-md shadiw-lg">
        <h1 className="text-center text-2xl text-green-500">Create User</h1>
        <input
          type="text"
          placeholder="Enter Your Name"
          className="px-4 py-3 rounded-md shadow bg-white outline-none border-none"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Company Name"
          className="px-4 py-3 rounded-md shadow bg-white outline-none border-none"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <input
          type="text "
          placeholder="Enter Your Salary"
          className="px-4 py-3 rounded-md shadow bg-white outline-none border-none"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Your Designation"
          className="px-4 py-3 rounded-md shadow bg-white outline-none border-none"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
        />
        <button
          className="px-4 py-3 rounded-md shadow bg-green-500 cursor-pointer text-white"
          onClick={handleSubmit}
        >
          Create User
        </button>
        {failed && <p className="text-red-500 text-center">{failed}</p>}
        {warning && <p className="text-red-500 text-center">{warning}</p>}
      </form>
    </div>
  );
};

export default CreateUser;
