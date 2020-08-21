import React, { Component } from "react";

import API from "../../utils/API";
import * as Routes from "../../utils/Routes";

class New extends Component {
	state = {
		title: "",
	};

	handleChange = (event) => {
		this.setState({
			title: event.target.value,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const payload = { link: { title: this.state.title } };
		console.log(payload, "Payload from handleSubmit");

		API.postNewLink(payload)
			.then(() => {
				window.location.href = Routes.links_path();
			})
			.catch((error) => {
				if (error.text) {
					error.text().then((err) => {
						console.error(err);
					});
				}
			});
	};

	displayAddLinkForm() {
		return (
			<div>
				<div className="row">
					<h3 className="pb-3">Add Link</h3>
				</div>
				<form onSubmit={(e) => this.handleSubmit(e)}>
					<div className="form-group row pt-3">
						<label htmlFor="title" className="col-sm-2 col-form-label">
							<h5 className="text-secondary ">Title: </h5>
						</label>
						<div className="col-sm-10">
							<input
								type="text"
								className="form-control"
								onChange={(e) => this.handleChange(e)}
							/>
						</div>
					</div>
					<div className="form-group row pt float-right pr-3">
						<button
							className="btn btn-md btn-primary"
							type="submit"
							onClick={(e) => this.handleSubmit(e)}
						>
							Submit
						</button>
					</div>
				</form>
			</div>
		);
	}

	render() {
		return (
			<div className="container">
				<div className="col-md-10 mx-auto pt-2">
					{this.displayAddLinkForm()}
				</div>
			</div>
		);
	}
}

export default New;
