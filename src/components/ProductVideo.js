import React, { useEffect, useState } from "react";

const CourseVideo = ({ current_user, course }) => {
	// console.log(courseSlug);
	const [videos, setVideos] = useState([]);
	const [preview, setPreview] = useState("");
	const [toggler, setToggler] = useState(false);
	const [alreadyBuy, setAlreadyBuy] = useState(false);


	return (
		<>
			<div className="courses-curriculum">
				<ul>
					{videos &&
						videos.map((v) => (
							<li key={v.id}>
								<div className="d-flex justify-content-between align-items-center">
									<span className="courses-name">
										{v.title}
									</span>
									<div className="courses-meta">
										<span className="duration">
										</span>
										{v.is_preview ? (
											<span
												className="status"
												onClick={() => {
													setPreview(v.video);
													setToggler(!toggler);
												}}
											>
												preview
											</span>
										) : alreadyBuy ? (
											<span
												className="status"
												onClick={() => {
													setPreview(v.video);
													setToggler(!toggler);
												}}
											>
												preview
											</span>
										) : (
											<span
												className="status locked"
												title="Premium"
											>
												<i className="flaticon-password"></i>
											</span>
										)}
									</div>
								</div>
							</li>
						))}
				</ul>
			</div>

			{/* {preview && <FsLightbox toggler={toggler} sources={[preview]} />} */}
		</>
	);
};

export default CourseVideo;
