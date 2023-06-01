import VideoDetails from "@/components/LiveStream/VideoDetails";
import DarkTheme from "@/components/navigation/dark-themeLive";
import React, { useEffect, useState } from "react";
import axiosInstance from "@/instance/axiosInstance";
import HeadMeta from "@/components/HeadMeta";
import styles from "@/components/LiveStream/live-stream.module.css";
import useWindowSize from "@/hooks/useWindowSize";
import VideoWidget from "@/components/LiveStream/VideoWidget";
// import { Rating } from "react-simple-star-rating";
import Rating from "react-star-rating-component";

import LiveScreenVideo from "@/components/LiveScreenVideo";
import LiveStreamPose from "@/components/LiveStreamPose";

const LiveStream = ({
  videoId,
  video,
  videoDetails,
  modelData,
  relatedVideos,
  pageContent,
}) => {
  const { width, height } = useWindowSize();
  const [rating, setRating] = useState(modelData?.details?.modelRating);

  const handleStarClick = (nextValue, prevValue, name) => {
    // setRating(nextValue);
  };

  return (
    <DarkTheme>
      <HeadMeta pageContent={pageContent} />
      {/* <VideoDetails video={video} relatedVideos={relatedVideos} /> */}
      <div className={styles?.LiveMain}>
        <div className="row p-0 m-0">
          <div
            className={`${
              width < 576 ? "" : "px-2"
            } col-xl-9 col-lg-8 col-md-7 col-sm-12 mt-2 `}
          >
            <VideoWidget playerEmbedUrl={videoDetails?.playerEmbedUrl} />

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
                          {Number(modelData?.details?.modelRating).toFixed(1)}
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
                  src={modelData?.profilePictureUrl?.size1024x768}
                  style={{ width: "48px", height: "48px", borderRadius: "50%" }}
                />
              </div>
              <div className="ps-3">
                <h1 className={`${styles.userName} m-0`}>
                  {modelData?.displayName}
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
                      {Number(modelData?.details?.modelRating).toFixed(1)}
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          )}
          <div className="mt-2">
            {width < 992 && width > 767 ? null : (
              <p className={` ${styles.userView}`}>
                {modelData?.details?.about?.biography}
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
            {relatedVideos?.videos?.map((element, i) => {
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
    </DarkTheme>
  );
};

export default LiveStream;

export async function getServerSideProps(context) {
  const response = await axiosInstance.get(
    `/video/${context.params.page_name}`
  );
  const responseData = response.data;

  if (!responseData.status) {
    return {
      redirect: {
        destination: "/videos",
        permanent: false,
      },
    };
  }
  return {
    props: {
      videoId: responseData.videoId,
      video: responseData.video,
      videoDetails: responseData.videoDetails,
      modelData: responseData.modelData,
      relatedVideos: responseData.relatedVideos.data,
      pageContent: responseData.pageContent,
    },
  };
}
