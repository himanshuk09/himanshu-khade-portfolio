import React from "react";

const About = () => {
  return (
    <section id="about">
      <p className="section__text__p1" data-aos="fade-up">
        Get To Know More
      </p>
      <h1 className="title" data-aos="fade-up">
        About Me
      </h1>
      <div className="section-container">
        <div
          className="section__pic-container"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <img
            src={require("../assets/himu.png")}
            alt="Profile picture"
            className="about-pic"
          />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div
              className="details-container"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <img
                src={require("../assets/experience.png")}
                alt="Experience icon"
                className="icon"
              />
              <h3>Experience</h3>
              <p>
                Intern (MERN STACK Developer) <br />@ DevBee IT Solutions
                International Pvt. Ltd. Nagpur.{" "}
              </p>
            </div>
            <div
              className="details-container"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <img
                src={require("../assets/education.png")}
                alt="Education icon"
                className="icon"
              />
              <h3>Education</h3>
              <p>
                MCA Masters Degree
                <br />
                BCA Bachelors Degree
              </p>
            </div>
          </div>
          <div className="text-container">
            <p data-aos="zoom-in" data-aos-duration="1000">
              I'm deeply passionate about web development, especially with the
              MERN (MongoDB, Express.js, React.js, Node.js) stack. I bring a mix
              of creativity, problem-solving skills, and a strong commitment to
              learning and growing in the tech field. Mastering the MERN stack
              is my goal, driven by my passion for creating innovative solutions
              and staying up-to-date with the latest trends in web development.
            </p>
          </div>
        </div>
      </div>
      <img
        src={require("../assets/arrow.png")}
        alt="Arrow icon"
        className="icon arrow"
        data-aos="fade-down"
        onClick={() => (document.location.href = "./#experience")}
        // href="#experience"
      />
    </section>
  );
};

export default About;
