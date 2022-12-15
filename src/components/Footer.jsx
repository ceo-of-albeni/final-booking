import React from "react";
import "../styles/footer.css";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
// import { useNavigate } from "react-router-dom";

const Footer = () => {
  // const navigate = useNavigate();
  return (
    <footer className="pt-2">
      <div className="footer">
        <div>
          <p>© 2020 Международный Университет Ала-Тоо</p>
          <a href="https://www.instagram.com/alatoo.edu.kg/">
            <div className="icon icon-fill">
              <i
                style={{ marginLeft: "11px" }}
                className="fa-brands fa-instagram"></i>
            </div>
          </a>

          <a href="https://www.youtube.com/channel/UCRwPUKmeoiUausG3luv7d3Q">
            <div className="icon icon-enter">
              <i
                style={{ marginLeft: "8px" }}
                className="fa-brands fa-youtube"></i>
            </div>
          </a>

          <a href="https://www.facebook.com/AlaTooInternationalUniversity/">
            <div className="icon icon-collapse">
              <i
                style={{ marginLeft: "10px" }}
                className="fa-brands fa-facebook"></i>
            </div>
          </a>

          <a href="https://twitter.com/alatooedukg/">
            <div className="icon icon-rotate">
              <i
                style={{ marginLeft: "10px" }}
                className="fa-brands fa-twitter"></i>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
