import React, { useState } from "react";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import styles from "../components/LiveStream/live-stream.module.css";
import VideoModal from "./LiveStream/videoModal";

const LiveStreamVideo = ({ video1 }) => {
  const [video, setVideo] = useState(false);

  return (
    <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 mt-2">
      <div style={{ position: "relative" }}>
        <div
          onClick={
            () => setVideo(video1)
            //   ("/video/woman.mp4")
          }
          style={{ position: "absolute", height: "400px", width: "100%" }}
          className="d-flex justify-content-center align-items-center"
        >
          <MdOutlineSlowMotionVideo size={40} color="#ffffff" />
        </div>
        <div
          className={` ${styles.videoLabel} d-flex justify-content-start align-items-start`}
        >
          <p className={styles.videoText}>Video</p>
        </div>
        <video
          src={video1}
          onClick={() => setVideo(video1)}
          style={{ height: "400px", width: "100%", objectFit: "cover" }}
        />
      </div>

      <VideoModal show={video} onHide={setVideo} />
    </div>
  );
};

export default LiveStreamVideo;
