import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewStudentThunk } from '../store/utilities/Student'
// import axios from 'axios';
// import { allStudents } from '../../reducers';

class AddStudentForm extends Component {

	constructor (props) {

		super(props);

		this.state = {

			firstName: "",
			lastName: "",
			email: ""

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
		this.props.newStudent(this.state);
		// axios.post('/add/campus', { firstName: this.state.firstName, lastName: this.state.lastName })
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
				<label className = "add_item_label" htmlFor = "firstName">
					First Name
				</label>
				<input type = "text" name = "firstName" onChange = { this.handleInputChange } />

				<label className = "add_item_label" htmlFor = "lastName">
					Last Name
				</label>
				<input type = "text" name = "lastName" onChange = { this.handleInputChange } />

				<label className = "add_item_label" htmlFor = "name">
					Email
				</label>
				<input type = "text" name = "email" onChange = { this.handleInputChange } />

				<input type = "submit" onClick = { this.submitName } value = "Add+" />
			</div>

		)

	}

}

const mapDispatchToProps = (dispatch) => {
	return {
		newStudent: (studentToPost) => dispatch(addNewStudentThunk(studentToPost))
	}
}

// null is passed in since we don't use mapStateToProps
// we don't care about adding this component's state to the props 
export default connect(null, mapDispatchToProps)(AddStudentForm);

