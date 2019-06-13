import React, { Component } from 'react';

class AddCampusForm extends Component {

	constructor (props) {

		super(props);

		this.state = {

			name: "",
			address: ""

		}

		this.handleNameInput = this.handleNameInput.bind(this);
		this.submitName = this.submitName.bind(this);
	}

	handleNameInput (e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	submitName (e) {
		e.preventDefault();

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
			
			<div>
				<label className = "add_item_label" htmlFor = "name">
					Campus Name
				</label>
				<input type = "text" name = "name" onChange = { this.handleInputChange } />

				<label className = "add_item_label" htmlFor = "address">
					Campus Address
				</label>
				<input type = "text" name = "address" onChange = { this.handleInputChange } />


				<input type = "submit" onClick = { this.submitName } value = "Add+" />
			</div>

		)

	}

}

export default AddCampusForm;

