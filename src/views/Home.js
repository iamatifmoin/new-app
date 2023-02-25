import "../styles/_home.scss";

function Home() {
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
              <button className="btn-large">I Want to Donate Foods</button>
              <button className="btn-large"> I want to Received Foods</button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
