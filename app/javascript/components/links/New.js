import React, { Component } from "react";

import API from "../../utils/API";
import * as Routes from "../../utils/Routes";
import Errors from "../shared/Errors";

class New extends Component {
	state = {
		title: "",
		source_url: "",
		message: null,
		errors: [],
	};

	displayErrors() {
		const { errors } = this.state;

		return (
			<div className="row justify-content-center">
				{errors.length !== 0 ? (
					<div className="mt-4">
						<Errors errors={errors} message="danger" />
					</div>
				) : null}
			</div>
		);
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const payload = {
			link: { title: this.state.title, source_url: this.state.source_url },
		};

		API.postNewLink(payload)
			.then((response) => {
				this.setState({ message: response.notice });
				setTimeout(function () {
					window.location.href = Routes.link_path(response.id);
				}, 1000);
			})
			.catch((error) => {
				console.log(error, "ERROR");
				error.json().then(({ errors }) => {
					this.setState({ ...this.state, errors });
				});
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
								name="title"
							/>
						</div>
					</div>

					<div className="form-group row pt-3">
						<label htmlFor="source_url" className="col-sm-2 col-form-label">
							<h5 className="text-secondary ">Source URL: </h5>
						</label>
						<div className="col-sm-10">
							<input
								type="text"
								className="form-control"
								onChange={(e) => this.handleChange(e)}
								name="source_url"
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
				{this.displayErrors()}
				{this.state.message ? (
					<div className="alert alert-success">{this.state.message}</div>
				) : (
					<div className="col-md-10 mx-auto pt-2">
						{this.displayAddLinkForm()}
					</div>
				)}
			</div>
		);
	}
}

export default New;
