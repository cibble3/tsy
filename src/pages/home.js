import { useRouter } from "next/router";
import styles from "../components/navigation/dark-themeLive/dashbpard-dark-theme.module.css";

// import { AiOutlineHeart } from "react-icons/ai";
// import { RxDotFilled } from "react-icons/rx";
import DarkTheme from "../components/navigation/dark-themeLive";
import LiveScreenPhoto from "@/components/LiveScreenPhoto1";
import LiveScreenPhoto2 from "@/components/LiveScreenPhoto2";
import axiosInstance from "../instance/axiosInstance";
import { useEffect, useState } from "react";
import Head from "next/head";

const DashbpardDarkTheme = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <DarkTheme>
        <>
          <div className={styles?.dasboardMain2}>
            <div className="py-4 px-3">
              <div
                className="siteContent"
                dangerouslySetInnerHTML={{
                  __html: data?.page_content?.top_text,
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
                {data?.performers?.map((element, i) => {
                  return (
                    <LiveScreenPhoto
                      key={i}
                      image={element.profilePictureUrl.size320x240}
                      name={element.displayName}
                      age={element.persons[0]?.age}
                      tags={element.details?.willingnesses}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </>
      </DarkTheme>
    </div>
  );
};

export default DashbpardDarkTheme;
