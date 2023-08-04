import React from "react";
import { Link } from "react-router-dom";
import "./Blogs.css";

const Blogs = () => {
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
      <hr width="30%" color="#7490dc" />
      <h2 className="bloghead">My Blogs</h2>
      <hr width="30%" color="#7490dc" />
      <div class="container">
        <div class="card">
          <div class="box">
            <div class="content">
              <h3>
                Transforming Agriculture with Machine Learning and Artificial
                Intelligence
              </h3>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="box">
            <div class="content">
              <h3>
                Empowering Wildlife Conservation through Computer Vision in
                Forests
              </h3>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="box">
            <div class="content">
              <h3>Scope and Research Areas in Artificial Intelligence</h3>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="box">
            <div class="content">
              <h3>Computer Vision Revolutionizing the Agritech Industry</h3>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="box">
            <div class="content">
              <h3>Artificial Intelligence in Engineering</h3>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
