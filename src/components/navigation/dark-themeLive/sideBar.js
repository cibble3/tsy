import React from "react";
import {
  BsFileEarmarkText,
  BsLink45Deg,
  BsCalendar2Week,
} from "react-icons/bs";
import { MdHistory, MdCollectionsBookmark } from "react-icons/md";
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
import { Nav, Tab } from "react-bootstrap";
import { useRouter } from "next/router";

const SideBar = ({ collapse, setCollapse, parentMenuNames = [] }) => {
  const { width, height } = useWindowSize();
  const colorMode = useSelector((state) => state.darklight);
  const router = useRouter();
  const activeTab = router.asPath.split("/");
  const lowercaseKeys = Object.keys(menuData).map((key) => key.toLowerCase());

  const checkActiveTab = (activeTab) => {
    for (let i = 0; i < activeTab.length; i++) {
      const lowercaseKey = activeTab[i].toLowerCase();
      if (lowercaseKeys.includes(lowercaseKey)) {
        return activeTab[i];
      }
    }
  };

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
            <div className="d-flex justify-content-between ">
              <img
                src={
                  colorMode === "dark"
                    ? "/logo_master.png"
                    : "/logo_master.png"
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

        <Tab.Container
          defaultActiveKey={
            checkActiveTab(activeTab)
              ? checkActiveTab(activeTab)
              : Object.keys(menuData)[0].toLowerCase()
          }
        >
          <Nav variant="tabs">
            {Object.keys(menuData).map((key) => (
              <Nav.Item key={key.toLowerCase()}>
                <Nav.Link
                  activekey={key.toLowerCase()}
                  className="rounded-0"
                  eventKey={key.toLowerCase()}
                >
                  {key}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
          <Tab.Content>
            {Object.keys(menuData).map((itemkey) => (
              <Tab.Pane
                eventKey={itemkey.toLowerCase()}
                key={itemkey.toLowerCase()}
              >
                {Object.keys(menuData[itemkey]).map((key) =>
                  key.toLowerCase() === "categories" ? (
                    <DropdownComponent
                      key={key}
                      parentText={itemkey}
                      label={key}
                      menuItems={menuData[itemkey][key]}
                      menuData={menuData}
                    />
                  ) : (
                    <DropdownComponent
                      key={key}
                      label={key}
                      parentText={key}
                      menuItems={menuData[itemkey][key]}
                      menuData={menuData}
                      parentMenuNames={[...parentMenuNames, itemkey]}
                    />
                  )
                )}
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Tab.Container>

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
      style={{ width: "4%", height: width > 670 ? height - 80 : height }}
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
