import React, { useEffect, useState } from "react";
import styles from "./live-stream.module.css";
// import { Rating } from "react-simple-star-rating";
import Rating from "react-star-rating-component";

import useWindowSize from "@/hooks/useWindowSize";
import VideoWidget from "./VideoWidget";
import LiveScreenVideo from "../LiveScreenVideo";
import axiosInstance from "@/instance/axiosInstance";
import LiveStreamPose from "../LiveStreamPose";

const VideoDetails = ({ video, relatedVideos }) => {
  const { width, height } = useWindowSize();

  // let videoHeight = width > 992 ? width / 2 : 510;
  const [rating, setRating] = useState(0);

  useEffect(() => {
    setRating(video?.modelData?.details?.modelRating);
    relatedVideos?.videos && syncVideos(relatedVideos?.videos);
  }, [video]);

  const syncVideos = async (videos) => {
    try {
      await axiosInstance.post(`/videos-sync`, { videos });
    } catch (error) {
      console.error("Error loading videos:", error);
    }
  };

  const handleStarClick = (nextValue, prevValue, name) => {
    // setRating(nextValue);
  };

  return (
    <>
      {/* <HeadMeta pageContent={video?.pageContent} /> */}
      <div className={styles?.LiveMain}>
        <div className="row p-0 m-0">
          <div
            className={`${
              width < 576 ? "" : "px-2"
            } col-xl-9 col-lg-8 col-md-7 col-sm-12 mt-2 `}
          >
            <VideoWidget
              playerEmbedUrl={video?.videoDetails?.playerEmbedUrl}
              performerId={video?.modelData?.performerId}
            />

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
                        value={rating}
                        onStarClick={(nextValue, prevValue, name) =>
                          handleStarClick(nextValue, prevValue, name)
                        }
                        starCount={5}
                        starColor={"#ffb400"}
                        emptyStarColor={"#ccc"}
                      />
                      <p className={`${styles.rating} m-0 ms-2`}>
                        Ratings :{" "}
                        <strong>
                          {Number(
                            video?.modelData?.details?.modelRating
                          ).toFixed(1)}
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <div className="px-4">
          {width < 992 && width > 767 ? null : (
            <div className={`d-flex mt-5 ${styles.userView}`}>
              <div>
                <img
                  src={video?.modelData?.profilePictureUrl?.size1024x768}
                  style={{ width: "48px", height: "48px", borderRadius: "50%" }}
                />
              </div>
              <div className="ps-3">
                <h1 className={`${styles.userName} m-0`}>
                  {video?.modelData?.displayName}
                </h1>
                <div className="d-flex align-items-end rating">
                  <Rating
                    value={rating}
                    onStarClick={(nextValue, prevValue, name) =>
                      handleStarClick(nextValue, prevValue, name)
                    }
                    starCount={5}
                    starColor={"#ffb400"}
                    emptyStarColor={"#ccc"}
                  />
                  <p className={`${styles.rating} m-0 ms-2`}>
                    Ratings :
                    <strong>
                      {Number(video?.modelData?.details?.modelRating).toFixed(
                        1
                      )}
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          )}
          <div className="mt-2">
            {width < 992 && width > 767 ? null : (
              <p className={` ${styles.userView}`}>
                {video?.modelData?.details?.about?.biography}
              </p>
            )}
          </div>
        </div>

        <div className="mt-5 px-4 pb-4">
          <h3 className={`${styles.content} mb-3`}>
            Other Recommended <span> Videos for You</span>
          </h3>
          <div className="row mb-5">
            <LiveStreamPose image={"/pose.png"} />
            <LiveStreamPose image={"/pose1.png"} />
            <LiveStreamPose image={"/pose2.png"} />
            <LiveStreamPose image={"/pose3.png"} />
          </div>
          {/* <div className="row mb-5">
            {relatedVideos?.videos.map((element, i) => {
              return (
                <LiveScreenVideo
                  key={i}
                  title={element?.title}
                  image={element?.thumbImage}
                  targetUrl={element?.targetUrl}
                  parent={"video"}
                />
              );
            })}
          </div> */}
        </div>
      </div>
    </>
  );
};

export default VideoDetails;
