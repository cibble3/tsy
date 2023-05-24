// import { useRouter } from "next/router";
import styles from "../components/navigation/dark-themeLive/dashbpard-dark-theme.module.css";
import Link from "next/link";
import { renderProcessedContent } from "@/helper/helpers";

const DarkSingleBlogPost = ({ image, title1, title2, post_url }) => {
  return (
    <div className="col-md-6 col-sm-12 mt-4">
      <div className={styles?.Dashbpardcard}>
        <Link href={`/blog/${post_url}`}>
          <img
            className="card-img-top"
            style={{ height: "350px" }}
            src={image}
            alt="Card image cap"
            role="button"
          />
        </Link>
        <div className="card-body">
          <div className={`${styles?.cardtext} card-text pt-3 fw-bold`}>
            <Link className="blog-title" href={`/blog/${post_url}`}>
              {title1}
            </Link>
          </div>
          <div className={`${styles?.cardtext} fs-12 lh mt-2 mb-2`}>
            {renderProcessedContent(title2)}
            <Link
              href={`/blog/${post_url}`}
              className={`${styles?.cardtext} text-decoration-underline`}
              role="button"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DarkSingleBlogPost;
