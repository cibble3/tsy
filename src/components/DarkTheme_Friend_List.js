import React from "react";
import styles from "../components/navigation/dark-themeLive/dashbpard-dark-theme.module.css";
import DarkTheme_Fans from "./DarkTheme_Fans";
import DarkTheme_Spenders from "./DarkTheme_Spenders";

const DarkTheme_Friend_List = () => {
  return (
    <div className={styles?.fans}>
      <div className="d-flex justify-contant-center align-items-center w-100 px-3">
        <div className={styles.fansInner}>Fans/Friends list</div>
        <div className={styles.fansnumber}>7452</div>
      </div>
      <div className="d-flex justify-contant-center align-items-center w-100 px-3 mt-3">
        <div className={styles.fan}>All Fans</div>
        <div className={styles.list}>All Friends</div>
        <div className={styles.list}>Other list</div>
      </div>
      <div className="row mt-3">
        <div className="col-6">
          <span className={`d-flex align-items-center ${styles?.name}`}>
            Name
          </span>
        </div>
        <div className="col-3">
          <span className={styles?.name}>Point</span>
        </div>
        <div className="col-3">
          <span className={styles?.name}>Rank</span>
        </div>
      </div>

      <div className={styles.bottomBorder}></div>
      <DarkTheme_Fans />

      <div className={styles.bottomBorder}></div>
      <DarkTheme_Spenders />
    </div>
  );
};

export default DarkTheme_Friend_List;
