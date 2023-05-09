import { useRouter } from "next/router";
import styles from "../components/navigation/dark-themeLive/dashbpard-dark-theme.module.css";

import { AiOutlineHeart } from "react-icons/ai";
import { RxDotFilled } from "react-icons/rx";
import DarkTheme from "../components/navigation/dark-themeLive";
import LiveScreenPhoto1 from "@/components/LiveScreenPhoto1";
import LiveScreenPhoto2 from "@/components/LiveScreenPhoto2";

const DashbpardDarkTheme = () => {
  const router = useRouter();
  return (
    <div>
      <DarkTheme>
        <div className={styles?.dasboardMain}>
          <div className="py-4 px-3">
            <div className={styles?.liveHeading} style={{ fontSize: "18px" }}>
              TOP RATED{" "}
              <span className={styles?.livesubHeading}>
                LIVE EXPERTS{" "}
                <span className="ms-2" style={{ fontSize: "16px" }}>
                  Selection of Oranum's finest, award winning Experts!
                </span>{" "}
              </span>{" "}
            </div>
            <div className="row ">
              <LiveScreenPhoto1 image={"/pose.png"} />
              <LiveScreenPhoto2 image={"/pose1.png"} />
              <LiveScreenPhoto2 image={"/pose2.png"} />
              <LiveScreenPhoto2 image={"/pose3.png"} />

              {/* <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mt-4 ">
                <img src="/pose.png" alt="" className="w-100" />
                <div className="text-white px-2" style={{ marginTop: "-30px" }}>
                  <div className="d-flex justify-content-between align-items-center d-flex align-items-center">
                    <div className="d-flex align-items-center d-flex align-items-center">
                      <RxDotFilled fontSize="22px" /> <span>LoveExpertise</span>
                    </div>
                    <div className="">
                      <AiOutlineHeart fontSize="22px" />
                    </div>
                  </div>
                </div>
                <div
                  className="mt-3 text-white d-flex gap-1 flex-wrap"
                  style={{ fontSize: "11px" }}
                >
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mt-4 ">
                <img src="/pose1.png" alt="" className="w-100" />
                <div className="text-white px-2" style={{ marginTop: "-30px" }}>
                  <div className="d-flex justify-content-between align-items-center ">
                    <div className="d-flex align-items-center">
                      <RxDotFilled color="#8FC400" fontSize="22px" />{" "}
                      <span>LoveExpertise</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <AiOutlineHeart fontSize="22px" />
                      <span
                        className="mx-2 py-1 px-2 rounded "
                        style={{ backgroundColor: "#ED135D", fontSize: "13px" }}
                      >
                        Live
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="mt-3 text-white d-flex gap-1 flex-wrap"
                  style={{ fontSize: "11px" }}
                >
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mt-4 ">
                <img src="/pose2.png" alt="" className="w-100" />
                <div className="text-white px-2" style={{ marginTop: "-30px" }}>
                  <div className="d-flex justify-content-between align-items-center ">
                    <div className="d-flex align-items-center">
                      <RxDotFilled color="#8FC400" fontSize="22px" />{" "}
                      <span>LoveExpertise</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <AiOutlineHeart fontSize="22px" />
                      <span
                        className="mx-2 py-1 px-2 rounded "
                        style={{ backgroundColor: "#ED135D", fontSize: "13px" }}
                      >
                        Live
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="mt-3 text-white d-flex gap-1 flex-wrap"
                  style={{ fontSize: "11px" }}
                >
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mt-4 ">
                <img src="/pose3.png" alt="" className="w-100" />
                <div className="text-white px-2" style={{ marginTop: "-30px" }}>
                  <div className="d-flex justify-content-between align-items-center ">
                    <div className="d-flex align-items-center">
                      <RxDotFilled color="#8FC400" fontSize="22px" />{" "}
                      <span>LoveExpertise</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <AiOutlineHeart fontSize="22px" />
                      <span
                        className="mx-2 py-1 px-2 rounded "
                        style={{ backgroundColor: "#ED135D", fontSize: "13px" }}
                      >
                        Live
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="mt-3 text-white d-flex gap-1 flex-wrap"
                  style={{ fontSize: "11px" }}
                >
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="py-4 px-3">
            <div className={styles?.liveHeading} style={{ fontSize: "18px" }}>
              RECOMMENDED{" "}
              <span className={styles?.livesubHeading}>
                EXPERTS{" "}
                <span className="ms-2" style={{ fontSize: "16px" }}>
                  Top Favourites by our Members! You can't go wrong with our
                  recommended Experts!
                </span>{" "}
              </span>{" "}
            </div>
            <div className="row">
              <LiveScreenPhoto1 image={"/pose.png"} />
              <LiveScreenPhoto2 image={"/pose1.png"} />
              <LiveScreenPhoto2 image={"/pose2.png"} />
              <LiveScreenPhoto2 image={"/pose3.png"} />
              <LiveScreenPhoto1 image={"/pose.png"} />
              <LiveScreenPhoto2 image={"/pose1.png"} />
              <LiveScreenPhoto2 image={"/pose2.png"} />
              <LiveScreenPhoto2 image={"/pose3.png"} />
              <LiveScreenPhoto1 image={"/pose.png"} />
              <LiveScreenPhoto2 image={"/pose1.png"} />
              <LiveScreenPhoto2 image={"/pose2.png"} />
              <LiveScreenPhoto2 image={"/pose3.png"} />
              <LiveScreenPhoto1 image={"/pose.png"} />
              <LiveScreenPhoto2 image={"/pose1.png"} />
              <LiveScreenPhoto2 image={"/pose2.png"} />
              <LiveScreenPhoto2 image={"/pose3.png"} />
              {/* <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mt-4">
                <img src="/pose.png" alt="" className="w-100" />
                <div className="text-white px-2" style={{ marginTop: "-30px" }}>
                  <div className="d-flex justify-content-between align-items-center ">
                    <div className="d-flex align-items-center">
                      <RxDotFilled fontSize="22px" /> <span>LoveExpertise</span>
                    </div>
                    <div className="">
                      <AiOutlineHeart fontSize="22px" />
                    </div>
                  </div>
                </div>
                <div
                  className="mt-3 text-white d-flex gap-1 flex-wrap"
                  style={{ fontSize: "11px" }}
                >
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mt-4">
                <img src="/pose1.png" alt="" className="w-100" />
                <div className="text-white px-2" style={{ marginTop: "-30px" }}>
                  <div className="d-flex justify-content-between align-items-center ">
                    <div className="d-flex align-items-center">
                      <RxDotFilled fontSize="22px" color="#8FC400" />{" "}
                      <span>LoveExpertise</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <AiOutlineHeart fontSize="22px" />
                      <span
                        className="mx-2 py-1 px-2 rounded "
                        style={{ backgroundColor: "#ED135D", fontSize: "13px" }}
                      >
                        Live
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="mt-3 text-white d-flex gap-1 flex-wrap"
                  style={{ fontSize: "11px" }}
                >
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mt-4">
                <img src="/pose2.png" alt="" className="w-100" />
                <div className="text-white px-2" style={{ marginTop: "-30px" }}>
                  <div className="d-flex justify-content-between align-items-center ">
                    <div className="d-flex align-items-center">
                      <RxDotFilled fontSize="22px" color="#8FC400" />{" "}
                      <span>LoveExpertise</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <AiOutlineHeart fontSize="22px" />
                      <span
                        className="mx-2 py-1 px-2 rounded "
                        style={{ backgroundColor: "#ED135D", fontSize: "13px" }}
                      >
                        Live
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="mt-3 text-white d-flex gap-1 flex-wrap"
                  style={{ fontSize: "11px" }}
                >
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mt-4">
                <img src="/pose3.png" alt="" className="w-100" />
                <div className="text-white px-2" style={{ marginTop: "-30px" }}>
                  <div className="d-flex justify-content-between align-items-center ">
                    <div className="d-flex align-items-center">
                      <RxDotFilled fontSize="22px" color="#8FC400" />{" "}
                      <span>LoveExpertise</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <AiOutlineHeart fontSize="22px" />
                      <span
                        className="mx-2 py-1 px-2 rounded "
                        style={{ backgroundColor: "#ED135D", fontSize: "13px" }}
                      >
                        Live
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="mt-3 text-white d-flex gap-1 flex-wrap"
                  style={{ fontSize: "11px" }}
                >
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mt-4">
                <img src="/pose.png" alt="" className="w-100" />
                <div className="text-white px-2" style={{ marginTop: "-30px" }}>
                  <div className="d-flex justify-content-between align-items-center d-flex align-items-center">
                    <div className=" d-flex align-items-center">
                      <RxDotFilled fontSize="22px" /> <span>LoveExpertise</span>
                    </div>
                    <div className="">
                      <AiOutlineHeart fontSize="22px" />
                    </div>
                  </div>
                </div>
                <div
                  className="mt-3 text-white d-flex gap-1 flex-wrap"
                  style={{ fontSize: "11px" }}
                >
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mt-4">
                <img src="/pose1.png" alt="" className="w-100" />
                <div className="text-white px-2" style={{ marginTop: "-30px" }}>
                  <div className="d-flex justify-content-between align-items-center ">
                    <div className="d-flex align-items-center">
                      <RxDotFilled fontSize="22px" color="#8FC400" />{" "}
                      <span>LoveExpertise</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <AiOutlineHeart fontSize="22px" />
                      <span
                        className="mx-2 py-1 px-2 rounded "
                        style={{ backgroundColor: "#ED135D", fontSize: "13px" }}
                      >
                        Live
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="mt-3 text-white d-flex gap-1 flex-wrap"
                  style={{ fontSize: "11px" }}
                >
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mt-4">
                <img src="/pose2.png" alt="" className="w-100" />
                <div className="text-white px-2" style={{ marginTop: "-30px" }}>
                  <div className="d-flex justify-content-between align-items-center ">
                    <div className="d-flex align-items-center">
                      <RxDotFilled fontSize="22px" color="#8FC400" />{" "}
                      <span>LoveExpertise</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <AiOutlineHeart fontSize="22px" />
                      <span
                        className="mx-2 py-1 px-2 rounded "
                        style={{ backgroundColor: "#ED135D", fontSize: "13px" }}
                      >
                        Live
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="mt-3 text-white d-flex gap-1 flex-wrap"
                  style={{ fontSize: "11px" }}
                >
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mt-4">
                <img src="/pose3.png" alt="" className="w-100" />
                <div className="text-white px-2" style={{ marginTop: "-30px" }}>
                  <div className="d-flex justify-content-between align-items-center ">
                    <div className="d-flex align-items-center">
                      <RxDotFilled fontSize="22px" color="#8FC400" />{" "}
                      <span>LoveExpertise</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <AiOutlineHeart fontSize="22px" />
                      <span
                        className="mx-2 py-1 px-2 rounded "
                        style={{ backgroundColor: "#ED135D", fontSize: "13px" }}
                      >
                        Live
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="mt-3 text-white d-flex gap-1 flex-wrap"
                  style={{ fontSize: "11px" }}
                >
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mt-4">
                <img src="/pose.png" alt="" className="w-100" />
                <div className="text-white px-2" style={{ marginTop: "-30px" }}>
                  <div className="d-flex justify-content-between align-items-center d-flex align-items-center">
                    <div className=" d-flex align-items-center">
                      <RxDotFilled fontSize="22px" /> <span>LoveExpertise</span>
                    </div>
                    <div className="">
                      <AiOutlineHeart fontSize="22px" />
                    </div>
                  </div>
                </div>
                <div
                  className="mt-3 text-white d-flex gap-1 flex-wrap"
                  style={{ fontSize: "11px" }}
                >
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mt-4">
                <img src="/pose1.png" alt="" className="w-100" />
                <div className="text-white px-2" style={{ marginTop: "-30px" }}>
                  <div className="d-flex justify-content-between align-items-center ">
                    <div className="d-flex align-items-center">
                      <RxDotFilled fontSize="22px" color="#8FC400" />{" "}
                      <span>LoveExpertise</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <AiOutlineHeart fontSize="22px" />
                      <span
                        className="mx-2 py-1 px-2 rounded "
                        style={{ backgroundColor: "#ED135D", fontSize: "13px" }}
                      >
                        Live
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="mt-3 text-white d-flex gap-1 flex-wrap"
                  style={{ fontSize: "11px" }}
                >
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mt-4">
                <img src="/pose2.png" alt="" className="w-100" />
                <div className="text-white px-2" style={{ marginTop: "-30px" }}>
                  <div className="d-flex justify-content-between align-items-center ">
                    <div className="d-flex align-items-center">
                      <RxDotFilled fontSize="22px" color="#8FC400" />{" "}
                      <span>LoveExpertise</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <AiOutlineHeart fontSize="22px" />
                      <span
                        className="mx-2 py-1 px-2 rounded "
                        style={{ backgroundColor: "#ED135D", fontSize: "13px" }}
                      >
                        Live
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="mt-3 text-white d-flex gap-1 flex-wrap"
                  style={{ fontSize: "11px" }}
                >
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mt-4">
                <img src="/pose3.png" alt="" className="w-100" />
                <div className="text-white px-2" style={{ marginTop: "-30px" }}>
                  <div className="d-flex justify-content-between align-items-center ">
                    <div className="d-flex align-items-center">
                      <RxDotFilled fontSize="22px" color="#8FC400" />{" "}
                      <span>LoveExpertise</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <AiOutlineHeart fontSize="22px" />
                      <span
                        className="mx-2 py-1 px-2 rounded "
                        style={{ backgroundColor: "#ED135D", fontSize: "13px" }}
                      >
                        Live
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="mt-3 text-white d-flex gap-1 flex-wrap"
                  style={{ fontSize: "11px" }}
                >
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mt-4">
                <img src="/pose.png" alt="" className="w-100" />
                <div className="text-white px-2" style={{ marginTop: "-30px" }}>
                  <div className="d-flex justify-content-between align-items-center d-flex align-items-center">
                    <div className=" d-flex align-items-center">
                      <RxDotFilled fontSize="22px" /> <span>LoveExpertise</span>
                    </div>
                    <div className="">
                      <AiOutlineHeart fontSize="22px" />
                    </div>
                  </div>
                </div>
                <div
                  className="mt-3 text-white d-flex gap-1 flex-wrap"
                  style={{ fontSize: "11px" }}
                >
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mt-4">
                <img src="/pose1.png" alt="" className="w-100" />
                <div className="text-white px-2" style={{ marginTop: "-30px" }}>
                  <div className="d-flex justify-content-between align-items-center ">
                    <div className="d-flex align-items-center">
                      <RxDotFilled fontSize="22px" color="#8FC400" />{" "}
                      <span>LoveExpertise</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <AiOutlineHeart fontSize="22px" />
                      <span
                        className="mx-2 py-1 px-2 rounded "
                        style={{ backgroundColor: "#ED135D", fontSize: "13px" }}
                      >
                        Live
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="mt-3 text-white d-flex gap-1 flex-wrap"
                  style={{ fontSize: "11px" }}
                >
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mt-4">
                <img src="/pose2.png" alt="" className="w-100" />
                <div className="text-white px-2" style={{ marginTop: "-30px" }}>
                  <div className="d-flex justify-content-between align-items-center ">
                    <div className="d-flex align-items-center">
                      <RxDotFilled fontSize="22px" color="#8FC400" />{" "}
                      <span>LoveExpertise</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <AiOutlineHeart fontSize="22px" />
                      <span
                        className="mx-2 py-1 px-2 rounded "
                        style={{ backgroundColor: "#ED135D", fontSize: "13px" }}
                      >
                        Live
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="mt-3 text-white d-flex gap-1 flex-wrap"
                  style={{ fontSize: "11px" }}
                >
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mt-4">
                <img src="/pose3.png" alt="" className="w-100" />
                <div className="text-white px-2" style={{ marginTop: "-30px" }}>
                  <div className="d-flex justify-content-between align-items-center ">
                    <div className="d-flex align-items-center">
                      <RxDotFilled fontSize="22px" color="#8FC400" />{" "}
                      <span>LoveExpertise</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <AiOutlineHeart fontSize="22px" />
                      <span
                        className="mx-2 py-1 px-2 rounded "
                        style={{ backgroundColor: "#ED135D", fontSize: "13px" }}
                      >
                        Live
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="mt-3 text-white d-flex gap-1 flex-wrap"
                  style={{ fontSize: "11px" }}
                >
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                  <div
                    className="px-3 py-2 rounded-3"
                    style={{ backgroundColor: "#2E3033" }}
                  >
                    Career
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </DarkTheme>
    </div>
  );
};

export default DashbpardDarkTheme;
