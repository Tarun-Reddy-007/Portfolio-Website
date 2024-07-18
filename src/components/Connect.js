import React, { useState } from 'react';
import { database } from 'C:/Users/deel/Desktop/portfolioweb/src/firebaseConfig.js'; 
import './Connect.css';
import { Link } from "react-router-dom";

const Connect = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      console.log('Form data:', formData);
  
      const response = await database.ref('formResponses').push(formData);
  
      console.log('Response from Firebase:', response);
  
      console.log('Form data successfully stored in Firebase');
  
      // Optionally, you can clear the form fields after submission
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error('Error storing form data:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
      <div className="connectheader">
        <h1>Connect with me!</h1>
      </div>
      <div className="connect-container">
        <div className="connect-form">
          <form onSubmit={handleSubmit}>
            <input
              name="name"
              type="text"
              className="feedback-input"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              name="email"
              type="text"
              className="feedback-input"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <textarea
              name="message"
              className="feedback-input"
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
            <button type="submit">SUBMIT</button>
          </form>
      </div>
      <div className="connect-icons">
        <ul>
          <li>
            <a className="facebook" href="https://www.facebook.com/tarun.reddy.5268750">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a className="linkedin" href="https://www.linkedin.com/in/tarun-c-reddy-04684b178/">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a className="instagram" href="https://www.instagram.com/tarunreddy_007/?hl=en">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a className="gmail" href="mailto:tarunreddy15112001@gmail.com">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a className="github" href="https://github.com/Tarun-Reddy-007">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a className="medium" href="https://medium.com/@tarunreddy007">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <i className="fa fa-medium" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Connect;
