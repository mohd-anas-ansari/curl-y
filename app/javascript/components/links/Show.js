import React, { Component } from "react";

import * as Routes from "../../utils/Routes";

class Show extends Component {
	formatDate = (dateString) => {
		const options = { year: "numeric", month: "long", day: "numeric" };
		return new Date(dateString).toLocaleDateString(undefined, options);
	};

	render() {
		const link = this.props.link;
		const ROOT_URL = "http://curl-y.herokuapp.com";
		console.log(link, "LINK");
		return (
			<React.Fragment>
				<div className="container w-75 mt-5">
					<h1 className="py-3 text-center report-heading font-weight-bold">
						REPORT
					</h1>

					<div className="p-5 shadow-lg p-3 mb-5 bg-white rounded d-flex">
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

						<div className="count-section d-flex align-items-center flex-column justify-content-center mr-0 w-50">
							<div>
								<div className="text-center">
									<small className="click-count-label">TOTAL CLICKS</small>
								</div>
								<div className="number p-0 m-0">{link.click_count}</div>
							</div>
						</div>
					</div>
					<div className="print-button mb-5">
						<button className="btn btn-outline-dark" onClick={window.print}>
							<svg
								width="1em"
								height="1em"
								viewBox="0 0 16 16"
								class="bi bi-printer-fill"
								fill="currentColor"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5z" />
								<path
									fill-rule="evenodd"
									d="M11 9H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z"
								/>
								<path
									fill-rule="evenodd"
									d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"
								/>
							</svg>
						</button>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Show;
