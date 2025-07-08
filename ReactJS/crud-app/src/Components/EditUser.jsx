import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditUser = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [salary, setSalary] = useState("");
  const [designation, setDesignation] = useState("");
  const navigate = useNavigate();

  const params = useParams();
  // console.log(params.id);

  const getUser = () => {
    axios
      .get(`http://localhost:5000/employees/${params.id}`)
      .then((res) => {
        console.log(res.data);
        setName(res.data.name);
        setCompany(res.data.company);
        setSalary(res.data.salary);
        setDesignation(res.data.designation);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateUser = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      company: company,
      salary: salary,
      designation: designation,
    };
    axios
      .put(`http://localhost:5000/employees/${params.id}`, data)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="h-screen bg-gray-300 flex justify-center items-center">
      <form className="flex flex-col gap-4 bg-slate-700 p-10 rounded-md shadiw-lg">
        <h1 className="text-center text-2xl text-green-500">Update User</h1>
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
          onClick={updateUser}
        >
          Update User
        </button>
      </form>
    </div>
  );
};

export default EditUser;
