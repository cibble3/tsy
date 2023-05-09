import React from "react";
import styles from "./dashbpard-dark-theme.module.css";

import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  console.log("pathname", router.pathname);
  return (
    <div className={styles.header} style={{ borderTop: "1px solid #707070" }}>
      <div className="d-flex justify-contant-center align-items-center h-100 ms-3">
        <div className={styles?.dark}>Dark</div>
        <div>
          <img
            src="/path-631.svg"
            onClick={() =>
              router.push(
                router.pathname === "/darkchat_screen"
                  ? "/lightchat_screen"
                  : "/lightTheme"
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
