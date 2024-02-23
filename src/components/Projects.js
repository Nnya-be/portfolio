import React from "react";
import "../styles/projects.scss";
import icon_left from "../styles/svg/chevron-left.svg";
import icon_right from "../styles/svg/chevron-right.svg";
import react_icon from "../logo.svg";
import page from "../styles/pics/Nature.png";

function Projects() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "5em",
        paddingBottom: "5em",
        flexDirection: "column",
      }}
    >
      <div className="projects">
        <img src={page} alt="project img" className="projects-img"></img>
        <div className="projects-info">
          <h3 className="projects-info__heading">Project Name</h3>
          <h4 className="projects-info__title ">
            A shoort description about the project
          </h4>
          <p className="projects-info__description">
            Normal paragrahph about the project and what the projectis is about,
            taking into consideration all the facests of the projet and how it
            was done.
          </p>
        </div>
        <div style={{
            display:'flex',
            alignItems:'start'
        }}>
        <div className="projects-stack">
          <div className="projects-stack__up">
            <img
              src={react_icon}
              className="projects-stack__up--img"
              alt="language"
            ></img>
          </div>
          <span className="projects-stack__language">language</span>
        </div>
        </div>
      </div>
      <div  style={{
          paddingTop: "5em",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "22em",
        }} >
        <img src={icon_left} alt="left_button" className="direction"></img>
        <img src={icon_right} alt="right_button" className="direction"></img>
      </div>
    </div>
  );
}

export default Projects;
