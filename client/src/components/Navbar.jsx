
import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        Dev<span>Portfolio.</span>
      </a>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
      </div>

      <a href="#contact" className="nav-btn">
        Let's Talk <span>↗</span>
      </a>
    </nav>
  );
}

export default Navbar;
