import React from "react";
import styles from "./SkeletonLiveScreenVideo.module.css";

const SkeletonLiveScreenVideo = () => {
  return (
    <div className={`col-xl-3 col-lg-4 col-md-4 col-sm-6 mt-4  `}>
      <div className={`w-100 ${styles.PhotoPlaceholder}`}></div>

      <div className="text-white px-2 overlay">
        <div className="d-flex justify-content-between align-items-center d-flex align-items-center relative h-100">
          <div className="text-content"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLiveScreenVideo;
