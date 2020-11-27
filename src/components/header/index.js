import React from 'react'
import styles from './header.module.css'

export default function Header() {
    return(
        <div className={styles.containerFluid}>
            <div className={styles.header}>
                <div className={styles.chain}> <img src="CO.svg" alt="CO"/> ChainArtSoft</div>
                <div className={styles.links}>
                    <span>Company</span>
                    <span>Works</span>
                    <button className={styles.startBtn}>
                        Start a project
                    </button>
                </div>
            </div>
            <div className={styles.background}>
                <div className={styles.work}>
                   <span className={styles.opacity}>
                       Work 
                    </span> 
                       - OncoChain 
                </div>
                <div className={styles.main}>
                    Blockchain solution for improving oncological care.
                </div>
            </div>
        </div>
    )
};
