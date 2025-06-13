import React from "react";

import heroImage2 from "../../assets/hero/heroImage2.png"
import styles from "./Hero.module.css"

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Noelle</h1>
        <p className={styles.description}>
        A Full Stack Engineer with a passion for building modern, scalable web applications—from sleek frontends to robust backends. I love turning ideas into impactful digital experiences.
        </p>
        <a href="mailto:noelle321@hotmail.co.uk" className={styles.contactBtn}>Contact Me</a>
      </div>
      <img src={heroImage2} alt="heroImage" className={styles.heroImg}/>
      <div className={styles.topBlur}/>
       <div className={styles.bottomBlur}/>
      
    </section>
  );
};

export default Hero;
