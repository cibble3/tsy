import Link from "next/link";
import styles from "../components/navigation/light-themeLive/dashbpard-dark-theme.module.css";

const LightSingleBlogPost = ({ image, title1, title2 }) => {
  return (
    <div className="col-md-6 col-sm-12 col-lg-4 mt-4">
      <div className={styles?.Dashbpardcard}>
        <Link href="/lightSession_desc_detail">
          <img
            class="card-img-top"
            src={image}
            alt="Card image cap"
            role="button"
          />
        </Link>
        <div class="card-body">
          <div class="card-text pt-3 text-black fw-bold">{title1}</div>
          <div className="fs-12 lh text-black mt-2 mb-2">
            {title2}
            <a className="text-decoration-underline text-black" role="button">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LightSingleBlogPost;
