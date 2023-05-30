import { AiOutlineHeart } from "react-icons/ai";
import { RxDotFilled } from "react-icons/rx";
import Link from "next/link";
import Image from "next/image";

const LiveScreenPhoto1 = ({ image, name, tags, age }) => {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mt-4 ">
      <Link href={`/chat/${name}`}>
        <Image
          height={500}
          width={500}
          src={`https:${image}`}
          alt={name}
          className="w-100"
        />
        <div className="text-white px-2" style={{ marginTop: "-30px" }}>
          <div className="d-flex justify-content-between align-items-center d-flex align-items-center">
            <div className="d-flex align-items-center d-flex align-items-center">
              <RxDotFilled color="#8FC400" fontSize="22px" />
              <span>
                {name} ({age})
              </span>
            </div>
            <div className="">
              <AiOutlineHeart fontSize="22px" />
            </div>
          </div>
        </div>
      </Link>

      <div
        className="mt-3 text-white d-flex gap-1 flex-wrap"
        style={{ fontSize: "11px" }}
      >
        {tags?.slice(0, 3).map((tag, i) => {
          return (
            <div
              key={i}
              className="px-3 py-2 rounded-3"
              style={{ backgroundColor: "#2E3033" }}
            >
              {tag}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LiveScreenPhoto1;
