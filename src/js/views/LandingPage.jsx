import { useState } from "react";
import React from "react";
import { Fade } from "react-reveal";
// import { NavLink } from "react-router-dom";
import Navbar from "../components/Header";
import Login from "../components/Login";
import "../../styles/Login.scss";
import "../../styles/LandingPage.scss";
import "../../styles/LoadingScreen.css";
// import Footer from "../components/Footer";
// import arrow_right from "../../static/media/arrow.svg";
import UserProfile from "../../js/components/UserProfile";

const LandingPage = () => {

  const [accessToken, setAccessToken] = useState(null);

  const handleAccessToken = (token) => {
      setAccessToken(token);
  }; 

  return (
    <React.Fragment>
      <div className="landing-page-parent">
      <Navbar />
          <Fade top>
            <h1 className="large-text-header">
              Spotify
            </h1>
          </Fade>
        <Fade cascade>
          <div className="landing-text-area">
            <div className="buttons">
              {accessToken ? (
                <UserProfile accessToken={accessToken} />
              ) : (
                <Login /> 
              )} 
            </div>
          </div>
        </Fade>
      </div>
    </React.Fragment>
  );
};

export default LandingPage;
