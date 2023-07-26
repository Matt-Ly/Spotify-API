import React, { useState } from "react";
import "../../styles/Header.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [currentPath] = useState(
    window.location.pathname.substring(1)
  );
  function returnStyle(linkName) {
    if (linkName === "home" && currentPath.length === 0) {
      return "selected";
    }

    if (linkName === currentPath) return "selected";
    else return "hover-div";
  }
  return (
    <div id="navbar">
      <NavLink to="/" exact>
        <div className={returnStyle("home")}>
          <p>Home</p>
        </div>
      </NavLink>

      <NavLink to="/api" exact>
        <div className={returnStyle("api")}>
          <p>API</p>
        </div>
      </NavLink>
      {/*<NavLink to="/aboutme" exact>
        <div className={returnStyle("aboutme")}>
          <p>about me</p>
        </div>
  </NavLink>*/}
    </div>
  );
};

export default Navbar;