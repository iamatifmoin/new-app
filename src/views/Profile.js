import React from "react";
import "../styles/_profile.scss";

const Profile = (props) => {
  props.setLoggedIn(true);
  return (
    <>
      <div className="index">Index</div>
    </>
  );
};

export default Profile;
