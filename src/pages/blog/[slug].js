import styles from "@/components/navigation/dark-themeLive/dashbpard-dark-theme.module.css";
// import { AiOutlineHeart } from "react-icons/ai";
// import { RiMessage2Line } from "react-icons/ri";
import DarkTheme from "@/components/navigation/dark-themeLive";
import DarkLatestBlogPost from "@/components/DarkLatestBlogPost";
import axiosInstance from "@/instance/axiosInstance";
import { renderProcessedContent } from "@/helper/helpers";
import HeadMeta from "@/components/HeadMeta";
import Link from "next/link";

const DashbpardDarkTheme = ({ data }) => {
  return (
    <>
      <HeadMeta pageContent={data?.pageContent} />
      <div>
        <DarkTheme>
          <div className={styles?.dasboardMain} style={{ height: "100%" }}>
            <div className="container">
              <div className="row mt-4">
                <div className="col-lg-8">
                  <div className={styles?.subHeading}>
                    <div className={styles?.heading}>
                      <h5 className={`${styles.cardtext} mb-3 lh-base`}>
                        {data.article.post_title}
                      </h5>
                    </div>
                  </div>

                  <div className="mt-4 mb-4">
                    <img src={data.article.feature_image} alt="" />
                  </div>

                  <div
                    className="siteContent"
                    dangerouslySetInnerHTML={{
                      __html: data?.article?.post_content,
                    }}
                  />
                </div>

                <div className="col-lg-4">
                  <div className={styles?.blogside}>
                    <div className={styles?.headingblog}>Latest Blog</div>
                    {data?.sidebar?.lastestPosts?.map((element, i) => {
                      return (
                        <DarkLatestBlogPost
                          key={i}
                          image={element?.feature_image}
                          title1={element?.post_title}
                          title2={renderProcessedContent(
                            element?.post_content,
                            100
                          )}
                          post_url={element?.post_url}
                        />
                      );
                    })}
                  </div>

                  <div className={"mt-3 categories " + styles?.blogside}>
                    <div className={styles?.headingblog}>Categories</div>
                    <ul>
                      {data?.sidebar?.categoryWithPostsCount?.map(
                        (element, i) => {
                          return (
                            element.posts_count > 0 && (
                              <Link
                                href={`/blog/categories/${element.category_url}`}
                              >
                                <li key={i} className="mt-2">
                                  {element.category_name} ({element.posts_count}
                                  )
                                </li>
                              </Link>
                            )
                          );
                        }
                      )}
                    </ul>
                  </div>

                  <div className={"mt-3 tag-cloud " + styles?.blogside}>
                    <div className={styles?.headingblog}>Tags</div>
                    <ul>
                      {Object.keys(data?.sidebar?.tagCloud).map((key) => (
                        data?.sidebar?.tagCloud[key] !== "" &&
                        <Link href={`/blog/tag/${key}`}>
                          <li key={key}>{data?.sidebar?.tagCloud[key]}</li>
                        </Link>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DarkTheme>
      </div>
    </>
  );
};
export default DashbpardDarkTheme;

export async function getServerSideProps(context) {
  const response = await axiosInstance.get(`/blog/${context.params.slug}`);
  const responseData = response.data;

  if (!responseData.status) {
    return {
      redirect: {
        destination: "/blog",
        permanent: false,
      },
    };
  }
  return {
    props: {
      data: responseData,
    },
  };
}
