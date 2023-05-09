import React from "react";
import { BsBroadcast, } from "react-icons/bs";
import { MdApps, MdNotificationsNone, } from "react-icons/md";
import { RiMessage2Line } from "react-icons/ri";
import styles from "./dashbpard-dark-theme.module.css";

import { useRouter } from "next/router";

const HorizontalMenu = ({ collapse, setCollapse }) => {
  const router = useRouter();

  return (
    <div
      className={styles.header}
      style={{ borderBottom: "1px solid #707070" }}
    >
      <div className={styles?.headerMenu}>
        <div className={styles?.headerIcon}>
          <img
            src="/nounmenu6294661.svg"
            className={styles?.headerMenuicon}
            role="button"
            onClick={() => {
              setCollapse(!collapse);
              localStorage.setItem("collapse", !collapse);
            }}
          />
          <img
            src="/mul-vod-main--xcrave-xcavelogo-w@2x.png"
            className={styles.mulVodMainXcraveXcavelogoIcon}
          />
        </div>
        <div className="d-flex justify-contant-center align-items-center flex-wrap">
          <span className={styles.goLive}>Go Live</span>
          <div className={styles?.groupChild41}>
            <BsBroadcast size={27} color="white" />
          </div>
          <div className={styles?.groupChild400}>
            <MdApps size={27} color="white" />
          </div>
          <div className={styles?.groupChild401}>
            <RiMessage2Line size={27} color="white" />
          </div>
          <div className={styles?.groupChild402}>
            <MdNotificationsNone size={27} color="white" />
          </div>
          <div className={styles?.groupMask}>
            <img src="/mask-group-37@2x.png" width={50} height={50} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalMenu;
