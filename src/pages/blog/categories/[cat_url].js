import styles from "@/components/navigation/dark-themeLive/dashbpard-dark-theme.module.css";
import DarkTheme from "@/components/navigation/dark-themeLive";
import { Container } from "react-bootstrap";
import DarkSingleBlogPost from "@/components/DarkSingleBlogPost";
import axiosInstance from "@/instance/axiosInstance";
import HeadMeta from "@/components/HeadMeta";

const DashbpardDarkTheme = ({ data }) => {
  return (
    <>
      <HeadMeta pageContent={data?.pageContent}/>
      <div>
        <DarkTheme>
          <div className={styles?.dasboardMain}>
            <Container>
              <div
                className="siteContent"
                dangerouslySetInnerHTML={{
                  __html: data?.pageContent?.top_text,
                }}
              />
              <div className="row">
                {data?.articles?.map((element, i) => {
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
            </Container>
          </div>
        </DarkTheme>
      </div>
    </>
  );
};

export default DashbpardDarkTheme;

export async function getServerSideProps(context) {
    const response = await axiosInstance.get(`/blog/categories/${context.params.cat_url}`);
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
  