import { useRouter } from "next/router";
import styles from "../components/navigation/dark-themeLive/dashbpard-dark-theme.module.css";
import Link from "next/link";

const DarkSingleBlogPost = ({ image, title1, title2 }) => {
  return (
    <div className="col-md-6 col-sm-12 col-lg-4 mt-4">
      <div className={styles?.Dashbpardcard}>
        <Link href="/darkSession_desc_detail">
          <img
            className="card-img-top"
            src={image}
            alt="Card image cap"
            role="button"
          />
        </Link>
        <div className="card-body">
          <div className={`${styles?.cardtext} card-text pt-3 fw-bold`}>
            {title1}
          </div>
          <div className={`${styles?.cardtext} fs-12 lh mt-2 mb-2`}>
            {title2}
            <a
              className={`${styles?.cardtext} text-decoration-underline`}
              role="button"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DarkSingleBlogPost;
