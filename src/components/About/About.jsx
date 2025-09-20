import React from 'react'

import styles from "./About.module.css"
import aboutImage from "../../assets/about/aboutImage.png";
import passion from "../../assets/about/passion.png";
import ssrc from "../../assets/about/ssrc.png";
import student from "../../assets/about/student.png";

const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>What I do</h2>
        <div className={styles.content}>
            {/* <img 
            src={aboutImage} 
            alt="Me sitting with a laptop" /> */}

        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem} >
                    <img className={styles.aboutImg} src={student} alt="student icon" />
            <div className={styles.aboutItemText}>
                <h3>AI Student</h3>
                <p>I'm Krrishpana, a curious and motivated Data Science (AI) student at Sunway College.</p>
            </div>
            </li>

            <li className={styles.aboutItem}>
                    <img className={styles.aboutImg} src={ssrc} alt="ssrc icon" />
            <div className={styles.aboutItemText}>
                <h3>Joint Secretary</h3>
                <p>I serve as the Joint Secretary of the Student Council, helping organize events and student initiatives.</p>
            </div>
            </li>

            <li className={styles.aboutItem}>
                    <img className={styles.aboutImg} src={passion} alt="passion icon" />
            <div className={styles.aboutItemText}>
                <h3>Vision</h3>
                <p>I’m passionate about learning, collaborating with others, and making a positive impact through innovation and technology.</p>
            </div>
            </li>
        </ul>
        </div>
    </section>
  )
}

export default About
