import React from "react";
import StudentDetails from "./StudentDetails";

const AllStudents = ({ name, age, state }) => {
  return (
    <div>
      <h1>All Students</h1>
      <StudentDetails name={name} age={age} state={state} />
    </div>
  );
};

export default AllStudents;
