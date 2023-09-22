import React from "react";

import { Route, Routes } from "react-router-dom";

import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import AboutMe from "./Pages/AboutMe";
import Projects from "./Pages/Project";
import NoMatch from './Pages/NoMatch.js';

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<AboutMe/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
