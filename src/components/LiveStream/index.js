import React, { useContext, useEffect, useState } from "react";
import styles from "./live-stream.module.css";
import Rating from "react-star-rating-component";
import useWindowSize from "@/hooks/useWindowSize";
import ChatWidget from "./ChatWidget";
import HeadMeta from "@/components/HeadMeta";
import Image from "next/image";
import { RxDotFilled } from "react-icons/rx";
import { capitalizeString } from "@/helper/helpers";

const LiveStreamComponent = ({ data }) => {
  const { width, height } = useWindowSize();

  // let videoHeight = 510;

  // if (width >= 768 && width < 850) {
  //   // For tablet
  //   videoHeight = (width + 252) / 2;
  // } else if (width >= 850 && width < 1440) {
  //   // For laptop
  // } else if (width >= 1440 && width <= 2560) {
  //   // For laptop-large
  // } else {
  //   // For 4k
  // }

  let videoHeight = width > 992 ? width / 2 : 510;

  const [rating, setRating] = useState(0);

  useEffect(() => {
    setRating(data?.modelData?.details?.modelRating);
  }, []);

  const handleStarClick = (nextValue, prevValue, name) => {
    // setRating(nextValue);
  };
  return (
    <>
      <HeadMeta pageContent={data?.pageContent} />
      <div className={styles?.LiveMain}>
        <div className="model_details_container">
          <div className="row justify-content-center p-0 m-0">
            <div
              style={{ height: videoHeight, maxHeight: 800 }}
              className={`${
                width < 576 ? "" : "px-2"
              } col-xl-9 col-lg-8 col-md-8 col-sm-12 mt-2 `}
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
                      <h1 className={`${styles.userName} m-0`}>
                        {data?.modelData?.displayName}
                      </h1>
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
                              data?.modelData?.details?.modelRating
                            ).toFixed(1)}
                          </strong>
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <div className={`${styles.livetext} mt-2`}>
                    <p>
                      Clairvoyant,Love Family and career reading.Love
                      relationship virtual, natural healing ,dream analysis
                      ,spiritual gu
                    </p>
                  </div> */}
                </div>
              ) : null}
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-4 col-sm-11 mt-2 related-models side-images"
              style={{ height: videoHeight, maxHeight: 800 }}
            >
              <div
                style={{ position: "relative" }}
                className="side-images-wrapper"
              >
                {data.relatedModels?.map((element, i) => {
                  if (element.title != "")
                    return (
                      <a href={`https:${element.chatRoomUrl}`} target="_blank">
                        <Image
                          height={200}
                          width={200}
                          src={`https:${element.profilePictureUrl.size320x240}`}
                          alt=""
                          // className="mb-1"
                          style={{
                            // height: (videoHeight - 12) / 4,
                            width: "100%",
                            // maxHeight: 162,
                          }}
                        />
                        <div className="d-flex align-items-center d-flex align-items-center model-name">
                          <RxDotFilled color="#8FC400" fontSize="22px" />
                          <span>
                            {element.displayName} ({element?.persons[0]?.age})
                          </span>
                        </div>
                      </a>
                    );
                })}
              </div>
            </div>
          </div>
          <div>
            <div className="box-main">
              <div className="box">
                <div className="box-content">
                  <div className="row mt-5">
                    <div className="col-lg-4 mb-3 mb-md-0">
                      {width < 992 && width > 767 ? null : (
                        <div className={`d-flex ${styles.userView}`}>
                          <div className="flex-none">
                            <img
                              src={data?.modelData?.profilePictureUrl?.size1024x768}
                              style={{
                                width: "48px",
                                height: "48px",
                                borderRadius: "50%",
                              }}
                            />
                          </div>
                          <div className="ps-3">
                            <h1 className={`${styles.userName} m-0`}>
                              {data?.modelData?.displayName}
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
                                Ratings :{" "}
                                <strong>
                                  {Number(data?.modelData?.details?.modelRating).toFixed(
                                    1
                                  )}
                                </strong>
                              </p>
                            </div>
                          </div>
                        </div>

                      )}
                    </div>
                    {width < 992 && width > 767 ? null : (
                      <div className="pb-4 px-3 col-lg-8 align-items-center">
                        <p className={` ${styles.userView}`}>
                          {data?.modelData?.details?.about?.biography}
                        </p>
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
                    )}

                  </div>
                  <div className="box-listing-main row">
                    <div className="col-md-6">
                      <div className="box-listing-data ">
                        <ul className="box-listing-wrapper">
                          {/* Age */}
                          {data?.modelData?.persons[0]?.age && (
                            <li>
                              <div className="box-listing-description">
                                {capitalizeString(data?.modelData?.persons[0]?.age)}
                              </div>
                              <div className="box-listing-box-heading">Age</div>
                            </li>
                          )}
                          {/* Ethnicity */}
                          {data?.modelData?.ethnicity && (
                            <li>
                              <div className="box-listing-description">
                                {capitalizeString(data?.modelData?.ethnicity)}
                              </div>
                              <div className="box-listing-box-heading">Ethnicity</div>

                            </li>
                          )}
                          {/* Category */}
                          {data?.modelData?.category && (
                            <li>
                              <div className="box-listing-description">
                                {capitalizeString(data?.modelData?.category)}
                              </div>
                              <div className="box-listing-box-heading">Category</div>
                            </li>
                          )}
                          {/* Languages */}
                          {data?.modelData?.details?.languages && (
                            <li className="language">
                              <div className="box-listing-description">
                                {capitalizeString(
                                  Object.values(data?.modelData?.details?.languages)
                                    .filter((value) => value !== "")
                                    .join(", ")
                                )}
                              </div>
                              <div className="box-listing-box-heading">Languages</div>
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="box-listing-data">
                        <ul className="box-listing-wrapper">
                          {/* Breast */}
                          {data?.modelData?.persons[0]?.body?.breastSize !== "" && (
                            <li>
                              <div className="box-listing-description">
                                {capitalizeString(
                                  data?.modelData?.persons[0]?.body?.breastSize
                                )}
                              </div>
                              <div className="box-listing-box-heading">Breast </div>
                            </li>
                          )}
                          {/* Penis */}
                          {data?.modelData?.persons[0]?.body?.penisSize !== "" && (
                            <li>
                              <div className="box-listing-description">
                                {capitalizeString(
                                  data?.modelData?.persons[0]?.body?.penisSize
                                )}
                              </div>
                              <div className="box-listing-box-heading">Penis</div>
                            </li>
                          )}
                          {/* Eye Color */}
                          {data?.modelData?.persons[0]?.body?.eyeColor !== "" && (
                            <li>
                              <div className="box-listing-description">
                                {capitalizeString(
                                  data?.modelData?.persons[0]?.body?.eyeColor
                                )}
                              </div>
                              <div className="box-listing-box-heading">Eye Color</div>
                            </li>
                          )}
                          {/* Hair Length */}
                          {data?.modelData?.persons[0]?.body?.hairLength !== "" && (
                            <li>
                              <div className="box-listing-description">
                                {capitalizeString(
                                  data?.modelData?.persons[0]?.body?.hairLength
                                )}
                              </div>
                              <div className="box-listing-box-heading">Hair Length</div>
                            </li>
                          )}
                          {/* Hair Color */}
                          {data?.modelData?.persons[0]?.body?.hairColor !== "" && (
                            <li>
                              <div className="box-listing-description">
                                {capitalizeString(
                                  data?.modelData?.persons[0]?.body?.hairColor
                                )}
                              </div>
                              <div className="box-listing-box-heading">Hair Color</div>
                            </li>
                          )}
                          {/* Build */}
                          {data?.modelData?.persons[0]?.body?.build !== "" && (
                            <li>
                              <div className="box-listing-description">
                                {capitalizeString(
                                  data?.modelData?.persons[0]?.body?.build
                                )}
                              </div>
                              <div className="box-listing-box-heading">Build</div>
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* Turn on */}
                  {data?.modelData?.details?.about?.turnsOn && (
                    <div>
                      <div className="box-heading">Turn On: </div>
                      <div className="box-description">
                        {capitalizeString(
                          data?.modelData?.details?.about?.turnsOn
                        )}
                      </div>
                    </div>
                  )}
                  {/* Turn off */}
                  {data?.modelData?.details?.about?.turnsOff && (
                    <div>
                      <div className="box-heading">Turn Off:</div>
                      <div className="box-description">
                        {capitalizeString(
                          data?.modelData?.details?.about?.turnsOff
                        )}
                      </div>
                    </div>
                  )}
                  {/* Tags */}
                  {data?.modelData?.details?.willingnesses.length > 0 && (
                    <div className="box-listing-tags">
                      <div className="box-tag-heading">Tags: </div>
                      <div className="box-tag-data">
                        <ul className="box-tag-data-list">
                          {Object.values(data?.modelData?.details?.willingnesses).map(tag => <li>{tag}</li>)}
                        </ul>
                      </div>
                    </div>
                  )}
               {/* Appearances */}
                  {data?.modelData?.details?.appearances.length > 0 && (
                    <div className="box-listing-tags">
                      <div className="box-tag-heading">Appearances: </div>
                      <div className="box-tag-data">
                        <ul className="box-tag-data-list">
                          {Object.values(data?.modelData?.details?.appearances).map(appearance => <li>{appearance}</li>)}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
              className="related-models side-images-mobile"
              style={{ height: videoHeight, maxHeight: 800 }}
            >
              <div
                style={{ position: "relative" }}
                className="side-images-wrapper"
              >
                {data.relatedModels?.map((element, i) => {
                  if (element.title != "")
                    return (
                      <a href={`https:${element.chatRoomUrl}`} target="_blank">
                        <Image
                          height={200}
                          width={200}
                          src={`https:${element.profilePictureUrl.size320x240}`}
                          alt=""
                          // className="mb-1"
                          style={{
                            // height: (videoHeight - 12) / 4,
                            width: "100%",
                            // maxHeight: 162,
                          }}
                        />
                        <div className="d-flex align-items-center d-flex align-items-center model-name">
                          <RxDotFilled color="#8FC400" fontSize="22px" />
                          <span>
                            {element.displayName} ({element?.persons[0]?.age})
                          </span>
                        </div>
                      </a>
                    );
                })}
              </div>
            </div>
        {/* <div className="mt-5 px-4">
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
          </div>
        </div> */}
        {/* <div className="mt-5 px-4">
          <h3 className={`${styles.content} mb-3`}>
            Other Recommended <span> Live Streams for You</span>
          </h3>
          <div className="row mb-5">
            <LiveStreamPose image={"/pose.png"} />
            <LiveStreamPose image={"/pose1.png"} />
            <LiveStreamPose image={"/pose2.png"} />
            <LiveStreamPose image={"/pose3.png"} />
          </div>
          <h3 className={`${styles.content} `}>
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
        </div> */}

        {/* <VideoModal show={video} onHide={setVideo} /> */}
        {/* <PhotoAlbumModal show={photoModal} onHide={setPhotoModal} /> */}
      </div>
    </>
  );
};

export default LiveStreamComponent;
