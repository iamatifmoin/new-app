// import BlurredCircles from "../components/BlurredCircles";
import "../styles/_home.scss";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
import Layout from "../components/Layout";

function Home() {
  return (
    <div className="index">
      <Layout />
      <section className="hero">
        <div className="hero-body">
          <div className="heading">
            <h1 className="title">Daily Bread</h1>
            <p className="subtitle">Getting food to the needy.</p>
          </div>
          <div className="btns-container">
            <button className="btn-large">I Want to Donate Foods</button>
            <button className="btn-large"> I want to Received Foods</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
