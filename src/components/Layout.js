import React from "react";
import Navbar from "./Navbar";
import BlurredCircles from "./BlurredCircles";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <>
      <Navbar loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn} />
      <BlurredCircles />
      <Footer />
    </>
  );
};

export default Layout;
