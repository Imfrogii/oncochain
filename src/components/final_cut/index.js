import React from "react";
import styles from "./final_cut.module.css";

export default function FinalCut() {
  return (
    <div className={styles.containerFluid}>
      <div className={styles.container}>
        <div className={styles.item}>
          <div className={styles.header}>
            <span className={styles.opacity}>Final Cut</span>
            <hr className={styles.opacity} />
          </div>
          <p>
            After some slight changes, we presented the working solution to the
            client.
          </p>
        </div>
        <img src="adobe3.png" alt="" className={styles.image}/>
        <img src="adobe4.png" alt="" className={styles.image}/>
        <img src="adobe5.png" alt="" className={styles.image}/>
      </div>
    </div>
  );
}
