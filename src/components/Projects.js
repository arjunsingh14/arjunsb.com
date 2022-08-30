import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="container font-roboto" id="projects">
      <h1 className="text-light text-center mb-5">Projects</h1>
      <div className="row">
        <div className="col-sm-4">
          <ProjectCard
            isPicture={true}
            name="Unemployed"
            imgLink={"./unemployed.png"}
            description="A web app built using React, NodeJS, Express and MongoDB. It is a job
          tracker that lets users input their job application, position and the
          status of their application. It features user authentication and
          storage of a user's job data in a custom API."
            github="https://github.com/arjunsingh14/unemployed-app"
          />
        </div>
        <div className="col-sm-4">
          <ProjectCard
            isPicture={true}
            imgLink={"./login.png"}
            name="Spotify playlist merger"
            description="A web app that allows a Spotify user to merge their already existing playlists into either a new playlist or an existing one."
            github="https://github.com/arjunsingh14/spotify-playlist-merger"
          />
        </div>
        <div className="col-sm-4">
          <ProjectCard
            isPicture={true}
            imgLink={'./java.jpeg'}
            name="ECommerce User interface"
            description="An ecommerce system written in Java with a emphasis on Object Oriented Programming. Created as the final project for the academic year."
            github="https://github.com/arjunsingh14/ECommerceUserInterface-CPS209"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
