import React from "react";
import styles from "./Carddetails.module.css";

export const Carddetails = ({
  date,
  heading,
  subheading,
  devices,
  logo,
  color,
}) => {
  return (
      <div className={styles.Card} style={{backgroundColor: `${color}`}}>
          <div className={styles.left}>
        <h3>{date}</h3>
        <button>Case Study</button>
        <h1>{heading}</h1>
        <h1>{subheading}</h1>
        <h3>{devices}</h3>
      </div>
          <div className={styles.right}>
        <img src={logo} alt="" />
        <img
          src="https://freepngimg.com/thumb/arrow/5-2-arrow-transparent.png"
          alt=""
        />
      </div>
    </div>
  );
};
