import React from "react";
import styles from "./technologies.module.css";

export default function Technologies() {
  return (
    <div className={styles.containerFluid}>
      <div className={styles.container}>
          <h1>Technological Stack</h1>
          <div className={styles.row}>
        <div className={styles.leftSide}>
          <p>
            We used a <span className={styles.founder}>wide base</span> of our
            capabilities to implement such a complex project.
          </p>
          <p>
            Our web-app runs on different platforms like MacOS, Windows and
            Linux.
          </p>
          <div className={styles.item}>
            <div className={styles.header}>
              <span className={styles.opacity}>Team</span>
              <hr className={styles.opacity} />
            </div>
            <p className={styles.opacity}>The team consists of 5 specialists</p>
          </div>
        </div>
        <div className={styles.platforms}>
            <img src="comments.svg" alt=""/>
          <div className={styles.block}>
            <div className={styles.name}>OS</div>
            <div className={styles.info}>MacOS, Windows, Linux</div>
          </div>
          <div className={styles.block}>
            <div className={styles.name}>Platforms</div>
            <div className={styles.info}>
              ASP.NET CORE, C#, JavaScript, Solidity
            </div>
          </div>
          <div className={styles.block}>
            <div className={styles.name}>Frontend</div>
            <div className={styles.info}>
              ES6, ReactJS + ServerSide rendering using ExpressJS
            </div>
          </div>
          <div className={styles.block}>
            <div className={styles.name}>Design</div>
            <div className={styles.info}>
              Interactive Prototyping in Adobe XD, Figma
            </div>
          </div>
          <div className={styles.block}>
            <div className={styles.name}>Backend</div>
            <div className={styles.info}>ASP.NET CORE</div>
          </div>
          <div className={styles.block}>
            <div className={styles.name}>Deployment</div>
            <div className={styles.info}>Microsoft Azure</div>
          </div>
        </div>
          </div>
      </div>
    </div>
  );
}
