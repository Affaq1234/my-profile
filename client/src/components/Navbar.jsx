
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        Dev<span>Portfolio.</span>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
      </div>

      <a href="/#contact" className="nav-btn">
        Let's Talk ↗
      </a>

    </nav>
  );
}

export default Navbar;
