import React from 'react'
import emailIcon from '../../../assets/contact/emailIcon.png'
import githubIcon from '../../../assets/contact/githubIcon.png'
import linkedinIcon from '../../../assets/contact/linkedinIcon.png'
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2 >
                Contact
            </h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={emailIcon} alt="email icon"/>
                <a href="mailto:noelle321@hotmail.com">Email</a>
            </li>
            <li className={styles.link}>
                <img src={githubIcon} alt="github icon"/>
                <a href="https://github.com/noelledons" target="_blank">Github</a>
            </li>
            <li className={styles.link}>
                <img src={linkedinIcon} alt="linkedin icon"/>
                <a href="https://www.linkedin.com/in/noelle-donkor/" target="_blank">Linkedin</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact