import React from 'react';
import styles from "./Contact.module.css";

import emailIcon from "../../assets/contact/emailIcon.png";
import githubIcon from "../../assets/contact/githubIcon.png";
import linkedinIcon from "../../assets/contact/linkedinIcon.png";

const Contact = () => {
  return (
    <footer id='contacts' className={styles.container}>
      <div className={styles.text}>
        <p>Want to Collaborate?</p>
        <h2>Don't hesitate to drop me an email or contact me via my social profiles.</h2>
        <p></p>
      </div>

      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon} alt="emailIcon" />
          <a href="mailto:handrymaharjan23@gmail.com">handrymaharjan23@gmail.com</a>
        </li>

        <li className={styles.link}>
          <img src={linkedinIcon} alt="linkedinIcon" />
          <a href="https://www.linkedin.com/in/hyandri-maharjan/">linkedin.com/hyandri</a>
        </li>

        <li className={styles.link}>
          <img src={githubIcon} alt="githubIcon" />
          <a href="https://github.com/hyariii">github.com/hyariii</a>
        </li>
      </ul>
    </footer>
  )
}

export default Contact;
