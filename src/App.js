import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Profile from "./views/Profile";
import About from "./views/About";
import Contact from "./views/Contact";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Nopage from "./views/Nopage";
import Layout from "./components/Layout";
import { useState, useEffect } from "react";
import { AuthProvider } from "./AuthContext";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [timeActive, setTimeActive] = useState(false);
  // const isLoggedIn = window.localStorage.getItem("isLoggedIn");
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);
  return (
    <div className="App">
      <AuthProvider value={{ currentUser, timeActive, setTimeActive }}>
        <Routes>
          <Route
            index
            path="/"
            element={<Home loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
          ></Route>
          <Route
            exact
            path="/profile"
            element={<Profile loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
          />
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="*" element={<Nopage />}></Route>
        </Routes>
      </AuthProvider>
      <Layout loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
    </div>
  );
}

export default App;
