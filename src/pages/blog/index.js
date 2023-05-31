import styles from "../../components/navigation/dark-themeLive/dashbpard-dark-theme.module.css";
import DarkTheme from "../../components/navigation/dark-themeLive";
import { Container } from "react-bootstrap";
import DarkSingleBlogPost from "@/components/DarkSingleBlogPost";
import axiosInstance from "@/instance/axiosInstance";
import HeadMeta from "@/components/HeadMeta";
import { useState } from "react";

const DashbpardDarkTheme = ({ data }) => {
  const [blogs, setBlogs] = useState(data?.articles);
  const [pageContent, setPageContent] = useState(data?.pageContent);
  const [pageNo, setPageNo] = useState(2);
  const [loading, setLoading] = useState(false);

  const loadMoreBlogs = async () => {
    if (!loading) {
      setLoading(true);
      try {
        const response = await axiosInstance.get(`/blog/?page=${pageNo}`);
        const data = response?.data?.articles;
        if (data === "") {
          console.log("No more models f ound");
        } else {
          if (Array.isArray(data)) {
            setBlogs((prevModels) => [...prevModels, ...data]);
          } else {
            setBlogs((prevModels) => [...prevModels, data]);
          }
          setPageNo((prevPageNo) => prevPageNo + 1);
        }
      } catch (error) {
        console.error("Error loading models:", error);
      }
      setLoading(false);
    }
  };

  return (
    <>
      <HeadMeta pageContent={pageContent} />
      <div>
        <DarkTheme>
          <div className={styles?.dasboardMain}>
            <Container>
              <div
                className="siteContent"
                dangerouslySetInnerHTML={{
                  __html: pageContent?.top_text,
                }}
              />
              <div className="row">
                {blogs?.map((element, i) => {
                  return (
                    <DarkSingleBlogPost
                      key={i}
                      image={element?.feature_image}
                      title1={element?.post_title}
                      post_url={element?.post_url}
                      title2={element?.post_content}
                    />
                  );
                })}
              </div>
              <div className="parent-loadbtn">
                <button
                  className="loading-btn"
                  onClick={loadMoreBlogs}
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Load More Blogs"}
                </button>
              </div>
            </Container>
          </div>
        </DarkTheme>
      </div>
    </>
  );
};

export default DashbpardDarkTheme;

export async function getServerSideProps(context) {
  const response = await axiosInstance.get(`/blog?limit=9`);
  const responseData = response.data;

  return {
    props: {
      data: responseData,
    },
  };
}
