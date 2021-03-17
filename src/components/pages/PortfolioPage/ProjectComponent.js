import React from "react";
import "./portfoliopage.css";

function ProjectComponent (){
    return(
        <div>
            <div class="row">
                <h3>Happy Trees</h3>
            </div>

      <div class="row">
        <img
          src={`${process.env.PUBLIC_URL}/assets/dashboard-screenshot%20copy.png`}
          alt="Happy Trees dashboard"
        />
      </div>
      <div class="row">
        <p>
          A drawing application which allows users to save drawings created with PaperJS in a
          personal account using Passport JS. This uses
          Sequelize to connect to a MySQL database. This was a group project
          completed with Abdinajib Liban, Kole Gasior, Mindy Ratcliff, and
          Efraín González. I worked on vetting PaperJS for use, project managment, and jQuery. Happy Trees can be
          accessed here
          <a
            href="https://guarded-ravine-40907.herokuapp.com"
          >
            {" "}
            Happy Trees.{" "}
          </a>
          The GitHub Repository for Happy Trees can be accessed here
          <a
            href="https://github.com/Mindyratcliff/Project2"
          >
            Happy Trees Repo.
          </a>
        </p>
      </div>
        </div>
    )
}

export default ProjectComponent;