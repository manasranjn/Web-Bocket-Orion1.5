import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  const getEmployees = () => {
    axios
      .get("http://localhost:5000/employees")
      .then((res) => {
        console.log(res);
        setEmployees(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteUser = (id) => {
    axios
      .delete(`http://localhost:5000/employees/${id}`)
      .then((res) => {
        console.log(res);
        getEmployees();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getEmployees();
  }, []);

  // console.log(employees);

  return (
    <div className="p-6 md:p-10 lg:p-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 min-h-screen bg-gray-300">
      {employees.map((item) => (
        <div className="p-6 rounded shadow bg-slate-800 text-white h-52 md:h-60 max-h-64">
          <h1 className="text-sm md:text-lg lg:text-xl">Name : {item.name}</h1>
          <h1 className="text-sm md:text-lg lg:text-xl">
            Salary : {item.salary}
          </h1>
          <h1 className="text-sm md:text-lg lg:text-xl">
            Company : {item.company}
          </h1>
          <h1 className="text-sm md:text-lg lg:text-xl">
            Designation : {item.designation}
          </h1>
          <div className="flex justify-between items-center mt-5">
            <button
              className="px-5 md:px-8 lg:px-10 py-2 md:py-3 rounded shadow-lg cursor-pointer text-sm md:text-base bg-blue-400"
              onClick={() => navigate(`/edit-user/${item.id}`)}
            >
              Edit
            </button>
            <button
              className="px-5 md:px-8 lg:px-10 py-2 md:py-3 rounded shadow-lg cursor-pointer text-sm md:text-base bg-red-600"
              onClick={() => deleteUser(item.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
