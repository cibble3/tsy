import styles from "@/components/navigation/dark-themeLive/dashbpard-dark-theme.module.css";
import DarkTheme from "@/components/navigation/dark-themeLive";
import axiosInstance from "@/instance/axiosInstance";
import HeadMeta from "@/components/HeadMeta";
import { useEffect, useState } from "react";
import LiveScreenVideo from "@/components/LiveScreenVideo";

const DashbpardDarkTheme = ({ data, params }) => {
  const [videos, setVideos] = useState(data?.videos);

  const [pageContent, setPageContent] = useState(data?.pageContent);
  const [pageNo, setPageNo] = useState(2);
  const [loading, setLoading] = useState(false);
  const [isPageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPageLoaded(true);
      syncVideos();
    }, 2000);
  }, []);

  const syncVideos = async () => {
    try {
        await axiosInstance.post(`/videos-sync`, {videos});
      } catch (error) {
        console.error("Error loading videos:", error);
      }
  };
  const loadMoreVideos = async () => {
    if (!loading) {
      setLoading(true);
      try {
        const response = await axiosInstance.get(`/videos/${params.cat}/${params.sub_cat}/?page=${pageNo}`);
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
            <div className={styles?.dasboardMain2}>
              <div className="py-4 px-3">
                <div
                  className="siteContent"
                  dangerouslySetInnerHTML={{
                    __html: pageContent?.top_text,
                  }}
                />

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
                  className="siteContent"
                  dangerouslySetInnerHTML={{
                    __html: pageContent?.bottom_text,
                  }}
                />
              </div>
            </div>
          </>
        </DarkTheme>
      </div>
    </>
  );
};

export default DashbpardDarkTheme;

export async function getServerSideProps(context) {
    const response = await axiosInstance.get(
        `/videos/${context.params.cat}/${context.params.sub_cat}`
      );
  const responseData = response.data;

  return {
    props: {
      data: responseData,
      params: context.params
    },
  };
}
