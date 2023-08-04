import React from "react";
import { Link } from "react-router-dom";
import "./Connect.css";

const Connect = () => {
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
      <div className="connectheader">
        <h1>Connect with me!</h1>
      </div>
      <div className="connect-container">
      <div className="connect-form">
      <form>
        <input
          name="name"
          type="text"
          class="feedback-input"
          placeholder="Name"
        />
        <input
          name="email"
          type="text"
          class="feedback-input"
          placeholder="Email"
        />
        <textarea
          name="text"
          class="feedback-input"
          placeholder="Message"
        ></textarea>
        <input type="submit" value="SUBMIT" />
      </form>
      </div>
      <div className="connect-icons">
        <ul>
          <li>
            <a class="facebook" href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a class="linkedin" href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a class="instagram" href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a class="gmail" href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <i class="fa fa-envelope" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a class="github" href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <i class="fa fa-github" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a class="medium" href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <i class="fa fa-medium" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Connect;
