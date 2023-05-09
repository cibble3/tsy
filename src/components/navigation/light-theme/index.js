import React, { useEffect, useState } from "react";
import SideBar from "./sideBar";
import Footer from "./footer";
import styles from "./dashbpard-light-theme.module.css";
import useWindowSize from "@/hooks/useWindowSize";
import HorizontalMenu from "./horizontalMenu";
const Index = ({ children }) => {
  const [collapse, setCollapse] = useState(true);
  const { width, height } = useWindowSize();

  useEffect(() => {
    let collapse = localStorage.getItem("collapse");
    setCollapse(collapse || false);
  }, []);
  let style = collapse ? { width: "95.66%" } : {};
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
                ? `col-sm-11 col-md-11 col-lg-11 ${styles.containerView}`
                : "col-sm-9 col-md-10 col-lg-10 "
            } p-0  pb-4 col-12`}
            style={{
              ...style,
              height: height,
              overflowY: "scroll",
              background: "#F6F6F6",
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
