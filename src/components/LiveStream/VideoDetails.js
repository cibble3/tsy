import React, { useEffect, useState } from "react";
import styles from "./live-stream.module.css";
import { Rating } from "react-simple-star-rating";
import useWindowSize from "@/hooks/useWindowSize";
import LiveStreamPose from "../LiveStreamPose";
import VideoWidget from "./VideoWidget";
import HeadMeta from "@/components/HeadMeta";

const VideoDetails = ({ data }) => {
  const { width, height } = useWindowSize();

  let videoHeight = width > 992 ? width / 2 : 510;
  const [rating, setRating] = useState(0);

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
      <HeadMeta pageContent={data?.pageContent} />
      <div className={styles?.LiveMain}>
        <div className="row p-0 m-0">
          <div
            className={`${
              width < 576 ? "" : "px-2"
            } col-xl-9 col-lg-8 col-md-7 col-sm-12 mt-2 `}
          >
            <VideoWidget
              playerEmbedUrl={data.videoDetails.playerEmbedUrl}
              performerId={data.modelData.performerId}
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
                        initialValue={rating}
                        size={18}
                        // onClick={handleRating}
                        // onPointerEnter={onPointerEnter}
                        // onPointerLeave={onPointerLeave}
                        // onPointerMove={onPointerMove}
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
              </div>
            ) : null}
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
                    // onClick={handleRating}
                    // onPointerEnter={onPointerEnter}
                    // onPointerLeave={onPointerLeave}
                    // onPointerMove={onPointerMove}
                    /* Available Props */
                  />
                  <p className={`${styles.rating} m-0 ms-2`}>
                    Ratings :
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
          </div>
        </div>

        <div className="mt-5 px-4 pb-4">
          <h3 className={`${styles.content} mb-3`}>
            Other Recommended <span> Live Streams for You</span>
          </h3>
          <div className="row mb-5">
            <LiveStreamPose image={"/pose.png"} />
            <LiveStreamPose image={"/pose1.png"} />
            <LiveStreamPose image={"/pose2.png"} />
            <LiveStreamPose image={"/pose3.png"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoDetails;
