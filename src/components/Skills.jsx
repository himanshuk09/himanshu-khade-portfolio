import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/CSS.png";
import JS from "../assets/JS.png";
import ES from "../assets/ES.png";
import TS from "../assets/TS.png";
import BOOTSTRAP from "../assets/BOOTSTRAP.png";
import REACT from "../assets/REACT.png";
import TAILWIND from "../assets/TAILWINDCSS.png";
import MUI from "../assets/MUI.png";
import NODE from "../assets/NODE.png";
import NEST from "../assets/NEST.png";
import EX from "../assets/EXPRESS.png";
import MONGODB from "../assets/MONGODB.png";
import POSTFRESQL from "../assets/POSTGRESQL.png";
import GIT from "../assets/GIT.png";
const Experience = () => {
  const Frontend = [
    { name: "HTML5", src: HTML, experiences: "Experienced", id: 0 },
    { name: "CSS3", src: CSS, experiences: "Experienced", id: 1 },
    { name: "JavaScript", src: JS, experiences: "Experienced", id: 2 },
    { name: "TypeScript", src: TS, experiences: "Intermediate", id: 3 },
    {
      name: "ES6",
      src: ES,
      experiences: "Intermediate",
      id: 4,
    },
    { name: "Bootstrap", src: BOOTSTRAP, experiences: "Intermediate", id: 5 },
    { name: "React JS", src: REACT, experiences: "Intermediate", id: 6 },
    { name: "Material UI", src: MUI, experiences: "Intermediate", id: 7 },
  ];

  const Backend = [
    { name: "Node JS", src: NODE, experiences: "Intermediate", id: 0 },
    { name: "Express JS", src: EX, experiences: "Intermediate", id: 1 },
    { name: "Nest JS", src: NEST, experiences: "Intermediate", id: 2 },
    { name: "MongoDB", src: MONGODB, experiences: "Intermediate", id: 3 },
    // { name: "PostgreSQL", src: POSTFRESQL, experiences: "Basic", id: 4 },
    { name: "Git", src: GIT, experiences: "Intermediate", id: 5 },
  ];
  return (
    <section id="experience">
      <p className="section__text__p1" data-aos="fade-up">
        Explore My
      </p>
      <h1 className="title" data-aos="fade-up">
        Skills
      </h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div
            className="details-container"
            data-aos="zoom-in-down"
            data-aos-duration="1000"
          >
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
              {Frontend.map((skill) => (
                <article
                  key={skill.id}
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  <img src={skill.src} alt="Experience icon" className="icon" />
                  <div>
                    <h3>{skill.name}</h3>
                    <p>{skill.experiences}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div
            className="details-container"
            data-aos="zoom-in-down"
            data-aos-duration="1000"
          >
            <h2 className="experience-sub-title">Backend Development</h2>
            <div className="article-container">
              {Backend.map((skill) => (
                <article
                  key={skill.id}
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  <img src={skill.src} alt="Experience icon" className="icon" />
                  <div>
                    <h3>{skill.name}</h3>
                    <p>{skill.experiences}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
      <img
        src={require("../assets/arrow.png")}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = "./#projects")}
      />
    </section>
  );
};

export default Experience;
