import React, { Component } from "react";

import * as Routes from "../../utils/Routes";

class Show extends Component {
	render() {
		const link = this.props.link;
		console.log(link, "LINK");
		return (
			<React.Fragment>
				<div className="container">
					<h2 className="py-3">Link Details</h2>
					<div className="row">
						<div className="col-md-10">
							{link.id} {link.title}
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Show;
