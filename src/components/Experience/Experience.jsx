import styles from "./Experience.module.css"
// import skills from "../../data/skills.json";
import history from "../../data/history.json";

const skillsData = [
  {
    "title": "HTML",
    "imageSrc": "src/assets/skills/html.png"
  },
  {
    "title": "CSS",
    "imageSrc": "src/assets/skills/css.png"
  },
  {
    "title": "React",
    "imageSrc": "src/assets/skills/react.png"
  },
  {
    "title": "Node",
    "imageSrc": "src/assets/skills/node.png"
  },
    {
    "title": "TypeScript",
    "imageSrc": "src/assets/skills/typescript.png"
  },
    {
    "title": "JavaScript",
    "imageSrc": "src/assets/skills/javascript.png"
  },
  {
    "title": "GraphQL",
    "imageSrc": "src/assets/skills/graphql.png"
  },
  {
    "title": "Python",
    "imageSrc": "src/assets/skills/python.png"
  }
]



const Experience = () => {
  return (
    <section id="experience" className={styles.container}>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {" "}
          {skillsData.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={skill.imageSrc} alt={skill.title}/>
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
                  src={historyItem.imageSrc}
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
