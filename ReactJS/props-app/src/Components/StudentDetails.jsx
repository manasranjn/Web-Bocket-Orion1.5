import React from "react";
import Details from "./Details";

const StudentDetails = ({ name, age, state }) => {
  return (
    <div>
      <h1>Student Details</h1>
      <Details name={name} age={age} state={state} />
    </div>
  );
};

export default StudentDetails;
