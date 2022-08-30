import React from "react";
import { FaGithub } from "react-icons/fa";
const ProjectCard = ({ name, imgLink, description, isPicture, github }) => {
  return (
    <div className="card orange-blue-gradient text-light font-Roboto">
      {isPicture && <img src={imgLink} className="card-img-top" alt={name} />}
      <div className="card-body align-bottom">
        <h2>{name}</h2>
        <p className="card-text">{description}</p>
        <div className="text-b">
          <a href={github} className="btn btn-dark github" style={{ color: "white" }}>
            <FaGithub /> Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
