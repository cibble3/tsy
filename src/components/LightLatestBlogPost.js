import styles from "../components/navigation/light-themeLive/dashbpard-dark-theme.module.css";

const LightLatestBlogPost = ({ image, title1, title2 }) => {
  return (
    <div className={styles?.detailblog}>
      <div className={styles?.blogimgtext}>
        <img src={image} className={styles?.blogimg} alt="" />
      </div>
      <div className="mb-2">
        <h5>{title1}</h5>
        <p>{title2}</p>
      </div>
    </div>
  );
};

export default LightLatestBlogPost;
