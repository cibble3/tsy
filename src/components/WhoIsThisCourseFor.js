import React from "react";

const WhoIsThisCourseFor = ({ who_is_this_course_for }) => {
	return (
		<>
			<h5>Who this course is for:</h5>
			<div
				dangerouslySetInnerHTML={{ __html: who_is_this_course_for }}
			></div>
		</>
	);
};

export default WhoIsThisCourseFor;
