import React from "react";
import { Link } from "react-router-dom";

const NavbarOut = () => {
  return (
    <nav>
      <div className="nav-outer">
        <div className="nav-links_left">
          <Link to="/" className="btn-one">
            Home
          </Link>
        </div>
        <div className="nav-links_right">
          <Link to="/about" className="btn-two">
            About Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarOut;
