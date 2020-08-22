import React from "react";

function Errors({ errors, message }) {
	return (
		<React.Fragment>
			<div className={`alert alert-${message}`}>
				{errors.map((error) => (
					<li>{error}</li>
				))}
			</div>
		</React.Fragment>
	);
}

export default Errors;
