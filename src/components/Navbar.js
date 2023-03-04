import React from "react";
// import "./Navbar.css";
import "../styles/_navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        {/* <div className="hamburger">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div> */}
        <div className="nav-outer">
          <div className="nav-links_left">
            <Link to="/" className="btn-one">
              Home
            </Link>
            {/* <Link to="/contact" className="btn-one">
              Contact Us
            </Link> */}
          </div>
          <div className="nav-links_right">
            <Link to="/about" className="btn-two">
              About Us
            </Link>
            {/* <Link className="login-button btn-two" to="/login">
              Login
            </Link>
            <Link className="join-button btn-two" to="/signup">
              Join
            </Link> */}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
