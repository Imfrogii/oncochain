import React from "react";
import styles from "./challenge.module.css";

export default function Challenge() {
  return (
    <div className={styles.containerFluid}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.opacity}>The Challenge</span>
          <hr />
        </div>
        <p>
          OncoChain aims to improve the quality of oncological care by creating
          a framework to facilitate collection of real-world data and provision
          of value-based care.
        </p>
        <p>
          Our challenge was to create <span className={styles.founder}>a data layer</span> for Web-based Electronic
          Health Record and connect it to <span className={styles.founder}>Web UI</span>.
        </p>
      </div>
    </div>
  );
}
