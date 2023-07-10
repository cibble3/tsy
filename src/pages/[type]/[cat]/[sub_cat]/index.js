import styles from "@/components/navigation/dark-themeLive/dashbpard-dark-theme.module.css";
import DarkTheme from "@/components/navigation/dark-themeLive";
import LiveScreenPhoto from "@/components/LiveScreenPhoto1";
import axiosInstance from "@/instance/axiosInstance";
import { useEffect, useState } from "react";
import HeadMeta from "@/components/HeadMeta";
import LiveScreenVideo from "@/components/LiveScreenVideo";
import DarkSingleBlogPost from "@/components/DarkSingleBlogPost";
import TopText from "@/components/TopText";
import SkeletonLiveScreenPhoto1 from "@/components/Skeletons/SkeletonLiveScreenPhoto1";

const DashbpardDarkTheme = ({ data, params, pathUrl }) => {
  const [models, setModels] = useState([]);
  const [pageContent, setPageContent] = useState([]);
  const [pageNo, setPageNo] = useState(2);
  const [loading, setLoading] = useState(false);
  const [isPageLoaded, setPageLoaded] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [videos, setVideos] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    setCategory(data.category);
    setModels(data.performers);
    setPageContent(data.pageContent);
    setBlogs(data.articles);
    setVideos(data.videos);

    setTimeout(() => {
      setPageLoaded(true);
    }, 1000);
  }, [data]);

  const isPagePremium = pathUrl
    .split("/")
    .map((key) => ["premium"].includes(key.toLowerCase()))
    .includes(true);

  const loadMoreModels = async () => {
    if (!loading) {
      setLoading(true);
      try {
        const response = await axiosInstance.get(
          `${params.type}/${params.cat}/?page=${pageNo}`
        );
        const data = response?.data?.performers;
        if (data === "") {
          console.log("No more models found");
        } else {
          if (Array.isArray(data)) {
            setModels((prevModels) => [...prevModels, ...data]);
          } else {
            setModels((prevModels) => [...prevModels, data]);
          }
          setPageNo((prevPageNo) => prevPageNo + 1);
        }
      } catch (error) {
        console.error("Error loading models:", error);
      }
      setLoading(false);
    }
  };

  return (
    <div>
      {isPageLoaded && <HeadMeta pageContent={pageContent} />}

      <DarkTheme>
        <>
          {isPageLoaded ? (
            <div className={styles?.dasboardMain2}>
              <div className="py-4 px-3">
                <TopText html={pageContent?.top_text} />

                <div className="row">
                  {isPagePremium &&
                    models?.map((element, i) => {
                      return (
                        <LiveScreenPhoto
                          key={i}
                          image={element?.profilePictureUrl?.size320x240}
                          name={element?.displayName}
                          age={element?.persons[0]?.age}
                          tags={element?.details?.willingnesses}
                          ethnicity={element?.ethnicity}
                          isPagePremium={isPagePremium}
                        />
                      );
                    })}

                  {!isPagePremium &&
                    models?.map((element, i) => {
                      return (
                        <LiveScreenPhoto
                          key={i}
                          image={element?.profilePictureUrl?.size320x240}
                          name={element?.displayName}
                          age={element?.persons[0]?.age}
                          tags={element?.details?.willingnesses}
                          ethnicity={element?.ethnicity}
                          isPagePremium={isPagePremium}
                        />
                      );
                    })}
                </div>

                {isPagePremium && isPageLoaded && (
                  <div className="parent-loadbtn">
                    <button
                      className="loading-btn"
                      onClick={loadMoreModels}
                      disabled={loading}
                    >
                      {loading ? "Loading..." : "Load More Models"}
                    </button>
                  </div>
                )}

                {pageContent?.bottom_text ? (
                  <div
                    className="siteContent mt-5 padding_container"
                    dangerouslySetInnerHTML={{
                      __html: pageContent?.bottom_text,
                    }}
                  />
                ) : null}

                {blogs && (
                  <div className="py-4 mt-2 padding_container">
                    <div className="row">
                      <h2 align="center">
                        The TSYUM Live{" "}
                        <span className="blog_span">{category}</span> Blog
                      </h2>
                      {blogs?.map((element, i) => {
                        return (
                          <DarkSingleBlogPost
                            key={i}
                            image={element?.feature_image}
                            title1={element?.post_title}
                            post_url={element?.post_url}
                            title2={element?.post_content}
                          />
                        );
                      })}
                    </div>
                  </div>
                )}

                {videos && (
                  <div className="py-4 mt-2 padding_containertainer">
                    <div className="row">
                      <h2 align="center">
                        TSYUM Free BDSM Cam &{" "}
                        <span className="blog_span">{category}</span> Webcam
                        Model Videos
                      </h2>
                      {videos?.map((element, i) => {
                        return (
                          <LiveScreenVideo
                            isFeatured={true}
                            key={i}
                            title={element?.title}
                            image={element?.thumbImage}
                            targetUrl={element?.targetUrl}
                            parent={"video"}
                          />
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className={styles?.dasboardMain2}>
              <div className="py-4 px-3">
                <div className="row">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <SkeletonLiveScreenPhoto1 key={i} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </>
      </DarkTheme>
    </div>
  );
};

export default DashbpardDarkTheme;

export async function getServerSideProps(context) {
  const { req, res } = context;

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  let client_ip;

  if (req.headers["x-forwarded-for"]) {
    client_ip = req.headers["x-forwarded-for"].split(",")[0];
  } else if (req.headers["x-real-ip"]) {
    client_ip = req.connection.remoteAddress;
  } else {
    client_ip = req.connection.remoteAddress;
  }

  const response = await axiosInstance.get(
    `/${context.params.type}/${context.params.cat}/${context.params.sub_cat}?client_ip=${client_ip}`
  );
  const responseData = response.data;

  // if (!responseData.status) {
  //   return {
  //     redirect: {
  //       destination: "/",
  //       permanent: false,
  //     },
  //   };
  // }
  return {
    props: {
      data: responseData,
      params: context.params,
      pathUrl: context.req.url,
    },
  };
}
