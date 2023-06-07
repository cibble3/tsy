import styles from "../components/navigation/dark-themeLive/dashbpard-dark-theme.module.css";
import Link from "next/link";
import { renderProcessedContent } from "@/helper/helpers";
import Image from "next/image";

const DarkSingleBlogPost = ({ image, title1, title2, post_url }) => {
  return (
    <div className="col-md-6 col-sm-12 col-lg-4 mt-4">
      <div className={styles?.Dashbpardcard}>
        <Link title={title1} href={`/blog/${post_url}`}>
          <Image
            height={100}
            width={100}
            className="card-img-top"
            style={{ height: "200px" }}
            src={image}
            alt={`Blog Post: ${title1}`}
            role="button"
          />
        </Link>
        <div className="card-body">
          <div className={`${styles?.cardtext} card-text pt-3 fw-bold`}>
            <Link
              className="blog-title"
              title={title1}
              href={`/blog/${post_url}`}
            >
              {renderProcessedContent(title1, 30)}
            </Link>
          </div>
          <div className={`${styles?.cardtext} fs-12 lh mt-2 mb-2`}>
            {renderProcessedContent(title2)}
            {/* <Link
              href={`/blog/${post_url}`}
              title={title1}
              className={`${styles?.cardtext} text-decoration-underline`}
              aria-label={`Learn more about ${title1}`}
            >
              {" "}
              Learn more
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DarkSingleBlogPost;
