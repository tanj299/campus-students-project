import React, { Component } from 'react';
import axios from 'axios';

class AddCampusForm extends Component {

	constructor (props) {

		super(props);

		this.state = {

			currentName: "",

		}

		this.handleNameInput = this.handleNameInput.bind(this);
		this.submitName = this.submitName.bind(this);
	}

	handleNameInput (e) {
		this.setState({
			currentName: e.target.value
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
				<label className = "add_item_label" htmlFor = "campus_name">
					Campus Name
				</label>
				<input type = "text" name = "campus_name" onChange = { this.handleInputChange } />

				<input type = "submit" onClick = { this.submitName } value = "Add+" />
			</div>

		)

	}

}

export default AddCampusForm;

