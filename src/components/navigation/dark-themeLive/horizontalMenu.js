import React from "react";

import { useSelector } from "react-redux";
import Link from "next/link";
import styles from "./dashbpard-dark-theme.module.css";
import Image from "next/image";

const HorizontalMenu = ({ collapse, setCollapse }) => {
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
            height={30}
            width={30}
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
              quality={100}
              height={300}
              width={300}
              alt="logo"
              src={colorMode === "dark" ? "/logo.png" : "/logo.png"}
              className={styles.mulVodMainXcraveXcavelogoIcon}
            />
          </Link>
        </div>
        <div className="d-flex justify-contant-center align-items-center flex-wrap">
          {/* <ul className={styles.navList}>
            <li
              className={`${styles.tabletVisible} ${styles.mobileVisible} me-4`}
            >
              Promotions
            </li>
            <li
              className={`${styles.tabletVisible} ${styles.mobileVisible} me-4`}
            >
              Club Elite
            </li>
            <li
              className={`${styles.tabletVisible} ${styles.mobileVisible} me-4`}
            >
              Top Models
            </li>
            <li className={`${styles.navTrophy} me-4`}>
              <FaTrophy className={styles.trophyIcon} />
            </li>
            <li className={`${styles.navMail} me-4`}>
              <IoIosMail className={styles.MailIcon} />
            </li>
            <li className={`${styles.navHeart} me-4`}>
              <FaHeart className={styles.heartIcon} />
            </li>
            <li
              className={`${styles.tabletVisible} ${styles.mobileVisible} me-4`}
            >
              Get Credits
            </li>
            <li className={`${styles.navDrop} d-flex gap-2 me-4`}>
              <div className={styles.mobileVisible}>EN</div>
              <GiUsaFlag className={`${styles.navFlag}`} />
              <BsCaretDownFill className={`${styles.navDown}`} />
            </li>
            <li className={`me-4`}>
              <div className="d-flex gap-2">
                <span
                  className={`${styles.tabletVisible} ${styles.mobileVisible}`}
                >
                  Login
                </span>
                <IoPersonCircleSharp
                  onClick={toggleDropdown}
                  className={styles.navPerson}
                />

                {showDropdown && (
                  <ul className={styles.dropdownMenu}>
                    <li>Promotions</li>
                    <li>Club Elite</li>
                    <li>Top Models</li>
                    <button className={`${styles.navBtn} mx-4`}>
                      Join Now for FREE
                    </button>
                  </ul>
                )}
              </div>
            </li>
          </ul> */}
          {/* <button
            className={`${styles.navBtn} ${styles.tabletVisible} ${styles.mobileVisible} mx-4`}
          >
            Join Now for FREE
          </button> */}
          <Image
            alt="button"
            height={30}
            width={30}
            src="/nounmenu6294661.svg"
            className={`${styles.menuRight} ms-2`}
            style={{ cursor: "pointer" }}
            onClick={() => {
              setCollapse(!collapse);
              localStorage.setItem("collapse", !collapse);
            }}
          />

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
