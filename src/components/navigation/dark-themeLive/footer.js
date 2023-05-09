import React, { useEffect, useState } from "react";
import styles from "./dashbpard-dark-theme.module.css";
import style from "../dark-theme/dashbpard-dark-theme.module.css";

import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  console.log("pathname", router.pathname);
  const [colorMode, setColorMode] = useState("dark");

  const toggleColorMode = () => {
    const newColorMode = colorMode === "light" ? "dark" : "light";
    setColorMode(newColorMode);
    document.cookie = `colorMode=${newColorMode}; path=/`;
    localStorage.setItem("theme", newColorMode);
  };

  useEffect(() => {
    // const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    // console.log(mediaQuery);
    const themeColor = localStorage.getItem("theme");
    setColorMode(themeColor);

    // if (mediaQuery.matches) {
    //   setColorMode("themeColor");
    // }
    console.log(document.cookie);
  }, []);
  return (
    <div className={styles.header} style={{ borderTop: "1px solid #707070" }}>
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className={styles?.dark}>Dark</div>
        <div>
          <img
            src={colorMode === "light" ? "/path-632.svg" : "/path-631.svg"}
            className={style.themebtn}
            style={{ width: 63, height: 28, minWidth: 40, maxWidth: 63 }}
            onClick={() => toggleColorMode()}
          />
        </div>

        <div className={styles?.light}>Light</div>
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
          --text-light-100: ${colorMode === "light" ? "#4f4f4f" : "#c5c2c2"};
          --bg-label: ${colorMode === "light" ? "#82828233" : "#2e3033"};
        }

        body {
          background-color: var(--bg-color);
          color: var(--text-color);
        }
      `}</style>
    </div>
  );
};

export default Footer;
