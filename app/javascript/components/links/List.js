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

	render() {
		return (
			<React.Fragment>
				<h1>Links will be appearing soon!!</h1>
				{this.displayLinkList(this.props.links)}
			</React.Fragment>
		);
	}
}

export default List;
