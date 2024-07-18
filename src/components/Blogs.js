import React from "react";
import { Link } from "react-router-dom";
import "./Blogs.css";

const Blogs = () => {
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
      <hr width="30%" color="#7490dc" />
      <h2 className="bloghead">My Blogs</h2>
      <hr width="30%" color="#7490dc" />
      <div className="container">
        <div className="card">
          <div className="box">
            <div className="content">
              <h3>
                Transforming Agriculture with Machine Learning and Artificial
                Intelligence
              </h3>
              <a href="https://medium.com/@tarunreddy007/transforming-agriculture-with-machine-learning-and-artificial-intelligence-4142bdb6f363">Read More</a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="box">
            <div className="content">
              <h3>
                Empowering Wildlife Conservation through Computer Vision in
                Forests
              </h3>
              <a href="https://medium.com/@tarunreddy007/empowering-wildlife-conservation-through-computer-vision-in-forests-140c5bc9fafb">Read More</a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="box">
            <div className="content">
              <h3>Scope and Research Areas in Artificial Intelligence</h3>
              <a href="https://medium.com/@tarunreddy007/scope-and-research-areas-in-artificial-intelligence-f84ad7d97fdb">Read More</a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <div className="content">
              <h3>Computer Vision Revolutionizing the Agritech Industry</h3>
              <a href="https://medium.com/@tarunreddy007/computer-vision-revolutionizing-the-agritech-industry-5d1ea049be0f">Read More</a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <div className="content">
              <h3>Artificial Intelligence in Engineering</h3>
              <a href="https://medium.com/@tarunreddy007/artificial-intelligence-in-engineering-f83bf93c9b12">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
