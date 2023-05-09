import React, { useContext, useState } from "react";
import { ThemeColors } from "@/context/themeColor";
import { Button, Modal } from "react-bootstrap";
import { IoCloseSharp } from "react-icons/io5";
import image1 from "../../../public/images/main.png";
import image2 from "../../../public/images/imagemain1.png";
import image3 from "../../../public/images/imagemain2.png";
import image4 from "../../../public/images/imagemain3.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./ProductDetails.module.css";
import ProductRightSideBar from "./productRightSideBar";
import CourseVideo from "../ProductVideo";
import WhatYouWillLearn from "../WhatYouWillLearn";
import Requirements from "../Requirements";
import WhoIsThisCourseFor from "../WhoIsThisCourseFor";
import InstructorProfile from "../InstructorProfile";

// import image4 from "/images/imagemain3.png"
// public/images/main.png
const CourseDetailModal = ({ current_user, course, show, onHide }) => {
  return (
    <Modal
      {...{ show, onHide }}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={styles.modalView}
    >
      <Modal.Header className="border-0 align-items-start mt-3">
        <div className="d-flex">
          <div>
            <img
              src="/images/courses/user3.png"
              alt="image"
              style={{ height: 60, borderRadius: "8px" }}
              width={60}
            />
          </div>
          <div className="ms-3">
            <p className="my-1">
              SAP ABAP Programming For Beginners - Online Training
            </p>
            <p>$120</p>
          </div>
        </div>
        <Modal.Title id="contained-modal-title-vcenter">
          <IoCloseSharp color="#818181" size={20} onClick={onHide} />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="">
          <h5 className={`${styles.about}`}>About this course</h5>
          <div
            className={`${styles.aboutText}`}
            dangerouslySetInnerHTML={{
              __html:
                "<p>If you are a solopreneur or a small business owner, learn project management fundamentals for small businesses, and complete your projects successfully, on time, and on budget.</p><ul><li>Learn business prioritization and decision-making</li><li>Learn to use Trello productivity and project management software</li><li>Hire the best freelancers and make sure they deliver successful projects</li><li>Master early team building</li></ul>",
            }}
          ></div>
        </div>
        <div>
          {
            <div className="mb-4">
              <h5>Courses Video</h5>
              {<CourseVideo current_user={current_user} course={course} />}
            </div>
          }

          <WhatYouWillLearn
            what_you_will_learn={
              "<ul><li>Have your products go more smoothly, on time and on budget</li><li>Understand different software project management methodologies so you can use the right one for your project</li></ul>"
            }
          />

          <Requirements
            requirements={
              "<ul><li>You should be a solo entrepreneur who is hiring online freelancers and looking to improve your project management skills</li></ul>"
            }
          />

          <WhoIsThisCourseFor
            who_is_this_course_for={
              "<ul><li>Hire the best freelancers and make sure they deliver successful projects</li><li>Master early team building</li></ul>"
            }
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={props.onHide}>Close</Button> */}
      </Modal.Footer>
    </Modal>
  );
};

const imagesArray = [image1, image2, image3, image4];

const ProductInfo = ({ user }) => {
  const { theme, setTheme } = useContext(ThemeColors);
  const [modalShow, setModalShow] = useState(false);
  const [images, setImages] = useState(imagesArray);

  return (
    <div
      className={`products ${theme === "dark" ? styles.darkBackground : ""}`}
    >
      <div className="row m-0 my-3  py-4 ">
        <div className="col-lg-7  col-md-7 col-sm-12 col-12">
          <div className={styles.corouselItem}>
            <Carousel
              showThumbs={false}
              showStatus={false}
              preventMovementUntilSwipeScrollTolerance={true}
              swipeScrollTolerance={15}
              emulateTouch={true}
            >
              <div className="mb-4">
                <img
                  src={images[0]?.src}
                  style={{ width: "100%", minHeight: 400, height: 500 }}
                />
              </div>
              <div className="mb-4">
                <img
                  src={images[1]?.src}
                  style={{ width: "100%", minHeight: 400, height: 500 }}
                />
              </div>
              <div className="mb-4">
                <img
                  src={images[2]?.src}
                  style={{ width: "100%", minHeight: 400, height: 500 }}
                />
              </div>
              <div className="mb-4">
                <img
                  src={images[3]?.src}
                  style={{ width: "100%", minHeight: 400, height: 500 }}
                />
              </div>
            </Carousel>
          </div>
          <div className={`${styles.desktopView} row`}>
            <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt-3   ">
              <img
                src={images[0]?.src}
                className={styles.mainImage}
                alt="image"
                style={{
                  minHeight: 450,
                  maxHeight: 600,
                  borderRadius: "10px",
                  maxWidth: 1050,
                }}
                width={"100%"}
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12 mt-4   ">
              <img
                src={images[1]?.src}
                alt="image"
                onClick={() => {
                  let img = images[1];
                  images[1] = images[0];
                  images[0] = img;
                  setImages([...images]);
                }}
                style={{ height: 380, borderRadius: "10px" }}
                width={"100%"}
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12 mt-4   ">
              <img
                src={images[2]?.src}
                alt="image"
                onClick={() => {
                  let img = images[2];
                  images[2] = images[0];
                  images[0] = img;
                  setImages([...images]);
                }}
                style={{ height: 380, borderRadius: "10px" }}
                width={"100%"}
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12 mt-4   ">
              <img
                src={images[3]?.src}
                alt="image"
                onClick={() => {
                  let img = images[3];
                  images[3] = images[0];
                  images[0] = img;
                  setImages([...images]);
                }}
                style={{ height: 380, borderRadius: "10px" }}
                width={"100%"}
              />
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-12 mt-4 p-0 ">
          <div
            className={`${styles.sideView} ${
              theme === "dark" ? styles.lightView : ""
            }`}
          >
            <div>
              <h1 className={`${styles.title}`}>
                SAP ABAP Programming For Beginners - Online Training
              </h1>
              <h2 className={`${styles.subTitle}`}>SAP ABAP Programming </h2>
              <div className="mt-4">
                <p className={`${styles.priceText}`}>$120</p>
              </div>
            </div>
            <div className="mt-4">
              <ProductRightSideBar current_user={{}} course={{}} />
            </div>
            <div
              className={`card ${styles.boxShadow} my-2 px-4 ${
                theme === "dark" ? styles.cardDark : ""
              }`}
            >
              <div className="my-4">
                <a
                  className={`${styles.detailsLink}`}
                  onClick={() => setModalShow(true)}
                >
                  View Course Details
                </a>
              </div>
            </div>
            <div
              className={`card ${styles.boxShadow} my-2 ${
                theme === "dark" ? styles.cardDark : ""
              } courses-details-desc-style-two`}
            >
              {
                <InstructorProfile
                  instructor={{
                    first_name: "Instructor",
                    last_name: "User",
                    profile_photo:
                      "https://res.cloudinary.com/dev-empty/image/upload/v1661230727/rquq94qv4bpuvf7xnxyh.jpg",
                    bio: "AP consultant and the #1 SAP instructor on Udemy.\n…ses interesting and I really hope you enjoy them.",
                  }}
                />
              }
            </div>
          </div>
        </div>
        <CourseDetailModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    </div>
  );
};

export default ProductInfo;
