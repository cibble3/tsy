import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "../components/navigation/dark-theme/dashbpard-dark-theme.module.css";

import {
  BsBroadcast,
  BsFileEarmarkText,
  BsLink45Deg,
  BsCalendar2Week,
  BsFillEyeFill,
} from "react-icons/bs";
import {
  MdApps,
  MdNotificationsNone,
  MdOutlineHome,
  MdOutlineDashboard,
  MdOutlineSettings,
  MdFormatListBulleted,
} from "react-icons/md";
import { RiMessage2Line } from "react-icons/ri";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { BiUpArrowAlt } from "react-icons/bi";
import { AiFillCaretDown } from "react-icons/ai";
import { GrAppsRounded } from "react-icons/gr";
import { FiUserPlus } from "react-icons/fi";
import { IoLogOutOutline } from "react-icons/io5";
import HorizontalMenu from "@/components/navigation/dark-theme/horizontalMenu";
import DarkTheme from "../components/navigation/dark-themeLive";

const DashbpardDarkTheme = () => {
  const router = useRouter();
  return (
    <div>
      <DarkTheme>
        <div className={styles?.dasboardMain}>
          <div className="row w-100 py-4">
            <div className="col-lg-9 col-md-12 mt-5 pb-2">
              <div className="row">
                <div className="col-lg-0 col-xl-1 col-md-0"></div>
                <div className="col-lg-8 col-xl-8 col-md-12 col-sm-12">
                  <div className={styles?.fans}>
                    <div className={styles?.profileup}>
                      <div className={styles?.profile}>
                        <img src="/mask-group-31@2x.png" width={180} />
                      </div>
                      <div className={styles?.paddingleft}>
                        <div className="row text-white">
                          <div className="col-md-9">
                            <div
                              className={`d-flex align-items-center ${styles?.text}`}
                            >
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
                        <div className="text-white ps-3 mt-2 d-flex align-items-center">
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
                                    <span className="text-white ms-2">
                                      new follower
                                    </span>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className={styles?.follower}>
                                    10
                                    <span className="text-white ms-2">
                                      new views
                                    </span>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  $
                                  <span className={styles?.follower1}>
                                    10
                                    <span className="text-white ms-2">
                                      earning
                                    </span>
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
                <div className="col-lg-4 col-xl-3 col-md-12 col-sm-12">
                  <div className={styles?.fanss}>
                    <div className="row align-items-center">
                      <div className="col-md-6">
                        <div className={styles?.earning}>Earning </div>
                      </div>
                      <div className="col-md-6 text-white d-flex align-items-center">
                        Last Week{" "}
                        <span className={styles?.pinkColor}>
                          <AiFillCaretDown />
                        </span>
                      </div>
                    </div>
                    <div className={styles?.price}>$ 2545.00</div>
                    <div className="text-white mt-3 mb-2  d-flex align-items-center">
                      <span className="text-success d-flex align-items-center pe-2">
                        <BiUpArrowAlt size={30} /> 11.45 %{" "}
                      </span>{" "}
                      than last week
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles?.properBox}>
                <div className={styles?.fans}>
                  <div className="p-3">
                    <div className={styles?.menu}>
                      <div>
                        <MdFormatListBulleted size={25} color="white" />
                      </div>
                      <div className={styles?.groupChild43}>
                        <MdApps color="white" size={25} />
                      </div>
                      <div
                        className={`d-flex align-items-center ${styles?.border}`}
                      >
                        All media type{" "}
                        <span className={styles?.pinkColor}>
                          <AiFillCaretDown />
                        </span>
                      </div>
                      <div
                        className={`d-flex align-items-center ${styles?.border}`}
                      >
                        All Dates{" "}
                        <span className={styles?.pinkColor}>
                          <AiFillCaretDown />
                        </span>
                      </div>
                      <div className={styles.addNew}>Bulk Select</div>
                      <div className={styles.addNew}>+ New Category</div>
                      <div className={styles.addNew}>View Category</div>
                      <div className={styles?.border}>Search media items </div>
                    </div>
                    <div className={styles.bottomBorder}></div>
                    <div className="row mt-3">
                      <div className={styles?.images}>
                        <div className="col-sm-4 col-md-4 col-lg-3 col-xl-2 col-6 p-2">
                          <img
                            src="/mask-group-21@2x.png"
                            className="w-100"
                            height={170}
                          />
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-3 col-xl-2 col-6 p-2">
                          <img
                            src="/mask-group-24@2x.png"
                            className="w-100"
                            height={170}
                          />
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-3 col-xl-2 col-6 p-2">
                          <img
                            src="/mask-group-21@2x.png"
                            className="w-100"
                            height={170}
                          />
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-3 col-xl-2 col-6 p-2">
                          <img
                            src="/mask-group-24@2x.png"
                            className="w-100"
                            height={170}
                          />
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-3 col-xl-2 col-6 p-2">
                          <img
                            src="/mask-group-17@2x.png"
                            className="w-100"
                            height={170}
                          />
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-3 col-xl-2 col-6 p-2">
                          <img
                            src="/mask-group-21@2x.png"
                            className="w-100"
                            height={170}
                          />
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-3 col-xl-2 col-6 p-2">
                          <img
                            src="/mask-group-21@2x.png"
                            className="w-100"
                            height={170}
                          />
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-3 col-xl-2 col-6 p-2">
                          <img
                            src="/mask-group-24@2x.png"
                            className="w-100"
                            height={170}
                          />
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-3 col-xl-2 col-6 p-2">
                          <img
                            src="/mask-group-21@2x.png"
                            className="w-100"
                            height={170}
                          />
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-3 col-xl-2 col-6 p-2">
                          <img
                            src="/mask-group-24@2x.png"
                            className="w-100"
                            height={170}
                          />
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-3 col-xl-2 col-6 p-2">
                          <img
                            src="/mask-group-17@2x.png"
                            className="w-100"
                            height={170}
                          />
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-3 col-xl-2 col-6 p-2">
                          <img
                            src="/mask-group-21@2x.png"
                            className="w-100"
                            height={170}
                          />
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-3 col-xl-2 col-6 p-2">
                          <img
                            src="/mask-group-21@2x.png"
                            className="w-100"
                            height={170}
                          />
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-3 col-xl-2 col-6 p-2">
                          <img
                            src="/mask-group-24@2x.png"
                            className="w-100"
                            height={170}
                          />
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-3 col-xl-2 col-6 p-2">
                          <img
                            src="/mask-group-21@2x.png"
                            className="w-100"
                            height={170}
                          />
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-3 col-xl-2 col-6 p-2">
                          <img
                            src="/mask-group-24@2x.png"
                            className="w-100"
                            height={170}
                          />
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-3 col-xl-2 col-6 p-2">
                          <img
                            src="/mask-group-17@2x.png"
                            className="w-100"
                            height={170}
                          />
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-3 col-xl-2 col-6 p-2">
                          <img
                            src="/mask-group-21@2x.png"
                            className="w-100"
                            height={170}
                          />
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-3 col-xl-2 col-6 p-2">
                          <img
                            src="/mask-group-21@2x.png"
                            className="w-100"
                            height={170}
                          />
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-3 col-xl-2 col-6 p-2">
                          <img
                            src="/mask-group-24@2x.png"
                            className="w-100"
                            height={170}
                          />
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-3 col-xl-2 col-6 p-2">
                          <img
                            src="/mask-group-21@2x.png"
                            className="w-100"
                            height={170}
                          />
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-3 col-xl-2 col-6 p-2">
                          <img
                            src="/mask-group-24@2x.png"
                            className="w-100"
                            height={170}
                          />
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-3 col-xl-2 col-6 p-2">
                          <img
                            src="/mask-group-17@2x.png"
                            className="w-100"
                            height={170}
                          />
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-3 col-xl-2 col-6 p-2">
                          <img
                            src="/mask-group-21@2x.png"
                            className="w-100"
                            height={170}
                          />
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-3 col-xl-2 col-6 p-2">
                          <img
                            src="/mask-group-21@2x.png"
                            className="w-100"
                            height={170}
                          />
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-3 col-xl-2 col-6 p-2">
                          <img
                            src="/mask-group-24@2x.png"
                            className="w-100"
                            height={170}
                          />
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-3 col-xl-2 col-6 p-2">
                          <img
                            src="/mask-group-21@2x.png"
                            className="w-100"
                            height={170}
                          />
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-3 col-xl-2 col-6 p-2">
                          <img
                            src="/mask-group-24@2x.png"
                            className="w-100"
                            height={170}
                          />
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-3 col-xl-2 col-6 p-2">
                          <img
                            src="/mask-group-17@2x.png"
                            className="w-100"
                            height={170}
                          />
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-3 col-xl-2 col-6 p-2">
                          <img
                            src="/mask-group-21@2x.png"
                            className="w-100"
                            height={170}
                          />
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-3 col-xl-2 col-6 p-2">
                          <img
                            src="/mask-group-21@2x.png"
                            className="w-100"
                            height={170}
                          />
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-3 col-xl-2 col-6 p-2">
                          <img
                            src="/mask-group-24@2x.png"
                            className="w-100"
                            height={170}
                          />
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-3 col-xl-2 col-6 p-2">
                          <img
                            src="/mask-group-21@2x.png"
                            className="w-100"
                            height={170}
                          />
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-3 col-xl-2 col-6 p-2">
                          <img
                            src="/mask-group-24@2x.png"
                            className="w-100"
                            height={170}
                          />
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-3 col-xl-2 col-6 p-2">
                          <img
                            src="/mask-group-17@2x.png"
                            className="w-100"
                            height={170}
                          />
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-3 col-xl-2 col-6 p-2">
                          <img
                            src="/mask-group-21@2x.png"
                            className="w-100"
                            height={170}
                          />
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-3 col-xl-2 col-6 p-2">
                          <img
                            src="/mask-group-21@2x.png"
                            className="w-100"
                            height={170}
                          />
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-3 col-xl-2 col-6 p-2">
                          <img
                            src="/mask-group-24@2x.png"
                            className="w-100"
                            height={170}
                          />
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-3 col-xl-2 col-6 p-2">
                          <img
                            src="/mask-group-21@2x.png"
                            className="w-100"
                            height={170}
                          />
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-3 col-xl-2 col-6 p-2">
                          <img
                            src="/mask-group-24@2x.png"
                            className="w-100"
                            height={170}
                          />
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-3 col-xl-2 col-6 p-2">
                          <img
                            src="/mask-group-17@2x.png"
                            className="w-100"
                            height={170}
                          />
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-3 col-xl-2 col-6 p-2">
                          <img
                            src="/mask-group-21@2x.png"
                            className="w-100"
                            height={170}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row ">
                  <div className="col-lg-6 col-md-12 mt-3">
                    <div className={styles?.fans}>
                      <div
                        className={styles?.links}
                        style={{ paddingLeft: "16px" }}
                      >
                        Feeds
                      </div>
                      <div className={styles?.feeds}>
                        <div className="mt-3 p-3">
                          <div className="text-white">15 March, 2023</div>
                          <div className="d-flex align-items-center">
                            <div className={styles?.xText}>X</div>{" "}
                            <span className="ms-3 text-white">
                              Lorem Ipsum{" "}
                            </span>
                          </div>
                          <div className="text-white">
                            Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s.
                          </div>
                        </div>
                        <div className="mt-3 p-3">
                          <div className="text-white">12 March, 2023</div>
                          <div className="d-flex align-items-center">
                            <div className={styles?.xText}>X</div>{" "}
                            <span className="ms-3 text-white">
                              New Subscriber{" "}
                            </span>
                          </div>
                          <div className="text-white">
                            Mattew Wayden has just subscribe to your regular
                            pack. Say Hi, to metthew
                          </div>
                        </div>
                        <div className="mt-3 p-3">
                          <div className="text-white">03 March, 2023</div>
                          <div className="d-flex align-items-center">
                            <div>
                              <img
                                src="/3drendergiftboxwithribbonpresentpackage@2x.png"
                                width={40}
                              />
                            </div>{" "}
                            <span className="ms-3 text-white">
                              501 Token received{" "}
                            </span>
                          </div>
                          <div className="text-white">
                            Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s.
                          </div>
                        </div>
                        <div className="mt-3 p-3">
                          <div className="text-white">15 March, 2023</div>
                          <div className="d-flex align-items-center">
                            <div className={styles?.xText}>X</div>{" "}
                            <span className="ms-3 text-white">
                              Lorem Ipsum{" "}
                            </span>
                          </div>
                          <div className="text-white">
                            Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 mt-3">
                    <div className={styles?.fans}>
                      <div
                        className={styles?.links}
                        style={{ paddingLeft: "16px" }}
                      >
                        Calender
                      </div>
                      <div>
                        <div className="d-flex align-items-center justify-contact-between mt-3">
                          <div style={{ width: "86%" }}>
                            <FaArrowLeft color="white" />
                          </div>
                          <div className={styles?.Availability}>
                            Availability
                          </div>
                          <div>
                            <FaArrowRight color="white" />
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
                            <div className="d-flex align-items-center text-white mt-3">
                              <div>10:30 PM</div>
                              <div className={styles?.time}>
                                <div className="py-3 px-4 text-white">
                                  <div>Online class</div>
                                  <div>30 Min</div>
                                </div>
                              </div>
                            </div>
                            <div className="d-flex align-items-center text-white mt-3">
                              <div>10:30 PM</div>
                              <div className={styles?.time1}>
                                <div className="py-1 px-4 text-white">
                                  <div>Online class</div>
                                  <div>30 Min</div>
                                </div>
                              </div>
                            </div>
                            <div className="d-flex align-items-center text-white mt-3">
                              <div>10:30 PM</div>
                              <div className={styles?.time1}>
                                <div className="py-1 px-4 text-white">
                                  <div>Online class</div>
                                  <div>30 Min</div>
                                </div>
                              </div>
                            </div>
                            <div className="d-flex align-items-center text-white mt-3">
                              <div>10:30 PM</div>
                              <div className={styles?.time1}>
                                <div className="py-1 px-4 text-white">
                                  <div>Online class</div>
                                  <div>30 Min</div>
                                </div>
                              </div>
                            </div>
                            <div className="d-flex align-items-center text-white mt-3">
                              <div>10:30 PM</div>
                              <div className={styles?.time1}>
                                <div className="py-1 px-4 text-white">
                                  <div>Online class</div>
                                  <div>30 Min</div>
                                </div>
                              </div>
                            </div>
                            <div className="d-flex align-items-center text-white mt-3">
                              <div>10:30 PM</div>
                              <div className={styles?.time1}>
                                <div className="py-1 px-4 text-white">
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
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-12 mt-4">
              <div className={styles?.fans}>
                <div className="d-flex justify-contant-center align-items-center w-100 px-3">
                  <div className={styles.fansInner}>Fans/Friends list</div>
                  <div className={styles.fansnumber}>7452</div>
                </div>
                <div className="d-flex justify-contant-center align-items-center w-100 px-3 mt-3">
                  <div className={styles.fan}>All Fans</div>
                  <div className={styles.list}>All Friends</div>
                  <div className={styles.list}>Other list</div>
                </div>
                <div className="row mt-3">
                  <div className="col-6">
                    <span
                      className={`d-flex align-items-center ${styles?.name}`}
                    >
                      Name
                    </span>
                  </div>
                  <div className="col-3">
                    <span className={styles?.name}>Point</span>
                  </div>
                  <div className="col-3">
                    <span className={styles?.name}>Rank</span>
                  </div>
                </div>
                <div className={styles.bottomBorder}></div>
                <div className="mt-3">
                  <div className={styles.top}>Top 5 Fans</div>
                </div>
                <div className="row mt-3 align-items-center px-2">
                  <div className="col-6">
                    <span
                      className={`d-flex align-items-center ${styles?.name}`}
                    >
                      <img src="/group-61@2x.png" width={40} height={40} />{" "}
                      <span className="text-white ms-2">Bella roland</span>
                    </span>
                  </div>
                  <div className="col-3">
                    <span className="text-white">4567</span>
                  </div>
                  <div className="col-3">
                    <span className="text-white">1st</span>
                  </div>
                </div>
                <div className="row mt-3 align-items-center px-2">
                  <div className="col-6">
                    <span
                      className={`d-flex align-items-center ${styles?.name}`}
                    >
                      <img src="/mask-group-7@2x.png" width={40} height={40} />{" "}
                      <span className="text-white ms-2">James</span>
                    </span>
                  </div>
                  <div className="col-3">
                    <span className="text-white">8588</span>
                  </div>
                  <div className="col-3">
                    <span className="text-white">2nd</span>
                  </div>
                </div>
                <div className="row mt-3 align-items-center px-2">
                  <div className="col-6">
                    <span
                      className={`d-flex align-items-center ${styles?.name}`}
                    >
                      <img src="/mask-group-8@2x.png" width={40} height={40} />{" "}
                      <span className="text-white ms-2">junebox_12</span>
                    </span>
                  </div>
                  <div className="col-3">
                    <span className="text-white">789</span>
                  </div>
                  <div className="col-3">
                    <span className="text-white">3rd</span>
                  </div>
                </div>
                <div className="row mt-3 align-items-center px-2">
                  <div className="col-6">
                    <span
                      className={`d-flex align-items-center ${styles?.name}`}
                    >
                      <img src="/mask-group-9@2x.png" width={40} height={40} />{" "}
                      <span className="text-white ms-2">PewDiePie</span>
                    </span>
                  </div>
                  <div className="col-3">
                    <span className="text-white">3648</span>
                  </div>
                  <div className="col-3">
                    <span className="text-white">4th</span>
                  </div>
                </div>
                <div className="row mt-3 align-items-center px-2 mb-3">
                  <div className="col-6">
                    <span
                      className={`d-flex align-items-center ${styles?.name}`}
                    >
                      <img src="/group-6@2x.png" width={40} height={40} />{" "}
                      <span className="text-white ms-2">Mattie_452</span>
                    </span>
                  </div>
                  <div className="col-3">
                    <span className="text-white">1456</span>
                  </div>
                  <div className="col-3">
                    <span className="text-white">5th</span>
                  </div>
                </div>
                <div className={styles.bottomBorder}></div>
                <div className="mt-3">
                  <div className={styles.top}>Top Spenders</div>
                </div>
                <div className="row mt-3 align-items-center px-2">
                  <div className={styles?.spender} style={{ width: "95%" }}>
                    <div className="col-6 mb-2">
                      <span
                        className={`d-flex align-items-center ${styles?.name}`}
                      >
                        <img src="/group-61@2x.png" width={40} height={40} />{" "}
                        <span className="text-white ms-2">Bella roland</span>
                      </span>
                    </div>
                    <div className="col-3 mb-2">
                      <span className="text-white">4567</span>
                    </div>
                    <div className="col-3 mb-2"></div>
                    <div className="col-6 mb-2">
                      <span
                        className={`d-flex align-items-center ${styles?.name}`}
                      >
                        <img
                          src="/mask-group-7@2x.png"
                          width={40}
                          height={40}
                        />{" "}
                        <span className="text-white ms-2">James</span>
                      </span>
                    </div>
                    <div className="col-3 mb-2">
                      <span className="text-white">8588</span>
                    </div>
                    <div className="col-3 mb-2"></div>
                    <div className="col-6 mb-2">
                      <span
                        className={`d-flex align-items-center ${styles?.name}`}
                      >
                        <img
                          src="/mask-group-8@2x.png"
                          width={40}
                          height={40}
                        />{" "}
                        <span className="text-white ms-2">junebox_12</span>
                      </span>
                    </div>
                    <div className="col-3 mb-2">
                      <span className="text-white">789</span>
                    </div>
                    <div className="col-3 mb-2"></div>
                    <div className="col-6 mb-2">
                      <span
                        className={`d-flex align-items-center ${styles?.name}`}
                      >
                        <img
                          src="/mask-group-9@2x.png"
                          width={40}
                          height={40}
                        />{" "}
                        <span className="text-white ms-2">PewDiePie</span>
                      </span>
                    </div>
                    <div className="col-3 mb-2">
                      <span className="text-white">3648</span>
                    </div>
                    <div className="col-3 mb-2"></div>
                    <div className="col-6 mb-2">
                      <span
                        className={`d-flex align-items-center ${styles?.name}`}
                      >
                        <img src="/group-6@2x.png" width={40} height={40} />{" "}
                        <span className="text-white ms-2">Mattie_452</span>
                      </span>
                    </div>
                    <div className="col-3 mb-2">
                      <span className="text-white">1456</span>
                    </div>
                    <div className="col-3 mb-2"></div>
                    <div className="col-6 mb-2">
                      <span
                        className={`d-flex align-items-center ${styles?.name}`}
                      >
                        <img src="/group-61@2x.png" width={40} height={40} />{" "}
                        <span className="text-white ms-2">Bella roland</span>
                      </span>
                    </div>
                    <div className="col-3 mb-2">
                      <span className="text-white">4567</span>
                    </div>
                    <div className="col-3 mb-2"></div>
                    <div className="col-6 mb-2">
                      <span
                        className={`d-flex align-items-center ${styles?.name}`}
                      >
                        <img
                          src="/mask-group-7@2x.png"
                          width={40}
                          height={40}
                        />{" "}
                        <span className="text-white ms-2">James</span>
                      </span>
                    </div>
                    <div className="col-3 mb-2">
                      <span className="text-white">8588</span>
                    </div>
                    <div className="col-3 mb-2"></div>
                    <div className="col-6 mb-2">
                      <span
                        className={`d-flex align-items-center ${styles?.name}`}
                      >
                        <img
                          src="/mask-group-8@2x.png"
                          width={40}
                          height={40}
                        />{" "}
                        <span className="text-white ms-2">junebox_12</span>
                      </span>
                    </div>
                    <div className="col-3 mb-2">
                      <span className="text-white">789</span>
                    </div>
                    <div className="col-3 mb-2"></div>
                    <div className="col-6 mb-2">
                      <span
                        className={`d-flex align-items-center ${styles?.name}`}
                      >
                        <img
                          src="/mask-group-9@2x.png"
                          width={40}
                          height={40}
                        />{" "}
                        <span className="text-white ms-2">PewDiePie</span>
                      </span>
                    </div>
                    <div className="col-3 mb-2">
                      <span className="text-white">3648</span>
                    </div>
                    <div className="col-3 mb-2"></div>
                    <div className="col-6 mb-2">
                      <span
                        className={`d-flex align-items-center ${styles?.name}`}
                      >
                        <img src="/group-6@2x.png" width={40} height={40} />{" "}
                        <span className="text-white ms-2">Mattie_452</span>
                      </span>
                    </div>
                    <div className="col-3 mb-2">
                      <span className="text-white">1456</span>
                    </div>
                    <div className="col-3 mb-2"></div>
                    <div className="col-6 mb-2">
                      <span
                        className={`d-flex align-items-center ${styles?.name}`}
                      >
                        <img src="/group-61@2x.png" width={40} height={40} />{" "}
                        <span className="text-white ms-2">Bella roland</span>
                      </span>
                    </div>
                    <div className="col-3 mb-2">
                      <span className="text-white">4567</span>
                    </div>
                    <div className="col-3 mb-2"></div>
                    <div className="col-6 mb-2">
                      <span
                        className={`d-flex align-items-center ${styles?.name}`}
                      >
                        <img
                          src="/mask-group-7@2x.png"
                          width={40}
                          height={40}
                        />{" "}
                        <span className="text-white ms-2">James</span>
                      </span>
                    </div>
                    <div className="col-3 mb-2">
                      <span className="text-white">8588</span>
                    </div>
                    <div className="col-3 mb-2"></div>
                    <div className="col-6 mb-2">
                      <span
                        className={`d-flex align-items-center ${styles?.name}`}
                      >
                        <img
                          src="/mask-group-8@2x.png"
                          width={40}
                          height={40}
                        />{" "}
                        <span className="text-white ms-2">junebox_12</span>
                      </span>
                    </div>
                    <div className="col-3 mb-2">
                      <span className="text-white">789</span>
                    </div>
                    <div className="col-3 mb-2"></div>
                    <div className="col-6 mb-2">
                      <span
                        className={`d-flex align-items-center ${styles?.name}`}
                      >
                        <img
                          src="/mask-group-9@2x.png"
                          width={40}
                          height={40}
                        />{" "}
                        <span className="text-white ms-2">PewDiePie</span>
                      </span>
                    </div>
                    <div className="col-3 mb-2">
                      <span className="text-white">3648</span>
                    </div>
                    <div className="col-3 mb-2"></div>
                    <div className="col-6 mb-2">
                      <span
                        className={`d-flex align-items-center ${styles?.name}`}
                      >
                        <img src="/group-6@2x.png" width={40} height={40} />{" "}
                        <span className="text-white ms-2">Mattie_452</span>
                      </span>
                    </div>
                    <div className="col-3 mb-2">
                      <span className="text-white">1456</span>
                    </div>
                    <div className="col-3 mb-2"></div>
                  </div>
                </div>
                <div className="mt-3">
                  <div className={styles.top}>Other</div>
                </div>
                <div className="row mt-3 align-items-center px-2">
                  <div className={styles?.Other} style={{ width: "95%" }}>
                    <div className="col-6 mb-2">
                      <span
                        className={`d-flex align-items-center ${styles?.name}`}
                      >
                        <img src="/group-61@2x.png" width={40} height={40} />{" "}
                        <span className="text-white ms-2">Bella roland</span>
                      </span>
                    </div>
                    <div className="col-3 mb-2">
                      <span className="text-white">4567</span>
                    </div>
                    <div className="col-3 mb-2"></div>
                    <div className="col-6 mb-2">
                      <span
                        className={`d-flex align-items-center ${styles?.name}`}
                      >
                        <img
                          src="/mask-group-7@2x.png"
                          width={40}
                          height={40}
                        />{" "}
                        <span className="text-white ms-2">James</span>
                      </span>
                    </div>
                    <div className="col-3 mb-2">
                      <span className="text-white">8588</span>
                    </div>
                    <div className="col-3 mb-2"></div>
                    <div className="col-6 mb-2">
                      <span
                        className={`d-flex align-items-center ${styles?.name}`}
                      >
                        <img
                          src="/mask-group-8@2x.png"
                          width={40}
                          height={40}
                        />{" "}
                        <span className="text-white ms-2">junebox_12</span>
                      </span>
                    </div>
                    <div className="col-3 mb-2">
                      <span className="text-white">789</span>
                    </div>
                    <div className="col-3 mb-2"></div>
                    <div className="col-6 mb-2">
                      <span
                        className={`d-flex align-items-center ${styles?.name}`}
                      >
                        <img
                          src="/mask-group-9@2x.png"
                          width={40}
                          height={40}
                        />{" "}
                        <span className="text-white ms-2">PewDiePie</span>
                      </span>
                    </div>
                    <div className="col-3 mb-2">
                      <span className="text-white">3648</span>
                    </div>
                    <div className="col-3 mb-2"></div>
                    <div className="col-6 mb-2">
                      <span
                        className={`d-flex align-items-center ${styles?.name}`}
                      >
                        <img src="/group-6@2x.png" width={40} height={40} />{" "}
                        <span className="text-white ms-2">Mattie_452</span>
                      </span>
                    </div>
                    <div className="col-3 mb-2">
                      <span className="text-white">1456</span>
                    </div>
                    <div className="col-3 mb-2"></div>
                    <div className="col-6 mb-2">
                      <span
                        className={`d-flex align-items-center ${styles?.name}`}
                      >
                        <img src="/group-61@2x.png" width={40} height={40} />{" "}
                        <span className="text-white ms-2">Bella roland</span>
                      </span>
                    </div>
                    <div className="col-3 mb-2">
                      <span className="text-white">4567</span>
                    </div>
                    <div className="col-3 mb-2"></div>
                    <div className="col-6 mb-2">
                      <span
                        className={`d-flex align-items-center ${styles?.name}`}
                      >
                        <img
                          src="/mask-group-7@2x.png"
                          width={40}
                          height={40}
                        />{" "}
                        <span className="text-white ms-2">James</span>
                      </span>
                    </div>
                    <div className="col-3 mb-2">
                      <span className="text-white">8588</span>
                    </div>
                    <div className="col-3 mb-2"></div>
                    <div className="col-6 mb-2">
                      <span
                        className={`d-flex align-items-center ${styles?.name}`}
                      >
                        <img
                          src="/mask-group-8@2x.png"
                          width={40}
                          height={40}
                        />{" "}
                        <span className="text-white ms-2">junebox_12</span>
                      </span>
                    </div>
                    <div className="col-3 mb-2">
                      <span className="text-white">789</span>
                    </div>
                    <div className="col-3 mb-2"></div>
                    <div className="col-6 mb-2">
                      <span
                        className={`d-flex align-items-center ${styles?.name}`}
                      >
                        <img
                          src="/mask-group-9@2x.png"
                          width={40}
                          height={40}
                        />{" "}
                        <span className="text-white ms-2">PewDiePie</span>
                      </span>
                    </div>
                    <div className="col-3 mb-2">
                      <span className="text-white">3648</span>
                    </div>
                    <div className="col-3 mb-2"></div>
                    <div className="col-6 mb-2">
                      <span
                        className={`d-flex align-items-center ${styles?.name}`}
                      >
                        <img src="/group-6@2x.png" width={40} height={40} />{" "}
                        <span className="text-white">Mattie_452</span>
                      </span>
                    </div>
                    <div className="col-3 mb-2">
                      <span className="text-white">1456</span>
                    </div>
                    <div className="col-3 mb-2"></div>
                    <div className="col-6 mb-2">
                      <span
                        className={`d-flex align-items-center ${styles?.name}`}
                      >
                        <img src="/group-61@2x.png" width={40} height={40} />{" "}
                        <span className="text-white ms-2">Bella roland</span>
                      </span>
                    </div>
                    <div className="col-3 mb-2">
                      <span className="text-white">4567</span>
                    </div>
                    <div className="col-3 mb-2"></div>
                    <div className="col-6 mb-2">
                      <span
                        className={`d-flex align-items-center ${styles?.name}`}
                      >
                        <img
                          src="/mask-group-7@2x.png"
                          width={40}
                          height={40}
                        />{" "}
                        <span className="text-white ms-2">James</span>
                      </span>
                    </div>
                    <div className="col-3 mb-2">
                      <span className="text-white">8588</span>
                    </div>
                    <div className="col-3 mb-2"></div>
                    <div className="col-6 mb-2">
                      <span
                        className={`d-flex align-items-center ${styles?.name}`}
                      >
                        <img
                          src="/mask-group-8@2x.png"
                          width={40}
                          height={40}
                        />{" "}
                        <span className="text-white ms-2">junebox_12</span>
                      </span>
                    </div>
                    <div className="col-3 mb-2">
                      <span className="text-white">789</span>
                    </div>
                    <div className="col-3 mb-2"></div>
                    <div className="col-6 mb-2">
                      <span
                        className={`d-flex align-items-center ${styles?.name}`}
                      >
                        <img
                          src="/mask-group-9@2x.png"
                          width={40}
                          height={40}
                        />{" "}
                        <span className="text-white ms-2">PewDiePie</span>
                      </span>
                    </div>
                    <div className="col-3 mb-2">
                      <span className="text-white">3648</span>
                    </div>
                    <div className="col-3 mb-2"></div>
                    <div className="col-6 mb-2">
                      <span
                        className={`d-flex align-items-center ${styles?.name}`}
                      >
                        <img src="/group-6@2x.png" width={40} height={40} />{" "}
                        <span className="text-white ms-2">Mattie_452</span>
                      </span>
                    </div>
                    <div className="col-3 mb-2">
                      <span className="text-white">1456</span>
                    </div>
                    <div className="col-3 mb-2"></div>
                  </div>
                </div>
              </div>
              <div className="my-3"></div>
              <div className={styles?.lastfans}>
                <div className="d-flex justify-contant-center align-items-center p-2 ">
                  <div className={styles?.links}>All Links</div>
                  <div className={styles.new}>+ Add new</div>
                </div>
                <div className="d-flex justify-contant-center align-items-center p-2 flex-wrap">
                  <img src="/instagram-logo-2016.svg" className="mx-2" />
                  <img src="/group-57.svg" className="mx-2" />
                  <img src="/facebooklogo.svg" className="mx-2" />
                  <img src="/layer1.svg" className="mx-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </DarkTheme>
    </div>
  );
};

export default DashbpardDarkTheme;
