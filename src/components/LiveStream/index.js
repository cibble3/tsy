import React, { useContext, useEffect, useState } from "react";
import { TbBrandWechat, TbCrown } from "react-icons/tb";
import { SiWechat } from "react-icons/si";
// import {
//   MdArrowDropDown,
//   MdArrowDropUp,
//   MdOutlineSlowMotionVideo,
// } from "react-icons/md";
import { TiArrowUnsorted } from "react-icons/ti";
import styles from "./live-stream.module.css";
import { FaFolder, FaStar } from "react-icons/fa";
import { Button, Form, InputGroup } from "react-bootstrap";
// import { GrFormClose } from "react-icons/gr";
// import { IoClose } from "react-icons/io5";
import { Rating } from "react-simple-star-rating";
// import { RxDotFilled } from "react-icons/rx";
// import { AiOutlineHeart } from "react-icons/ai";
import VideoModal from "./videoModal";
import PhotoAlbumModal from "./photoAlbumModal";
import { BsBoxArrowInLeft, BsBoxArrowInRight } from "react-icons/bs";
import useWindowSize from "@/hooks/useWindowSize";
// import { ThemeColors } from "@/context/themeColor";
import LiveStreamPhoto from "../LiveStreamPhoto";
import LiveStreamVideo from "../LiveStreamVideo";
import LiveStreamPose from "../LiveStreamPose";
import ChatWidget from "./ChatWidget";
import HeadMeta from "@/components/HeadMeta";
// import Image from "next/image";

const LiveStreamComponent = ({ data }) => {
  const { width, height } = useWindowSize();

  let videoHeight = width > 992 ? width / 2 : 510;
  let blurHeight = (videoHeight * 3) / 4;
  const [rating, setRating] = useState(0);
  const [video, setVideo] = useState(false);
  const [photoModal, setPhotoModal] = useState(false);

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
  };

  useEffect(() => {
    setRating(data?.modelData?.details?.modelRating);
  }, []);

  // Optinal callback functions
  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
  const onPointerMove = (value, index) => console.log(value, index);
  return (
    <>
    <HeadMeta pageContent={data?.pageContent}/>
      <div className={styles?.LiveMain}>
        <div className="row justify-content-center p-0 m-0">
          <div
            className={`${
              width < 576 ? "" : "px-2"
            } col-xl-9 col-lg-8 col-md-7 col-sm-12 mt-2 `}
          >
            <ChatWidget performerId={data.modelData.performerId} />

            {width < 992 && width > 767 ? (
              <div className={`${styles.midView}`}>
                <div className={`d-flex mt-3`}>
                  <div>
                    <img
                      src="/mask-group-3@2x.png"
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                  <div className="ps-3">
                    <h1 className={`${styles.userName} m-0`}>OraPredictor</h1>
                    <div className="d-flex align-items-end">
                      <Rating
                        initialValue={rating}
                        size={18}
                        onClick={handleRating}
                        onPointerEnter={onPointerEnter}
                        onPointerLeave={onPointerLeave}
                        onPointerMove={onPointerMove}
                        /* Available Props */
                      />
                      <p className={`${styles.rating} m-0 ms-2`}>
                        Ratings :{" "}
                        <strong>
                          {Number(
                            data?.modelData?.details?.modelRating
                          ).toFixed(1)}
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>
                <div className={`${styles.livetext} mt-2`}>
                  <p>
                    Clairvoyant,Love Family and career reading.Love relationship
                    virtual, natural healing ,dream analysis ,spiritual gu
                  </p>
                </div>
              </div>
            ) : null}
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-5 col-sm-11 px-4 pe-4 mt-2"
            style={{ height: videoHeight, maxHeight: 650 }}
          >
            <div style={{ position: "relative" }}>
              <img
                src="/images/courses/yoga-img3.jpg"
                alt=""
                className=""
                style={{
                  height: videoHeight / 4,
                  width: "100%",
                  maxHeight: 162,
                }}
              />
            </div>
            <div style={{ position: "relative" }}>
              <img
                src="/images/courses/yoga-img1.jpg"
                alt=""
                className=""
                style={{
                  height: videoHeight / 4,
                  width: "100%",
                  maxHeight: 162,
                }}
              />
              <img
                src="/images/courses/yoga-img2.jpg"
                alt=""
                className=""
                style={{
                  height: videoHeight / 4,
                  width: "100%",
                  maxHeight: 162,
                }}
              />
              <img
                src="/images/courses/yoga-img3.jpg"
                alt=""
                className=""
                style={{
                  height: videoHeight / 4,
                  width: "100%",
                  maxHeight: 162,
                }}
              />
              
            </div>
          </div>
        </div>
        <div className="px-4">
          {width < 992 && width > 767 ? null : (
            <div className={`d-flex mt-5 ${styles.userView}`}>
              <div>
                <img
                  src={data?.modelData?.profilePictureUrl?.size1024x768}
                  style={{ width: "48px", height: "48px", borderRadius: "50%" }}
                />
              </div>
              <div className="ps-3">
                <h1 className={`${styles.userName} m-0`}>
                  {data?.modelData?.displayName}
                </h1>
                <div className="d-flex align-items-end rating">
                  <Rating
                    initialValue={rating}
                    size={18}
                    onClick={handleRating}
                    onPointerEnter={onPointerEnter}
                    onPointerLeave={onPointerLeave}
                    onPointerMove={onPointerMove}
                    /* Available Props */
                  />
                  <p className={`${styles.rating} m-0 ms-2`}>
                    Ratings :{" "}
                    <strong>
                      {Number(data?.modelData?.details?.modelRating).toFixed(1)}
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          )}
          <div className="mt-2">
            {width < 992 && width > 767 ? null : (
              <p className={` ${styles.userView}`}>
                {data?.modelData?.details?.about?.biography}
              </p>
            )}
            {/* <div className="mt-4">
            <h3 className={`${styles.content} mb-1`}>
              Exclusive Content<span> from OraPredictar</span>
            </h3>
            <p>
              OraPredictar provides you the most spiritual experience through
              their exclusive content.
            </p>
          </div> */}
          </div>
        </div>
        <div className="mt-5 px-4">
          <div className="d-flex justify-content-end mb-3">
            <Button className={styles.activeBtn}>All content</Button>
            <Button className={styles.contentBtn}>Free content</Button>
            <Button className={styles.contentBtn}>Premium content</Button>
          </div>
          <div className="row">
            <LiveStreamPhoto />
            <LiveStreamVideo video1={"/video/woman.mp4"} />
            <LiveStreamVideo video1={"/video/video.mp4"} />
            <LiveStreamVideo video1={"/video/woman.mp4"} />
            <LiveStreamVideo video1={"/video/video.mp4"} />
          </div>
          <div className="row">
            <LiveStreamVideo video1={"/video/woman.mp4"} />
            <LiveStreamVideo video1={"/video/video.mp4"} />
            <LiveStreamVideo video1={"/video/woman.mp4"} />
            <LiveStreamVideo video1={"/video/video.mp4"} />
            <LiveStreamVideo video1={"/video/woman.mp4"} />
            <LiveStreamVideo video1={"/video/video.mp4"} />
            {/* <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 mt-2">
            <div style={{ position: "relative" }}>
              <div
                onClick={() => setVideo("/video/woman.mp4")}
                style={{ position: "absolute", height: "400px", width: "100%" }}
                className="d-flex justify-content-center align-items-center"
              >
                <MdOutlineSlowMotionVideo size={40} color="#ffffff" />
              </div>
              <div
                className={` ${styles.videoLabel} d-flex justify-content-start align-items-start`}
              >
                <p className={styles.videoText}>Video</p>
              </div>
              <video
                src="/video/woman.mp4"
                onClick={() => setVideo("/video/woman.mp4")}
                style={{ height: "400px", width: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 mt-2">
            <div style={{ position: "relative" }}>
              <div
                onClick={() => setVideo("/video/video.mp4")}
                style={{ position: "absolute", height: "400px", width: "100%" }}
                className="d-flex justify-content-center align-items-center"
              >
                <MdOutlineSlowMotionVideo size={40} color="#ffffff" />
              </div>
              <div
                className={` ${styles.videoLabel} d-flex justify-content-start align-items-start`}
              >
                <p className={styles.videoText}>Video</p>
              </div>
              <video
                src="/video/video.mp4"
                onClick={() => setVideo("/video/video.mp4")}
                style={{ height: "400px", width: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 mt-2">
            <div style={{ position: "relative" }}>
              <div
                onClick={() => setVideo("/video/woman.mp4")}
                style={{ position: "absolute", height: "400px", width: "100%" }}
                className="d-flex justify-content-center align-items-center"
              >
                <MdOutlineSlowMotionVideo size={40} color="#ffffff" />
              </div>
              <div
                className={` ${styles.videoLabel} d-flex justify-content-start align-items-start`}
              >
                <p className={styles.videoText}>Video</p>
              </div>
              <video
                src="/video/woman.mp4"
                onClick={() => setVideo("/video/woman.mp4")}
                style={{ height: "400px", width: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 mt-2">
            <div style={{ position: "relative" }}>
              <div
                onClick={() => setVideo("/video/video.mp4")}
                style={{ position: "absolute", height: "400px", width: "100%" }}
                className="d-flex justify-content-center align-items-center"
              >
                <MdOutlineSlowMotionVideo size={40} color="#ffffff" />
              </div>
              <div
                className={` ${styles.videoLabel} d-flex justify-content-start align-items-start`}
              >
                <p className={styles.videoText}>Video</p>
              </div>
              <video
                src="/video/video.mp4"
                onClick={() => setVideo("/video/video.mp4")}
                style={{ height: "400px", width: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 mt-2">
            <div style={{ position: "relative" }}>
              <div
                onClick={() => setVideo("/video/woman.mp4")}
                style={{ position: "absolute", height: "400px", width: "100%" }}
                className="d-flex justify-content-center align-items-center"
              >
                <MdOutlineSlowMotionVideo size={40} color="#ffffff" />
              </div>
              <div
                className={` ${styles.videoLabel} d-flex justify-content-start align-items-start`}
              >
                <p className={styles.videoText}>Video</p>
              </div>
              <video
                src="/video/woman.mp4"
                onClick={() => setVideo("/video/woman.mp4")}
                style={{ height: "400px", width: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 mt-2">
            <div style={{ position: "relative" }}>
              <div
                onClick={() => setVideo("/video/video.mp4")}
                style={{ position: "absolute", height: "400px", width: "100%" }}
                className="d-flex justify-content-center align-items-center"
              >
                <MdOutlineSlowMotionVideo size={40} color="#ffffff" />
              </div>
              <div
                className={` ${styles.videoLabel} d-flex justify-content-start align-items-start`}
              >
                <p className={styles.videoText}>Video</p>
              </div>
              <video
                src="/video/video.mp4"
                onClick={() => setVideo("/video/video.mp4")}
                style={{ height: "400px", width: "100%", objectFit: "cover" }}
              />
            </div>
          </div> */}
          </div>
        </div>
        <div className="mt-5 px-4">
          <h3 className={`${styles.content} mb-3`}>
            Other Recommended <span> Live Streams for You</span>
          </h3>
          <div className="row mb-5">
            <LiveStreamPose image={"/pose.png"} />
            <LiveStreamPose image={"/pose1.png"} />
            <LiveStreamPose image={"/pose2.png"} />
            <LiveStreamPose image={"/pose3.png"} />
            {/* <div className="col-lg-3 col-sm-6 col-12 mt-3">
            <div style={{ position: "relative" }}>
              <img
                src="/pose.png"
                alt=""
                className="w-100"
                style={{ height: 218 }}
              />
              <div
                className={` ${styles.liveLabel} d-flex justify-content-start align-items-start`}
              >
                <p className={styles.videoText}>Live</p>
              </div>
              <div className="text-white px-2" style={{ marginTop: "-30px" }}>
                <div className="d-flex justify-content-between align-items-center ">
                  <div className="d-flex">
                    <RxDotFilled fontSize="22px" /> <span>LoveExpertise</span>
                  </div>
                  <div className="">
                    <AiOutlineHeart fontSize="22px" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-12 mt-3">
            <div style={{ position: "relative" }}>
              <img
                src="/pose1.png"
                alt=""
                className="w-100"
                style={{ height: 218 }}
              />
              <div
                className={` ${styles.liveLabel} d-flex justify-content-start align-items-start`}
              >
                <p className={styles.videoText}>Live</p>
              </div>
              <div className="text-white px-2" style={{ marginTop: "-30px" }}>
                <div className="d-flex justify-content-between align-items-center ">
                  <div className="">
                    <RxDotFilled fontSize="22px" /> <span>LoveExpertise</span>
                  </div>
                  <div className="">
                    <AiOutlineHeart fontSize="22px" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-12 mt-3">
            <div style={{ position: "relative" }}>
              <img
                src="/pose2.png"
                alt=""
                className="w-100"
                style={{ height: 218 }}
              />
              <div
                className={` ${styles.liveLabel} d-flex justify-content-start align-items-start`}
              >
                <p className={styles.videoText}>Live</p>
              </div>
              <div className="text-white px-2" style={{ marginTop: "-30px" }}>
                <div className="d-flex justify-content-between align-items-center ">
                  <div className="">
                    <RxDotFilled fontSize="22px" /> <span>LoveExpertise</span>
                  </div>
                  <div className="">
                    <AiOutlineHeart fontSize="22px" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-12 mt-3">
            <div style={{ position: "relative" }}>
              <img
                src="/pose3.png"
                alt=""
                className="w-100"
                style={{ height: 218 }}
              />
              <div
                className={` ${styles.liveLabel} d-flex justify-content-start align-items-start`}
              >
                <p className={styles.videoText}>Live</p>
              </div>
              <div className="text-white px-2" style={{ marginTop: "-30px" }}>
                <div className="d-flex justify-content-between align-items-center ">
                  <div className="">
                    <RxDotFilled fontSize="22px" /> <span>LoveExpertise</span>
                  </div>
                  <div className="">
                    <AiOutlineHeart fontSize="22px" />
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          </div>
          <h3 className={`${styles.content} `}>
            {" "}
            ONLY ON ORANUM.COM <span> WE HAVE CLARITY</span>
          </h3>

          <div className="row mt-3">
            <div className="col-lg-6">
              <p>
                Oranum.com services are only available for persons over the age
                of 18, and they are provided for entertainment purposes only. We
                offer a diverse array of spiritual experts from around the world
                all available at your fingertips! From Tarot readings to angel
                communication, we have a specialist for you.
              </p>
            </div>
            <div className="col-lg-6">
              <p>
                Discover the unique opportunity to video chat with live
                psychics, giving you that real in-person feeling! At Oranum, you
                can get in touch when you need it as our experts are available
                round the clock with 24/7 support. Welcome to the Spiritual
                community!
              </p>
            </div>
          </div>
        </div>

        <VideoModal show={video} onHide={setVideo} />
        <PhotoAlbumModal show={photoModal} onHide={setPhotoModal} />
      </div>
    </>
  );
};

export default LiveStreamComponent;
