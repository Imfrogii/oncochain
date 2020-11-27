import React from "react";
import styles from "./journey.module.css";

export default function Journey() {
  return (
    <div className={styles.containerFluid}>
      <div className={styles.container}>
        <div className={styles.firstItem}>
          <div className={styles.header}>
            <span className={styles.opacity}>Expectations</span>
            <hr className={styles.opacity} />
            <img src="clocks.svg" alt="" className={styles.clocks} />
          </div>
          <p>
            The client expected us to deliver a working solution within the
            agreed deadline.
          </p>
        </div>
        <div className={styles.main_header}>
          <div className={`${styles.img} ${styles.mobile_hidden}`}></div>
          <h2>Our Journey</h2>
        </div>
        <div className={styles.item}>
          <img src="first.svg" alt="" className={styles.img} />
          <div className={styles.text}>
            <div className={styles.header}>
              <span className={styles.opacity}>First Things First</span>
              <hr className={styles.opacity} />
            </div>
            <p>
              At the first stage of the project, we analyzed data provided by
              the company after gathering from physicians and healthcare clinics
              specializing in oncology care.
            </p>
          </div>
        </div>
        <div className={styles.item}>
          <img src="second.svg" alt="" className={styles.img} />
          <div className={styles.text}>
            <div className={styles.header}>
              <span className={styles.opacity}>The Second Stage</span>
              <hr className={styles.opacity} />
            </div>
            <p>
              Next, based on the data, we developed an interface and data layer,
              then connected it.
            </p>
          </div>
        </div>
        <img src="adobe1.png" alt="" className={styles.adobe}/>
        <img src="adobe2.png" alt="" className={styles.adobe1}/>
      </div>
    </div>
  );
}
