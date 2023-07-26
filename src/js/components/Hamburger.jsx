import React, { useState } from "react";
import { Fade } from "react-reveal";
import hamburger from "../../static/media/hamburger.svg";
import "../../styles/Hamburger.scss";
import { NavLink } from "react-router-dom";

const Hamburger = () => {
  const [showLinks, setShowLinks] = useState(false);

  function openMenu() {
    console.log(document.getElementById("fullscreen").style.width);
    document.getElementById("fullscreen").style.width = "100%";
    setShowLinks(true);
  }
  function closeMenu() {
    document.getElementById("fullscreen").style.width = "0%";
    setTimeout(() => {
      setShowLinks(false);
    }, 500);
  }

  return (
    <React.Fragment>
      {showLinks ? undefined : (
        <Fade>
          <div
            id="hamburger-menu"
            onClick={() => {
              openMenu();
            }}
          >
            <img src={hamburger} alt=""></img>
          </div>
        </Fade>
      )}

      <div id="fullscreen">
        <p
          className="close"
          onClick={() => {
            closeMenu();
          }}
        >
          Close
        </p>
        {showLinks ? (
          <Fade top cascade>
            <div className="link-section">
              <h1
                className="link"
                onClick={() => {
                  closeMenu();
                }}
              >
                <NavLink to="/" exact>
                  Home
                </NavLink>
              </h1>

              <h1
                className="link"
                onClick={() => {
                  closeMenu();
                }}
              >
                <NavLink to="/experience" exact>
                  Experience
                </NavLink>
              </h1>

              <h1
                className="link"
                onClick={() => {
                  closeMenu();
                }}
              >
                <NavLink to="/aboutme" exact>
                  About
                </NavLink>
              </h1>
              <h1
                className="link"
                onClick={() => {
                  window.location.href = "mailto:mattlyldc21@gmail.com";
                }}
              >
                Contact
              </h1>
            </div>
          </Fade>
        ) : undefined}

        <div className="footer-menu">
          {/* <div
            key="linkedin"
            className="social-link"
            onClick={() => {
              window.location.href =
                "https://www.linkedin.com/";
            }}
          >
            <div className="linkedin svg"></div>
          </div> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Hamburger;
