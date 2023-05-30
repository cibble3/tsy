import React, { useEffect, useState } from "react";
import styles from "./dashbpard-dark-theme.module.css";
import style from "../dark-themeLive/dashbpard-dark-theme.module.css";
import { useDispatch } from "react-redux";
import { modechange } from "../../../store/reducer/darklightReducer";
import { increment, decrement } from "../../../store/reducer/counterReducer";

import { useRouter } from "next/router";
import Image from "next/image";

const Footer = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  // console.log("pathname", router.pathname);
  const [colorMode, setColorMode] = useState("dark");

  const toggleColorMode = () => {
    const newColorMode = colorMode === "light" ? "dark" : "light";
    setColorMode(newColorMode);
    dispatch(modechange());

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
    // console.log(document.cookie);
  }, []);
  return (
    <div className={styles.header} style={{ borderTop: "1px solid #707070" }}>
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className={styles?.dark}>Dark</div>
        <div>
          <Image
            height={50}
            width={50}
            alt="switch"
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
          --bg-dashboard: ${colorMode === "light" ? "#f6f6f6" : "#000"};
          --color-radial: ${colorMode === "light"
            ? "radial-gradient(50% 50%at 50% 50%, rgb(237 19 93 / 45%), var(--color-white))"
            : "radial-gradient(50% 50%at 50% 50%, #ed135d, var(--color-white))"};
          --color-light-200: ${colorMode === "light" ? "#000" : "#9a9a9a"};
          --bg-light: ${colorMode === "light" ? "#f6f6f6" : "#16181c"};
          --border-color: ${colorMode === "light" ? "#f1f1f1" : "#3d3d3d"};
          --border-bg: ${colorMode === "light" ? "#f9f9f9" : "#353535"};
          --box-bg-100: ${colorMode === "light" ? "#f2f2f2" : "#3d3d3d"};
          --box-bg-200: ${colorMode === "light" ? "#fff" : "#16181c"};
          --input-color: ${colorMode === "light" ? "#f2f2f2" : "#484747"};
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
