import React, { useEffect, useRef, useState } from "react";
import styles from "./projects.module.css";

export default function Projects() {
  const ref = useRef(null);
  const [translate, setTranslate] = useState(0);
  const [max, setMax] = useState(0);
  const handleClickBack = () => {
    setTranslate((prev) => {
      let newTranslate = prev + ref.current.offsetWidth + 20
      return newTranslate > 0 ? 0 : newTranslate;
    });
  };
  const handleClickFront = () => {
    setTranslate((prev) => {
      let newTranslate = prev - ref.current.offsetWidth - 20;
      return window.innerWidth - ref.current.offsetParent.offsetLeft + -newTranslate >
      max + ref.current.offsetWidth + 20
        ? window.innerWidth -
          ref.current.offsetParent.offsetLeft -
          max -
          ref.current.offsetWidth -
          20
        : newTranslate;
    }
    );
  };

  const blocks = [
    {
      img: "block1.png",
      type: "Website",
      name: "TeamBoard",
    },
    {
      img: "block2.png",
      type: "Mobile",
      name: "Birma",
    },
    {
      img: "block3.png",
      type: "Website",
      name: "Employee",
    },
    {
      img: "block1.png",
      type: "Website",
      name: "Employee",
    },
    {
      img: "block2.png",
      type: "Website",
      name: "Employee",
    },
  ];
  const handleResize = () => {
    setMax(ref.current.offsetLeft);
  }
  useEffect(() => {
    setMax(ref.current.offsetLeft);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [ref]);
  return (
    <div className={styles.containerFluid}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.name}>
            Related Projects{" "}
            <span className={styles.opacity}>— Healthcare</span>
          </h2>
          <div className={styles.buttons}>
            <button onClick={handleClickBack} disabled={translate >= 0}>
              <i className="fa fa-angle-left" aria-hidden="true"></i>
            </button>
            <button
              onClick={handleClickFront}
              disabled={
                ref.current &&
                window.innerWidth -
                  ref.current.offsetParent.offsetLeft +
                  -translate >=
                  max + ref.current.offsetWidth + 20
              }
            >
              {console.log(
                ref.current &&
                  window.innerWidth -
                    ref.current.offsetParent.offsetLeft +
                    -translate,
                ref.current && max + ref.current.offsetWidth + 20
              )}
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </button>
          </div>
        </div>
        <div className={styles.scrollContainer}>
          <div
            className={styles.blocks}
            style={{
              transform: `translate(${
               translate
              }px)`,
            }}
          >
            {blocks.map((block, index) => (
              <div className={styles.block} key={index} ref={ref}>
                <img src={block.img} alt="" />
                <span className={styles.left}>{block.name}</span>
                <span className={styles.right}>{block.type}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
