import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "../components/navigation/dark-themeLive/dashbpard-dark-theme.module.css";

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
import HorizontalMenu from "@/components/navigation/dark-themeLive/horizontalMenu";
import DarkTheme from "../components/navigation/dark-themeLive";
import DarkTheme_Welcome from "@/components/DarkTheme_Welcome";
import DarkTheme_Earning from "@/components/DarkTheme_Earning";
import DarkTheme_Media from "@/components/DarkTheme_Media";
import DarkTheme_Friend_List from "@/components/DarkTheme_Friend_List";
import DarkTheme_Feeds from "@/components/DarkTheme_Feeds";
import DarkTheme_Calender from "@/components/DarkTheme_Calender";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../store/reducer/counterReducer';

const DashbpardDarkTheme = () => {
  const router = useRouter();
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <div>
      <DarkTheme>
      
        <div className={styles?.dasboardMain1}>
          <div className="row w-100 py-4">
            <div className="col-lg-9 col-md-12 mt-5 pb-2">
              <div className="row">
                <div className="col-lg-0 col-xl-1 col-md-0"></div>
                <DarkTheme_Welcome />
                <DarkTheme_Earning />
              </div>

              <div className={styles?.properBox}>
                <DarkTheme_Media />

                <div className="row ">
                  <DarkTheme_Feeds />
                  <DarkTheme_Calender />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-12 mt-4">
              <DarkTheme_Friend_List />

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
