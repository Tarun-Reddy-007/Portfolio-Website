import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Certifications.css";

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
      <h2 className="blogcert">My Certificates</h2>
      <hr width="30%" color="#7490dc" /><br/>
      <div className="gallery" id="gallery">
        <div className="gallery-item">
          <div className="content">
            <img src="https://i.imgur.com/tP0Xnbu.jpg" alt="" />
          </div>
        </div>
        <div className="gallery-item">
          <div className="content">
            <img src="https://i.imgur.com/bTy182E.jpg" alt="" />
          </div>
        </div>
        <div className="gallery-item">
          <div className="content">
            <img src="https://i.imgur.com/F7tEEMZ.jpg" alt="" />
          </div>
        </div>
        <div className="gallery-item">
          <div className="content">
            <img src="https://i.imgur.com/NEl3EpT.jpg" alt="" />
          </div>
        </div>
        <div className="gallery-item">
          <div className="content">
            <img src="https://i.imgur.com/73VojZt.jpg" alt="" />
          </div>
        </div>
        <div className="gallery-item">
          <div className="content">
            <img src="https://i.imgur.com/P1iXa0R.jpg" alt="" />
          </div>
        </div>
        <div className="gallery-item">
          <div className="content">
            <img src="https://i.imgur.com/7bxADdl.jpg" alt="" />
          </div>
        </div>
        <div className="gallery-item">
          <div className="content">
            <img src="https://i.imgur.com/CJPaGc5.png" alt="" />
          </div>
        </div>
        <div className="gallery-item">
          <div className="content">
            <img src="https://i.imgur.com/7TcFppA.png" alt="" />
          </div>
        </div>
        <div className="gallery-item">
          <div className="content">
            <img src="https://i.imgur.com/T8sjclG.jpg" alt="" />
          </div>
        </div>
        <div className="gallery-item">
          <div className="content">
            <img src="https://i.imgur.com/dgDaRFS.jpg" alt="" />
          </div>
        </div>
        <div className="gallery-item">
          <div className="content">
            <img src="https://i.imgur.com/p19SkJj.png" alt="" />
          </div>
        </div>
        <div className="gallery-item">
          <div className="content">
            <img src="https://i.imgur.com/vq3WrxD.jpg" alt="" />
          </div>
        </div>
        <div className="gallery-item">
          <div className="content">
            <img src="https://i.imgur.com/smrZJCm.jpg" alt="" />
          </div>
        </div>
        <div className="gallery-item">
          <div className="content">
            <img src="https://i.imgur.com/FhxJk0Y.png" alt="" />
          </div>
        </div>
        <div className="gallery-item">
          <div className="content">
            <img src="https://i.imgur.com/SrJBHGB.jpg" alt="" />
          </div>
        </div>
        <div className="gallery-item">
          <div className="content">
            <img src="https://i.imgur.com/zDfBJNc.png" alt="" />
          </div>
        </div>
        <div className="gallery-item">
          <div className="content">
            <img src="https://i.imgur.com/xBQwfXo.jpg" alt="" />
          </div>
        </div>
        <div className="gallery-item">
          <div className="content">
            <img src="https://i.imgur.com/NFzLikP.png" alt="" />
          </div>
        </div>
        <div className="gallery-item">
          <div className="content">
            <img src="https://i.imgur.com/FuIMdhu.jpg" alt="" />
          </div>
        </div>
        <div className="gallery-item">
          <div className="content">
            <img src="https://i.imgur.com/psna1sC.png" alt="" />
          </div>
        </div>
        <div className="gallery-item">
          <div className="content">
            <img src="https://i.imgur.com/A15SRvM.jpg" alt="" />
          </div>
        </div>
        <div className="gallery-item">
          <div className="content">
            <img src="https://i.imgur.com/nAcBhN4.png" alt="" />
          </div>
        </div>
        <div className="gallery-item">
          <div className="content">
            <img src="https://i.imgur.com/dVY6YjZ.png" alt="" />
          </div>
        </div>
        <div className="gallery-item">
          <div className="content">
            <img src="https://i.imgur.com/FrJJraq.jpg" alt="" />
          </div>
        </div>
        <div className="gallery-item">
          <div className="content">
            <img src="https://i.imgur.com/5NLO2Vk.jpg" alt="" />
          </div>
        </div>
        <div className="gallery-item">
          <div className="content">
            <img src="https://i.imgur.com/aHvCbFP.jpg" alt="" />
          </div>
        </div>
        <div className="gallery-item">
          <div className="content">
            <img src="https://i.imgur.com/Whw8Rre.jpg" alt="" />
          </div>
        </div>
        <div className="gallery-item">
          <div className="content">
            <img src="https://i.imgur.com/UiDNBiI.jpg" alt="" />
          </div>
        </div>
        <div className="gallery-item">
          <div className="content">
            <img src="https://i.imgur.com/I1Rvx89.jpg" alt="" />
          </div>
        </div>
        <div className="gallery-item">
          <div className="content">
            <img src="https://i.imgur.com/dr9ka87.jpg" alt="" />
          </div>
        </div>
        <div className="gallery-item">
          <div className="content">
            <img src="https://i.imgur.com/sTVGCyN.jpg" alt="" />
          </div>
        </div>
        <div className="gallery-item">
          <div className="content">
            <img src="https://i.imgur.com/SIzDQSs.jpg" alt="" />
          </div>
        </div>
        <div className="gallery-item">
          <div className="content">
            <img src="https://i.imgur.com/T18v7iP.jpg" alt="" />
          </div>
        </div>
        <div className="gallery-item">
          <div className="content">
            <img src="https://i.imgur.com/qhwG1bF.jpg" alt="" />
          </div>
        </div>
        <div className="gallery-item">
          <div className="content">
            <img src="https://i.imgur.com/GSaPasn.jpg" alt="" />
          </div>
        </div>
        <div className="gallery-item">
          <div className="content">
            <img src="https://i.imgur.com/9I0LGoq.png" alt="" />
          </div>
        </div>
        <div className="gallery-item">
          <div className="content">
            <img src="https://i.imgur.com/QusW1CU.jpg" alt="" />
          </div>
        </div>
        <div className="gallery-item">
          <div className="content">
            <img src="https://i.imgur.com/aykZs69.jpg" alt="" />
          </div>
        </div>
        <div className="gallery-item">
          <div className="content">
            <img src="https://i.imgur.com/Mh5lqWN.jpg" alt="" />
          </div>
        </div>
        <div className="gallery-item">
          <div className="content">
            <img src="https://i.imgur.com/Huz417H.jpg" alt="" />
          </div>
        </div>
        <div className="gallery-item">
          <div className="content">
            <img src="https://i.imgur.com/u9A3X5E.jpg" alt="" />
          </div>
        </div>
        <div className="gallery-item">
          <div className="content">
            <img src="https://i.imgur.com/zenqpSx.jpg" alt="" />
          </div>
        </div>
        <div className="gallery-item">
          <div className="content">
            <img src="https://i.imgur.com/r94vYX6.jpg" alt="" />
          </div>
        </div>
        <div className="gallery-item">
          <div className="content">
            <img src="https://i.imgur.com/dmNHp1K.jpg" alt="" />
          </div>
        </div>
        <div className="gallery-item">
          <div className="content">
            <img src="https://i.imgur.com/SMxP76d.png" alt="" />
          </div>
        </div>
        <div className="gallery-item">
          <div className="content">
            <img src="https://i.imgur.com/ZeR1c9h.jpg" alt="" />
          </div>
        </div>
        <div className="gallery-item">
          <div className="content">
            <img src="https://i.imgur.com/4x0EOBX.png" alt="" />
          </div>
        </div>
        <div className="gallery-item">
          <div className="content">
            <img src="https://i.imgur.com/g0srp11.png" alt="" />
          </div>
        </div>
        <div className="gallery-item">
          <div className="content">
            <img src="https://i.imgur.com/74tFQ4L.jpg" alt="" />
          </div>
        </div>
        <div className="gallery-item">
          <div className="content">
            <img src="https://i.imgur.com/xpVskSI.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
