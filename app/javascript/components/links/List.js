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
						<div className="links-container d-flex justify-content-around flex-wrap">
							{links.map((link, index) => {
								return (
									<div key={index}>
										<Link link={link} handlePinning={this.handlePinning} />
									</div>
								);
							})}
						</div>
					) : (
						<h3>No link has been created yet</h3>
					)}
				</div>
			</div>
		);
	};

	handlePinning = (id) => {
		API.editLink(id)
			.then((response) => {
				console.log(response);
				window.location.href = Routes.links_path();
			})
			.catch((error) => {
				console.log(error, "ERROR IN HANDLE PINNING");
			});
	};

	displayAddNewLinkButton = () => {
		return (
			<button className="btn btn-primary" onClick={this.handleClick}>
				Add New LInk
			</button>
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
				<div className="hero">
					<h1 className="text-center">Hero</h1>
					{this.state.showForm ? (
						<New handleClick={this.handleClick} />
					) : (
						this.displayAddNewLinkButton()
					)}
				</div>
				<div className="container bg-info lists-container shadow-lg p-3 mb-5 bg-white rounded">
					<p>All list</p>
					{/* <div className="row">
					<div className="col-md-10">{this.displayLinkList(links)}</div>
					<div className="col-md-2">{this.displayAddNewLinkButton()}</div>
				</div> */}
					<div className="pinned-list">
						<h6>Pinned links</h6>
						{this.displayLinkList(pinnedLinks)}
					</div>

					<div className="all-links-list">
						<h6>All links</h6>
						{this.displayLinkList(links)}
					</div>
				</div>
				<div className="footer">
					<h1>Footer</h1>
				</div>
			</div>
		);
	}
}

export default List;
