import React, { useRef } from "react";

const Reference = () => {
  const reference = useRef();
  console.log(reference);

  const handleChange = () => {
    reference.current.style.color = "red";
  };

  return (
    <div>
      <h1 ref={reference}>Reference</h1>
      <button onClick={handleChange}>Click</button>
    </div>
  );
};

export default Reference;
