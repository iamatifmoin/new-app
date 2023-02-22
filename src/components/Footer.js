import React from "react";
import "../styles/_footer.scss";

function Footer() {
  return (
    <footer>
      <div className="outer">
        <div className="left">
          <p>Desh Deepak Kushwaha</p>
          <div className="social">
            <a href="https://www.linkedin.com/in/desh-deepak-kushwaha-b65929254/">
              <div class="icons8-linkedin"></div>
            </a>
            <a href="https://github.com/DeshDeepakKushwaha">
              <div class="icons8-github"></div>
            </a>
          </div>
        </div>
        <div className="right">
          <p>Atif Moin</p>
          <div className="social">
            <a href="https://www.linkedin.com/in/atifmoin/">
              <div class="icons8-linkedin"></div>
            </a>
            <a href="https://github.com/iamatifmoin">
              <div class="icons8-github"></div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
