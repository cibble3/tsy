import React, { useEffect, useState } from "react";
import SideBar from "./sideBar";
import styles from "../dark-theme/dashbpard-dark-theme.module.css";
import useWindowSize from "@/hooks/useWindowSize";
import HorizontalMenu from "../dark-themeLive/horizontalMenu";
import Footer from "./footer";

const Index = ({ children }) => {
  const [collapse, setCollapse] = useState(true);
  const { width, height } = useWindowSize();
  useEffect(() => {
    setCollapse(width <= 670);
  }, [width]);

  let style = collapse ? { width: "96%" } : {};
  return (
    <div>
      <HorizontalMenu collapse={collapse} setCollapse={setCollapse} />
      <div
        className="row w-100 m-0 "
        style={{ height: height, overflow: "hidden" }}
      >
        {(width > 670 ? true : !collapse) && (
          <SideBar collapse={collapse} setCollapse={setCollapse} />
        )}
        {
          <div
            className={`${
              collapse
                ? `${styles.containerView} col-sm-11 col-md-11 col-lg-11`
                : "col-sm-9 col-md-9 col-lg-10 "
            } p-0  pb-4 col-12`}
            style={{ ...style, height: height - 50, overflowY: "scroll" }}
          >
            <div className={styles.main_wrapper}>
              <div className={styles.children_wrap}>{children}</div>
              <Footer />
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default Index;
