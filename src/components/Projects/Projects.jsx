// import React from 'react'

// import projects from "../../data/projects.json"
// import ProjectCard from './ProjectCard';
// import styles from "./Projects.module.css"

// const Projects = () => {
//   return (
//     <section className={styles.container} id='projects'>
//         <h2 className={styles.title}>Projects</h2>
//         <div className={styles.projects}>
//             {
//                 projects.map((project,id) => {
//                     return (
//                         <ProjectCard key={id} project={project}/>
//                     )
//                 }
//             )}
//         </div>
//     </section>
//   )
// }

// export default Projects

import React from 'react';
import projects from "../../data/projects.json";
import ProjectCard from './ProjectCard';
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <section className={styles.container} id='projects'>
      <h2 className={styles.title}>Projects</h2>
      <p className={styles.subtitle}>
        A collection of my work showcasing creativity, clean code, and problem-solving.
      </p>

      <div className={styles.projects}>
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
