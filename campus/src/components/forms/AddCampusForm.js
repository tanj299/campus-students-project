import React, { Component } from 'react';

class AddCampusForm extends Component {

	constructor (props) {

		super(props);

		this.state = {

			name: "",
			address: "",

			displayErrorMessage: false

		}

		this.handleInputChange = this.handleInputChange.bind(this);
		this.submitData = this.submitData.bind(this);
	}

	handleInputChange (e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	submitData (e) {
		e.preventDefault();

		if (this.state.name.length < 1 
			|| this.state.address.length < 1) {

				this.setState({
					displayErrorMessage: true
				});

				return;
			}

		// axios.post('/add/campus', { name: this.state.currentName })
		// 	.then( (res) => {
		// 		console.log(res);
		// 	})
		// 	.catch( (err) => {
		// 		console.log(err);
		// 	});

		console.log("Added!");
	}

	render () {

		return (
			<div className = "editForm-wrapper">
				<h1>Add Campus</h1>

				<div className = "editForm form">
					<div className = "input_wrapper">
						<label className = "add_item_label" htmlFor = "name">
							Campus Name
						</label>
						<input type = "text" name = "name" onChange = { this.handleInputChange } />
					</div>

					<div className = "input_wrapper">
						<label className = "add_item_label" htmlFor = "address">
							Campus Address
						</label>
						<input type = "text" name = "address" onChange = { this.handleInputChange } />
					</div>

					<div className = "btn_controls_wrapper sm">
						{ (this.state.displayErrorMessage) 
							&& (
							<p className = "error_sm">
								Please Fill All Fields
							</p>
							) 
						}
						<input type = "submit" onClick = { this.submitData } className = "btn_link" />
					</div>
				</div>
			</div>

		)

	}

}

export default AddCampusForm;

