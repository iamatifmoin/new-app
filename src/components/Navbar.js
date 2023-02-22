import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src="./images/logo.png" alt="Logo"></img>
      </div>
      <div className="hamburger">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/contact">Contact Us</a>
        </li>
        <li>
          <button className="login-button" href="#">
            Login
          </button>
        </li>
        <li>
          <button className="join-button" href="#">
            Join
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
