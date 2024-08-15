import React, { useState } from 'react';
import './Connect.css';
import { Link } from "react-router-dom";

const Connect = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const getData = async (name, email, message) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, message })
    };
    const res = await fetch('https://tarun-c-reddy-default-rtdb.firebaseio.com/UserData.json', options);
    if (res.ok) {
      alert("Message Sent Successfully");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Error Occurred");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('All fields are required!');
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      alert('Please enter a valid email address!');
      return;
    }
    getData(formData.name, formData.email, formData.message);
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
      <h2 className="projhead">Connect with me!</h2>
      <hr width="30%" color="#7490dc" />
      <div className="connect-container">
        <div className="connect-form">
          <form method='POST' onSubmit={handleSubmit}>
            <input
              name="name"
              type="text"
              className="feedback-input"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              name="email"
              type="email"
              className="feedback-input"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <textarea
              name="message"
              className="feedback-input"
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
            <button className="submit" type="submit">SUBMIT</button>
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
