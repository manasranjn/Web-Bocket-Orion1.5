import React from "react";
import Example from "./Components/Example";
import "./App.css";
import AllStudents from "./Components/AllStudents";

const App = () => {
  return (
    <div className="grid grid-cols-3 gap-10 p-10">
      {/* <Example
        name="Rahul"
        age="20"
        gender="Male"
        state="Uttar Pradesh"
        country="India"
      />
      <Example
        name="Abhijit"
        age="19"
        gender="Male"
        state="Odisha"
        country="India"
      /> v
      <Example
        name="Riya"
        age="19"
        gender="Female"
        state="Uttar Pradesh"
        country="India"
      /> */}

      <AllStudents name="Rahul" age="20" state="Uttar Pradesh" />
    </div>
  );
};

export default App;
