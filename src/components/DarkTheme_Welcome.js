import React from "react";
import styles from "../components/navigation/dark-themeLive/dashbpard-dark-theme.module.css";
import { MdOutlineSettings } from "react-icons/md";
import { BsFillEyeFill } from "react-icons/bs";

const DarkTheme_Welcome = () => {
  return (
    <div className="col-lg-8 col-xl-8 col-md-12 col-sm-12">
      <div className={styles?.fans}>
        <div className={styles?.profileup}>
          <div className={styles?.profile}>
            <img src="/mask-group-31@2x.png" width={180} />
          </div>
          <div className={styles?.paddingleft}>
            <div className="row text-white">
              <div className="col-md-9">
                <div className={`d-flex align-items-center ${styles?.text}`}>
                  Welcome back Ross kennedy !{" "}
                  <span>
                    <MdOutlineSettings />
                  </span>
                </div>
              </div>

              <div className="col-md-3">
                <div className={styles.view}>View Profile</div>
              </div>
            </div>
            <div className="ps-3 mt-2 d-flex align-items-center">
              <BsFillEyeFill /> <span>124512 Views</span>{" "}
              <span className="ms-3">12K Subsciber</span>
            </div>
            <div className={styles?.box}>
              <div className="p-3">
                <div className={styles?.last}>
                  Changes Since last login{" "}
                  <span className={styles?.ago}>15 hours ago</span>
                  <div className="row mt-1 align-items-center">
                    <div className="col-md-4">
                      <div className={styles?.follower}>
                        10
                        <span className="ms-2">new follower</span>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className={styles?.follower}>
                        10
                        <span className="ms-2">new views</span>
                      </div>
                    </div>
                    <div className={`${styles?.dollaricon} col-md-4`}>
                      $
                      <span className={styles?.follower1}>
                        10
                        <span className="ms-2">earning</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DarkTheme_Welcome;
