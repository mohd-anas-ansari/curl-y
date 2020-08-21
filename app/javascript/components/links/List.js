import React from "react";
import PropTypes from "prop-types";
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
										Link id : {link.id}
										<br />
										Link title: {link.title}
									</li>
								);
							})}
						</ul>
					) : (
						<h3>No linkk has been created yet</h3>
					)}
				</div>
			</div>
		);
	};

	displayAddNewLinkButton = () => {
		return (
			<a className="btn btn-primary" href="/links/new">
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
