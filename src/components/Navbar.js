import React from "react";
// import "./Navbar.css";
import "../styles/_navbar.scss";

function Navbar() {
  return (
    <nav>
      {/* <div className="hamburger">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div> */}
      <div className="nav-outer">
        <div className="nav-links_left">
          <button href="#" className="btn-one">
            Home
          </button>
          <button href="#" className="btn-one">
            About
          </button>
          <button href="#" className="btn-one">
            Contact Us
          </button>
        </div>
        <div className="nav-links_right">
          <button className="login-button btn-two" href="#">
            Login
          </button>
          <button className="join-button btn-two" href="#">
            Join
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
