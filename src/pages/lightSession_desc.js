import { useRouter } from "next/router";
import styles from "../components/navigation/light-themeSession/dashbpard-dark-theme.module.css";

import { AiOutlineHeart } from "react-icons/ai";
import { RiMessage2Line } from "react-icons/ri";
import DarkTheme from "../components/navigation/light-themeLive";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import LightSingleBlogPost from "@/components/LightSingleBlogPost";

const DashbpardDarkTheme = () => {
  const router = useRouter();
  return (
    <div>
      <DarkTheme>
        <div className={styles?.dasboardMain}>
          <Container>
            <div className="row">
              <LightSingleBlogPost
                image={"/mask-group-103.png"}
                title1={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                }
                title2={
                  "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently wi..."
                }
              />

              <LightSingleBlogPost
                image={"/mask-group-104.png"}
                title1={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                }
                title2={
                  "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently wi..."
                }
              />

              <LightSingleBlogPost
                image={"/mask-group-105.png"}
                title1={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                }
                title2={
                  "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently wi..."
                }
              />

              <LightSingleBlogPost
                image={"/mask-group-106.png"}
                title1={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                }
                title2={
                  "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently wi..."
                }
              />

              <LightSingleBlogPost
                image={"/mask-group-107.png"}
                title1={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                }
                title2={
                  "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently wi..."
                }
              />

              <LightSingleBlogPost
                image={"/mask-group-108.png"}
                title1={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                }
                title2={
                  "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently wi..."
                }
              />

              <LightSingleBlogPost
                image={"/mask-group-109.png"}
                title1={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                }
                title2={
                  "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently wi..."
                }
              />

              <LightSingleBlogPost
                image={"/mask-group-110.png"}
                title1={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                }
                title2={
                  "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently wi..."
                }
              />

              <LightSingleBlogPost
                image={"/mask-group-111.png"}
                title1={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                }
                title2={
                  "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently wi..."
                }
              />

              <LightSingleBlogPost
                image={"/mask-group-112.png"}
                title1={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                }
                title2={
                  "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently wi..."
                }
              />

              <LightSingleBlogPost
                image={"/mask-group-113.png"}
                title1={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                }
                title2={
                  "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently wi..."
                }
              />

              <LightSingleBlogPost
                image={"/mask-group-114.png"}
                title1={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                }
                title2={
                  "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently wi..."
                }
              />
            </div>
          </Container>
        </div>
      </DarkTheme>
    </div>
  );
};

export default DashbpardDarkTheme;
