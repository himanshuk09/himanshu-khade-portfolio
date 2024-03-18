import React from "react";

const Footer = () => {
  return (
    <footer>
      <nav>
        <div className="nav-links-container">
          <ul className="nav-links">
            <li data-aos="fade-up">
              <a href="#home">Home</a>
            </li>
            <li data-aos="fade-up">
              <a href="#about">About</a>
            </li>
            <li data-aos="fade-up">
              <a href="#experience">Skills</a>
            </li>
            <li data-aos="fade-up">
              <a href="#projects">Projects</a>
            </li>
            <li data-aos="fade-up">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
