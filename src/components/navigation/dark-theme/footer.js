import React, { useContext } from "react";
import styles from "./dashbpard-dark-theme.module.css";

import { useRouter } from "next/router";
import { ThemeColors } from "@/context/themeColor";

const Footer = () => {
  const router = useRouter();
  const { theme, setTheme } = useContext(ThemeColors);

  return (
    <div
      className={"py-4 my-5 px-1"}
      style={{ borderTop: "1px solid #707070" }}
    >
      <div className="d-flex justify-content-center align-items-center h-100 flex-wrap">
        <div className={styles?.dark}>Dark</div>
        <div>
          <img
            src="/path-631.svg"
            className={styles.themebtn}
            style={{ width: 63, height: 28, minWidth: 40, maxWidth: 63 }}
            onClick={() => {
              if (
                router?.route !== "/darkTheme" &&
                router.pathname !== "/darkchat_screen" &&
                router.pathname !== "/darkSession_desc" &&
                router.pathname !== "/darkSession_desc_detail" &&
                router.pathname !== "/"
              ) {
                setTheme("light");
                return;
              }
              router.push(
                router.pathname === "/darkchat_screen"
                  ? "/lightchat_screen"
                  : router?.pathname === "/darkSession_desc"
                  ? "/lightSession_desc"
                  : router?.pathname === "/darkSession_desc_detail"
                  ? "/lightSession_desc_detail"
                  : "/lightTheme"
              );
            }}
          />
        </div>
        <div className={styles?.light}>Light</div>
      </div>
    </div>
  );
};

export default Footer;
