import BlurredCircles from "../components/BlurredCircles";
import "../styles/_home.scss";

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-body">
          <h1 className="title">Name</h1>
        </div>
        {/* <div className="btns-container">
          <a className="button">Student Registration</a>

          <a className="button">Mentor Registration</a>
        </div> */}

        <BlurredCircles />
        <div style={{ width: "100%", backgroundColor: "black" }}></div>
      </section>
    </div>
  );
}

export default Home;
