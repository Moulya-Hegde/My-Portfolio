import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import {Home,About,Projects,Contact,Certificates} from './Pages'

const App = () => {
  return (
    <Router>
      <main className="bg-[#121212]">
        <Navbar />
        <Routes className="flex-grow">
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/certificates" element={<Certificates />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
