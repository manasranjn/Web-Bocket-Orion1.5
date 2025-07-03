import React from "react";
import Counter from "./Components/Counter";
import "./App.css";
import InlineCSS from "./Components/InlineCSS";
import StyleObjectCSS from "./Components/StyleObjectCSS";
import GlobalCSS from "./Components/GlobalCSS";
import Example from "./Components/Example";

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Counter />
      <InlineCSS />
      <StyleObjectCSS />
      <GlobalCSS />
      <Example />
    </div>
  );
};

export default App;
