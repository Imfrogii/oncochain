import React from "react";
import styles from "./header_about.module.css";

export default function HeaderAbout() {
  return (
    <>
      <div className={styles.containerFluid}>
        <div className={styles.container}>
          <div className={styles.row}>
            <ul>
              <li>Healthcare</li>
              <li>Blockchain</li>
              <li>Web-App</li>
              <li>UI/UX</li>
              <li>CMS</li>
            </ul>
            <div className={styles.about}>
              Oncochain builds a research platform that enables real-world data
              collection and value-based care in oncology. The company was
              founded by <span className={styles.founder}>Madalin Marga</span>,
              a Romanian entrepreneur. Throughout his career, he honed his
              skills in Consulting & Management, Public Health, Clinical
              Research, and Medical Education and worked in the government
              sector and clinics.
            </div>
          </div>
          <a href="">
            Visit Website <img src="vector.svg" alt="->" />
          </a>
        </div>
      </div>
      {/* <div className={styles.image}> */}

      <img src="laptop.png"  className={styles.image} alt="" />
      {/* </div> */}
    </>
  );
}
