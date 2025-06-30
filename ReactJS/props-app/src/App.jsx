import React from "react";
import Example from "./Components/Example";

const App = () => {
  return (
    <div>
      <Example
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
      />
    </div>
  );
};

export default App;
