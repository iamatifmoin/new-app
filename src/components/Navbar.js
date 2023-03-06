import React from "react";
import "../styles/_navbar.scss";
import NavbarOut from "./NavbarOut";
import NavbarIn from "./NavbarIn";

function Navbar(props) {
  // const isLoggedIn = window.localStorage.getItem("isLoggedIn");
  // console.log(isLoggedIn);

  if (props.loggedIn) {
    return (
      <NavbarIn loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn} />
    );
  } else {
    return <NavbarOut />;
  }
}

export default Navbar;
