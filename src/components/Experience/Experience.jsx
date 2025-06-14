import styles from "./Experience.module.css"
import skills from "../../data/skills.json";
import history from "../../data/history.json";

const base = import.meta.env.BASE_URL;

const Experience = () => {
  return (
    <section id="experience" className={styles.container}>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {" "}
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={`${base}${skill.imageSrc.replace(/^\.\/+/, '')}`} alt={skill.title} />
                </div>
                <p> {skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={`${base}${historyItem.imageSrc.replace(/^\.\/+/, '')}`}
                  alt={`${historyItem.organistion} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{historyItem.role}</h3>
                  <h3>{historyItem.organisation}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
           
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
