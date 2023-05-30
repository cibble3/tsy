import React from "react";
import { BsBroadcast } from "react-icons/bs";
import { MdApps, MdNotificationsNone } from "react-icons/md";

import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Link from "next/link";
import styles from "./dashbpard-dark-theme.module.css";
import { RiMessage2Line } from "react-icons/ri";
import Image from "next/image";

const HorizontalMenu = ({ collapse, setCollapse }) => {
  const router = useRouter();
  const colorMode = useSelector((state) => state.darklight);

  return (
    <div
      className={styles.header}
      style={{ borderBottom: "1px solid #707070" }}
    >
      <div></div>
      <div className={styles?.headerMenu}>
        <div className="d-flex">
          <Image
            alt="button"
            height={50}
            width={50}
            src="/nounmenu6294661.svg"
            className={`${styles.collapseIcon} ms-3`}
            style={{ cursor: "pointer" }}
            onClick={() => {
              setCollapse(!collapse);
              localStorage.setItem("collapse", !collapse);
            }}
          />

          <Link href={"/"}>
            <Image
              height={50}
              width={50}
              alt="logo"
              src={
                colorMode === "dark" ? "/logo_master.png" : "/logo_master.png"
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
              <Image
                alt="user"
                height={50}
                width={50}
                src="/mask-group-37@2x.png"
              />
            </div>
            <Image
              alt="button"
              height={50}
              width={50}
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
        </div>
      </div>
    </div>
  );
};

export default HorizontalMenu;
