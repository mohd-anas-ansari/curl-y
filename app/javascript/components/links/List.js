import React from "react";
import PropTypes from "prop-types";

import API from "../../utils/API";
import * as Routes from "../../utils/Routes";

class List extends React.Component {
	displayLinkList = (links) => {
		return (
			<div>
				<h1>Links List</h1>
				<div className="p-1">
					{links && links.length ? (
						<ul className="list-group list-unstyled">
							{links.map((link, index) => {
								return (
									<li key={index}>
										<a href={Routes.link_path(link.id)}>
											{link.id} {link.title}
										</a>
									</li>
								);
							})}
						</ul>
					) : (
						<h3>No link has been created yet</h3>
					)}
				</div>
			</div>
		);
	};

	displayAddNewLinkButton = () => {
		return (
			<a className="btn btn-primary" href={Routes.new_link_path()}>
				Add New LInk
			</a>
		);
	};

	render() {
		let links = this.props.links;
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-10">{this.displayLinkList(links)}</div>
					<div className="col-md-2">{this.displayAddNewLinkButton()}</div>
				</div>
			</div>
		);
	}
}

export default List;
