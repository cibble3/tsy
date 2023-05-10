import React from "react";
import styles from "../components/navigation/dark-themeLive/dashbpard-dark-theme.module.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const DarkTheme_Calender = () => {
  return (
    <div className="col-lg-6 col-md-12 mt-3">
      <div className={styles?.fans}>
        <div className={styles?.links} style={{ paddingLeft: "16px" }}>
          Calender
        </div>
        <div>
          <div className="d-flex align-items-center justify-contact-between mt-3">
            <div style={{ width: "86%" }}>
              <FaArrowLeft />
            </div>
            <div className={styles?.Availability}>Availability</div>
            <div>
              <FaArrowRight />
            </div>
          </div>
          <div className={styles.month}>
            <div>Jan</div>
            <div>Feb</div>
            <div className={styles?.pinkColor}>Mar</div>
            <div>Apr</div>
            <div>May</div>
            <div>June</div>
            <div>July</div>
            <div>Aug</div>
            <div>Sep</div>
          </div>
          <div className={styles.Dates}>
            <div>12</div>
            <div>13</div>
            <div>14</div>
            <div className={styles?.div15}>15</div>
            <div>16</div>
            <div>17</div>
            <div>18</div>
            <div>19</div>
            <div>20</div>
            <div>21</div>
          </div>
          <div className={styles.Days}>
            <div>Mon</div>
            <div>Tue</div>
            <div className={styles?.pinkColor}>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
            <div>Sun</div>
          </div>
          <div className="mt-3 mb-3">
            <div className={styles.bottomBorder}></div>
          </div>
          <div className="ps-5">
            <div className={styles?.timing}>
              <div className="d-flex align-items-center mt-3">
                <div>10:30 PM</div>
                <div className={styles?.time}>
                  <div className="py-3 px-4">
                    <div>Online class</div>
                    <div>30 Min</div>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center mt-3">
                <div>10:30 PM</div>
                <div className={styles?.time1}>
                  <div className="py-1 px-4">
                    <div>Online class</div>
                    <div>30 Min</div>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center mt-3">
                <div>10:30 PM</div>
                <div className={styles?.time1}>
                  <div className="py-1 px-4">
                    <div>Online class</div>
                    <div>30 Min</div>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center mt-3">
                <div>10:30 PM</div>
                <div className={styles?.time1}>
                  <div className="py-1 px-4">
                    <div>Online class</div>
                    <div>30 Min</div>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center mt-3">
                <div>10:30 PM</div>
                <div className={styles?.time1}>
                  <div className="py-1 px-4">
                    <div>Online class</div>
                    <div>30 Min</div>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center mt-3">
                <div>10:30 PM</div>
                <div className={styles?.time1}>
                  <div className="py-1 px-4">
                    <div>Online class</div>
                    <div>30 Min</div>
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

export default DarkTheme_Calender;
