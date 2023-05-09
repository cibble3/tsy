import { ThemeColors } from "@/context/themeColor";
import React, { useContext } from "react";

const InstructorProfile = ({ instructor }) => {
	const { first_name, last_name, profile_photo, bio } = instructor;
	const { theme } = useContext(ThemeColors)
	// console.log(instructor);
	return (
		<>
			<h3 className="px-3">Meet Your Instructors</h3>
			<div className={`${theme === "dark" ? "cardDark" : ""} courses-author`}>
				<div className="author-profile-header"></div>
				<div className="author-profile">
					<div className="author-profile-title">
						<img
							src={profile_photo}
							className="shadow-sm rounded-circle"
							alt={first_name}
						/>
						<div className="author-profile-title-details">
							<div className="author-profile-details">
								<h5>
									{first_name} {last_name}
								</h5>
								<span className="d-block">Teacher</span>
							</div>
						</div>
					</div>
					{bio}
				</div>
			</div>
		</>
	);
};

export default InstructorProfile;
