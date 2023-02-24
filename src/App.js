import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Nopage from "./views/Nopage";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="*" element={<Nopage />}></Route>
        </Routes>
      </Router>
      <Layout />
    </div>
  );
}

export default App;
