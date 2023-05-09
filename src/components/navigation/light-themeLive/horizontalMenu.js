import React from "react";
import {
  BsBroadcast,
  BsFileEarmarkText,
  BsLink45Deg,
  BsCalendar2Week,
  BsFillEyeFill,
} from "react-icons/bs";
import {
  MdApps,
  MdNotificationsNone,
  MdOutlineHome,
  MdOutlineDashboard,
  MdOutlineSettings,
  MdFormatListBulleted,
} from "react-icons/md";
import { RiMessage2Line } from "react-icons/ri";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { BiUpArrowAlt } from "react-icons/bi";
import { AiFillCaretDown } from "react-icons/ai";
import { GrAppsRounded } from "react-icons/gr";
import { FiUserPlus } from "react-icons/fi";
import { IoLogOutOutline } from "react-icons/io5";
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
        <div className="">
          <img
            src="/nounmenu6294661.svg"
            className="me-3"
            style={{ cursor: "pointer" }}
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
          <div className={styles?.groupChild40}>
            <MdApps size={27} color="white" />
          </div>
          <div className={styles?.groupChild40}>
            <RiMessage2Line size={27} color="white" />
          </div>
          <div className={styles?.groupChild40}>
            <MdNotificationsNone size={27} color="white" />
          </div>
          <div className="mx-3">
            <img src="/mask-group-37@2x.png" width={50} height={50} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalMenu;
