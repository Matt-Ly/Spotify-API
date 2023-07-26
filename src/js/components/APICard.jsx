import React, { useEffect, useRef } from "react";
import "../../styles/APICard.scss";
import arrow from "../../static/media/forward.svg";
import gsap from "gsap";

const ExperienceCard = ({ header, name, caption, company, year, link }) => {
  let letter1 = useRef(null);
  let letter2 = useRef(null);

  let letterContent1 = header[0];
  let letterContent2 = header[1];

  useEffect(() => {
    gsap.from([letter1, letter2], 0.8, {
      delay: 1.5,
      ease: "power3.out",
      y: 200,
      stagger: {
        amount: 0.15,
      },
    });
  }, [letter1, letter2]);

  return (
    <React.Fragment>
      <div className="experience-card">
        <h1 className="title">
          <div ref={(el) => (letter1 = el)}>{letterContent1}</div>
          <div ref={(el) => (letter2 = el)}>{letterContent2}</div>
        </h1>
        <h2 className="name">{name}</h2>
        <h2 className="caption">{caption}</h2>
        <p className="company">{company}</p>
        <p className="year">{year}</p>
        {link ? (
          <img
            src={arrow}
            alt=""
            onClick={() => {
              window.location.href = link;
            }}
          />
        ) : null}
      </div>
    </React.Fragment>
  );
};

export default ExperienceCard;
