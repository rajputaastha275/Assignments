import React from 'react'
import ProjectCard from './ProjectCard';


const Projects = () => {

  const projects = [
    {
      title: "Portfolio Website",
      text: "A digital space to showcase my work, projects and career journey.",
      languages: ["React", "Bootstrap", "JavaScript"],
      size: "project"
    },
    {
      title: "Facebook Account Creation Clone",
      text: "A recreated account creation page inspired by Facebook's registraton interface.",
       languages: ["HTML", "CSS"],
      size: "project"
    }
  ];
  return (
    <>
        <div className="container mt-5">

      <h1 className="display-1 fw-bold">
        SELECTED WORK
      </h1>

      <div className="row mt-4">
        {
          projects.map((item, index) => (
            <ProjectCard
              key={index}
              title={item.title}
              text={item.text}
              size={item.size}
              languages={item.languages}
            />
          ))
        }
      </div>

    </div>
    </>
  )
}

export default Projects