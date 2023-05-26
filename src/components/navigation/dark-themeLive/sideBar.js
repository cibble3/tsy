import React, { useState } from "react";
import {
  BsFileEarmarkText,
  BsLink45Deg,
  BsCalendar2Week,
} from "react-icons/bs";
import { MdHistory, MdCollectionsBookmark } from "react-icons/md";
import { RxCaretUp } from "react-icons/rx";
import { FiUserPlus } from "react-icons/fi";
import { IoCloseSharp, IoLogOutOutline } from "react-icons/io5";
import styles from "./dashbpard-dark-theme.module.css";
import style from "../dark-theme/dashbpard-dark-theme.module.css";
import Footer from "./footer";
import useWindowSize from "@/hooks/useWindowSize";
import { useSelector } from "react-redux";
import Link from "next/link";
import DropdownComponent from "./DropdownComponent";
import { AiOutlineHeart } from "react-icons/ai";
import menuData from "../../../context/menuData.json";

const SideBar = ({ collapse, setCollapse }) => {
  const { width, height } = useWindowSize();
  // const [dropMenu, setDropMenu] = useState();
  const colorMode = useSelector((state) => state.darklight);
  // const count = useSelector((state) => state.counter);

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
                src={
                  colorMode === "dark"
                    ? "/mul-vod-main--xcrave-xcavelogo-w@2x.png"
                    : "/mul-vod-main--xcrave-xcavelogo@2x.png"
                }
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

        {/* <div className="d-flex justify-contant-center align-items-center ms-3 pt-3 mt-3 mb-3">
          <MdHistory size={25} color="#818181" />
          <div className={styles?.home}>History</div>
        </div> */}

        {/* <div className={styles.dashboard1}>
          <div className="d-flex justify-contant-center align-items-center ms-2">
            <AiOutlineHeart size={25} color="#ED135D" />
            <div className={styles?.dashboard}>Favourite</div>
          </div>
        </div> */}

        {/* <div className="d-flex justify-contant-center align-items-center ms-3 pt-3 mb-3">
          <RiMessage2Line size={25} color="#818181" />
          <div className={styles?.home}>Messenger</div>
        </div> */}

        {Object.keys(menuData).map((key) => (
          <DropdownComponent
            parentText={key}
            menuItems={menuData[key]}
            key={key}
          />
        ))}

        {/* <div
          className="d-flex justify-content-between align-items-center px-3 py-3"
          style={{ borderTop: "1px solid #494949" }}
        >
          <div className={styles?.home}>Language</div>
          <RxCaretUp size={25} color="white" />
        </div> */}

        <div className={styles?.invite}>
          <Link href={`/blog`}>
            <div className="d-flex justify-contant-center align-items-center ms-3 pt-3 mb-3">
              <MdCollectionsBookmark size={25} color="#818181" />
              <div className={styles?.home}>Blog</div>
            </div>
          </Link>
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
      <Footer />
    </div>
  );
};

export default SideBar;
