import React, { useState } from "react";
import { FaFolder } from "react-icons/fa";
import styles from "../components/LiveStream/live-stream.module.css";
import PhotoAlbumModal from "./LiveStream/photoAlbumModal";

const LiveStreamPhoto = () => {
  const [photoModal, setPhotoModal] = useState(false);
  return (
    <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-8 mt-2">
      <div style={{ position: "relative" }}>
        <div
          onClick={() => setPhotoModal(true)}
          style={{
            position: "absolute",
            height: "400px",
            width: "100%",
            backgroundColor: "rgba(31,29,29,0.6)",
          }}
          className="d-flex justify-content-center align-items-center"
        >
          <FaFolder size={50} color="#ffffff" />
        </div>
        <div
          className={` ${styles.videoLabel} d-flex justify-content-start align-items-start`}
        >
          <p className={styles.videoText}>Photo Album</p>
        </div>
        <img
          src="/mask-group-69@2x.png"
          width={"100%"}
          style={{ height: "400px" }}
        />
      </div>

      <PhotoAlbumModal show={photoModal} onHide={setPhotoModal} />
    </div>
  );
};

export default LiveStreamPhoto;
