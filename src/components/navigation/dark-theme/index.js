import React, { useEffect, useState } from "react";
import SideBar from "./sideBar";
import Footer from "./footer";
import styles from "./dashbpard-dark-theme.module.css";
import useWindowSize from "@/hooks/useWindowSize";
import HorizontalMenu from "./horizontalMenu";
const Index = ({ children }) => {
  const [collapse, setCollapse] = useState(true);
  const { width, height } = useWindowSize();

  let style = collapse ? { width: "96.66%" } : {};
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
                : "col-sm-9 col-md-10 col-lg-10 "
            } p-0 col-12`}
            style={{
              ...style,
              height: height - 80,
              overflowY: "scroll",
              background: "#16181C",
            }}
          >
            {children}
          </div>
        }
      </div>
    </div>
  );
};

export default Index;
