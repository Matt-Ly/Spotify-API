import React from "react";
import "../../styles/Experience.scss";
import APICard from "../components/APICard"; 
import SkillCard from "../components/SkillCard";
import { Fade } from "react-reveal";
import Navbar from "../components/Header";
// import download_icon from "../../static/media/download.svg";

const Experience = () => {
    return (
      <React.Fragment>
        <Navbar />
        <div className="background">
          <div className="experience">
            <h1 className="experience-title">Top 5 Songs</h1>
            <Fade bottom cascade>
              <div className="cards">

              <APICard
                  header="Test"
                  name="Test"
                  caption="Test"
                  company="Test"
                  year="Test"
                  // link="https://"
                />

              <APICard
                  header="Test"
                  name="Test"
                  caption="Test"
                  company="Test"
                  year="Test"
                  // link="https://"
                />

                <APICard
                  header="Test"
                  name="Test"
                  caption="Test"
                  company="Test"
                  year="Test"
                  // link="https://"
                />

                <APICard
                  header="Test"
                  name="Test"
                  caption="Test"
                  company="Test"
                  year="Test"
                  // link="https://"
                />

              </div>
            </Fade>
          </div>

          <div className="skills">
            <h1 className="skill-title">Top 10 Songs</h1>
            <Fade bottom cascade>
              <div className="skill-cards">
                <SkillCard
                  header="Test"
                  name="Test"
                  //caption="Resolved IT issues for Commonwealth employees."
                  //company="Office of the Governor"
                  //year="2018"
                  //link="https://"
                />

                <SkillCard
                  header="Test"
                  name="Test"
                  //caption="Resolved IT issues for Commonwealth employees."
                  //company="Office of the Governor"
                  //year="2018"
                  //link="https://"
                />

                <SkillCard
                  header="Test"
                  name="Test"
                  //caption="Resolved IT issues for Commonwealth employees."
                  //company="Office of the Governor"
                  //year="2018"
                  //link="https://"
                />

                <SkillCard
                  header="Test"
                  name="Test"
                  //caption="Resolved IT issues for Commonwealth employees."
                  //company="Office of the Governor"
                  //year="2018"
                  //link="https://"
                />
              </div>
            </Fade>
          </div>
        </div>
      </React.Fragment>
    );
  };
  
  export default Experience;
