import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Aboutme.css";
import me2 from "./resources/me2.jpeg";

const Aboutme = () => {

  const [activeSection, setActiveSection] = useState('skills');

  const renderContent = () => {
    switch (activeSection) {
      case 'skills':
        return (
          <div className="content-section">
            	<ul className="skills" >
              <li>Python</li>
              <li>Java</li>
              <li>Javascript</li>
              <li>MySQL</li>
              <li>Power BI</li>
              <li>Microsoft Excel</li>
              <li>Git/Github</li>
              <li>Unix Shell</li>
              <li>React.js</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Flask</li>
              <li>MongoDB</li>
              <li>Pandas</li>
              <li>Numpy</li>
              <li>Matplotlib</li>
              <li>Seaborn</li>
              <li>Scikit-Learn</li>
              <li>Tensorflow</li>
              <li>Pytorch</li>
              <li>OpenCV</li>
              <li>NLTK</li>
              <li>Beautiful Soup</li>
              <li>Firebase</li>
              <li>Azure</li>
              <li>Google Cloud</li>
              <li>Project Management</li>
              <li>Data Analysis</li>
              <li>Machine Learning</li>
              <li>Web Development</li>
              <li>Digital Marketing</li>
              <li>Trello</li>
            </ul>
          </div>
        );
        case 'leadership':
          return (
            <div className="content-section">
              <div className="leadership-experience">
                <div className="experience">
                  <div className="experience-header">
                    <span className="position">NSS Student Leader</span>
                    <span className="year">2021 - 2023</span>
                  </div>
                  <ul className="bullet-points">
                  <li>Conducted more than 30 offline and online events, programs and campaigns in 2 years of my tenure.</li>
                  <li>Awarded as the best student volunteer and social service award.</li>
                  <li>Led a team of over 50 to conduct more than 300 hours of teaching across 10 government schools in and around Bengaluru.</li>
                  </ul>
                </div>
                <div className="experience">
                  <div className="experience-header">
                    <span className="position">Computer Programming Head, Team Vikasana-R&I, Presidency University, Bengaluru</span>
                    <span className="year">2021 - 2023</span>
                  </div>
                  <ul className="bullet-points">
                    <li>Consistently met my short and long-term targets.</li>
                    <li>Proactively participated in meetings and helped create new practices.</li>
                    <li>Trained, coached, and supervised new staff members. </li>
                    <li>Pitched ideas on how to improve performance and efficiency.</li>
                    <li>Helped management to identify workflow issues and find solutions.</li>
                    <li>Supervised and delegated tasks to a team of 21 people.</li>
                  </ul>
                </div>
                <div className="experience">
                  <div className="experience-header">
                    <span className="position">University Cricket Team Captain</span>
                    <span className="year">2022 - 2023</span>
                  </div>
                  <ul className="bullet-points">
                    <li>Organized Fitness campaigns and Skill Development to scout Talen in and around the University.</li>
                    <li>Lead the team in various tournaments and practise matches.</li>
                  </ul>
                </div>
              </div>
            </div>
          );
      case 'work':
        return (
          <div className="content-section">
            <div className="leadership-experience">
                <div className="experience">
                  <div className="experience-header">
                    <span className="position">Digital Marketing Intern, Apponix Technologies</span>
                    <span className="year">Jan, 2021 - Apr, 2021</span>
                  </div>
                  <ul className="bullet-points">
                    <li>Analyzed website performance and effectively practiced SEO optimization.</li>
                    <li>Conducting market research to identify target audiences, competitors, and industry trends.</li>
                    <li>Assisting in creating and managing email marketing campaigns. This involves writing email copy, setting up email automation, and analyzing email performance.</li>
                  </ul>
                </div>
                <div className="experience">
                  <div className="experience-header">
                    <span className="position">Campus Ambassador, Bolt-IOT</span>
                    <span className="year">Nov, 2020 - Dec, 2020</span>
                  </div>
                  <ul className="bullet-points">
                    <li>Carried our peer-peer-marketing in the University and social media platforms to sell the Bolt-IOT develoment kit.</li>
                    <li>Created photos and videos about the product and shared them on social media platforms like LinkedIn, Instagram and Twitter.</li>
                  </ul>
                </div>
              </div>
          </div>
        );
      default:
        return null;
    }
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
      <section className="about-me-content">
        <div className="left-column">
          <img src="https://i.imgur.com/M0obdLg.jpg" className="profile-photo" />
          <div className="summary">
            <p style={{fontSize:"80%", fontWeight:"bold"}}>
              I am a skilled data scientist and software engineer with a passion for
              solving complex problems using innovative technologies. With a strong
              background in machine learning, computer vision, and data analysis, I
              excel in developing cutting-edge solutions to drive business growth and
              improve operational efficiency. My dedication to continuous learning and
              excellence in team collaboration has enabled me to contribute effectively
              to various projects and initiatives.
            </p>
          </div>
        </div>
        <div className="right-column">
      <div className="buttons">
        <button
          className={`button-paper ${activeSection === 'skills' ? 'selected' : ''}`}
          role="button"
          onClick={() => setActiveSection('skills')}
        >
          Skills
        </button>
        <button
          className={`button-paper ${activeSection === 'leadership' ? 'selected' : ''}`}
          role="button"
          onClick={() => setActiveSection('leadership')}
        >
          Leadership Experience
        </button>
        <button
          className={`button-paper ${activeSection === 'work' ? 'selected' : ''}`}
          role="button"
          onClick={() => setActiveSection('work')}
        >
          Work Experience
        </button>
      </div>
      {renderContent()}
    </div>
      </section>
    </div>
  );
};

export default Aboutme;
