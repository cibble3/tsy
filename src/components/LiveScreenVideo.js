import Link from "next/link";
import { slugify } from "@/helper/helpers";
import Image from "next/image";

const LiveScreenVideo = ({
  image,
  targetUrl,
  parent,
  title,
  isFeatured = false,
}) => {
  const url = new URL(`http:${targetUrl}`);
  const query = new URLSearchParams(url.search);
  const performerName = query.get("performerName");

  const friendlyUrl = slugify(title);
  const performerNameWithoutSpaces = performerName
    .replace(/\s/g, "")
    .toLocaleLowerCase();
  const friendlyUrlWithPerformer = `${performerNameWithoutSpaces}-${friendlyUrl}`;
  return (
    <div
      className={`${!isFeatured && "col-xl-3 col-lg-4"
        } col-md-4 col-sm-6 mt-4 video-block`}
    >
      <div className="relative video-items">
        <Link href={`/${parent}/${friendlyUrlWithPerformer}`}>
          <Image
            width={500}
            height={250}
            src={`https:${image}`}
            alt={`${performerName}${title ? " : " + title : ""}`}
            className="w-100 video-thumb"
          />
          <Image
            width={300}
            height={300}
            src="/play_icon.png"
            className="video-icon"
            alt={`play ${performerName} free cam video`}
          />
        </Link>

        <div className="text-white px-2 overlay">
          <div className="d-flex justify-content-between align-items-center d-flex align-items-center relative h-100">
            <div className="text-content">
              <span>
                {performerName} {title ? " : " + title : ""}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveScreenVideo;
