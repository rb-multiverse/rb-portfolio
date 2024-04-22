import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full grid grid-cols-3 gap-10 px-10">
        <ProjectCard
          src="/nikeClone.png"
          title="Nike Clone"
          description="Nike-inspired landing page with responsive design, captivating visuals, and interactivity. Built using Tailwind CSS, React, Vite, JS, HTML, and Node.js."
        />
        <ProjectCard
          src="/recipeApp.png"
          title="Recipe App"
          description="I've crafted a dynamic food recipe application using React JS, Tailwind CSS, and the Edamam Recipe API, providing users with an culinary exploration experience."
        />
        <ProjectCard
          src="/imageGenerator.png"
          title="Image Generator"
          description="This full-stack image generator merges React, Firebase, and the Hugging Face API, offering a user-friendly interface and secure authentication."
        />
      </div>
    </div>
  );
};

export default Projects;