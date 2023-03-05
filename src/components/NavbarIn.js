import React from "react";
import { Link } from "react-router-dom";

const NavbarIn = () => {
  return (
    <nav>
      <div className="nav-outer">
        <div className="nav-links_left">
          <Link to="/" className="btn-one">
            Atif Moin
          </Link>
        </div>
        <div className="nav-links_right">
          <Link to="/" className="btn-two">
            Log Out
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarIn;
