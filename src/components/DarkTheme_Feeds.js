import React from "react";
import styles from "../components/navigation/dark-themeLive/dashbpard-dark-theme.module.css";

const DarkTheme_Feeds = () => {
  return (
    <div className="col-lg-6 col-md-12 mt-3">
      <div className={styles?.fans}>
        <div className={styles?.links} style={{ paddingLeft: "16px" }}>
          Feeds
        </div>
        <div className={styles?.feeds}>
          <div className="mt-3 p-3">
            <div>15 March, 2023</div>
            <div className="d-flex align-items-center">
              <div className={styles?.xText}>X</div>{" "}
              <span className="ms-3">Lorem Ipsum </span>
            </div>
            <div>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s.
            </div>
          </div>
          <div className="mt-3 p-3">
            <div>12 March, 2023</div>
            <div className="d-flex align-items-center">
              <div className={styles?.xText}>X</div>{" "}
              <span className="ms-3">New Subscriber </span>
            </div>
            <div>
              Mattew Wayden has just subscribe to your regular pack. Say Hi, to
              metthew
            </div>
          </div>
          <div className="mt-3 p-3">
            <div>03 March, 2023</div>
            <div className="d-flex align-items-center">
              <div>
                <img
                  src="/3drendergiftboxwithribbonpresentpackage@2x.png"
                  width={40}
                />
              </div>{" "}
              <span className="ms-3">501 Token received </span>
            </div>
            <div>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s.
            </div>
          </div>
          <div className="mt-3 p-3">
            <div>15 March, 2023</div>
            <div className="d-flex align-items-center">
              <div className={styles?.xText}>X</div>{" "}
              <span className="ms-3">Lorem Ipsum </span>
            </div>
            <div>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DarkTheme_Feeds;
