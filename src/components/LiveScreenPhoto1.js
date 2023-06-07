import { AiOutlineHeart } from "react-icons/ai";
import { RxDotFilled } from "react-icons/rx";
import Link from "next/link";
import Image from "next/image";

const LiveScreenPhoto1 = ({
  image,
  name,
  tags,
  age,
  ethnicity,
  isPageFree,
  isRelated = false,
}) => {
  return (
    <div
      className={`${
        isRelated ? "col-xl-4" : "col-xl-3"
      } col-lg-4 col-md-6 col-sm-6 mt-4`}
    >
      {isPageFree ? (
        <a
          target="_blank"
          href={`https://mistressworld.chaturbate.com/${name}/?tour=Limj&b=${name}&signup_notice=1&campaign=1f2Eo`}
          className="relative"
        >
          <Image
            height={500}
            width={500}
            src={`https:${image}`}
            alt={`live ${ethnicity} cam performance by ${name}`}
            className="w-100"
            loading="eager"
            priority={true}
          />
          <div className="text-white px-2 bg-overlay">
            <div
              className="d-flex justify-content-between align-items-center relative"
              style={{ zIndex: 1 }}
            >
              <div className="d-flex align-items-center d-flex align-items-center">
                <RxDotFilled color="#8FC400" fontSize="22px" />
                <span>
                  {name} {age && `(${age})`}
                </span>
              </div>
              <div className="">
                <AiOutlineHeart fontSize="22px" />
              </div>
            </div>
          </div>
        </a>
      ) : (
        <Link href={`/chat/${name}`} className="relative">
          <Image
            height={500}
            width={500}
            src={`https:${image}`}
            alt={`live ${ethnicity} cam performance by ${name}`}
            className="w-100"
            // loading="eager"
            // priority={true}
          />
          <div className="text-white px-2 bg-overlay">
            <div
              className="d-flex justify-content-between align-items-center relative"
              style={{ zIndex: 1 }}
            >
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
      )}

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
