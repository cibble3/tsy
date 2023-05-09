import React, { useContext } from "react";
import styles from "./dashbpard-light-theme.module.css";

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
        <div className={styles?.light}>Dark</div>
        <div
          onClick={() => {
            if (
              router?.route !== "/lightTheme" &&
              router?.route !== "/lightSession_desc" &&
              router?.route !== "/lightSession_desc_detail" &&
              router?.route !== "/lightchat_screen"
            ) {
              setTheme("dark");
              return;
            }
            router.push(
              router.pathname === "/lightchat_screen"
                ? "/darkchat_screen"
                : router?.pathname === "/lightSession_desc"
                ? "/darkSession_desc"
                : router?.pathname === "/lightSession_desc_detail"
                ? "/darkSession_desc_detail"
                : "/darkTheme"
            );

            // router.push("/darkTheme")
          }}
        >
          <img
            src="/path-632.svg"
            className={styles.themebtn}
            style={{
              width: 63,
              height: 28,
              minWidth: 40,
              maxWidth: 63,
            }}
          />
        </div>
        <div className={styles?.dark}>Light</div>
      </div>
    </div>
  );
};

export default Footer;
