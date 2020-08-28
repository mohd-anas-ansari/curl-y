import React, { Component } from "react";

class ReportDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	formatDate = (dateString) => {
		const options = { year: "numeric", month: "long", day: "numeric" };
		return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
	render() {
		let link = this.props.link;
		const ROOT_URL = "http://curl-y.herokuapp.com";

		return (
			<div className="details">
				<small className="curls-heading">Curl #{link.id}</small>
				<h1 className="mt-5 ml-3">{link.title}</h1>
				<p className="mt-5 ml-3">
					<span className="mr-4">
						<strong>CURL LINK:</strong>
					</span>
					{`${ROOT_URL}/${link.curl_id}`}
				</p>
				<p className="ml-3 mb-5">
					<span className="mr-4">
						<strong>SOURCE LINK:</strong>
					</span>
					{link.source_url}
				</p>
				{/* <p>Curl URL: -> {link.curl_id}</p> */}
				{/* <p>Click Count: -> {link.click_count}</p> */}
				{/* <p>Pinned: -> {link.is_pinned ? "Yes" : "No"}</p> */}
				<small className="ml-3">
					<span className="date-heading">CREATED ON: </span>
					{this.formatDate(link.created_at)}
				</small>
			</div>
		);
	}
}

export default ReportDetails;
