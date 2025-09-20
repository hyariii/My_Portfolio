import React from "react";
import styles from "./Experience.module.css";
import skillData from "../../data/skill.json";
import history from "../../data/history.json";

const skillImages = import.meta.glob("../../assets/skills/*", { eager: true });

const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skillData.map((skill, id) => {
            const imgSrc =
              skillImages[`../../assets/skills/${skill.imageSrc}`]?.default;

            return (
              <div key={id} className={styles.skill}>
                <img
                  src={imgSrc}
                  alt={skill.title}
                  className={styles.skillImage}
                />
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>

        <ul className={styles.history}>
          {history.map((historyItem, id) => (
            <li key={id} className={styles.historyItem}>
              <div className={styles.historyItemDetails}>
                <h3>{`${historyItem.role}`}</h3>
                <span className={styles.org}>{historyItem.organization}</span>
                <p className={styles.dates}>
                  {`${historyItem.startDate} - ${historyItem.endDate}`}
                </p>
                <ul>
                  {historyItem.experience.map((exp, idx) => (
                    <li key={idx}>{exp}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
