import React, { createContext } from "react";
import "./App.css";
import AllStudents from "./Components/AllStudents";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import Login from "./Components/Login";
import Footer from "./Components/Footer";

export const example = createContext();

const App = () => {
  return (
    <div>
      {/* <h1>App</h1>
      <example.Provider value="Rahul">
        <AllStudents />
      </example.Provider> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
