import React, { useEffect, useRef } from "react";
import "../../styles/SkillCard.scss";
import arrow from "../../static/media/forward.svg";
import gsap from "gsap";

const SkillCard = ({ header, name, caption, company, year, link }) => {
  let letter1 = useRef(null);
  let letter2 = useRef(null);
  let letter3 = useRef(null);
  let letter4 = useRef(null);
  let letter5 = useRef(null);
  let letter6 = useRef(null);

  let letterContent1 = header[0];
  let letterContent2 = header[1];
  let letterContent3 = header[2];
  let letterContent4 = header[3];
  let letterContent5 = header[4];
  let letterContent6 = header[5];

  useEffect(() => {
    gsap.from([letter1, letter2, letter3, letter4, letter5, letter6], 0.8, {
      delay: 1.5,
      ease: "power3.out",
      y: 200,
      stagger: {
        amount: 0.15,
      },
    });
  }, [letter1, letter2, letter3, letter4, letter5, letter6]);

  return (
    <React.Fragment>
      <div className="skill-card">
        <h1 className="title">
          <div ref={(el) => (letter1 = el)}>{letterContent1}</div>
          <div ref={(el) => (letter2 = el)}>{letterContent2}</div>
          <div ref={(el) => (letter3 = el)}>{letterContent3}</div>
          <div ref={(el) => (letter4 = el)}>{letterContent4}</div>
          <div ref={(el) => (letter5 = el)}>{letterContent5}</div>
          <div ref={(el) => (letter6 = el)}>{letterContent6}</div>
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

export default SkillCard;
