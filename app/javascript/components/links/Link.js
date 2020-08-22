import React from "react";
import PropTypes from "prop-types";

import API from "../../utils/API";
import * as Routes from "../../utils/Routes";

class Link extends React.Component {
	render() {
		let link = this.props.link;
		console.log(this.props, "Props");
		let ROOT_URL = "http://curl-y.herokuapp.com";
		return (
			<React.Fragment>
				<div className="link-container">
					<small>{link.title}</small>
					<a href={Routes.curl_path(link.curl_id)}>
						<p>{ROOT_URL}</p>
					</a>
          <p>{link.source_url}</p>
          <p>{String(link.is_pinned)}</p>
					<p>{link.click_count}</p>

					<button
						className="btn btn-danger"
						onClick={() => this.props.handlePinning(link.id)}
					>
						Pin
					</button>
				</div>
			</React.Fragment>
		);
	}
}

export default Link;
