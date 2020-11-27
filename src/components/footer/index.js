import React, { useState } from "react";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.containerFluid}>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <div className={styles.chain}>
            <img src="CO_black.svg" alt="CO" /> ChainArtSoft
          </div>
          <div className={styles.social}>
            <img src="twitter.svg" alt="" />
            <img src="facebook.svg" alt="" />
            <img src="inst.svg" alt="" />
            <img src="up.svg" alt="" />
            <img src="linked.svg" alt="" />
          </div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.links}>
            <span>Company</span>
            <span>Works</span>
            <span>Services</span>
            <span>Blog</span>
            <span>Contacts</span>
            <button className={styles.startBtn}>Start a project</button>
          </div>
        <span className={styles.footer}>© 2020 ChainArtSoft. All rights reserved.</span>
        </div>
      </div>
    </div>
  );
}
