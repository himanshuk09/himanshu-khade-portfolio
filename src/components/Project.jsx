import React, { useRef } from "react";
import HotCoffee from "../assets/HotCoffee.png";
import Taskify from "../assets/Taskify.png";
import TimeSync from "../assets/TimeSync.jpg";
import FoodApp from "../assets/FoodApp.png";
import UrlShortner from "../assets/UrlShortner.png";
import Unichat from "../assets/Unichat.png";
import Explorify from "../assets/Explorify.jpg";

const Project = () => {
  const project = [
    {
      imageUrl: Explorify,
      projectName: "Explorify App",
      id: 0,
      live: "https://explorify-hub.vercel.app/",
      githubLink: "https://github.com/himanshuk09/Explorify",
    },
    {
      imageUrl: TimeSync,
      projectName: "TimeSync App",
      id: 3,
      live: "https://github.com/himanshuk09/TimeSync-fe",
      githubLink: "https://github.com/himanshuk09/TimeSync-fe",
    },
    {
      imageUrl: HotCoffee,
      projectName: "Hot Coffee App",
      id: 1,
      live: "https://hotcoffee-hk.netlify.app/",
      githubLink: "https://github.com/himanshuk09/Hot-Coffee",
    },
    {
      imageUrl: Taskify,
      projectName: "Taskify App",
      id: 2,
      live: "https://taskify-app-hk.netlify.app/",
      githubLink: "https://github.com/himanshuk09/Taskify",
    },

    {
      imageUrl: UrlShortner,
      projectName: " Url  Shortner App",
      id: 4,
      live: "https://github.com/himanshuk09/URL-Shortener-main",
      githubLink: "https://github.com/himanshuk09/URL-Shortener-main",
    },
    {
      imageUrl: FoodApp,
      projectName: "Food Ordering App",
      id: 5,
      live: "https://github.com/himanshuk09/Food-App/",
      githubLink: "https://github.com/himanshuk09/Food-App/",
    },
    {
      imageUrl: Unichat,
      projectName: "UniChat App",
      id: 7,
      live: "https://unichatapp1234.netlify.app/",
      githubLink: "https://github.com/himanshuk09/Unichat-App",
    },
  ];

  const cardsRef = useRef(null);

  const handleLeftClick = () => {
    if (cardsRef.current) {
      cardsRef.current.scrollLeft += 140;
    }
  };

  const handleRightClick = () => {
    if (cardsRef.current) {
      cardsRef.current.scrollLeft -= 140;
    }
  };

  return (
    <section id="projects">
      <p className="section__text__p1" data-aos="fade-up">
        Browse My Recent
      </p>
      <h1 className="title" data-aos="fade-up">
        Projects
      </h1>
      <div className="experience-details-container">
        <div className="arrows">
          <i
            className="ri-arrow-left-s-line ri-4x iconColor left"
            onClick={handleLeftClick}
          ></i>
        </div>
        <div className="about-containers  sliderDiv" ref={cardsRef}>
          {project.map((pro) => (
            <div
              key={pro.id}
              className="details-container color-container card"
              data-aos="zoom-in-down"
            >
              <div className="article-container">
                <img
                  src={pro.imageUrl}
                  alt={pro.projectName}
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">
                {pro.projectName}
              </h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => (window.location.href = pro.githubLink)}
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => (window.location.href = pro.live)}
                >
                  Live Demo
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="arrows">
          <i
            className="ri-arrow-right-s-line ri-4x iconColor right"
            onClick={handleRightClick}
          ></i>
        </div>
      </div>
      <img
        src={require("../assets/arrow.png")}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = "./#contact")}
      />
    </section>
  );
};

export default Project;
