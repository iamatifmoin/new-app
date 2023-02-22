import BlurredCircles from "../components/BlurredCircles";
import "../styles/_home.scss";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="index">
      <Navbar />
      <section className="hero">
        <div className="hero-body">
          <h1 className="heading">Welcome to Daily Bread</h1>.
          <img src="./images/food.jpg" alt="Food" className="foodImg"></img>
          <p className="title">
            Every portion of Food is very precious. We promise to deliver this
            precious stuff to needy person
          </p>
          <div className="btns-container">
            <button className="btn-large">I Want to Donate Foods</button>
            <button className="btn-large"> I want to Received Foods</button>
          </div>
        </div>

        <BlurredCircles />

        <div style={{ width: "100%", backgroundColor: "black" }}></div>
      </section>
    </div>
  );
}

export default Home;
