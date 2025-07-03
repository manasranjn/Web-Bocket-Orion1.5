import React from "react";

const AllStudents = () => {
  const students = [
    {
      name: "Rahul",
      age: 20,
    },
    {
      name: "Amit",
      age: 20,
    },
    {
      name: "Vivek",
      age: 20,
    },
    {
      name: "Barsha",
      age: 10,
    },
    {
      name: "Sucharuhasini",
      age: 20,
    },
  ];

  return (
    <div className="bg-slate-400 p-10 shadow-lg">
      <h1>All Students</h1>
      <div className="grid grid-cols-5 gap-10">
        {students.map((item) => (
          <div className="bg-white rounded-lg shadow p-10">
            <h1>{item.name}</h1>
            <h1>{item.age}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllStudents;
