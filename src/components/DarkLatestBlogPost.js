import Link from "next/link";
import styles from "../components/navigation/dark-themeLive/dashbpard-dark-theme.module.css";

const DarkLatestBlogPost = ({ image, title1, title2, post_url }) => {
  return (
    <Link href={`/blog/${post_url}`}>
    <div className={styles?.detailblog}>
      <div className={styles?.blogimgtext}>
        <img src={image} className={styles?.blogimg} alt="" />
      </div>
      <div className="mb-2">
        <h5>{title1}</h5>
        <p>{title2}</p>
      </div>
    </div>
    </Link>
  );
};

export default DarkLatestBlogPost;
