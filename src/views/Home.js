import "../styles/_home.scss";
import { Link } from "react-router-dom";

function Home(props) {
  props.setLoggedIn(false);
  // window.localStorage.setItem("isLoggedIn", "false");

  return (
    <>
      <div className="index">
        <section className="hero">
          <div className="hero-body">
            <div className="heading">
              <h1 className="title">Daily Bread</h1>
              <p className="subtitle">Getting food to the needy.</p>
            </div>
            <div className="btns-container">
              <Link to="/login" className="btn-large">
                Login
              </Link>
              <Link to="/signup" className="btn-large">
                Join
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
