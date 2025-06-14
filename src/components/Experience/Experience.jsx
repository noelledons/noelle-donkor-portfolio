import styles from "./Experience.module.css"
import html from "../../assets/skills/html.png"
import css from "../../assets/skills/css.png"
import react from "../../assets/skills/react.png"
import node from "../../assets/skills/node.png"
import typescript from "../../assets/skills/typescript.png"
import javascript from "../../assets/skills/javascript.png"
import graphql from "../../assets/skills/graphql.png"
import python from "../../assets/skills/python.png"
import sabbatical from "../../assets/history/sabbatical.png"
import andDigital from "../../assets/history/and-digital.png"
import havasMedia from "../../assets/history/havas-media.png"
import nomura from  "../../assets/history/nomura.png"

const skillsData = [
  {
    "title": "HTML",
    "imageSrc": html
  },
  {
    "title": "CSS",
    "imageSrc": css
  },
  {
    "title": "React",
    "imageSrc": react
  },
  {
    "title": "Node",
    "imageSrc": node
  },
    {
    "title": "TypeScript",
    "imageSrc": typescript
  },
    {
    "title": "JavaScript",
    "imageSrc": javascript
  },
  {
    "title": "GraphQL",
    "imageSrc": graphql
  },
  {
    "title": "Python",
    "imageSrc": python
  }
]

const historyData = [
  {
    "role": "Career Break",
    "organisation": "6 Month Sabbatical",
    "startDate": "Sep 2024",
    "endDate": "Mar 2025",
    "experiences": ["Travel", "Personal Development"],
    "imageSrc": sabbatical
  },
  {
    "role": "Software Engineer",
    "organisation": "AND Digital",
    "startDate": "May 2021",
    "endDate": "Sep 2024",
    "experiences": ["Experience 1", "Experience 2"],
    "imageSrc": andDigital
  },
  {
    "role": "Business Intelligence Executive",
    "organisation": "Havas Media Group",
    "startDate": "Oct 2019",
    "endDate": "Dec 2020",
    "experiences": ["Experience 1", "Experience 2"],
    "imageSrc": havasMedia
  },
  
   {
    "role": "Structured Credit Analyst",
    "organisation": "Nomura",
    "startDate": "Jun 2017",
    "endDate": "Jun 2018",
    "experiences": ["Experience 1", "Experience 2"],
    "imageSrc": nomura
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
          {historyData.map((historyItem, id) => {
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
