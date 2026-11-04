
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./pages/About";
import Footer from "./components/Footer";
import ProjectsPage from "./pages/Projects";

import "./App.css";

function Home() {
  return (
    <>
      <Hero />
      <Projects />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
