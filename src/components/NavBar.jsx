import React, { useState } from "react";
import sun from "../assets/sunIconlogo.png";
import moon from "../assets/moon.png";

const NavBar = () => {
  function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  const [modeIcon, setModeIcon] = useState(moon);

  const darkModeLightMode = () => {
    // var icon = document.getElementById("mode-icon");

    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
      setModeIcon(sun);
    } else {
      setModeIcon(moon);
    }
  };

  return (
    <>
      <nav id="desktop-nav">
        <div className="logo" data-aos="fade-down">
          Himanshu Khade
        </div>
        <div>
          <ul className="nav-links">
            <li
              data-aos="fade-down"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              <a href="#about">About</a>
            </li>
            <li
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <a href="#experience">Skills</a>
            </li>
            <li
              data-aos="fade-down"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out"
            >
              <a href="#projects">Projects</a>
            </li>
            <li
              data-aos="fade-down"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
            >
              <a href="#contact">Contact</a>
            </li>
            <li
              data-aos="fade-down"
              data-aos-duration="2500"
              data-aos-easing="ease-in-out"
            >
              <img
                src={modeIcon}
                id="mode-icon"
                alt=""
                onClick={darkModeLightMode}
              />
            </li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav" data-aos="fade-down">
        <div className="logo">Himanshu Khade</div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="menu-links">
            <li>
              <a href="#about" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#experience" onClick={toggleMenu}>
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" onClick={toggleMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>
                Contact
              </a>
            </li>
            <li>
              <img
                src={modeIcon}
                id="mode-icon"
                className="mode-icon"
                alt=""
                onClick={darkModeLightMode}
              />
            </li>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
