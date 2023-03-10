import React, { useState } from "react";
import { auth } from "../firebase.js";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import "../styles/_signup.scss";
import { useAuthValue } from "../AuthContext";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const { setTimeActive } = useAuthValue();
  const history = useNavigate();
  const validatePassword = () => {
    let isValid = true;
    if (password !== "" && confirmPassword !== "") {
      if (password !== confirmPassword) {
        isValid = false;
        setError("Passwords does not match");
      }
    }
    return isValid;
  };
  const register = (e) => {
    e.preventDefault();
    setError("");
    if (validatePassword()) {
      // Create a new user with email and password using firebase
      createUserWithEmailAndPassword(auth, email, password).then(() => {
        sendEmailVerification(auth.currentUser)
          .then(() => {
            setTimeActive(true);
            history("/profile");
            window.localStorage.setItem("isLoggedIn", "true");
          })
          .catch((err) => alert(err.message));
      });
    }
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setPhoneNumber("");
  };
  return (
    <>
      <div className="index">
        <div className="auth">
          <h1>Register</h1>
          {error && <div className="auth__error">{error}</div>}
          <form onSubmit={register} name="registration_form">
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Enter your name"
              required
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              name="password"
              value={password}
              required
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <input
              type="password"
              value={confirmPassword}
              required
              placeholder="Confirm password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <input
              type="number"
              name="phoneNumber"
              value={phoneNumber}
              required
              placeholder="Enter your phone number"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <button type="submit">Register</button>
          </form>
          <span>
            Already have an account?
            <Link to="/login">login</Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Signup;
