import React from "react";
import { Link } from "react-router-dom";
import "./Aboutme.css";
import me2 from "./resources/me2.jpeg";

const Aboutme = () => {
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
      <div className="aboutme-card">
        <p>
          <span className="heading">ABOUT ME</span>
          <br />
          <br />A dynamic and driven individual with a track record of
          achievements spanning diverse fields. My journey has been marked by
          significant milestones, including orchestrating and managing two
          editions of the national-level Business Plan event "Sankalp," engaging
          over 800 participants in both 2021 and 2022. I have also conquered the
          heights of the mountains, completing a Mountaineering course at
          ABVIMAS, Manali, endorsed by the Government of Himachal Pradesh.My
          passion for leadership and public speaking led to my selection to
          deliver a compelling speech at the Lok Sabha on Mahatma Gandhi
          Jayanthi, an event graced by prominent figures, including Shri.
          Narendra Modi. Additionally, I have successfully organized over 30
          impactful events and campaigns during my tenure at the NSS Cell,
          Presidency University, Bangalore. I proudly led the Coding department
          at Team Vikasana, a research and Innovation Startup at my University,
          for three transformative years. Contributing to societal well-being, I
          led a team of 50 volunteers in the implementation of "TEACHUP," a
          program benefitting underprivileged students across 10 government
          schools. Through this initiative, we imparted knowledge in subjects
          ranging from Science and Mathematics to Computer Science and Arts. My
          accomplishments extend to the world of technology, where I clinched
          prizes in prestigious hackathons and research conventions, showcasing
          my innovation in projects such as the Farm Invasion Detection System
          (FINDEM) and the VRIDDHI E-Commerce platform for handicrafts. My
          commitment to sustainable solutions shines through in the development
          of applications like REW (RE-Waste) and CNTA (Child Nutrition Tracking
          App). Beyond my technical prowess, I've displayed exemplary leadership
          as the elected Captain of the University Cricket Team and Director of
          Programming for Team Vikasana. My role as a leader of the National
          Service Scheme Cell earned me recognition as the NSS Yuva Yodha of the
          Year. Consistently achieving and exceeding targets, I bring a
          proactive approach to my work, fostering innovation and efficiency.
          Through market research, email marketing campaigns, and SEO
          optimization, I've demonstrated my versatility in enhancing digital
          presence and engagement. As I continue on my journey, I am excited to
          channel my passion, skills, and experiences towards impactful
          endeavors that drive positive change.
        </p>
        <img src="https://i.imgur.com/M0obdLg.jpg" />
      </div>
    </div>
  );
};

export default Aboutme;
