import styles from "@/components/navigation/dark-themeLive/dashbpard-dark-theme.module.css";
import DarkTheme from "@/components/navigation/dark-themeLive";
import axiosInstance from "@/instance/axiosInstance";
import HeadMeta from "@/components/HeadMeta";
import { useEffect, useState } from "react";
import LiveScreenVideo from "@/components/LiveScreenVideo";
import DarkSingleBlogPost from "@/components/DarkSingleBlogPost";
import LiveScreenPhoto1 from "@/components/LiveScreenPhoto1";
import TopText from "@/components/TopText";

const DashbpardDarkTheme = ({ data, params, pathUrl }) => {
  const [videos, setVideos] = useState([]);
  const [pageContent, setPageContent] = useState([]);
  const [pageNo, setPageNo] = useState(2);
  const [loading, setLoading] = useState(false);
  const [isPageLoaded, setPageLoaded] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [models, setModels] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    setVideos(data?.videos);
    setPageContent(data?.pageContent);
    setBlogs(data?.articles);
    setCategory(data?.category);
    setModels(data?.performers);

    setTimeout(() => {
      setPageLoaded(true);
      syncVideos();
    }, 1000);
  }, [data]);

  const isPagePremium = pathUrl
    .split("/")
    .map((key) => ["premium"].includes(key.toLowerCase()))
    .includes(true);

  const syncVideos = async () => {
    try {
      await axiosInstance.post(`/videos-sync`, { videos });
    } catch (error) {
      console.error("Error loading videos:", error);
    }
  };
  const loadMoreVideos = async () => {
    if (!loading) {
      setLoading(true);
      try {
        const response = await axiosInstance.get(
          `/videos/${params.cat}/?page=${pageNo}`
        );
        const data = response?.data?.videos;
        if (data === "") {
          console.log("No more videos found");
        } else {
          if (Array.isArray(data)) {
            setVideos((prevVideos) => [...prevVideos, ...data]);
          } else {
            setVideos((prevVideos) => [...prevVideos, data]);
          }
          setPageNo((prevPageNo) => prevPageNo + 1);
        }
      } catch (error) {
        console.error("Error loading videos:", error);
      }
      setLoading(false);
      syncVideos();
    }
  };

  return (
    <>
      <HeadMeta pageContent={pageContent} />
      <div>
        <DarkTheme>
          <>
            {isPageLoaded && (
              <div className={styles?.dasboardMain2}>
                <div className="py-4 px-3">
                  <TopText html={pageContent?.top_text} />

                  <div className="row">
                    {videos?.map((element, i) => {
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
                  </div>

                  {isPageLoaded && (
                    <div className="parent-loadbtn mb-3">
                      <button
                        className="loading-btn"
                        onClick={loadMoreVideos}
                        disabled={loading}
                      >
                        {loading ? "Loading..." : "Load More Videos"}
                      </button>
                    </div>
                  )}

                  <div
                    className="siteContent mt-5 padding_container"
                    dangerouslySetInnerHTML={{
                      __html: pageContent?.bottom_text,
                    }}
                  />

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

                  {models && (
                    <div className="py-4 mt-2 padding_container">
                      <div className="row">
                        <h2 align="center">
                          The TSYUM Live{" "}
                          <span className="blog_span">{category}</span> Models
                        </h2>
                        {models?.map((element, i) => {
                          return (
                            <LiveScreenPhoto1
                              key={i}
                              image={element?.profilePictureUrl?.size320x240}
                              name={element?.displayName}
                              age={element?.persons[0]?.age}
                              tags={element?.details?.willingnesses}
                              ethnicity={element?.ethnicity}
                              isPagePremium={isPagePremium}
                              isRelated={true}
                            />
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </>
        </DarkTheme>
      </div>
    </>
  );
};

export default DashbpardDarkTheme;

export async function getServerSideProps(context) {
  const { req, res } = context;

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  const response = await axiosInstance.get(`/videos/${context.params.cat}`);
  const responseData = response.data;

  return {
    props: {
      data: responseData,
      params: context.params,
      pathUrl: context.req.url,
    },
  };
}
