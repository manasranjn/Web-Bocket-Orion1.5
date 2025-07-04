import React, { useContext } from "react";
import Students from "./Students";
import { example } from "../App";

const AllStudents = () => {
  console.log(example);

  const name = useContext(example);

  console.log(name);

  return (
    <div>
      <h1>AllStudents</h1>
      <Students />
    </div>
  );
};

export default AllStudents;
