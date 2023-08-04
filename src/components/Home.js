import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import me1bg from "./resources/me1bg.png";

const Home = () => {
  return (
    <div class="snip1217">
      <nav>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Aboutme">About Me</Link>
          </li>
          <li>
            <Link to="/Accomplishments">Accomplishments</Link>
          </li>
          <li>
            <Link to="/Projects">Projects</Link>
          </li>
          <li>
            <Link to="/Certifications">Certifications</Link>
          </li>
          <li>
            <Link to="/connect">Connect</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
        </ul>
      </nav>
      <div class="title">
        <h1>
          TARUN REDDY{" "}
          <div class="roller">
            <span id="rolltext">
              Data Scientist
              <br />
              Web Development
              <br />
              Machine Learning Developer
              <br />
            </span>
          </div>
        </h1>
        <img src={me1bg}></img>
      </div>
    </div>
  );
};

export default Home;
