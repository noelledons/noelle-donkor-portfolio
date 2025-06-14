import React from "react";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css"
import projectImage from "../../assets/projects/project.png"

const projectsData = [
  {
    "title": "Client Project 1",
    "imageSrc": projectImage,
    "description": "GPU Browser Basecaller built using React and Node.js app to leverage Machine Learning APIs for device model inference.",
    "skills": ["React", "Node", "Machine Learning"],
    "demo": "https://www.example.com",
    "source": "https://www.github.com"
  },
  {
    "title": "Client Project 2",
    "imageSrc": projectImage,
    "description": "Built a React based Business & Financial Reporting Application with Python/ PostgreSQL backend integration",
    "skills": ["React", "Python", "Node", "PostgreSQL"],
    "demo": "https://www.example.com",
    "source": "https://www.github.com"
  },
  {
    "title": "Client Project 3",
    "imageSrc": projectImage,
    "description": "App modernisation from Django to React, using reusable components and Context API for state management.",
    "skills": ["React", "Django", "Python"],
    "demo": "https://www.example.com",
    "source": "https://www.github.com"
  },
  {
    "title": "Client Prohect 4",
    "imageSrc": projectImage,
    "description": " Delivered a fast, SEO-optimised site deployed on Vercal. GraphQL used for data fetching and Contenful used as the CMS",
    "skills": ["NextJS", "GraphQL", "Contentdul"],
    "demo": "https://www.example.com",
    "source": "https://www.github.com"
  }
]


const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}> Recent Projects</h2>
      <div className={styles.projects}>
        {projectsData.map((project, id) => {
          return <ProjectCard key={id} project={project}/>;
        })}
      </div>
    </section>
  );
};

export default Projects;
