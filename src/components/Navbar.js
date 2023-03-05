import React from "react";
// import "./Navbar.css";
import "../styles/_navbar.scss";
import NavbarOut from "./NavbarOut";
import NavbarIn from "./NavbarIn";

function Navbar(props) {
  if (props.loggedIn) {
    return (
      <NavbarIn loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn} />
    );
  } else {
    return <NavbarOut />;
  }
}

export default Navbar;
