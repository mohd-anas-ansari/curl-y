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
					window.location.href = Routes.root_path();
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
			<div className="form-container w-50 mx-auto">
				<form onSubmit={(e) => this.handleSubmit(e)}>
					<div className="form-group pt-3">
						{/* <label htmlFor="title" className="col-sm-2 col-form-label">
							<h5 className="text-secondary ">Title: </h5>
						</label> */}
						<div>
							<input
								type="text"
								className="form-control form-input"
								onChange={(e) => this.handleChange(e)}
								name="title"
								placeholder="Youtube"
							/>
						</div>
					</div>

					<div className="form-group pt-3">
						{/* <label htmlFor="source_url" className="col-sm-2 col-form-label">
							<h5 className="text-secondary ">Source URL: </h5>
						</label> */}
						<div>
							<input
								type="text"
								className="form-control form-input"
								onChange={(e) => this.handleChange(e)}
								name="source_url"
								placeholder="https://www.youtube.com"
							/>
						</div>
					</div>
					<button
						onClick={this.props.handleClick}
						className="float-right m-0 btn btn-dark"
					>
						&#x2715;
					</button>
					<div className="form-group">
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
					<div className="pt-2">{this.displayAddLinkForm()}</div>
				)}
			</div>
		);
	}
}

export default New;
