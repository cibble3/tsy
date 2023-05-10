import React, { useEffect, useState } from "react";
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
  MdHistory,
  MdOutlineSettings,
  MdFormatListBulleted,
} from "react-icons/md";
import { RxCaretUp } from "react-icons/rx";
import { RiMessage2Line } from "react-icons/ri";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { BiUpArrowAlt } from "react-icons/bi";
import { AiFillCaretDown, AiOutlineHeart } from "react-icons/ai";
import { GrAppsRounded } from "react-icons/gr";
import { FiUserPlus } from "react-icons/fi";
import { IoCloseSharp, IoLogOutOutline } from "react-icons/io5";
import styles from "./dashbpard-dark-theme.module.css";
import style from "../dark-theme/dashbpard-dark-theme.module.css";
import Footer from "./footer";
import useWindowSize from "@/hooks/useWindowSize";
import { Dropdown, DropdownButton } from "react-bootstrap";

const SideBar = ({ collapse, setCollapse }) => {
  const { width, height } = useWindowSize();
  const [dropMenu, setDropMenu] = useState();
  // console.log("🚀 ~ file: sideBar.js:35 ~ SideBar ~ dropMenu:", dropMenu);
  return !collapse ? (
    <div
      className={`col-sm-3 col-md-3 col-lg-2 col-3 p-0 ${styles.topView}`}
      style={{ overflow: "hidden", height: width > 670 ? height - 80 : height }}
    >
      <div
        className={styles?.dashbpardDarkThemeItem}
        style={{ borderRight: "1px solid #707070", overflowY: "scroll" }}
      >
        <div>
          <div className={styles.sideHeader}>
            <div className="d-flex justify-content-between mt-3 mx-3 ">
              <img
                src="/mul-vod-main--xcrave-xcavelogo-w@2x.png"
                className={styles.mulVodSideXcraveXcavelogoIcon}
              />
              <IoCloseSharp
                color="#818181"
                size={20}
                onClick={() => setCollapse(true)}
              />
            </div>
          </div>
        </div>
        <div className="d-flex justify-contant-center align-items-center ms-3 pt-3">
          <MdHistory size={25} color="#818181" />
          <div className={styles?.home}>History</div>
        </div>
        <div className={styles.dashboard1}>
          <div className="d-flex justify-contant-center align-items-center ms-2">
            <AiOutlineHeart size={25} color="#ED135D" />
            <div className={styles?.dashboard}>Favourite</div>
          </div>
        </div>
        <div className="d-flex justify-contant-center align-items-center ms-3 pt-3 mb-3">
          <RiMessage2Line size={25} color="#818181" />
          <div className={styles?.home}>Messenger</div>
        </div>

        <div
          className="d-flex justify-content-between  px-3 pb-2 "
          style={{ borderTop: "1px solid #494949", position: "relative" }}
          onClick={() => setDropMenu(!dropMenu)}
        >
          <div>
            <Dropdown>
              <DropdownButton
                title="Category"
                className={"dropcustom"}
              ></DropdownButton>
            </Dropdown>
            <Dropdown.Menu show={dropMenu}>
              <Dropdown.Item onClick={() => setDropMenu(!dropMenu)}>
                <div className="mt-3">Astrology</div>
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setDropMenu(!dropMenu)}>
                <div className="mt-2">Tarot</div>
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setDropMenu(!dropMenu)}>
                <div className="mt-2">Clairvoyance</div>
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setDropMenu(!dropMenu)}>
                <div className="mt-2">Dream interpretation</div>
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setDropMenu(!dropMenu)}>
                <div className="mt-2">Healing</div>
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setDropMenu(!dropMenu)}>
                <div className="mt-2">Crystals</div>
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setDropMenu(!dropMenu)}>
                <div className="mt-2">Mediumship</div>
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setDropMenu(!dropMenu)}>
                <div className="mt-2">Crystal ball</div>
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setDropMenu(!dropMenu)}>
                <div className="mt-2">Numerology</div>
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setDropMenu(!dropMenu)}>
                <div className="mt-2">Runes</div>
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setDropMenu(!dropMenu)}>
                <div className="mt-2">Palm reading</div>
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setDropMenu(!dropMenu)}>
                <div className="mt-2 mb-3">Energy work</div>
              </Dropdown.Item>
            </Dropdown.Menu>
          </div>
          <div className="mt-4">
            <RxCaretUp size={25} color="white" className="" />
          </div>
          {/* <div className={styles?.home}>Category</div>
          <RxCaretUp size={25} color="white" /> */}
        </div>
        {/* <div className="px-5 text-white">
          <div className="mt-3">Astrology</div>
          <div className="mt-2">Tarot</div>
          <div className="mt-2">Clairvoyance</div>
          <div className="mt-2">Dream interpretation</div>
          <div className="mt-2">Healing</div>
          <div className="mt-2">Crystals</div>
          <div className="mt-2">Mediumship</div>
          <div className="mt-2">Crystal ball</div>
          <div className="mt-2">Numerology</div>
          <div className="mt-2">Runes</div>
          <div className="mt-2">Palm reading</div>
          <div className="mt-2 mb-3">Energy work</div>
        </div> */}
        <div
          className="d-flex justify-content-between align-items-center px-3 py-3"
          style={{ borderTop: "1px solid #494949" }}
        >
          <div className={styles?.home}>Topics</div>
          <RxCaretUp size={25} color="white" />
        </div>
        <div
          className="d-flex justify-content-between align-items-center px-3 py-3"
          style={{ borderTop: "1px solid #494949" }}
        >
          <div className={styles?.home}>Topics</div>
          <RxCaretUp size={25} color="white" />
        </div>
        <div
          className="d-flex justify-content-between align-items-center px-3 py-3"
          style={{ borderTop: "1px solid #494949" }}
        >
          <div className={styles?.home}>Years of experience</div>
          <RxCaretUp size={25} color="white" />
        </div>
        <div
          className="d-flex justify-content-between align-items-center px-3 py-3"
          style={{ borderTop: "1px solid #494949" }}
        >
          <div className={styles?.home}>Category</div>
          <RxCaretUp size={25} color="white" />
        </div>
        <div
          className="d-flex justify-content-between align-items-center px-3 py-3"
          style={{ borderTop: "1px solid #494949" }}
        >
          <div className={styles?.home}>Price</div>
          <RxCaretUp size={25} color="white" />
        </div>
        <div
          className="d-flex justify-content-between align-items-center px-3 py-3"
          style={{ borderTop: "1px solid #494949" }}
        >
          <div className={styles?.home}>Session Type</div>
          <RxCaretUp size={25} color="white" />
        </div>
        <div
          className="d-flex justify-content-between align-items-center px-3 py-3"
          style={{ borderTop: "1px solid #494949" }}
        >
          <div className={styles?.home}>Language</div>
          <RxCaretUp size={25} color="white" />
        </div>
        <div
          className="d-flex justify-content-between align-items-center px-3 py-3"
          style={{ borderTop: "1px solid #494949" }}
        >
          <div className={styles?.home}>Region</div>
          <RxCaretUp size={25} color="white" />
        </div>
        <div className={styles?.invite}>
          <div className="d-flex justify-contant-center align-items-center ms-3 mt-3">
            <FiUserPlus size={25} color="#ED135D" />
            <div className={styles?.home}>Invite Friend</div>
          </div>
          <div className="d-flex justify-contant-center align-items-center ms-3 mt-3 mb-3">
            <IoLogOutOutline size={25} color="#818181" />
            <div className={styles?.home}>Log out</div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  ) : (
    <div
      className={`${style.iconView} col-sm-1 col-lg-1 col-md-1 p-0`}
      style={{ width: "3.333333%", height: width > 670 ? height - 80 : height }}
    >
      <div
        className={styles?.dashbpardDarkThemeItem}
        style={{ borderRight: "1px solid #707070", overflowY: "scroll" }}
      >
        <div className="d-flex justify-contant-center align-items-center ms-3 pt-3">
          <MdHistory size={25} color="#818181" />
        </div>
        <div className={styles.dashboard1}>
          <div className="d-flex justify-contant-center align-items-center ms-2">
            <AiOutlineHeart size={25} color="#ED135D" />
          </div>
        </div>
        <div className="d-flex justify-contant-center align-items-center ms-3 mt-3">
          <BsFileEarmarkText size={25} color="#818181" />
        </div>
        <div className="d-flex justify-contant-center align-items-center ms-3 mt-3">
          <BsLink45Deg size={25} color="#818181" />
        </div>
        <div className="d-flex justify-contant-center align-items-center ms-3 mt-3">
          <BsCalendar2Week size={25} color="#818181" />
        </div>
        <div className={styles?.invite}>
          <div className="d-flex justify-contant-center align-items-center ms-3 mt-3">
            <FiUserPlus size={25} color="#ED135D" />
          </div>
          <div className="d-flex justify-contant-center align-items-center ms-3 mt-3 mb-3">
            <IoLogOutOutline size={25} color="#818181" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
