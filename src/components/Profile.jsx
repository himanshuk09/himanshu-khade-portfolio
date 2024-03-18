import React from "react";

const Profile = () => {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img
          src={require("../assets/himu-profile.jpg")}
          alt="himanshu-khade-pic"
          id="profile-logo"
          data-aos="fade-right"
          data-aos-delay="50"
        />
      </div>
      <div className="section__text" data-aos="fade-left" data-aos-delay="50">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Himanshu Khade</h1>
        <p className="section__text__p2">MERN STACK Developer</p>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={() => window.open("./assets/resume-example.pdf")}
          >
            Download CV
          </button>
          <button
            className="btn btn-color-1"
            onClick={() => (window.location.href = "./#contact")}
          >
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src={require("../assets/linkedin.png")}
            alt="My LinkedIn profile"
            className="icon"
            onClick={() =>
              (window.location.href =
                "https://www.linkedin.com/in/himanshu-khade-3a64a2197/")
            }
          />
          <img
            src={require("../assets/github.png")}
            alt="My Github profile"
            className="icon"
            onClick={() =>
              (window.location.href = "https://github.com/himanshuk09")
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;
