// import React from 'react';
// import styles from "./Hero.module.css";
// import my_copy from "../../assets/my_copy.png";

// const Hero = () => {
//   return (
//     <section className={styles.container}>
//       <div className={styles.content}>
//         <div className={styles.badge}>AI Student</div>
//         <h1 className={styles.title}>Hi all, I'm Hyandri</h1>
//         <p className={styles.description}>
//           I'm a passionate Full Stack developer working with Python, Django, React.js, and Cloud technologies. I love learning new technologies and implementing them in projects. Self-motivated and hardworking, I enjoy working in a team environment.
//         </p>
//         <a href="mailto:krrishpana@gmail.com" className={styles.contactBtn}>Contact Me!</a>
//         <a href="mailto:krrishpana@gmail.com" className={styles.contactBtn}>Contact Me!</a>
//       </div>

//       <div className={styles.heroImageWrapper}>
//         <img src={my_copy} alt="Hero Image" className={styles.heroPhoto} />
//       </div>

//       <div className={styles.topBlur}></div>
//       <div className={styles.bottomBlur}></div>
//     </section>
//   )
// }

// export default Hero;
import React from 'react';
import styles from "./Hero.module.css";
import my_copy from "../../assets/my_copy.png";
import githubIcon from "../../assets/contact/githubIcon.png";
import emailIcon from "../../assets/contact/emailIcon.png";
import linkedinIcon from "../../assets/contact/linkedinIcon.png";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.badge}>AI Student</div>
        <h1 className={styles.title}>Hi all, I'm Hyandri</h1>
        <p className={styles.description}>
          I’m a first-year Computer Science student with a strong interest in Artificial Intelligence, data-driven solutions, and innovation. Passionate about solving real-world problems through technology, I’m constantly learning and honing my skills—especially in Python programming and data analysis. I aim to explore the intersection of AI and software development to create impactful, intelligent systems. Eager to connect, collaborate, and grow with professionals and peers in the tech industry.
          </p>

        {/* Contact Icons */}
        <div className={styles.contactIcons}>
          <a href="https://github.com/hyariii" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="githubIcon" />
          </a>
          <a href="https://www.linkedin.com/in/hyandri-maharjan/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </div>

        {/* Resume Button */}
        <a href="\src\assets\Resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.resumeBtn}>
          See My Resume
        </a>
      </div>

      <div className={styles.heroImageWrapper}>
        <img src={my_copy} alt="Hero Image" className={styles.heroPhoto} />
      </div>

      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
}

export default Hero;
