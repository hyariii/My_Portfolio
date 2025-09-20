import React from 'react';
import projectImg from "../../assets/project/project.png";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ project: { title, imageSrc, description, skills, source } }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img src={projectImg} alt={`Image of ${title}`} className={styles.image} />
      </div>

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>

      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>{skill}</li>
        ))}
      </ul>

      <div className={styles.links}>
        <a href={source} className={styles.link}>View Project</a>
      </div>
    </div>
  );
};

export default ProjectCard;
