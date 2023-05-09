import { AiOutlineHeart } from "react-icons/ai";
import { RxDotFilled } from "react-icons/rx";

const LiveScreenPhoto2 = ({ image }) => {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mt-4 ">
      <img src={image} alt="" className="w-100" />
      <div className="text-white px-2" style={{ marginTop: "-30px" }}>
        <div className="d-flex justify-content-between align-items-center ">
          <div className="d-flex align-items-center">
            <RxDotFilled color="#8FC400" fontSize="22px" />{" "}
            <span>LoveExpertise</span>
          </div>
          <div className="d-flex align-items-center">
            <AiOutlineHeart fontSize="22px" />
            <span
              className="mx-2 py-1 px-2 rounded "
              style={{ backgroundColor: "#ED135D", fontSize: "13px" }}
            >
              Live
            </span>
          </div>
        </div>
      </div>
      <div
        className="mt-3 text-white d-flex gap-1 flex-wrap"
        style={{ fontSize: "11px" }}
      >
        <div
          className="px-3 py-2 rounded-3"
          style={{ backgroundColor: "#2E3033" }}
        >
          Career
        </div>
        <div
          className="px-3 py-2 rounded-3"
          style={{ backgroundColor: "#2E3033" }}
        >
          Career
        </div>
        <div
          className="px-3 py-2 rounded-3"
          style={{ backgroundColor: "#2E3033" }}
        >
          Career
        </div>
        <div
          className="px-3 py-2 rounded-3"
          style={{ backgroundColor: "#2E3033" }}
        >
          Career
        </div>
      </div>
    </div>
  );
};

export default LiveScreenPhoto2;
