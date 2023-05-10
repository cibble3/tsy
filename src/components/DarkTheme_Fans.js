import React from "react";
import styles from "../components/navigation/dark-themeLive/dashbpard-dark-theme.module.css";

const DarkTheme_Fans = () => {
  return (
    <>
      <div className="mt-3">
        <div className={styles.top}>Top 5 Fans</div>
      </div>
      <div className="row mt-3 align-items-center px-2">
        <div className="col-6">
          <span className={`d-flex align-items-center ${styles?.name}`}>
            <img src="/group-61@2x.png" width={40} height={40} />{" "}
            <span className="ms-2">Bella roland</span>
          </span>
        </div>
        <div className="col-3">
          <span>4567</span>
        </div>
        <div className="col-3">
          <span>1st</span>
        </div>
      </div>
      <div className="row mt-3 align-items-center px-2">
        <div className="col-6">
          <span className={`d-flex align-items-center ${styles?.name}`}>
            <img src="/mask-group-7@2x.png" width={40} height={40} />{" "}
            <span className="ms-2">James</span>
          </span>
        </div>
        <div className="col-3">
          <span>8588</span>
        </div>
        <div className="col-3">
          <span>2nd</span>
        </div>
      </div>
      <div className="row mt-3 align-items-center px-2">
        <div className="col-6">
          <span className={`d-flex align-items-center ${styles?.name}`}>
            <img src="/mask-group-8@2x.png" width={40} height={40} />{" "}
            <span className="ms-2">junebox_12</span>
          </span>
        </div>
        <div className="col-3">
          <span>789</span>
        </div>
        <div className="col-3">
          <span>3rd</span>
        </div>
      </div>
      <div className="row mt-3 align-items-center px-2">
        <div className="col-6">
          <span className={`d-flex align-items-center ${styles?.name}`}>
            <img src="/mask-group-9@2x.png" width={40} height={40} />{" "}
            <span className="ms-2">PewDiePie</span>
          </span>
        </div>
        <div className="col-3">
          <span>3648</span>
        </div>
        <div className="col-3">
          <span>4th</span>
        </div>
      </div>
      <div className="row mt-3 align-items-center px-2 mb-3">
        <div className="col-6">
          <span className={`d-flex align-items-center ${styles?.name}`}>
            <img src="/group-6@2x.png" width={40} height={40} />{" "}
            <span className="ms-2">Mattie_452</span>
          </span>
        </div>
        <div className="col-3">
          <span>1456</span>
        </div>
        <div className="col-3">
          <span>5th</span>
        </div>
      </div>
    </>
  );
};

export default DarkTheme_Fans;
