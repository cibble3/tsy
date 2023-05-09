import React from "react";

const Requirements = ({ requirements }) => {
	return (
		<>
			<h5>Requirements</h5>
			<div dangerouslySetInnerHTML={{ __html: requirements }}></div>
		</>
	);
};

export default Requirements;
