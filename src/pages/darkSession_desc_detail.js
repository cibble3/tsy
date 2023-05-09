import { useRouter } from "next/router";
import styles from "../components/navigation/dark-themeLive/dashbpard-dark-theme.module.css";
import { AiOutlineHeart } from "react-icons/ai";
import { RiMessage2Line } from "react-icons/ri";
import DarkTheme from "../components/navigation/dark-themeLive";
import DarkLatestBlogPost from "@/components/DarkLatestBlogPost";
const DashbpardDarkTheme = () => {
  const router = useRouter();
  return (
    <div>
      <DarkTheme>
        <div className={styles?.dasboardMain} style={{ height: "100%" }}>
          <div className="container">
            <div className="row mt-4">
              <div className="col-lg-8">
                <div className={styles?.subHeading}>
                  <div className={styles?.heading}>
                    <h5 className={`${styles.cardtext} mb-3 lh-base`}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text
                    </h5>
                  </div>
                </div>
                <div className={styles?.detail}>
                  <div className={`${styles.cardtext} mb-2 lh-sm`}>
                    Design is a broad concept that represents the process of
                    creating products based on technical and aesthetic
                    excellence, with the aim of solving problems and adding
                    value. Good design delivers the best possible user
                    experience.
                  </div>
                  <div className={`${styles.cardtext} mb-2 lh-sm`}>
                    Design is a thought process that comprises the creation of
                    products to solve problems, including functional and
                    aesthetic aspects.
                  </div>
                  <div className={`${styles.cardtext} lh-sm`}>
                    This is the most objective definition possible for the
                    concept, which encompasses numerous forms of idealization,
                    conception, development and specification of objects.
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <img src="/mask-group-115.png" alt="" />
                </div>
                <div className={styles?.detail}>
                  <div className={`${styles.cardtext} lh-sm`}>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                  </div>
                </div>
                <div className={styles?.heading1}>
                  <h5 className={`${styles.cardtext} mb-4 mt-4`}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting.
                  </h5>
                </div>
                <div className={styles?.detail}>
                  <div className={`${styles.cardtext} mb-2 lh-sm`}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </div>
                  <div className={`${styles.cardtext} lh-sm`}>
                    is a long established fact that a reader will be distracted
                    by the readable content of a page when looking at its
                    layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className={styles?.blogside}>
                  <div className={styles?.headingblog}>latest blog</div>
                  <DarkLatestBlogPost
                    image={"/blog1.png"}
                    title1={"Lorem Ipsum simply dummy text of the printing."}
                    title2={
                      "Design is a broad concept that represents the process of creating products based on technical and aesthetic excellence..."
                    }
                  />

                  <DarkLatestBlogPost
                    image={"/blog2.png"}
                    title1={"Lorem Ipsum simply dummy text of the printing."}
                    title2={
                      "Design is a broad concept that represents the process of creating products based on technical and aesthetic excellence..."
                    }
                  />

                  <DarkLatestBlogPost
                    image={"/blog3.png"}
                    title1={"Lorem Ipsum simply dummy text of the printing."}
                    title2={
                      "Design is a broad concept that represents the process of creating products based on technical and aesthetic excellence..."
                    }
                  />

                  <DarkLatestBlogPost
                    image={"/blog1.png"}
                    title1={"Lorem Ipsum simply dummy text of the printing."}
                    title2={
                      "Design is a broad concept that represents the process of creating products based on technical and aesthetic excellence..."
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </DarkTheme>
    </div>
  );
};
export default DashbpardDarkTheme;
