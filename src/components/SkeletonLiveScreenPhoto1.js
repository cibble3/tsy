import React from "react";
import styles from "./SkeletonLiveScreenPhoto1.module.css";

const SkeletonLiveScreenPhoto1 = () => {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mt-4">
      <div className={`w-100 ${styles.PhotoPlaceholder}`}></div>
      <div
        className="mt-3 d-flex gap-1 flex-wrap"
        style={{ fontSize: "11px", opacity: 0.6 }}
      >
        <div
          className={styles.textShimmer}
          style={{ height: "24px", width: "80px" }}
        ></div>
        <div style={{ height: "24px", width: "60px" }}></div>
      </div>
    </div>
  );
};

export default SkeletonLiveScreenPhoto1;
