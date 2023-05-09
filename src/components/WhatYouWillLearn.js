import React from "react";

const WhatYouWillLearn = ({ what_you_will_learn }) => {
	return (
		<>
			<h5>What you will learn</h5>
			<div
				dangerouslySetInnerHTML={{ __html: what_you_will_learn }}
			></div>
		</>
	);
};

export default WhatYouWillLearn;
