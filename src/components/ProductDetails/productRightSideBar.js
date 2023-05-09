import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./ProductDetails.module.css"
import { ThemeColors } from "@/context/themeColor";
import SocialShareBtns from "../SocialShareBtns";

const ProductRightSideBar = ({ current_user, course, onCoupon }) => {
    // console.log(course);
    const [add, setAdd] = useState(false);
    const [alreadyBuy, setAlreadyBuy] = useState(false);
    const router = useRouter();
    const [apply, setApplyCoupon] = useState(false);
    const [coupon, setCoupon] = useState({ coupon: "" });
    const { theme, setTheme } = useContext(ThemeColors)


    return (
        <>
            <div className={`${theme === "dark" ? styles.cardDark : ""} courses-sidebar-information`}>
                <div className="coupon">
                    <h4 onClick={() => setApplyCoupon(!apply)}>
                        Apply Coupon
                    </h4>
                    {apply && (
                        <form onSubmit={() => { }}>
                            <input
                                type="text"
                                className="input-search"
                                placeholder="Enter Coupon"
                                name="search"
                                value={coupon.coupon}
                                onChange={(e) =>
                                    setCoupon(e.target.value)
                                }
                            />
                            <button type="submit">
                                <b>Apply</b>
                            </button>
                        </form>
                    )}
                </div>
                <div className="btn-box">
                    {alreadyBuy ? (
                        <button
                            onClick={() =>
                                router.push("/learning/my-courses")
                            }
                            className="default-btn"
                        >
                            <i className="flaticon-shopping-cart"></i>{" "}
                            View My Courses
                            <span></span>
                        </button>
                    ) : (
                        <>
                            {add ? (
                                <Link href="/checkout">
                                    <a className="default-btn">
                                        <i className="flaticon-right-arrow"></i>{" "}
                                        View Cart
                                    </a>
                                </Link>
                            ) : (
                                <button
                                    className={`${styles.buyCourse} default-btn rounded-pill`}
                                    disabled={add}
                                >
                                    {" "}
                                    <i className="flaticon-shopping-cart"></i>{" "}
                                    Add to cart
                                    <span></span>
                                </button>
                            )}
                        </>
                    )}
                    <button
                        className={`${styles.buyCourse} default-btn rounded-pill my-3`}
                    // onClick={() => buyCourse(course)}
                    >
                        {/* <i className="flaticon-shopping-cart"></i>  */}
                        Buy Course
                        <span></span>
                    </button>

                </div>
                <SocialShareBtns />

            </div>
            {/* 
            <StickyBox className="sticky-box" offsetTop={100} offsetBottom={20}>
                <div className="courses-sidebar-sticky">
                    <div className={`${styles.coursessidebar} courses-sidebar-information`}>
                        <ul className={`${styles.info} info`}>
                            <li>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span>
                                        <i className="flaticon-play"></i> Live
                                        Class
                                    </span>
                                    {course.is_class ? (
                                        <div className="live-class-icon"></div>
                                    ) : (
                                        "No"
                                    )}
                                </div>
                            </li>
                            <li>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span>
                                        <i className="flaticon-teacher"></i>{" "}
                                        Instructor
                                    </span>
                                    {course.user && course.user.first_name}{" "}
                                    {course.user && course.user.last_name}
                                </div>
                            </li>
                            <li>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span>
                                        <i className="flaticon-time"></i>{" "}
                                        Duration
                                    </span>
                                    {course.duration}
                                </div>
                            </li>
                            <li>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span>
                                        <i className="flaticon-distance-learning"></i>{" "}
                                        Lessons
                                    </span>
                                    {course.lessons}
                                </div>
                            </li>
                            <li>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span>
                                        <i className="flaticon-web"></i>{" "}
                                        Enrolled
                                    </span>
                                    {course.enrolments &&
                                        course.enrolments.length}{" "}
                                    students
                                </div>
                            </li>
                            <li>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span>
                                        <i className="flaticon-html"></i>{" "}
                                        Language
                                    </span>
                                    English
                                </div>
                            </li>
                            <li>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span>
                                        <i className="flaticon-caption"></i>{" "}
                                        Video Subtitle
                                    </span>
                                    N/A
                                </div>
                            </li>
                            <li>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span>
                                        <i className="flaticon-lock"></i> Access
                                    </span>
                                    {course.access_time}
                                </div>
                            </li>
                            <li>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span>
                                        <i className="flaticon-certification"></i>{" "}
                                        Certificate
                                    </span>
                                    Yes
                                </div>
                            </li>
                        </ul>

                        <div className="coupon">
                            <h4 onClick={() => setApplyCoupon(!apply)}>
                                Apply Coupon
                            </h4>
                            {apply && (
                                <form onSubmit={handleCoupon}>
                                    <input
                                        type="text"
                                        className="input-search"
                                        placeholder="Enter Coupon"
                                        name="search"
                                        value={coupon.coupon}
                                        onChange={(e) =>
                                            setCoupon(e.target.value)
                                        }
                                    />
                                    <button type="submit">
                                        <b>Apply</b>
                                    </button>
                                </form>
                            )}
                        </div>

                        <div className="btn-box">
                            {alreadyBuy ? (
                                <button
                                    onClick={() =>
                                        router.push("/learning/my-courses")
                                    }
                                    className="default-btn"
                                >
                                    <i className="flaticon-shopping-cart"></i>{" "}
                                    View My Courses
                                    <span></span>
                                </button>
                            ) : (
                                <>
                                    {add ? (
                                        <Link href="/checkout">
                                            <a className="default-btn">
                                                <i className="flaticon-right-arrow"></i>{" "}
                                                View Cart
                                            </a>
                                        </Link>
                                    ) : (
                                        <button
                                            onClick={() => addToCart(course)}
                                            className={`${styles.buyCourse} default-btn rounded-pill`}
                                            disabled={add}
                                        >
                                            {" "}
                                            <i className="flaticon-shopping-cart"></i>{" "}
                                            Add to cart
                                            <span></span>
                                        </button>
                                    )}
                                </>
                            )}
                            <button
                                className={`${styles.buyCourse} default-btn rounded-pill`}
                            // onClick={() => buyCourse(course)}
                            >
                                Buy Course
                                <span></span>
                            </button>
                        </div>

                        <SocialShareBtns />
                    </div>
                </div>
            </StickyBox> */}
        </>
    );
}

export default ProductRightSideBar