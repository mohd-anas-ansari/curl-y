import React from "react";
import PropTypes from "prop-types";

import API from "../../utils/API";
import * as Routes from "../../utils/Routes";

import Link from "./Link";
import New from "./New";

class List extends React.Component {
	state = {
		showForm: false,
	};

	displayLinkList = (links) => {
		return (
			<div>
				<div className="p-1">
					{links && links.length ? (
						<div className="links-container d-flex flex-wrap ">
							{links.map((link, index) => {
								return (
									<div key={index}>
										<Link link={link} handlePinning={this.handlePinning} />
									</div>
								);
							})}
						</div>
					) : (
						<h3 className="ml-3">Nothing here, yet.</h3>
					)}
				</div>
			</div>
		);
	};

	handlePinning = (id) => {
		API.editLink(id)
			.then((response) => {
				console.log(response);
				window.location.href = Routes.root_path();
			})
			.catch((error) => {
				console.log(error, "ERROR IN HANDLE PINNING");
			});
	};

	displayAddNewLinkButton = () => {
		return (
			<div>
				<button className="btn btn-primary" onClick={this.handleClick}>
					CURL a new link
				</button>
			</div>
		);
	};

	handleClick = (event) => {
		this.setState({ showForm: !this.state.showForm });
	};

	render() {
		let links = this.props.links;
		let pinnedLinks = this.props.links.filter((link) => {
			return link.is_pinned == true;
		});
		console.log(pinnedLinks, "pinnedLinks");
		return (
			<div className="bg-light">
				<header>
					<div className="hero mx-auto text-center">
						<h1 className="text-center font-weight-bold hero-heading">CURLY</h1>
						<p>Get a unique CURL-ed URL to share with your friends.</p>
						{this.state.showForm ? (
							<New handleClick={this.handleClick} />
						) : (
							this.displayAddNewLinkButton()
						)}
					</div>
				</header>

				<div className="container bg-info lists-container shadow-lg p-3 mb-5 bg-white rounded">
					<div className="pinned-list mt-3">
						<small className="curls-heading">PINNED cURLS</small>
						{this.displayLinkList(pinnedLinks)}
					</div>
					<div className="all-links-list">
						<small className="curls-heading">ALL cURLS</small>
						{this.displayLinkList(links)}
					</div>
				</div>
			</div>
		);
	}
}

export default List;
