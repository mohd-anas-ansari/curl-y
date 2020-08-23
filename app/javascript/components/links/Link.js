import React from "react";
import PropTypes from "prop-types";

import API from "../../utils/API";
import * as Routes from "../../utils/Routes";

class Link extends React.Component {
	truncateUrl = (string, limit = 20) => {
		var dots = "...";
		if (string.length > limit) {
			// you can also use substr instead of substring
			string = string.substring(0, limit) + dots;
		}

		return string;
	};

	handleClick = (id) => {
		console.log(id, "ID");
		API.updateLinkCountAndRedirect(id)
			.then((response) => {
				window.location.href = this.props.link.source_url;
			})
			.catch((error) => {
				console.log(error, "ERROR");
				error.json().then(({ errors }) => {
					this.setState({ ...this.state, errors });
				});
			});
	};

	render() {
		let link = this.props.link;
		console.log(this.props, "Props");
		let ROOT_URL = "http://curl-y.herokuapp.com";
		return (
			<React.Fragment>
				<div className="link-container my-3 shadow-lg rounded">
					<span
						className="pin-unpin"
						onClick={() => this.props.handlePinning(link.id)}
					>
						{link.is_pinned ? (
							<svg
								width="1em"
								height="1em"
								viewBox="0 0 16 16"
								class="bi bi-arrow-down-left-square-fill"
								fill="currentColor"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm7.5 11h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793l4.146-4.147a.5.5 0 0 1 .708.708L6.707 10H9.5a.5.5 0 0 1 0 1z"
								/>
							</svg>
						) : (
							<svg
								width="1em"
								height="1em"
								viewBox="0 0 16 16"
								class="bi bi-arrow-down-left-square"
								fill="currentColor"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
								/>
								<path
									fill-rule="evenodd"
									d="M5.5 11h4a.5.5 0 0 0 0-1H6.707l4.147-4.146a.5.5 0 0 0-.708-.708L6 9.293V6.5a.5.5 0 0 0-1 0v4a.5.5 0 0 0 .5.5z"
								/>
							</svg>
						)}
					</span>
					<h5 className="link-title">{link.title}</h5>
					{/* <a href={Routes.curl_path(link.curl_id)}> */}
					<button
						className="curl-url"
						onClick={() => this.handleClick(link.curl_id)}
					>{`${ROOT_URL}/${link.curl_id}`}</button>
					{/* </a> */}

					<div className="click-count">
						<svg
							width="1em"
							height="1em"
							viewBox="0 0 16 16"
							class="bi bi-hand-index-thumb"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M6.75 1a.75.75 0 0 0-.75.75V9.5a.5.5 0 0 1-.854.354l-2.41-2.411a.517.517 0 0 0-.809.631l2.512 4.185 1.232 2.465a.5.5 0 0 0 .447.276h6.302a.5.5 0 0 0 .434-.252l1.395-2.442a2.5 2.5 0 0 0 .317-.991l.272-2.715a1 1 0 0 0-.995-1.1H13.5v1a.5.5 0 1 1-1 0V7.154a4.208 4.208 0 0 0-.2-.26c-.187-.222-.368-.383-.486-.43-.124-.05-.392-.063-.708-.039a4.844 4.844 0 0 0-.106.01V8a.5.5 0 1 1-1 0V5.986c0-.167-.073-.272-.15-.314a1.657 1.657 0 0 0-.448-.182c-.179-.035-.5-.04-.816-.027l-.086.004V8a.5.5 0 1 1-1 0V1.75A.75.75 0 0 0 6.75 1zM8.5 4.466V1.75a1.75 1.75 0 1 0-3.5 0v6.543L3.443 6.736A1.517 1.517 0 0 0 1.07 8.588l2.491 4.153 1.215 2.43A1.5 1.5 0 0 0 6.118 16h6.302a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.272-2.715a2 2 0 0 0-1.99-2.199h-.582a5.114 5.114 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.634 2.634 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046l-.048.002zm2.094 2.025z"
							/>
						</svg>
						<span className="count-number pl-1">{link.click_count}</span>
					</div>
					<p className="source-url">
						<small>Source: </small>
						<a href={link.source_url}>{this.truncateUrl(link.source_url)}</a>
					</p>
					{/* <p>{String(link.is_pinned)}</p> */}

					{/* <button
						className=""
						
					>
						Pin
					</button> */}
				</div>
			</React.Fragment>
		);
	}
}

export default Link;
