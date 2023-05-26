import styles from "../components/navigation/dark-themeLive/dashbpard-dark-theme.module.css";
// import { AiOutlineHeart } from "react-icons/ai";
// import { RxDotFilled } from "react-icons/rx";
import DarkTheme from "../components/navigation/dark-themeLive";
import LiveScreenPhoto from "@/components/LiveScreenPhoto1";
// import LiveScreenPhoto2 from "@/components/LiveScreenPhoto2";
import axiosInstance from "../instance/axiosInstance";
import { useEffect, useState } from "react";

const DashbpardDarkTheme = () => {
  const [models, setModels] = useState([]);
  const [pageContent, setPageContent] = useState([]);
  const [pageNo, setPageNo] = useState(2);
  const [loading, setLoading] = useState(false);
  const [isPageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    axiosInstance
      .get("/")
      .then((response) => {
        setModels(response.data.performers);
        setPageContent(response.data.pageContent);
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
          console.log("No more models f ound");
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
              {/* <div className={styles?.liveHeading} style={{ fontSize: "18px" }}>
              RECOMMENDED
              <span className={styles?.livesubHeading}>
                EXPERTS
                <span className="ms-2" style={{ fontSize: "16px" }}>
                  Top Favourites by our Members! You can't go wrong with our
                  recommended Experts!
                </span>
              </span>
            </div> */}
              <div className="row">
                {models?.map((element, i) => {
                  return (
                    <LiveScreenPhoto
                      key={i}
                      image={element?.profilePictureUrl?.size320x240}
                      name={element?.displayName}
                      age={element?.persons[0]?.age}
                      tags={element?.details?.willingnesses}
                    />
                  );
                })}
              </div>

             {isPageLoaded && <div className="parent-loadbtn">
                <button
                  className="loading-btn"
                  onClick={loadMoreModels}
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Load More Models"}
                </button>
              </div>}

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
  );
};

export default DashbpardDarkTheme;
