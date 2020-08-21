import React, { Component } from "react";

class New extends Component {
	constructor(props) {
		super(props);
	}

	displayAddLinkForm() {
		return (
			<div>
				<div className="row">
					<h3 className="pb-3">Add Link</h3>
				</div>
				<form>
					<div className="form-group row pt-3">
						<label htmlFor="title" className="col-sm-2 col-form-label">
							<h5 className="text-secondary ">Title: </h5>
						</label>
						<div className="col-sm-10">
							<input type="text" className="form-control" />
						</div>
					</div>
					<div className="form-group row pt float-right pr-3">
						<button className="btn btn-md btn-primary" type="submit">
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
