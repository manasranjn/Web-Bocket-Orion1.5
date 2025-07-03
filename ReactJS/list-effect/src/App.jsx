import React from "react";
import "./App.css";
import AllStudents from "./Components/AllStudents";
import Albums from "./Components/Albums";
import Reference from "./Components/Reference";
import Uncontrolled from "./Components/Uncontrolled";
import Controlled from "./Components/Controlled";

const App = () => {
  return (
    <div className="bg-slate-300">
      {/* <AllStudents /> */}
      {/* <Albums /> */}
      {/* <Reference /> */}
      {/* <Uncontrolled /> */}
      <Controlled />
    </div>
  );
};

export default App;
