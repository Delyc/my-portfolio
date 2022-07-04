import React from "react";
import experience from "../../assets/experience.png";
import projects from "../../assets/projects.png";

function About() {
  return (
    <div className="parent-about">
      <div className="about-comp">
        <h1>About me</h1>
        <p>
          My name is Delyce, currently persuing a bachelors degree in computer
          sciene at The African Leadership University(ALU). I am a software
          engineer. I am more interested in backend development
        </p>
        <div className="cards-exp">
          <div className="single-card">
            <img src={experience} alt="" />
            <h3>Experience</h3>
            <p>1 + years working</p>
          </div>
          <div className="single-card">
            <img src={projects} alt="" />
            <h3>Projects</h3>
            <p>5 + projects</p>
          </div>
          <div className="single-card">
            <img src={projects} alt="" />
            <h3>Support</h3>
            <p>available 24/7</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
