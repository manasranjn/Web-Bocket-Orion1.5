// import React from "react";

// const Example = (prop) => {
//   console.log(prop);

//   return (
//     <div>
//       <h1>Name: {prop.name}</h1>
//       <h2>Age: {prop.age}</h2>
//       <h2>Gender: {prop.gender}</h2>
//       <h2>State: {prop.state}</h2>
//       <h2>Country: {prop.country}</h2>
//     </div>
//   );
// };

// export default Example;

import React from "react";

const Example = () => {
  const obj = {
    name: "ABCD",
    age: 20,
    state: "Odisha",
  };
  console.log(obj);
  const { name, age, state } = obj;
  console.log(name, age, state);

  return <div>Example</div>;
};

export default Example;
