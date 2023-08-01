import styles from "../components/navigation/dark-themeLive/dashbpard-dark-theme.module.css";
import DarkTheme from "../components/navigation/dark-themeLive";
import LiveScreenPhoto from "@/components/LiveScreenPhoto1";
import axiosInstance from "../instance/axiosInstance";
import { useEffect, useState } from "react";
import HeadMeta from "@/components/HeadMeta";
import LiveScreenVideo from "@/components/LiveScreenVideo";
import DarkSingleBlogPost from "@/components/DarkSingleBlogPost";
import TopText from "@/components/TopText";
import SkeletonLiveScreenPhoto1 from "@/components/Skeletons/SkeletonLiveScreenPhoto1";
import SkeletonTopText from "@/components/Skeletons/SkeletonTopText";
import CookiesModal from "@/components/CookiesModal/CookiesModal";

const Home = () => {
  const [models, setModels] = useState([]);
  const [pageContent, setPageContent] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [videos, setVideos] = useState([]);
  // const [pageNo, setPageNo] = useState(2);
  // const [loading, setLoading] = useState(false);
  const [isPageLoaded, setPageLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [category, setCategory] = useState("");

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      setShowModal(true);
    }
  }, []);

  useEffect(() => {
    axiosInstance
      .get("/trans")
      .then((response) => {
        setCategory(response.data.category);
        setModels(response.data.performers);
        setPageContent(response.data.pageContent);
        setBlogs(response.data.articles);
        setVideos(response.data.videos);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (Object.keys(pageContent).length || Object.keys(models).length)
      setPageLoaded(true);
  }, [pageContent, models]);

  // const loadMoreModels = async () => {
  //   if (!loading) {
  //     setLoading(true);
  //     try {
  //       const response = await axiosInstance.post("/fetch-more-models", {
  //         category: pageContent?.category,
  //         page: pageNo,
  //       });
  //       const data = response?.data?.performers;
  //       if (data === "") {
  //         console.log("No more models found");
  //       } else {
  //         if (Array.isArray(data)) {
  //           setModels((prevModels) => [...prevModels, ...data]);
  //         } else {
  //           setModels((prevModels) => [...prevModels, data]);
  //         }
  //         setPageNo((prevPageNo) => prevPageNo + 1);
  //       }
  //     } catch (error) {
  //       console.error("Error loading models:", error);
  //     }
  //     setLoading(false);
  //   }
  // };

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowModal(false);
  };

  return (
    <div>
      {showModal && <CookiesModal onAccept={handleAccept} />}
      {isPageLoaded ? <HeadMeta pageContent={pageContent} /> : null}
      <DarkTheme>
        <>
          {isPageLoaded ? (
            <div className={styles?.dasboardMain2}>
              <div className="py-4 px-3">
                {pageContent?.top_text ? (
                  <TopText html={pageContent?.top_text} />
                ) : null}
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
                {/* {isPageLoaded && models.length > 0 && (
                  <div className="parent-loadbtn">
                    <button
                      className="loading-btn"
                      onClick={loadMoreModels}
                      disabled={loading}
                    >
                      {loading ? "Loading..." : "Load More Models"}
                    </button>
                  </div>
                )} */}
                {pageContent?.bottom_text ? (
                  <div
                    className="siteContent mt-5 padding_container"
                    dangerouslySetInnerHTML={{
                      __html: pageContent?.bottom_text,
                    }}
                  />
                ) : null}
                {blogs.length ? (
                  <div className="py-4 mt-2padding_container">
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
                ) : null}
                {videos.length ? (
                  <div className="py-4  mt-2 padding_container">
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
                ) : null}
              </div>
            </div>
          ) : (
            <div className={styles?.dasboardMain2}>
              <div className="py-4 px-3">
                <SkeletonTopText />
                <div className="row">
                  {Array.from({ length: 12 }).map((_, i) => (
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

export default Home;
