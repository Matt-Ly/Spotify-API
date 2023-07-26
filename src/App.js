// import { useState } from "react";
import React from "react";
import Experience from "./js/views/API";
import LandingPage from "./js/views/LandingPage";
import Hamburger from "./js/components/Hamburger";
// import AboutMe from "./js/views/AboutMe";
import { ParallaxProvider } from "react-scroll-parallax";
import "./styles/App.scss";
import { gsap } from "gsap";
// import { Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { NavLink } from "react-router-dom";
import Login from "./js/components/Login";
import Callback from "./js/components/Callback";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import UserProfile from "./js/components/UserProfile";


window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  let downloadButton = document.getElementById("download-button");

  // 20 is an arbitrary number here, just to make you think if you need the prevScrollpos variable:
  if (currentScrollPos > 20) {
    // I am using 'display' instead of 'top':
    document.getElementById("logo").style.top = "-50px";
  } else {
    document.getElementById("logo").style.top = "50px";
  }

  if (downloadButton && currentScrollPos > 20) {
    downloadButton.style.top = "-70px";
  } else if (downloadButton && currentScrollPos < 20) {
    downloadButton.style.top = "42px";
  }

  // console.log(window.screen.width, "HELLO");

  if (window.screen.width <= 1199 && window.screen.width > 575) {
    console.log("triggered");
    let navbar = document.getElementById("navbar");
    if (currentScrollPos > 20) {
      // I am using 'display' instead of 'top':
      navbar.style.top = "-70px";
    } else {
      navbar.style.top = "50px";
    }
  }

  if (window.screen.width <= 575) {
    let hamburger = document.getElementById("hamburger-menu");
    if (currentScrollPos > 20) {
      // I am using 'display' instead of 'top':
      hamburger.style.left = "-70px";
    } else {
      hamburger.style.left = "40px";
    }
  }
};

const pageTransition = (node) => {
  var tl = gsap.timeline();

  tl.to(".loading-screen", {
    duration: 1,
    width: "100%",
    left: "0%",
    ease: "Expo.InOut"  
  });

  tl.to(".loading-screen", {
    duration: 0.4,
    width: "100%",
    opacity: 0,
    left: "100%",
    ease: "Expo.In",
    delay: 0,
  });
  tl.set(".loading-screen", { left: "-100%", opacity: 1 });
};

const App = () => {
  const routes = [
    { path: "/", name: "landing", Component: LandingPage },
    { path: "/api", name: "api", Component: Experience },
    { path: "/", name: "login", Component: Login },
    { path: "/callback", name: "callback", Component: Callback },
    // { path: "/aboutme", name: "aboutme", Component: AboutMe },
  ];

  const onEnter = (node) => {
    gsap.from([node.children[0]], {
      duration: 1.5,
      right: "-50%",
      //width: "100%",
      //x: 0,
      delay: 0,
      ease: "power3.InOut",
      opacity: 0
    });
  };

  return (
    <React.Fragment>
      <div className="load-container">
        <div className="loading-screen"></div>
      </div>
      <div id="logo">
        <NavLink to="/" exact>
          <p></p>
        </NavLink>
      </div>
      {/* {window.screen.width < 768 && showScreen ? <GetALaptop /> : undefined} */}

      <Hamburger />

      <ParallaxProvider>
        <div className="App">
          {routes.map(({ path, name, Component }) => {
            return name === "aboutme" ? (
              <Route key={name} path={path} exact>
                {({ match }) => (
                  <CSSTransition
                    in={match !== null}
                    timeout={500}
                    classNames="page"
                    unmountOnExit
                    onEnter={onEnter}
                    onExit={pageTransition}
                  >
                    <div className="page">
                      <Component />
                    </div>
                  </CSSTransition>
                )}
              </Route>
            ) : ( 
              <Route key={name} path={path} exact>
                {({ match }) => (
                  <CSSTransition
                    in={match !== null}
                    timeout={500}
                    classNames="page"
                    unmountOnExit
                    onEnter={onEnter}
                    onExit={pageTransition}
                  >
                    <div className="page">
                      <Component />
                    </div>
                  </CSSTransition>
                )}
              </Route>
            );
          })}
        </div>
      </ParallaxProvider>
      
    </React.Fragment>  
  );
};


export default App;
