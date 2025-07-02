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

const Example = ({ name, age, state, country }) => {
  return (
    <div className="bg-green-400 text-gray-500 p-10 rounded-2xl shadow-lg">
      <h1 className="text-xl font-bold italic text-center underline uppercase">
        Name: {name}
      </h1>
      <h2>Age: {age}</h2>
      <h2>State: {state}</h2>
      <h2>Country: {country}</h2>
    </div>
  );
};

export default Example;
