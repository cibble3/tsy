import React, { useContext, useEffect, useState } from 'react'
import ThemeLayout from '@/components/navigation'
import { AiFillCaretDown } from 'react-icons/ai'
import { ThemeColors } from '@/context/themeColor'
import CourseHeader from '@/components/ProductHeader'
const UserProfile = () => {
	const [height, setHeight] = useState()
	const { theme, setTheme } = useContext(ThemeColors)

	useEffect(() => {
		setHeight(window?.innerHeight)
	}, [])
	let styles = theme === "dark" ? "card topPhoto mb-3" : "mb-3 card topPhoto lightMode"

	return (
		<ThemeLayout>

			<div style={{ background: theme === "dark" ? "black" : "#f6f6f6" }} className='py-4'>
				<CourseHeader />

				<div className="courses-details-area py-3">
					<div className="container-fluid">
						<div className="courses-details-header">
							<div className="row">
								<div className="col-lg-3 col-md-4 col-sm-12 col-12 px-3 leftView">
									<div className={styles} >
										<div className="card-body">
											<h5 className="card-title">About me</h5>
											<p>Personal Trainer & Nutritionist
												for over 15 years of experience.
												Precision Nutrition certified.</p>
										</div>
									</div>
									<div className={`${theme === "dark" ? "" : "lightMode"} card topPhoto personalInfo my-3`} >
										<div className="card-body">
											<h5 className="card-title pt-2">Profile info</h5>
											<span className='pt-1'><p>Name </p>: &nbsp; Ross kennedy </span>
											<span className='pt-1'><p>Gender </p>: &nbsp; Ross kennedy </span>
											<span className='pt-1'><p>City </p>: &nbsp; Ross kennedy </span>
											<span className='pt-1'><p>State </p>: &nbsp; Ross kennedy </span>
											<span className='pt-1'><p>Food </p>: &nbsp; Ross kennedy </span>
											<span className='pt-1'><p>Hobbies </p>: &nbsp; Ross kennedy </span>
										</div>
									</div>
									<div className={styles} >
										<div className="card-body">
											<h5 className="card-title">Quick links</h5>
											<div className="row">
												<p>Buy credits</p>
												<p>Content Providers</p>
												<p>Member logins</p>
												<p>Home</p>
												<p>Register</p>
											</div>

										</div>
									</div>
								</div>
								<div className="col-lg-6 col-md-8 col-sm-12 col-12 mb-3 p-0 pe-3 " style={{ overflow: "hidden", minWidth: "45%" }}>
									<div className={styles} style={{ height: 676, overflowY: "scroll", boxSizing: "content-box" }}>
										<div className='d-flex justify-content-start py-3 topView'>
											<div className={`border ms-3  d-flex align-items-center ${theme === "dark" ? "" : "dark"}`}>
												Los Angeles
												<span className={"pinkColor ms-1"}>
													<AiFillCaretDown />
												</span>
											</div>
											<div className={`border ms-3 d-flex align-items-center ${theme === "dark" ? "" : "dark"}`}>
												Los Angeles
												<span className={"pinkColor ms-1"}>
													<AiFillCaretDown />
												</span>
											</div>
										</div>
										<div className="card-body">
											<div className="d-flex justify-content-between mb-2 userInfo align-items-center">
												<div className="d-flex align-items-center">

													<img src="/images/courses/user3.png" alt="image" style={{ width: "30px", height: "30px", borderRadius: "50%" }} />
													<p className="ps-2">Bella Ronald</p>
												</div>
												<p>18 Min Ago</p>
											</div>
											<div className='middleBorder mb-3'>
												<img src="/images/courses/user3.png" alt="image" />
												<div className="py-3 px-3">
													<div className="pb-2">
														<p>Top 10 exersize to reduce 10 kg weight in 10 days</p>
													</div>
													<div className="d-flex align-items-center justify-content-between likeView flex-wrap">
														<div className="d-flex align-items-center">

															<img src="/images/courses/view.png" alt="image" style={{ width: "15px", height: "10px" }} />
															<p className="ps-2">1452view</p>
														</div>
														<div className="d-flex align-items-center">

															<img src="/images/courses/dollar.png" alt="image" style={{ width: "13px", height: "13px" }} />
															<p className="ps-2">120</p>
														</div>
														<div className="d-flex align-items-center">

															<img src="/images/courses/likes.png" alt="image" style={{ width: "13px", height: "13px" }} />
															<p className="ps-2">456</p>
														</div>
														<div className="d-flex align-items-center">

															<img src="/images/courses/likes.png" alt="image" style={{ width: "13px", height: "13px" }} />
															<p className="ps-2">451 comment</p>
														</div>
														<div className="d-flex align-items-center">

															<img src="/images/courses/likes.png" alt="image" style={{ width: "13px", height: "13px" }} />
															<p className="ps-2">Report</p>
														</div>

													</div>
												</div>

											</div>
											<div className="d-flex justify-content-between mb-2 userInfo align-items-center">
												<div className="d-flex align-items-center">

													<img src="/images/courses/user3.png" alt="image" style={{ width: "30px", height: "30px", borderRadius: "50%" }} />
													<p className="ps-2">Bella Ronald</p>
												</div>
												<p>18 Min Ago</p>
											</div>
											<div className='middleBorder mb-3'>
												<img src="/images/courses/user3.png" alt="image" />
												<div className="py-3 px-3">
													<div className="pb-2">
														<p>Top 10 exersize to reduce 10 kg weight in 10 days</p>
													</div>
													<div className="d-flex align-items-center justify-content-between likeView flex-wrap">
														<div className="d-flex align-items-center">

															<img src="/images/courses/view.png" alt="image" style={{ width: "15px", height: "10px" }} />
															<p className="ps-2">1452view</p>
														</div>
														<div className="d-flex align-items-center">

															<img src="/images/courses/dollar.png" alt="image" style={{ width: "13px", height: "13px" }} />
															<p className="ps-2">120</p>
														</div>
														<div className="d-flex align-items-center">

															<img src="/images/courses/likes.png" alt="image" style={{ width: "13px", height: "13px" }} />
															<p className="ps-2">456</p>
														</div>
														<div className="d-flex align-items-center">

															<img src="/images/courses/likes.png" alt="image" style={{ width: "13px", height: "13px" }} />
															<p className="ps-2">451 comment</p>
														</div>
														<div className="d-flex align-items-center">

															<img src="/images/courses/likes.png" alt="image" style={{ width: "13px", height: "13px" }} />
															<p className="ps-2">Report</p>
														</div>

													</div>
												</div>

											</div>
										</div>
									</div>
								</div>

								<div className="col-lg-3 col-md- col-sm-12 col-12 mb-3 p-0 pe-3 rightView">
									<div className={styles} >
										<div className="card-body">
											<h5 className="card-title">Top Photos</h5>

											<div className="row">
												<div className="col-xxl-4 col-xl-6 col-lg-6 col-md-2 col-sm-4 col-4  p-1">
													<img className="mainImage" src="/images/courses/image1.png" alt="image" style={{ width: "100%" }} />

												</div>
												<div className="col-xxl-4 col-xl-6 col-lg-6 col-md-2 col-sm-4 col-4 p-1">
													<img className="mainImage" src="/images/courses/image2.png" alt="image" style={{ width: "100%" }} />

												</div>
												<div className="col-xxl-4 col-xl-6 col-lg-6 col-md-2 col-sm-4 col-4 p-1">
													<img className="mainImage" src="/images/courses/image3.png" alt="image" style={{ width: "100%" }} />

												</div>
												<div className="col-xxl-4 col-xl-6 col-lg-6 col-md-2 col-sm-4 col-4 p-1">
													<img className="mainImage" src="/images/courses/image1.png" alt="image" style={{ width: "100%" }} />

												</div>
												<div className="col-xxl-4 col-xl-6 col-lg-6 col-md-2 col-sm-4 col-4 p-1">
													<img className="mainImage" src="/images/courses/image2.png" alt="image" style={{ width: "100%" }} />

												</div>
												<div className="col-xxl-4 col-xl-6 col-lg-6 col-md-2 col-sm-4 col-4 p-1">
													<img className="mainImage" src="/images/courses/image3.png" alt="image" style={{ width: "100%" }} />

												</div>

											</div>

										</div>
									</div>
									<div className={styles} >
										<div className="card-body">
											<h5 className="card-title">Top Videos</h5>
											<div className="row">
												<div className="col-xxl-4 col-xl-6 col-lg-6 col-md-2 col-sm-4 col-4  p-1" style={{ position: "relative", }}>
													<img className="mainImage" src="/images/courses/image1.png" alt="image" style={{ width: "100%", opacity: 0.6 }} ></img>
													<div style={{ position: "absolute", height: "100%", top: 0, left: 0, width: "100%" }} className='d-flex justify-content-center align-items-center  mainImage'>

														<img src="/images/videoIcon.png" alt="image" style={{ width: "40px", height: "40px" }} />
													</div>

												</div>
												<div className="col-xxl-4 col-xl-6 col-lg-6 col-md-2 col-sm-4 col-4 p-1" style={{ position: "relative", }}>
													<img className="mainImage" src="/images/courses/image2.png" alt="image" style={{ width: "100%", opacity: 0.6 }} />
													<div style={{ position: "absolute", height: "100%", top: 0, left: 0, width: "100%" }} className='d-flex justify-content-center align-items-center  mainImage'>

														<img src="/images/videoIcon.png" alt="image" style={{ width: "40px", height: "40px" }} />
													</div>

												</div>
												<div className="col-xxl-4 col-xl-6 col-lg-6 col-md-2 col-sm-4 col-4 p-1" style={{ position: "relative", }}>
													<img className="mainImage" src="/images/courses/image3.png" alt="image" style={{ width: "100%", opacity: 0.6 }} />
													<div style={{ position: "absolute", height: "100%", top: 0, left: 0, width: "100%" }} className='d-flex justify-content-center align-items-center  mainImage'>

														<img src="/images/videoIcon.png" alt="image" style={{ width: "40px", height: "40px" }} />
													</div>

												</div>
												<div className="col-xxl-4 col-xl-6 col-lg-6 col-md-2 col-sm-4 col-4 p-1" style={{ position: "relative", }}>
													<img className="mainImage" src="/images/courses/image1.png" alt="image" style={{ width: "100%", opacity: 0.6 }} />
													<div style={{ position: "absolute", height: "100%", top: 0, left: 0, width: "100%" }} className='d-flex justify-content-center align-items-center  mainImage'>

														<img src="/images/videoIcon.png" alt="image" style={{ width: "40px", height: "40px" }} />
													</div>

												</div>
												<div className="col-xxl-4 col-xl-6 col-lg-6 col-md-2 col-sm-4 col-4 p-1" style={{ position: "relative", }}>
													<img className="mainImage" src="/images/courses/image2.png" alt="image" style={{ width: "100%", opacity: 0.6 }} />
													<div style={{ position: "absolute", height: "100%", top: 0, left: 0, width: "100%" }} className='d-flex justify-content-center align-items-center  mainImage'>

														<img src="/images/videoIcon.png" alt="image" style={{ width: "40px", height: "40px" }} />
													</div>

												</div>
												<div className="col-xxl-4 col-xl-6 col-lg-6 col-md-2 col-sm-4 col-4 p-1" style={{ position: "relative", }}>
													<img className="mainImage" src="/images/courses/image3.png" alt="image" style={{ width: "100%", opacity: 0.6 }} />
													<div style={{ position: "absolute", height: "100%", top: 0, left: 0, width: "100%" }} className='d-flex justify-content-center align-items-center  mainImage'>

														<img src="/images/videoIcon.png" alt="image" style={{ width: "40px", height: "40px" }} />
													</div>

												</div>

											</div>

										</div>
									</div>

								</div>
							</div>
							{/* <div className="row align-items-center">
							<div className="col-lg-8 col-md-12">
								<div className="courses-title">
									<p>{short_desc}</p>
								</div>
								<div className="courses-meta">
									<ul>
										<li>
											<i className="bx bx-folder-open"></i>
											<span>Category</span>
											{category && (
												<Link
													href={`/category/${category.slug}`}
												>
													<a>{category.name}</a>
												</Link>
											)}
										</li>
										<li>
											<i className="bx bx-group"></i>
											<span>Students Enrolled</span>
											<Link href="#">
												<a>
													{enrolments &&
														enrolments.length}
												</a>
											</Link>
										</li>
										<li>
											<i className="bx bx-calendar"></i>
											<span>Last Updated</span>
											<Link href="#">
												<a>{formatDate(updated_at)}</a>
											</Link>
										</li>
									</ul>
								</div>
							</div>

							<div className="col-lg-4 col-md-12">
								<div className="courses-price">
									<div className="price">
										$
										{discount > 0 ? discount : latest_price}
									</div>

									<BuyCourseBtn
										current_user={current_user}
										course={course}
									/>
								</div>
							</div>
						</div> */}
						</div>
						{/* 
					<div className="row">
						<div className="col-lg-8 col-md-12">
							<div className="courses-details-image-style-two text-center">
								<img src={image} alt="image" />
							</div>

							<div className="courses-details-desc-style-two">
								<CourseOverview overview={overview} />

								{!is_class && (
									<div className="mb-4">
										<h3>Courses Video</h3>
										{slug && (
											<CourseVideo
												current_user={current_user}
												course={course}
											/>
										)}
									</div>
								)}

								<WhatYouWillLearn
									what_you_will_learn={what_you_will_learn}
								/>

								<Requirements requirements={requirements} />

								<WhoIsThisCourseFor
									who_is_this_course_for={
										who_is_this_course_for
									}
								/>
								{user && (
									<InstructorProfile instructor={user} />
								)}
							</div>
						</div>

						<div className="col-lg-4 col-md-12">
							<CoursesDetailsSidebar
								current_user={current_user}
								course={course}
							/>
						</div>
					</div> */}
					</div>
				</div >

				{/* <Footer /> */}

			</div>
		</ThemeLayout >
	)
}

export default UserProfile