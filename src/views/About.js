import React from "react";
import "../styles/_about.scss";
import Atif from "../assets/images/atif.jpg";

const About = () => {
  return (
    <>
      <div className="index">
        <section className="hero">
          <div className="hero-body">
            <div className="heading">
              <h1 className="title">About</h1>
              <p className="subtitle">
                One third of all food globally goes to waste.
                <br></br>
                <br></br>
                In India, 40% of the all food produced is wasted, which is
                equivalent to Rs. 92,000 crore.
                <br></br>
                Indian households waste 50 kilograms of food per person per year
                or 68,760,163 tonnes.
                <br></br>
                <br></br>
                Food and Agriculture Report states that India houses 195.9
                million undernourished people,
                <br></br>
                accounting for approximately 24% of the world’s hungry.
                <br></br>
                <br></br>
                <span>
                  Daily Bread aims to solve this problem by providing food to
                  the needy to help alleviate hunger.
                </span>
              </p>
            </div>
            <div className="creator-section">
              <h1 className="creators">Creators</h1>
              <div className="images">
                <div className="image">
                  <img src={Atif} className="image" alt="creator" />
                </div>
                <div className="image">
                  <img src={Atif} className="image" alt="creator" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
