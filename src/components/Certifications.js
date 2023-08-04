import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Certifications.css";
import cert1 from "./resources/cert1.png";
import cert2 from "./resources/cert2.jpg";
import cert3 from "./resources/cert3.jpg";
import cert4 from "./resources/cert4.jpg";
import cert5 from "./resources/cert5.png";
import cert6 from "./resources/cert6.png";
import cert7 from "./resources/cert7.jpg";
import cert8 from "./resources/cert8.png";
import cert9 from "./resources/cert9.jpg";
import cert10 from "./resources/cert10.png";
import cert11 from "./resources/cert11.jpg";
import cert12 from "./resources/cert12.png";
import cert13 from "./resources/cert13.png";
import cert14 from "./resources/cert14.png";
import cert15 from "./resources/cert15.jpg";
import cert16 from "./resources/cert16.jpg";
import cert17 from "./resources/cert17.jpg";
import cert18 from "./resources/cert18.jpg";
import cert19 from "./resources/cert19.png";
import cert20 from "./resources/cert20.png";
import cert21 from "./resources/cert21.jpg";
import cert22 from "./resources/cert22.png";
import cert23 from "./resources/cert23.jpg";
import cert24 from "./resources/cert24.png";
import cert25 from "./resources/cert25.jpg";
import cert26 from "./resources/cert26.png";
import cert27 from "./resources/cert27.jpg";
import cert28 from "./resources/cert28.jpg";
import cert29 from "./resources/cert29.jpg";
import cert30 from "./resources/cert30.jpg";
import cert31 from "./resources/cert31.jpg";
import cert32 from "./resources/cert32.jpg";
import cert33 from "./resources/cert33.jpg";
import cert34 from "./resources/cert34.jpg";
import cert35 from "./resources/cert35.jpg";
import cert36 from "./resources/cert36.jpg";
import cert37 from "./resources/cert37.jpg";
import cert38 from "./resources/cert38.jpg";
import cert39 from "./resources/cert39.jpg";
import cert40 from "./resources/cert40.jpg";
import cert41 from "./resources/cert41.jpg";
import cert42 from "./resources/cert42.jpg";
import cert43 from "./resources/cert43.jpg";
import cert44 from "./resources/cert44.jpg";
import cert45 from "./resources/cert45.jpg";
import cert46 from "./resources/cert46.jpg";
import cert47 from "./resources/cert47.jpg";
import cert48 from "./resources/cert48.jpg";
import cert49 from "./resources/cert49.jpg";
import cert50 from "./resources/cert50.jpg";
import cert51 from "./resources/cert51.jpg";

const Certifications = () => {
  useEffect(() => {
    const gallery = document.querySelector("#gallery");
    const getVal = (elem, style) =>
      parseInt(window.getComputedStyle(elem).getPropertyValue(style));
    const getHeight = (item) =>
      item.querySelector(".content").getBoundingClientRect().height;

    const resizeAll = () => {
      const altura = getVal(gallery, "grid-auto-rows");
      const gap = getVal(gallery, "grid-row-gap");
      gallery.querySelectorAll(".gallery-item").forEach((item) => {
        const el = item;
        el.style.gridRowEnd =
          "span " + Math.ceil((getHeight(item) + gap) / (altura + gap));
      });
    };

    const handleImageLoad = (item) => {
      const altura = getVal(gallery, "grid-auto-rows");
      const gap = getVal(gallery, "grid-row-gap");
      const gitem = item.parentElement.parentElement;
      gitem.style.gridRowEnd =
        "span " + Math.ceil((getHeight(gitem) + gap) / (altura + gap));
      item.classList.remove("byebye");
    };

    const handleImageClick = (item) => {
      item.classList.toggle("full");
    };

    window.addEventListener("resize", resizeAll);
    gallery.querySelectorAll("img").forEach((item) => {
      item.classList.add("byebye");
      if (item.complete) {
        handleImageLoad(item);
      } else {
        item.addEventListener("load", () => handleImageLoad(item));
      }
    });
    gallery.querySelectorAll(".gallery-item").forEach((item) => {
      item.addEventListener("click", () => handleImageClick(item));
    });

    return () => {
      window.removeEventListener("resize", resizeAll);
    };
  }, []);

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
      <h2 className="blogcert">My Certificates</h2>
      <hr width="30%" color="#7490dc" /><br/>
      <div class="gallery" id="gallery">
        <div class="gallery-item">
          <div class="content">
            <img src={cert1} alt="" />
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={cert2} alt="" />
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={cert3} alt="" />
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={cert4} alt="" />
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={cert5} alt="" />
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={cert6} alt="" />
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={cert7} alt="" />
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={cert8} alt="" />
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={cert9} alt="" />
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={cert10} alt="" />
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={cert11} alt="" />
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={cert12} alt="" />
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={cert13} alt="" />
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={cert14} alt="" />
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={cert15} alt="" />
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={cert16} alt="" />
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={cert17} alt="" />
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={cert18} alt="" />
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={cert19} alt="" />
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={cert20} alt="" />
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={cert21} alt="" />
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={cert22} alt="" />
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={cert23} alt="" />
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={cert24} alt="" />
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={cert25} alt="" />
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={cert26} alt="" />
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={cert27} alt="" />
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={cert28} alt="" />
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={cert29} alt="" />
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={cert30} alt="" />
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={cert31} alt="" />
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={cert32} alt="" />
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={cert33} alt="" />
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={cert34} alt="" />
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={cert35} alt="" />
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={cert36} alt="" />
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={cert37} alt="" />
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={cert38} alt="" />
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={cert39} alt="" />
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={cert40} alt="" />
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={cert41} alt="" />
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={cert42} alt="" />
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={cert43} alt="" />
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={cert44} alt="" />
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={cert45} alt="" />
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={cert46} alt="" />
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={cert47} alt="" />
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={cert48} alt="" />
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={cert49} alt="" />
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={cert50} alt="" />
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={cert51} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
