import React from "react";
import styles from "./dashbpard-dark-theme.module.css";
import style from "../dark-theme/dashbpard-dark-theme.module.css";

import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  // console.log("pathname", router.pathname);
  return (
    <div className={styles.header} style={{ borderTop: "1px solid #707070" }}>
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className={styles?.dark}>Dark</div>
        <div>
          <img
            src="/path-632.svg"
            className={style.themebtn}
            style={{ width: 63, height: 28, minWidth: 40, maxWidth: 63 }}
            onClick={() =>
              router.push(
                router.pathname === "/lightchat_screen"
                  ? "/darkchat_screen"
                  : "/darkTheme"
              )
            }
          />
        </div>
        <div className={styles?.light}>Light</div>
      </div>
    </div>
  );
};

export default Footer;
