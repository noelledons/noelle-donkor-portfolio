import React from "react";

import heroImage from "../../../assets/hero/heroImage.png"
import styles from "./Hero.module.css"

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Noelle</h1>
        <p className={styles.description}>
         
          I'm a full-stack Engineer with 4 years experience using React and NodeJS. Reach
          out if you'd like to learn more!
        </p>
        <a href="mailto:noelle321@hotmail.co.uk" className={styles.contactBtn}>Contact Me</a>
      </div>
      <img src={heroImage} alt="heroImage" className={styles.heroImg}/>
      <div className={styles.topBlur}/>
       <div className={styles.bottomBlur}/>
      
    </section>
  );
};

export default Hero;
