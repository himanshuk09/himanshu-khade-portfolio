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
          <a
            // href="https://drive.google.com/file/d/1iaxLl2ajhNSFeuYwKJmgQ5TQamOT9XL7/view?usp=sharing"
            href="https://drive.google.com/file/d/1q0FCtw3GTGbklm7a6TRlBbdFwatDd3Ai/view?usp=sharing"
            download="himanshuKhadeResume"
            type="pdf"
            target="_blank"
            rel="noreferrer"
          >
            <button
              className="btn btn-color-2"
              // onClick={() => window.open("../assets/himanshu-khade-resume.pdf")}
            >
              Download CV
            </button>
          </a>
          <button
            className="btn btn-color-1"
            onClick={() => (window.location.href = "./#contact")}
          >
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <a
            href="https://www.linkedin.com/in/himanshu-khade-3a64a2197/"
            type="link"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={require("../assets/linkedin.png")}
              alt="My LinkedIn profile"
              className="icon"
              // onClick={() =>
              //   (window.location.href =
              //     "https://www.linkedin.com/in/himanshu-khade-3a64a2197/")
              // }
            />
          </a>
          <a
            href="https://github.com/himanshuk09"
            type="link"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={require("../assets/github.png")}
              alt="My Github profile"
              className="icon"
              onClick={() =>
                (window.location.href = "https://github.com/himanshuk09")
              }
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Profile;
