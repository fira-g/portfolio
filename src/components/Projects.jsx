import React from "react";
import { projects } from "../constants/projectDetails.js";
import { Github, Link, Link2 } from "lucide-react";
import "../App.css";

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-2 ">
      <h1 className="font-bold text-4xl  mb-10 relative z-2 ">Projects</h1>
      <div className="container grid grid-cols-1   md:grid-cols-2 gap-4 place-items-center w-full h-full mt-12">
        {projects.map((project) => (
          <div className="card rounded-xl max-w-screen bg-base-200 w-90 shadow-lg space-y-3 flex flex-col h-107 justify-between">
            <figure>
              <img src={project.imagePath} alt={project.title} />
            </figure>
            <div className="card-body mt-[-10px]">
              <h2 className="card-title">{project.title}</h2>
              <p>{project.description}</p>
              <div className="z-1">
                {project.techStacks.map((tech) => (
                  <div className="badge bg-primary/65   hover:bg-primary/45 badge-sm mr-1 cursor-pointer transition-all border-0">
                    {tech}
                  </div>
                ))}
              </div>

              <div className="card-actions mt-3">
                {project.live && (
                  <div className="badge  bg-primary-content rounded-lg  hover:bg-primary-content/70 text-primary font-bold badge-sm  mr-2 mt-2 cursor-pointer transition-all border-0 ">
                    <a href={project.live} className="flex gap-1 items-center">
                      <Link className="size-4" />
                      <p className="font-bold mr-1">website</p>
                    </a>
                  </div>
                )}

                <div className="badge  bg-primary-content rounded-lg  hover:bg-primary-content/70 text-primary font-bold badge-sm mr-2 mt-2 cursor-pointer transition-all border-0 ">
                  <a
                    href={project.githublink}
                    target="_blank"
                    className="flex gap-1 items-center"
                  >
                    <Github className="size-4" />
                    <p className="font-bold mr-1">Code</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
