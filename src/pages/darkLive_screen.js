import { useRouter } from "next/router";
import styles from "../components/navigation/dark-themeLive/dashbpard-dark-theme.module.css";

import { AiOutlineHeart } from "react-icons/ai";
import { RxDotFilled } from "react-icons/rx";
import DarkTheme from "../components/navigation/dark-themeLive";
import LiveScreenPhoto1 from "@/components/LiveScreenPhoto1";
import LiveScreenPhoto2 from "@/components/LiveScreenPhoto2";

const DashbpardDarkTheme = () => {
  const router = useRouter();
  return (
    <div>
      <DarkTheme>
        <div className={styles?.dasboardMain2}>
          <div className="py-4 px-3">
            <div className={styles?.liveHeading} style={{ fontSize: "18px" }}>
              TOP RATED{" "}
              <span className={styles?.livesubHeading}>
                LIVE EXPERTS{" "}
                <span className="ms-2" style={{ fontSize: "16px" }}>
                  Selection of Oranum's finest, award winning Experts!
                </span>{" "}
              </span>{" "}
            </div>
            <div className="row ">
              <LiveScreenPhoto1 image={"/pose.png"} />
              <LiveScreenPhoto2 image={"/pose1.png"} />
              <LiveScreenPhoto2 image={"/pose2.png"} />
              <LiveScreenPhoto2 image={"/pose3.png"} />
            </div>
          </div>
          <div className="py-4 px-3">
            <div className={styles?.liveHeading} style={{ fontSize: "18px" }}>
              RECOMMENDED{" "}
              <span className={styles?.livesubHeading}>
                EXPERTS{" "}
                <span className="ms-2" style={{ fontSize: "16px" }}>
                  Top Favourites by our Members! You can't go wrong with our
                  recommended Experts!
                </span>{" "}
              </span>{" "}
            </div>
            <div className="row">
              <LiveScreenPhoto1 image={"/pose.png"} />
              <LiveScreenPhoto2 image={"/pose1.png"} />
              <LiveScreenPhoto2 image={"/pose2.png"} />
              <LiveScreenPhoto2 image={"/pose3.png"} />
              <LiveScreenPhoto1 image={"/pose.png"} />
              <LiveScreenPhoto2 image={"/pose1.png"} />
              <LiveScreenPhoto2 image={"/pose2.png"} />
              <LiveScreenPhoto2 image={"/pose3.png"} />
              <LiveScreenPhoto1 image={"/pose.png"} />
              <LiveScreenPhoto2 image={"/pose1.png"} />
              <LiveScreenPhoto2 image={"/pose2.png"} />
              <LiveScreenPhoto2 image={"/pose3.png"} />
              <LiveScreenPhoto1 image={"/pose.png"} />
              <LiveScreenPhoto2 image={"/pose1.png"} />
              <LiveScreenPhoto2 image={"/pose2.png"} />
              <LiveScreenPhoto2 image={"/pose3.png"} />
            </div>
          </div>
        </div>
      </DarkTheme>
    </div>
  );
};

export default DashbpardDarkTheme;
