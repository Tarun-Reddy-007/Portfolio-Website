import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="snip1217">
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
      <div className="title">
        <h1>
          TARUN REDDY{" "}
          <div className="roller">
            <span id="rolltext">
              Data Science
              <br />
              Web Development
              <br />
              Project Management
              <br />
            </span>
          </div>
          <div className="buttons">
            <a
              href="https://drive.google.com/file/d/1Fz6ieamupxMaakhRyCw8Olc1hc7e3N5e/view?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
              className="pdf-button"
              style={{fontSize:"30%", color:"black", backgroundColor:"#7490dc", padding:"1%"}}
            >
              View Resume
            </a>
          </div>
        </h1>
        <img src="https://i.imgur.com/Yf6qeTj.png" alt="Profile"></img>
      </div>
    </div>
  );
};

export default Home;
