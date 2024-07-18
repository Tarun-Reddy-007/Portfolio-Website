import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import arrow icons
import "./Projects.css";

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // State to track current slide

  const slides = [
    "FINDEM - FAUNA INVASION DETECTION SYSTEM",
    "VRIDDHI - HANDICRAFTS MARKETPLACE",
    "AXLE MACHINES SHORT BLOGGING AND AUTOMATION TOOLS WEBSITE",
    "CNTA - CHILD NUTRITION TRACKING APP",
  ];

  const info = [
    "FINDEM - FARM INVASION DETECTION SYSTEM is a system built using Computer Vision, Machine Learning and Automation Techniques to guard Farms from the invasion and destruction of animals. It also helps commuters to be aware if there are wild animals in close vicinity during thier travel in forest roads.",
    "VRIDDHI - VRIDDHI which means being 'Self Dependent' is a handicrafts marketplace web application built to simplify the process of buying and selling handicrafts and hand made products online. The webiste aims to be very user- friendly and simple and easily navigable across verious options and features available which is built using React.js framework, Express.js, Node.js and PostgreSQL.",
    "AXLE MACHINES WEBSITE FOR BLOGGING AND AUTOMATION TOOLS - Axle machines is a website which displays the companys portfolio like completed projects, ongoing projects, a platform to post short blogs with a maximum character value of 1500, numerous automation tools that simplify or speeds up some of the iterative or cumbursome steps or procedures present in real world.",
    "CNTA - CHILD NUTRITION TRACKING APP is a web application built using React.js, Tailwind.css and mysqlite which uses machine learning techniques to predict malnutrition in children under the age of 6 years by using various factors like BMI, age, gender, mid-upper-arm-circumference, chest-circumference, head-circumference, etc and forwards your details to the nearest NRC-Nutritional Rehabilitation Center for further health procedures.",
  ];

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };
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
      <h2 className="projhead">Projects</h2>
      <hr width="30%" color="#7490dc" />
      <div className="slider-container">
        <div className="slide-content">{slides[currentSlide]}</div>
        <div className="slide-info">{info[currentSlide]}</div>
        <div className="slider-controls">
          <button
            className="slider-arrow"
            onClick={() => goToSlide(currentSlide - 1)}
            disabled={currentSlide === 0}
          >
            <FaArrowLeft />
          </button>
          <button
            className="slider-arrow"
            onClick={() => goToSlide(currentSlide + 1)}
            disabled={currentSlide === slides.length - 1}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
