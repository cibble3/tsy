import React from "react";
import styles from "../components/LiveStream/live-stream.module.css";
import { RxDotFilled } from "react-icons/rx";
import { AiOutlineHeart } from "react-icons/ai";

const LiveStreamPose = ({ image }) => {
  return (
    <div className="col-lg-3 col-sm-6 col-12 mt-3">
      <div style={{ position: "relative" }}>
        <img src={image} alt="" className="w-100" style={{ height: 218 }} />
        <div
          className={` ${styles.liveLabel} d-flex justify-content-start align-items-start`}
        >
          <p className={styles.videoText}>Live</p>
        </div>
        <div className="text-white px-2" style={{ marginTop: "-30px" }}>
          <div className="d-flex justify-content-between align-items-center ">
            <div className="d-flex">
              <RxDotFilled fontSize="22px" /> <span>LoveExpertise</span>
            </div>
            <div className="">
              <AiOutlineHeart fontSize="22px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveStreamPose;
