import React, { useEffect, useState } from "react";
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
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";

const HorizontalMenu = ({ collapse, setCollapse }) => {
  const router = useRouter();

  // const [colorMode, setColorMode] = useState("dark");

  // useEffect(() => {
  //   let themeColor = localStorage.getItem("theme");
  //   setColorMode(themeColor);
  // }, []);

  const colorMode = useSelector((state) => state.darklight);
  const count = useSelector((state) => state.counter);

  // console.log(colorMode)

  return (
    <div
      className={styles.header}
      style={{ borderBottom: "1px solid #707070" }}
    >
      <div>
        {/* <p>Count: {count}</p> */}
        {/* <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button> */}
      </div>
      <div className={styles?.headerMenu}>
        <div className="d-flex">
          <img
            src="/nounmenu6294661.svg"
            className={`${styles.collapseIcon} ms-3`}
            style={{ cursor: "pointer" }}
            onClick={() => {
              setCollapse(!collapse);
              localStorage.setItem("collapse", !collapse);
            }}
          />
       
          <Link href={"/"}>
            <img
              src={
                colorMode === "dark"
                  ? "/mul-vod-main--xcrave-xcavelogo-w@2x.png"
                  : "/mul-vod-main--xcrave-xcavelogo@2x.png"
              }
              className={styles.mulVodMainXcraveXcavelogoIcon}
            />
          </Link>
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
          <div className="d-flex">
            <div
              className="mx-3"
              onClick={() => router.push("/User/user-profile/")}
            >
              <img src="/mask-group-37@2x.png" width={50} height={50} />
            </div>
            <img
              src="/nounmenu6294661.svg"
              className={styles.menuRight}
              style={{ cursor: "pointer" }}
              onClick={() => {
                setCollapse(!collapse);
                localStorage.setItem("collapse", !collapse);
              }}
            />
          </div>
          <style jsx global>{`
            :root {
              --color-white: ${colorMode === "light" ? "#fff" : "#303030"};
              --text-color: ${colorMode === "light" ? "#333" : "#eee"};
              --dark: ${colorMode === "light" ? "#303030" : "#ed135d"};
              --light: ${colorMode === "light" ? "#ed135d" : "#fff"};
              --opacity-light: ${colorMode === "light" ? "0.33" : "1"};
              --opacity-dark: ${colorMode === "light" ? "1" : "0.33"};
              --bg-color: ${colorMode === "light" ? "#82828233" : "#16181c"};
              --font-color: ${colorMode === "light" ? "#000" : "#fff"};
              --background-color: ${colorMode === "light" ? "#fff" : "#303030"};
              --bg-box: ${colorMode === "light" ? "#82828233" : "#ffffff1a"};
              --text-light: ${colorMode === "light" ? "#4f4f4f" : "#a1a2a4"};
              --text-light-100: ${colorMode === "light"
                ? "#4f4f4f"
                : "#c5c2c2"};
              --bg-label: ${colorMode === "light" ? "#82828233" : "#2e3033"};
              --bg-dashboard: ${colorMode === "light" ? "#f6f6f6" : "#000"};
              --color-radial: ${colorMode === "light"
                ? "radial-gradient(50% 50%at 50% 50%, rgb(237 19 93 / 45%), var(--color-white))"
                : "radial-gradient(50% 50%at 50% 50%, #ed135d, var(--color-white))"};
              --color-light-200: ${colorMode === "light" ? "#000" : "#9a9a9a"};
            }

            body {
              background-color: var(--bg-color);
              color: var(--text-color);
            }
          `}</style>
          {/* <div className="mx-3">
            <img src="/mask-group-37@2x.png" width={50} height={50} />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HorizontalMenu;
