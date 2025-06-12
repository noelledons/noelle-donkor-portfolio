
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
                    <p> I craft responsive, accessible, and user-friendly interfaces with a focus on performance, clarity, and seamless user experience.</p>
                </div>
            </li>
                <li className={styles.aboutItem}>
                <img src={serverIcon} alt="Server"/>
                <div className={styles.aboutItemText}>
                    <h3>Backend Developer</h3>
                    <p> I build reliable and scalable backend systems that power data-driven features, secure authentication, and smooth integration with services.</p>
                </div>
            </li>
                <li className={styles.aboutItem}>
                <img src={uiIcon} alt="UI Icon"/>
                <div className={styles.aboutItemText}>
                    <h3>UI/UX Designer</h3>
                    <p> I design clean, intuitive interfaces that blend visual appeal with usability, ensuring a thoughtful and engaging experience across devices.</p>
                </div>
            </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
