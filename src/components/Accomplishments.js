import React from "react";
import { Link } from "react-router-dom";
import "./Accomplishments.css";

const Accomplishments = () => {
  return (
    <div className="achsnip1217">
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
      <hr width="40%" color="#7490dc" />
      <h2 className="acchead">My ACCOMPLISHMENTS</h2>
      <hr width="40%" color="#7490dc" />
      <div className="main-container">
        <div className="achcards">
          <div className="card card-1">
            <h2 className="card__title">NSS Yuva Yodha Award, 2022.</h2>
            <p>
              I was awarded the NSS YUVA YODHA AWARD, 2022 on September 24, 2022
              on the occasion of National Service Scheme Day, 2022 by Krisha
              Foundation, Mumbai for outstanding service to the society during
              the year 2021-2022.
            </p>
          </div>
          <div className="card card-2 alternate-card">
            <h2 className="card__title">
              Director of Computer Programming, Team Vikasana
            </h2>
            <p>
              I was appointed as the Director of Computer Programming at Team
              Vikasana, the research and development team of Presidency
              University, Bangalore in the Second year of my Bachelor's Degree
              only after 4 months of my time with the team making me the
              youngest joining team lead apart from the co- founding team.
            </p>
          </div>
          <div className="card card-3">
            <h2 className="card__title">Most Active Teach-Up Educator.</h2>
            <p>
              I was awarded as the best Educator on August 15, 2022 on the
              occasion of Indian Independence day by the honorable chairman of
              Presidency Group of Institutions, Dr. Nissar Ahmed for leading a
              campaign initiated by the Department of Student of Affairs in
              collaboration with National Service Scheme Cell, Presidency
              University to teach students in government schools from class 1 to
              class 10 in various subjects like Mathematics, General and Social
              Sciences, English, Arts, Crafts and Sports. I led a team of 50
              volunteers to successfully conduct more than 250 classes while I
              myself conducted over 30 classes.
            </p>
          </div>
          <div className="card card-4 alternate-card">
            <h2 className="card__title">
              NSS Student Volunteer of the Year, 2022.
            </h2>
            <p>
              I was awarded the NSS YUVA YODHA AWARD, 2022 on September 24, 2022
              on the occasion of National Service Scheme Day, 2022 by Presidency
              University, Bengaluru for organizing the most ever community
              service campaigns in a single year [32].
            </p>
          </div>
          <div className="card card-5">
            <h2 className="card__title">National Service Scheme Leader.</h2>
            <p>
              I was appointed as the National Service Scheme Leader in the first
              2 months of working with the National Service Scheme cell,
              Presidency University, Bangalore making me the youngest NSS Leader
              ever in the cell's history of 7 years in my 1st year of study.
            </p>
          </div>
          <div className="card card-6 alternate-card">
            <h2 className="card__title">University Cricket Team Captain.</h2>
            <b>I was appointed the University Cricket Team Captain after being part of the team for 6 months in 3rd Year of my Bachelor's Degree.</b>
          </div>
          <div className="card card-7">
            <h2 className="card__title">Runner Up, VOIS Hackathon, Vodafone</h2>
            <p></p>
          </div>
          <div className="card card-8 alternate-card">
            <h2 className="card__title">Winner, GES Pitchers, IIT Kharagpur </h2>
            <p></p>
          </div>
          <div className="card card-9">
            <h2 className="card__title">Runner Up, Srishti Hackathon, BMSCE</h2>
            <p></p>
          </div>
          <div className="card card-10 alternate-card">
            <h2 className="card__title">Best Sustainability Hack, Centuriton, MSRIT</h2>
            <p></p>
          </div>
          <div className="card card-11">
            <h2 className="card__title">Second Runner Up, Anveshan, AIU</h2>
            <p></p>
          </div>
          <div className="card card-12 alternate-card">
            <h2 className="card__title">Runner Up, Anveshana, Government of Karnataka</h2>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accomplishments;
