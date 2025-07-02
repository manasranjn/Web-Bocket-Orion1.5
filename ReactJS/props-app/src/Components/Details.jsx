import React from "react";

const Details = ({ name, age, state }) => {
  return (
    <div>
      <h1>Details</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>State: {state}</p>
    </div>
  );
};

export default Details;
