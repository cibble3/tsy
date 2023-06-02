import styles from "../components/navigation/dark-themeLive/dashbpard-dark-theme.module.css";
import DarkTheme from "../components/navigation/dark-themeLive";
import LiveScreenPhoto from "@/components/LiveScreenPhoto1";
import axiosInstance from "../instance/axiosInstance";
import { useEffect, useState } from "react";
import HeadMeta from "@/components/HeadMeta";
import LiveScreenVideo from "@/components/LiveScreenVideo";
import DarkSingleBlogPost from "@/components/DarkSingleBlogPost";

const DashbpardDarkTheme = () => {
  const [models, setModels] = useState([]);
  const [pageContent, setPageContent] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [videos, setVideos] = useState([]);
  const [pageNo, setPageNo] = useState(2);
  const [loading, setLoading] = useState(false);
  const [isPageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    axiosInstance
      .get("/")
      .then((response) => {
        setModels(response.data.performers);
        setPageContent(response.data.pageContent);
        setBlogs(response.data.articles);
        setVideos(response.data.videos);
      })
      .catch((error) => {
        console.error(error);
      });

    setTimeout(() => {
      setPageLoaded(true);
    }, 2000);
  }, []);

  const loadMoreModels = async () => {
    if (!loading) {
      setLoading(true);
      try {
        const response = await axiosInstance.post("/fetch-more-models", {
          category: pageContent?.category,
          page: pageNo,
        });
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
          <div className={styles?.dasboardMain2}>
            <div className="py-4 px-3">
              <div
                className="siteContent"
                dangerouslySetInnerHTML={{
                  __html: pageContent?.top_text,
                }}
              />

              <div className="row">
                {models?.map((element, i) => {
                  return (
                    <LiveScreenPhoto
                      key={i}
                      image={element?.profilePictureUrl?.size320x240}
                      name={element?.displayName}
                      age={element?.persons[0]?.age}
                      tags={element?.details?.willingnesses}
                      ethnicity={element?.ethnicity}
                    />
                  );
                })}
              </div>

              {isPageLoaded && (
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

              <div
                className="siteContent"
                dangerouslySetInnerHTML={{
                  __html: pageContent?.bottom_text,
                }}
              />
            </div>

            {blogs && (
              <div className="py-4 px-3">
                <div className="row">
                  <h2 align="center">The MistressWorld Live Fetish Blog</h2>
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
              <div className="py-4 px-3">
                <div className="row">
                  <h2 align="center">
                    MistressWorld Free BDSM Cam &amp; Fetish Webcam Model Videos
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
        </>
      </DarkTheme>
    </div>
  );
};

export default DashbpardDarkTheme;
