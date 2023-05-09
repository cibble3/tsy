import React, { useEffect, useState } from "react";
import SideBar from "./sideBar";
import Footer from "./footer";
import HorizontalMenu from "../dark-theme/horizontalMenu";

const Index = ({ children }) => {
  const [collapse, setCollapse] = useState(false);
  useEffect(() => {
    let collapse = localStorage.getItem("collapse");
    // setCollapse(collapse || false)
  }, []);
  let style = collapse ? { width: "96.666667%" } : {};
  return (
    <div>
      <HorizontalMenu collapse={collapse} setCollapse={setCollapse} />
      <div className="row w-100 m-0">
        {/* <SideBar collapse={collapse} /> */}
        <div
          className={`${collapse ? "col-sm-12" : "col-sm-12"} p-0`}
          style={style}
        >
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
