
import styles from "./About.module.css";
import aboutImage2 from "../../../assets/about/aboutImage2.png";
import cursorIcon from "../../../assets/about/cursorIcon.png";
import serverIcon from "../../../assets/about/serverIcon.png";
import uiIcon from "../../../assets/about/uiicon.png";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={aboutImage2}
          className={styles.aboutImg}
          alt="me sitting with a laptop"
        />

        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={cursorIcon} alt="Cursor"/>
                <div className={styles.aboutItemText}>
                    <h3>Frontend Developer</h3>
                    <p> I'm a frontend developer with experience in building responsive and optimized sites</p>
                </div>
            </li>
                <li className={styles.aboutItem}>
                <img src={serverIcon} alt="Server"/>
                <div className={styles.aboutItemText}>
                    <h3>Backend Developer</h3>
                    <p> I have experience developing fast and optimised APIs</p>
                </div>
            </li>
                <li className={styles.aboutItem}>
                <img src={uiIcon} alt="UI Icon"/>
                <div className={styles.aboutItemText}>
                    <h3>UI Designer</h3>
                    <p> I have designed multiple landing pages and created design systems</p>
                </div>
            </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
