import React from "react";
import "./Main.css";
import dp from "../../assets/dp.png";
import { Link } from "react-scroll";

const Main = () => {
  return (
    <div id="home" className="main">
      <img src={dp} alt="" />
      <h1>
        Hey there,<span>I’m Pratyush Basak</span>, a Full-Stack Software
        Developer.
      </h1>
      <p>
        Computer Science Engineering student specializing in full-stack
        development, passionate about building responsive and user-friendly web
        applications.
      </p>

      <div className="action">
        <div className="connect">
          <Link
            to="contact" // target section id
            smooth={true} // enable smooth scrolling
            duration={600} // animation duration in ms
            offset={-70} // adjust if navbar is fixed
          >
            Connect with me
          </Link>
        </div>
        <div className="cv">My Resume</div>
      </div>
    </div>
  );
};

export default Main;
