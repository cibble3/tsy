import React from "react";
import styles from "../components/navigation/dark-themeLive/dashbpard-dark-theme.module.css";
import { AiFillCaretDown } from "react-icons/ai";
import { BiUpArrowAlt } from "react-icons/bi";

const DarkTheme_Earning = () => {
  return (
    <div className="col-lg-4 col-xl-3 col-md-12 col-sm-12">
      <div className={styles?.fanss}>
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className={styles?.earning}>Earning </div>
          </div>
          <div className="col-md-6 d-flex align-items-center">
            Last Week{" "}
            <span className={styles?.pinkColor}>
              <AiFillCaretDown />
            </span>
          </div>
        </div>
        <div className={styles?.price}>$ 2545.00</div>
        <div className="mt-3 mb-2  d-flex align-items-center">
          <span className="text-success d-flex align-items-center pe-2">
            <BiUpArrowAlt size={30} /> 11.45 %{" "}
          </span>{" "}
          than last week
        </div>
      </div>
    </div>
  );
};

export default DarkTheme_Earning;
