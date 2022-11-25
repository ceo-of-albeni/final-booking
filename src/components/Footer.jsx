import React from "react";
import "../styles/footer.css";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="fixed-bottom pt-2">
      <div className="footer">
        <div>
          <p>© 2020 Международный Университет Ала-Тоо</p>
          <div className="footer_links">
            <a href="https://www.valvesoftware.com/ru/about">
              <BsInstagram className="footer-icons" />
            </a>
            <a href="https://www.facebook.com/Steam">
              <BsYoutube className="footer-icons" />
            </a>
            <a href="https://twitter.com/steam">
              <BsTwitter className="footer-icons" />
            </a>
            <a href="https://partner.steamgames.com">
              <BsFacebook className="footer-icons" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
