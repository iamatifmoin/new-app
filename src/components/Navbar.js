import React from "react";
// import "./Navbar.css";
import "../styles/_navbar.scss";
import {
  Outlet,
  Link,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from "../views/About";
import Contact from "../views/Contact";
import Login from "../views/Login";
import Signup from "../views/Signup";

function Navbar() {
  return (
    <>
      <nav>
        {/* <div className="hamburger">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div> */}
        <Router>
          <div className="nav-outer">
            <div className="nav-links_left">
              <Link to="/" className="btn-one">
                Home
              </Link>
              <Link to="/about" className="btn-one">
                About
              </Link>
              <Link to="/contact" className="btn-one">
                Contact Us
              </Link>
            </div>
            <div className="nav-links_right">
              <Link className="login-button btn-two" to="/login">
                Login
              </Link>
              <Link className="join-button btn-two" to="/signup">
                Join
              </Link>
            </div>
            <Routes>
              {/* <Route index element={<Home />}></Route> */}
              <Route exact path="about" element={<About />}></Route>
              <Route exact path="contact" element={<Contact />}></Route>
              <Route exact path="login" element={<Login />}></Route>
              <Route exact path="signup" element={<Signup />}></Route>
              {/* <Route exact path="*" element={<Nopage />}></Route> */}
            </Routes>
          </div>
        </Router>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
