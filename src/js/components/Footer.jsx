import React from "react";
import { Fade } from "react-reveal";
import "../../styles/Footer.scss";
import linkedin from "../../static/media/green-linkedin.svg";
import github from "../../static/media/green-github.svg";

const Footer = () => {
  return (
    <Fade right cascade>
      <div className="footer">
        <div
          key="linkedin"
          className="social-link"
          onClick={() => {
            window.open("https://www.linkedin.com/in/matthew-ly-447b77164/", '_blank');
          }}
        >
          <img src={linkedin} alt=""/>
        </div>

        <div
          key="github"
          className="social-link"
          onClick={() => {
            window.open("https://github.com/Matt-Ly", '_blank');
          }}
        >
          <img src={github} className="footer-img" alt=""/>
        </div>
      </div>
    </Fade>
  );
};

export default Footer;
