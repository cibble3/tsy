import React, { useState } from "react";
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
import { IoCloseSharp, IoLogOutOutline } from "react-icons/io5";
import styles from "./dashbpard-dark-theme.module.css";
import { useEffect } from "react";
import Footer from "./footer";
import useWindowSize from "@/hooks/useWindowSize";

const SideBar = ({ collapse, setCollapse }) => {
  const { width, height } = useWindowSize();


  return !collapse ? (
    <div className={`col-sm-3 col-md-2 col-lg-2 col-2 p-0 ${styles.topView}`} style={{
      height: width > 670 ? height - 80 : height, overflow: "hidden"
    }}>
      <div
        className={styles?.dashbpardDarkThemeItem}
        style={{ borderRight: "1px solid #707070", overflowY: "scroll" }}
      >
        <div >

          <div className={styles.sideHeader}>

            <div className="d-flex justify-content-between mt-3 mx-3 ">
              <img
                src="/mul-vod-main--xcrave-xcavelogo-w@2x.png"
                className={styles.mulVodSideXcraveXcavelogoIcon}
              />
              <IoCloseSharp color="#818181" size={20} onClick={() => setCollapse(true)} />
            </div>
          </div>
          <div className="d-flex justify-contant-center align-items-center ms-3 pt-3">
            <MdOutlineHome size={25} color="#818181" />
            <div className={styles?.home}>Home</div>
          </div>
          <div className={styles.dashboard1}>
            <div className="d-flex justify-contant-center align-items-center ms-2">
              <MdOutlineDashboard size={25} color="#ED135D" />
              <div className={styles?.dashboard}>Dashboard</div>
            </div>
          </div>
          <div className="d-flex justify-contant-center align-items-center ms-3 mt-3">
            <BsFileEarmarkText size={25} color="#818181" />
            <div className={styles?.home}>My Activities</div>
          </div>
          <div className="d-flex justify-contant-center align-items-center ms-3 mt-3">
            <BsLink45Deg size={25} color="#818181" />
            <div className={styles?.home}>Manage Links</div>
          </div>
          <div className="d-flex justify-contant-center align-items-center ms-3 mt-3">
            <BsCalendar2Week size={25} color="#818181" />
            <div className={styles?.home}>Calender</div>
          </div>
          <div className={styles.mobileMenu}>
            <div className="d-flex justify-contant-center align-items-center ms-3 mt-3">
              <BsBroadcast size={25} color="#818181" />
              <div className={styles?.home}>Go Live</div>
            </div>
            <div className="d-flex justify-contant-center align-items-center ms-3 mt-3">
              <MdApps size={25} color="#818181" />
              <div className={styles?.home}>Menu</div>
            </div>
            <div className="d-flex justify-contant-center align-items-center ms-3 mt-3">
              <RiMessage2Line size={25} color="#818181" />
              <div className={styles?.home}>Chatbot</div>
            </div>
            <div className="d-flex justify-contant-center align-items-center ms-3 mt-3">
              <MdNotificationsNone size={25} color="#818181" />
              <div className={styles?.home}>Notification</div>
            </div>
          </div>

        </div>
        <div className={styles?.invite} >
          <div className="d-flex justify-contant-center align-items-center ms-3 mt-3">
            <FiUserPlus size={25} color="#ED135D" />
            <div className={styles?.home}>Invite Friend</div>
          </div>
          <div className="d-flex justify-contant-center align-items-center ms-3 mt-3 mb-3">
            <IoLogOutOutline size={25} color="#818181" />
            <div className={styles?.home}>Log out</div>
          </div>
        </div>
        <Footer />

      </div>
    </div >
  ) : (
    <div className={`${styles.iconView} col-sm-1 col-lg-1 col-md-1 p-0`} style={{ width: "3.333333%", height: width > 670 ? height - 80 : height, overflow: "hidden" }}>
      <div
        className={styles?.dashbpardDarkThemeItem}
        style={{ borderRight: "1px solid #707070", overflowY: "scroll" }}
      >
        <div className="d-flex justify-contant-center align-items-center ms-3 pt-3">
          <MdOutlineHome size={25} color="#818181" />
        </div>
        <div className={styles.dashboard1}>
          <div className="d-flex justify-contant-center align-items-center ms-2">
            <MdOutlineDashboard size={25} color="#ED135D" />
          </div>
        </div>
        <div className="d-flex justify-contant-center align-items-center ms-3 mt-3">
          <BsFileEarmarkText size={25} color="#818181" />
        </div>
        <div className="d-flex justify-contant-center align-items-center ms-3 mt-3">
          <BsLink45Deg size={25} color="#818181" />
        </div>
        <div className="d-flex justify-contant-center align-items-center ms-3 mt-3">
          <BsCalendar2Week size={25} color="#818181" />
        </div>
        <div className={styles?.invite}>
          <div className="d-flex justify-contant-center align-items-center ms-3 mt-3">
            <FiUserPlus size={25} color="#ED135D" />
          </div>
          <div className="d-flex justify-contant-center align-items-center ms-3 mt-3 mb-3">
            <IoLogOutOutline size={25} color="#818181" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
